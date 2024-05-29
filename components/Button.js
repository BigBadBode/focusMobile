import { StyleSheet, Text, View, Pressable, Modal, TextInput } from 'react-native';
import React , { useState } from 'react';
import { schedulePushNotification } from './Notification.js';

const primaryOne = "#7AB2B2"
const primaryTwo = "#CDE8E5"

export default function Button ({text, onPress, color, theme}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [inputMinutes, setInputMinutes] = useState('');

    const close = () => {
        setModalVisible(false); // Close the modal
        setInputMinutes('');
        // setInputBody('');
        // setInputData('');
      };

      const handleTest = () => {
        const delay = parseInt(inputMinutes) * 60; // Convert minutes to seconds
        if (!isNaN(delay) && delay > 0) {
          alert(`Delay set to: ${delay} seconds`);
          close();
        } else {
          alert('Please enter a valid input.');
        }
      };

      const handleCustomTimer = async () => {
        const delay = parseInt(inputMinutes); // Convert minutes to seconds
        if (!isNaN(delay) && delay > 0) {
          try {
            await schedulePushNotification({
              title: `${inputMinutes} minutes are up! 🤩`, // Insert inputMinutes into the title
              body: "Great work, start another work session as soon as you're ready!",
              data: `Custom timer for ${inputMinutes} minutes completed`,
              delay: delay,
            });
            close();
          } catch (error) {
            console.error('Error scheduling notification:', error);
          }
        } else {
          alert('Please enter a valid number of minutes ⏰');
        }
      };

    if (theme === "primary") {
        return( 
            <View style={[styles.centered]}>
                <Pressable
                    style={[styles.button, styles.centered, {backgroundColor: color}]}
                    onPress = {onPress}
                >
                    <Text>
                        {text}
                    </Text>
                </Pressable>
            
            </View>
        )
    }
    if (theme === "modal10") {
        return (
          <View style={styles.buttonContainer}>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={[styles.modalText, { fontWeight: "bold" }]}>Time to LOCK IN</Text>
              <Pressable
                style={[styles.button, styles.buttonContainer, {backgroundColor: "#7AB2B2"}]}
                onPress={async () => { 
                    await schedulePushNotification({
                      title:'10 minutes is up! 🤩', 
                      body:"Great work, start another work session as soon as you're ready!", 
                      data:'10 minute sprint completed',
                      delay:1,
                    });
                  }}>
                <Text>Start Focus!</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonContainer, {backgroundColor: "#CDE8E5"}]}
                onPress={close}
                >
                <Text>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.centered, {backgroundColor: color}]}
          onPress={() => setModalVisible(true)}>
            <Text>
                {text}
            </Text>
        </Pressable>
      </View>
        );
      }
    if (theme === "modal25") {
      return (
        <View style={styles.buttonContainer}>
          <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
          }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={[styles.modalText, { fontWeight: "bold" }]}>Time to LOCK IN</Text>
            <Pressable
              style={[styles.button, styles.buttonContainer, {backgroundColor: "#7AB2B2"}]}
              onPress={async () => { 
                  await schedulePushNotification({
                    title:'25 minutes is up! 🤩', 
                    body:"Great work, start another work session as soon as you're ready!", 
                    data:'25 minute sprint completed',
                    delay:1,
                  });
                }}>
              <Text>Start Focus!</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonContainer, {backgroundColor: "#CDE8E5"}]}
              onPress={close}
              >
              <Text>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.centered, {backgroundColor: color}]}
        onPress={() => setModalVisible(true)}>
          <Text>
              {text}
          </Text>
      </Pressable>
    </View>
      );
    }
    if (theme === "modalcustom") {
      return (
        <View style={styles.buttonContainer}>
          <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
          }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={[styles.modalText, { fontWeight: "bold" }]}>Time to LOCK IN</Text>
            <Text style={styles.modalText}>Enter timer duration (in minutes):</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                // placeholder="Enter minutes"
                value={inputMinutes}
                onChangeText={setInputMinutes}
              />
            <Pressable
              style={[styles.button, styles.buttonContainer, {backgroundColor: "#7AB2B2"}]}
              onPress={handleCustomTimer}>
              <Text>Start Focus!</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonContainer, {backgroundColor: "#CDE8E5"}]}
              onPress={close}
              >
              <Text>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.centered, {backgroundColor: color}]}
        onPress={() => setModalVisible(true)}>
          <Text>
              {text}
          </Text>
      </Pressable>
    </View>
      );
    }
    }

    
   
const styles = StyleSheet.create({
    centered:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderRadius: 8,
        width: 260,
        height: 80,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 40,

    },
    text: {
        textAlign: 'center',
        fontSize: 14
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
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        width: '80%',
        textAlign: 'center',
        borderRadius: 5,
        padding: 10,
      },
})