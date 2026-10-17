import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const showProfile = () => {
    if (name.trim() === '' || subject.trim() === '') {
      setMessage('Please enter your name and favourite subject.');
    } else {
      setMessage(
        `Hello, ${name}! Your favourite subject is ${subject}.`
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.smallHeading}>
          MAST 5112 | ICE TASK 2
        </Text>

        <Text style={styles.heading}>
          Student Profile
        </Text>

        <Image
          source={{
            uri: 'https://api.dicebear.com/9.x/bottts/png?seed=Student',
          }}
          style={styles.avatar}
        />

        <Text style={styles.description}>
          Welcome to my Student Profile App!
        </Text>

        <Text style={styles.label}>Your Name</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#777777"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Favourite Subject</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your favourite subject"
          placeholderTextColor="#777777"
          value={subject}
          onChangeText={setSubject}
        />

        <Pressable style={styles.button} onPress={showProfile}>
          <Text style={styles.buttonText}>
            SHOW MY PROFILE
          </Text>
        </Pressable>

        {message !== '' && (
          <Text style={styles.message}>{message}</Text>
        )}

        <Text style={styles.footer}>
          My React Native Student Profile
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#102B1D',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#1D3C29',
    padding: 24,
    borderRadius: 20,
    alignItems: 'center',
  },
  smallHeading: {
    fontSize: 13,
    color: '#A8E6B5',
    marginBottom: 10,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    backgroundColor: '#39D353',
  },
  description: {
    color: '#D5E8D8',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 25,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 15,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 10,
    marginBottom: 18,
    fontSize: 16,
    color: '#102B1D',
  },
  button: {
    backgroundColor: '#39D353',
    padding: 16,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#102B1D',
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    color: '#A8E6B5',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  footer: {
    color: '#A8BFAE',
    fontSize: 12,
    marginTop: 30,
  },
});