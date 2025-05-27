import React, { useLayoutEffect, useState, useEffect } from 'react';
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
import { useFocusEffect, useNavigation } from '@react-navigation/native';

type Event = {
  id: string;
  name: string;
  date: string;
};

export default function EventsScreen({ navigation }: any) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isEditingUsername, setIsEditingUsername] = useState(false);

  const loadEvents = async (date: Date | null) => {
    if (!date) {
      setEvents([]);
      return;
    }
    const stored = await AsyncStorage.getItem('events');
    const allEvents = stored ? JSON.parse(stored) : [];
    const dateStr = date.toISOString().split('T')[0];
    const filtered = allEvents.filter((event: Event) => event.date === dateStr);
    setEvents(filtered);
  };

  const deleteEvent = async (id: string) => {
    const stored = await AsyncStorage.getItem('events');
    const allEvents = stored ? JSON.parse(stored) : [];
    const updated = allEvents.filter((event: Event) => event.id !== id);
    await AsyncStorage.setItem('events', JSON.stringify(updated));
    if (selectedDate) loadEvents(selectedDate);
  };

  const loadUser = async () => {
    const storedUsername = await AsyncStorage.getItem('username');
    if (storedUsername) setUsername(storedUsername);
  };

  useFocusEffect(
    React.useCallback(() => {
      setSelectedDate(null);
      setEvents([]);
      setIsDrawerOpen(false);
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
            loadEvents(date);
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
      ) : events.length === 0 ? (
        <Text style={styles.noEventsText}>
          No events for {selectedDate.toDateString()}
        </Text>
      ) : (
        <FlatList
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.eventItem}>
              <Text>{item.name} ({item.date})</Text>
              <TouchableOpacity onPress={() => deleteEvent(item.id)}>
                <SvgComponent />
              </TouchableOpacity>
            </View>
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
                  placeholder="Enter Username"
                />
              ) : (
                <>
                  <Text style={styles.usernameText}>User Name: {username}</Text>
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