import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import { handleIntegrationMP } from '../../utils/IntegrationMP';
import { useRouter } from 'expo-router';

export default function PaymentScreen() {
  const router = useRouter();
  const [checked, setChecked] = useState('first');

  const handleBackHomeButton = () => {
    router.push('/');
  };

  const handlePayment = async () => {
    const data = await handleIntegrationMP(checked);
    if (!data) {
      return console.log('Ocorreu algum erro !!!');
    }
    Linking.openURL(data);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.headerImage} source={require('../../assets/images/fundo.jpg')} />
      </View>
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.iconLeft} onPress={handleBackHomeButton}>
          <View style={styles.roundButton}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </View>
        </TouchableOpacity>
        <Image style={styles.avatar} source={require('../../assets/images/user.png')} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>@Catherine13</Text>
          <Text style={styles.description}>Select the desired plan type:</Text>
        </View>
        <View style={styles.radioContainer}>
          <View style={styles.viewCheckbox}>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <TouchableOpacity onPress={() => setChecked('f')}>
              <Text style={styles.viewCheckboxText}>Free</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewCheckbox}>
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
            <TouchableOpacity onPress={() => setChecked('second')}>
              <Text style={styles.viewCheckboxText}>Premium Monthly</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewCheckbox}>
            <RadioButton
              value="third"
              status={checked === 'third' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('third')}
            />
            <TouchableOpacity onPress={() => setChecked('third')}>
              <Text style={styles.viewCheckboxText}>Premium Yearly</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.paymentButton} onPress={handlePayment}>
          <Text style={styles.paymentButtonText}>Confirm Payment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6EEFA',
  },
  header: {
    height: 200,
    backgroundColor: '#b3e5fc',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -50,
    position: 'relative',
  },
  iconLeft: {
    position: 'absolute',
    top: -105,
    left: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
  },
  infoContainer: {
    alignItems: 'center',
    marginTop: -40,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 49,
  },
  description: {
    fontSize: 16,
    color: '#6C7A9C',
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    top: 10, 
  },
  radioContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  viewCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  viewCheckboxText: {
    fontSize: 16,
    marginLeft: 10,
  },
  paymentButton: {
    backgroundColor: '#5790DF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 30,
  },
  paymentButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  roundButton: {
    backgroundColor: '#E6EEFA',
    borderRadius: 30,
    padding: 10,
  },
});