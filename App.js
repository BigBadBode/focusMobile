import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react';
import {  StyleSheet, Text, View, Pressable, Image, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import Button from './components/Button.js';
import { schedulePushNotification } from './components/Notification.js';
import 'react-native-reanimated';

const primaryOne = "#7AB2B2"
const primaryTwo = "#CDE8E5"
const primaryThree = "#4D869C"
const secondaryOne = "purple"
const secondaryTwo = "blue"
const secondaryThree = "red"
const backgroundOne = "white"
const backgroundTwo = "#EEF7FF"

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Timers"
          component={Timers}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Home = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text style={styles.main_title}>Ye Olde Focus App</Text>
      <View style={styles.menu_background}>
        <Button theme="primary" text='Focus Timers' onPress={() => navigation.navigate('Timers')} color={primaryOne}/>
        <Button theme='primary' text='Notifications' onPress={() => navigation.navigate('Notifications')} color={primaryTwo}/>
        <StatusBar style="auto" />
      </View>
    </View>
  )
}

const Timers = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return(
    <View style={styles.container}>
      <View style={styles.menu_background}>
        <Text style={styles.timer_title}>Focus Timer Selection</Text>
        <StatusBar style="auto" />
        <Button theme="modal10" text='10-Minute Sprint' onPress={async () => { 
          await schedulePushNotification({
            title:'10 minutes is up! 🤩', 
            body:"Great work, start another work session as soon as you're ready!", 
            data:'10 minute sprint completed',
            delay:5,
          });
        }} color={primaryOne}/>
        <Button theme="modal25" text='25-Minute Crunch' onPress={async () => { 
          await schedulePushNotification({
            title:'25 minutes is up! 🤩', 
            body:"Great work, start another work session as soon as you're ready!", 
            data:'25 minute sprint completed',
            delay:5,
          });
        }} color={primaryOne}/>
        <Button theme="modalcustom" text='Custom Timer Length' onPress={async () => { 
          await schedulePushNotification({
            title:'Custom timer is over! 🤩', 
            body:"Great work, start another work session as soon as you're ready!", 
            data:'Custom timer completed',
            delay:5,
          });
        }} color={primaryOne}/>
      </View>
      <Button theme="primary" text='Back' onPress={() => navigation.navigate('Home')} color={primaryTwo}/>
    </View>
  )
}

const Notifications = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Button theme="primary" text='Back to Home' onPress={() => navigation.navigate('Home')} color='#aac961'/>
      <StatusBar style="auto" />
      <Button theme="primary" text='IRS ⚠️' onPress={async () => { 
        await schedulePushNotification({
          title:'⚠️ BE WARNED ⚠️', 
          body:'The IRS is knocking at your door as we speak 👮‍♂️ you cannot hide', 
          data:'data!',
          delay:1
        });
      }} color='pink'/>
      <Button theme="primary" text='SPAM 🤪' onPress={async () => { 
        await schedulePushNotification({
          title:'IS YOUR REFRIGERATOR RUNNING?!?!', 
          body:"Maybe yous should check 😋 Also we've bene trying to reach you about your car's extended warrentee", 
          data:'data!',
          delay:30
        });
      }} color='#a29be0'/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundOne,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    borderRadius: 10,
    width: 100,
    height: 100,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  // back_button: {
  //   borderRadius: 8,
  //     width: 160,
  //     height: 40,
  //     padding: 10,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     flexDirection: 'row',
  //     marginTop: 40,
  // },
  timer_title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  timer_container: {
    flex: 0.4,
    alignContent: 'center',
  },
  main_title: {
    fontSize:26,
    fontWeight: 'bold'
  },
  menu_background: {
    width: 340,
    height: 500,
    backgroundColor: backgroundTwo,
    flex: 0.6,
    borderRadius: 8,
    alignContent: 'center',
    padding: 40,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 14,
    padding: 30,
    paddingBottom: 75,
    paddingTop: 75,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
})
