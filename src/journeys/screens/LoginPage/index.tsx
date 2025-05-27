import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './index.styles';

export default function LoginPage({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);

  const validateEmail = (email: string) => /\S+@gmail\.com$/.test(email);
  const validatePassword = (password: string) =>
    /^(?=.*[!@#$%^&*])(?=.*\d).{6,}$/.test(password);

  const handleAuth = async () => {
    if (!validateEmail(email)) return Alert.alert('Invalid email (must end with @gmail.com)');
    if (!validatePassword(password)) return Alert.alert('Password must be 6+ chars, include special char & number');

    const usersRaw = await AsyncStorage.getItem('users');
    const users = usersRaw ? JSON.parse(usersRaw) : {};

    if (isSignup) {
      if (users[email]) return Alert.alert('User already exists');
      users[email] = { password };
      await AsyncStorage.setItem('users', JSON.stringify(users));
      await AsyncStorage.setItem('currentUser', email);
      navigation.replace('HomePage');
    } else {
      if (!users[email] || users[email].password !== password) {
        return Alert.alert('Invalid credentials');
      }
      await AsyncStorage.setItem('currentUser', email);
      navigation.replace('HomePage');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{isSignup ? 'Sign Up' : 'Login'}</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleAuth}>
        <Text style={styles.buttonText}>{isSignup ? 'Sign Up' : 'Login'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsSignup(!isSignup)}>
        <Text style={styles.toggle}>
          {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign up"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
