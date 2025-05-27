import React, { useState } from 'react';
import {
  View,
  Button,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './index.styles';
import ReusableButton from '../../../components/ReusableButton';

export default function TasksScreen() {
  const [showModal, setShowModal] = useState(false);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const saveEvent = async () => {
    if (!eventName.trim()) return;
    const newEvent = {
      id: Date.now().toString(),
      name: eventName,
      date: eventDate.toISOString().split('T')[0],
    };
    const existing = await AsyncStorage.getItem('events');
    const events = existing ? JSON.parse(existing) : [];
    events.push(newEvent);
    await AsyncStorage.setItem('events', JSON.stringify(events));
    setEventName('');
    setShowModal(false);
  };

  const openModal = () => {
    setEventDate(new Date()); //Reset to today's date
    setShowModal(true);
  };

  return (
    <View style={styles.container}>
      <ReusableButton
        title="Add Task"
        onPress={openModal}
        style={{ borderRadius: 20 }}
      />

      <Modal visible={showModal} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <Text>Select Date: {eventDate.toDateString()}</Text>
            </TouchableOpacity>

            {showDatePicker && (
              <DateTimePicker
                value={eventDate}
                mode="date"
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={(e, selected) => {
                  setShowDatePicker(false);
                  if (selected) setEventDate(selected);
                }}
              />
            )}

            <TextInput
              placeholder="Enter Event Name"
              value={eventName}
              onChangeText={setEventName}
              style={styles.input}
            />

            <View style={styles.buttonRow}>
              <Button title="Cancel" onPress={() => setShowModal(false)} />
              <Button title="Save" onPress={saveEvent} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
