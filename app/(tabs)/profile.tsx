import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState('All');

  const handleBackHomeButton = () => {
    router.push('/');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.headerImage} source={require('../../assets/images/fundo.jpg')}/>
      </View>
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.iconLeft} onPress={handleBackHomeButton}>
          <View style={styles.roundButton}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconRight}>
          <View style={styles.roundButton}>
            <Ionicons name="mail" size={24} color="#000" />
          </View>
        </TouchableOpacity>
        <Image
          style={styles.avatar}
          source={require('../../assets/images/user.png')}
        />
        <View style={styles.infoContainer}>
          <View style={styles.statsContainer}>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>1k</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNumber}>342</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
          </View>
          <Text style={styles.name}>@Catherine13</Text>
        </View>
        <Text style={styles.description}>
          My name is Catherine. I like dancing in the rain and travelling all around the world.
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonFollow}>
            <Text style={styles.buttonTextFollow}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonMessage}>
            <Text style={styles.buttonTextMessage}>Message</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tabsContainer}>
          <TouchableOpacity onPress={() => setSelectedTab('All')}>
            <Text style={[styles.tab, selectedTab === 'All' && styles.selectedTab]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab('Photos')}>
            <Text style={[styles.tab, selectedTab === 'Photos' && styles.selectedTab]}>Photos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab('Videos')}>
            <Text style={[styles.tab, selectedTab === 'Videos' && styles.selectedTab]}>Videos</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.galleryContainer}>
          <View style={styles.galleryRow}>
            <Image style={styles.largeImage} source={require('../../assets/images/1.png')} />
            <View style={styles.smallImageContainer}>
              <Image style={styles.smallImage1} source={require('../../assets/images/2.png')} />
              <Image style={styles.smallImage2} source={require('../../assets/images/4.png')} />
            </View>
          </View>
          <View style={styles.galleryRow}>
            <Image style={styles.smallImage3} source={require('../../assets/images/3.png')} />
            <Image style={styles.smallImage4} source={require('../../assets/images/5.png')} />
            <Image style={styles.smallImage5} source={require('../../assets/images/6.png')} />
          </View>
        </View>

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
  iconRight: {
    position: 'absolute',
    top: -105,
    right: 15,
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 5,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#888',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },
  description: {
    fontSize: 16,
    color: '#6C7A9C',
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    top: 10, 
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  buttonFollow: {
    backgroundColor: '#5790DF',
    borderColor: '#5790DF',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginHorizontal: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  buttonTextFollow: {
    color: '#fff',
    fontSize: 16,
  },
  buttonMessage: {
    backgroundColor: '#fff',
    borderColor: '#5790DF',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  buttonTextMessage: {
    color: '#000',
    fontSize: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  tab: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  selectedTab: {
    textDecorationLine: 'underline',
    color: '#093D89',
  },
  galleryContainer: {
    paddingHorizontal: 10,
    marginTop: 1,
    backgroundColor: '#fff',
    borderRadius: 40,
  },
  galleryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  largeImage: {
    width: 260,
    height: 250,
    backgroundColor: '#e0e0e0',
    top: 20,
  },
  smallImageContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    top: 10,
    left: 10,
    right: 10,
  },
  smallImage1: {
    width: 120,
    height: 120,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
    borderTopRightRadius: 20,
  },
  smallImage2: {
    width: 120,
    height: 120,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
  },
  smallImage3: {
    width: 120,
    height: 120,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
    borderBottomLeftRadius: 20,
  },
  smallImage4: {
    width: 120,
    height: 120,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
  },
  smallImage5: {
    width: 120,
    height: 120,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
    borderBottomRightRadius: 20,
  },
  roundButton: {
    backgroundColor: '#E6EEFA',
    borderRadius: 30,
    padding: 10,
  },
});
