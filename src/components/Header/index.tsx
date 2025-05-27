import React, { useState } from 'react';
import { View, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import CalendarIcon from '../svgs/CalendarIcon';
import ProfileIcon from '../svgs/ProfileIcon';
import styles from './index.styles';

type Props = {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  onProfilePress?: () => void;
};

export default function HeaderIcons({ selectedDate, onDateChange, onProfilePress }: Props) {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowPicker(true)}>
        <CalendarIcon width={24} height={24} />
      </TouchableOpacity>

      <TouchableOpacity onPress={onProfilePress}>
        <ProfileIcon width={24} height={24} />
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={(event, date) => {
            setShowPicker(false);
            if (date) onDateChange(date);
          }}
        />
      )}
    </View>
  );
}
