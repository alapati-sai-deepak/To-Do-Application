import React, {
  useLayoutEffect,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderIcons from '../../../components/Header';
import styles from './index.styles';
import SvgComponent from '../../../components/svgs/CloseIcon';
import { useFocusEffect } from '@react-navigation/native';

type Event = {
  id: string;
  name: string;
  date: string;
};

const EventItem = React.memo(
  ({ item, onDelete }: { item: Event; onDelete: (id: string) => void }) => (
    <View style={styles.eventItem}>
      <Text>{item.name} ({item.date})</Text>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <SvgComponent />
      </TouchableOpacity>
    </View>
  )
);

export default function EventsScreen({ navigation }: any) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [allEvents, setAllEvents] = useState<Event[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isEditingUsername, setIsEditingUsername] = useState(false);

  // Load all events once
  const loadEvents = async () => {
    const stored = await AsyncStorage.getItem('events');
    const events = stored ? JSON.parse(stored) : [];
    setAllEvents(events);
  };

  const deleteEvent = async (id: string) => {
    const updated = allEvents.filter((event: Event) => event.id !== id);
    await AsyncStorage.setItem('events', JSON.stringify(updated));
    setAllEvents(updated);
  };

  const filteredEvents = useMemo(() => {
    if (!selectedDate) return [];
    const dateStr = selectedDate.toISOString().split('T')[0];
    return allEvents.filter((event) => event.date === dateStr);
  }, [allEvents, selectedDate]);

  const loadUser = async () => {
    const storedUsername = await AsyncStorage.getItem('username');
    if (storedUsername) setUsername(storedUsername);
  };

  useFocusEffect(
    useCallback(() => {
      setSelectedDate(null);
      setIsDrawerOpen(false);
      loadEvents();
      loadUser();
    }, [])
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderIcons
          selectedDate={selectedDate ?? new Date()}
          onDateChange={(date: Date) => {
            setSelectedDate(date);
          }}
          onProfilePress={() => {
            setIsDrawerOpen(true);
            loadUser();
          }}
        />
      ),
    });
  }, [navigation, selectedDate]);

  const handleSaveProfile = async () => {
    if (newUsername.trim()) {
      await AsyncStorage.setItem('username', newUsername.trim());
      setUsername(newUsername.trim());
    }

    if (newPassword.trim()) {
      await AsyncStorage.setItem('password', newPassword.trim());
    }

    setNewUsername('');
    setNewPassword('');
    setIsEditingUsername(false);
    setIsDrawerOpen(false);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('username');
    await AsyncStorage.removeItem('password');
    setIsDrawerOpen(false);

    navigation.reset({
      index: 0,
      routes: [{ name: 'LoginPage' }],
    });
  };

  return (
    <View style={styles.container}>
      {!selectedDate ? (
        <Text style={styles.noDateText}>Please select a date to view events.</Text>
      ) : filteredEvents.length === 0 ? (
        <Text style={styles.noEventsText}>
          No events for {selectedDate.toDateString()}
        </Text>
      ) : (
        <FlatList
          data={filteredEvents}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <EventItem item={item} onDelete={deleteEvent} />
          )}
        />
      )}

      {/* Profile Drawer Modal */}
      <Modal visible={isDrawerOpen} transparent animationType="slide">
        <View style={styles.overlay}>
          <View style={styles.drawer}>
            <Text style={styles.title}>Profile</Text>

            <View style={styles.usernameRow}>
              {isEditingUsername ? (
                <TextInput
                  style={styles.usernameInput}
                  value={newUsername}
                  onChangeText={setNewUsername}
                  placeholder="Enter new username"
                />
              ) : (
                <>
                  <Text style={styles.usernameText}>Username: {username}</Text>
                  <TouchableOpacity
                    onPress={() => {
                      setNewUsername(username);
                      setIsEditingUsername(true);
                    }}
                  >
                    <Text style={styles.editIcon}>Edit</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>

            <Text style={styles.sectionLabel}>Reset Password</Text>
            <TextInput
              style={styles.input}
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="New password"
              secureTextEntry
            />

            <TouchableOpacity style={styles.saveBtn} onPress={handleSaveProfile}>
              <Text style={styles.saveText}>Save Changes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => {
                setIsDrawerOpen(false);
                setNewUsername('');
                setNewPassword('');
                setIsEditingUsername(false);
              }}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
