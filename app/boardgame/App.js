/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, StyleSheet, TouchableHighlight, Alert } from 'react-native';

function onPressedCard(color) {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  const msg = "Follow instructions on card pile: " + randomNumber;
  Alert.alert(color + " card", msg)
}

function PlayScreen({navigation}) {
  const cardText = "Take this card";
  return (
    <View style={styles.playButton}>
      <View style={styles.cardRow}>
      <TouchableHighlight onPress={() => onPressedCard('green')}>
      <View style={styles.card, styles.green}>
        <Text> {cardText} </Text>
        <View style={styles.cardBox}></View>
      </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => onPressedCard('blue')}>
      <View style={styles.card, styles.blue}>
        <Text> {cardText} </Text>
        <View style={styles.cardBox}></View>
      </View>
      </TouchableHighlight>
      </View>
      <View style={styles.cardRow}>
      <TouchableHighlight onPress={() => onPressedCard('yellow')}>
      <View style={styles.card, styles.yellow}>
        <Text> {cardText} </Text>
        <View style={styles.cardBox}></View>
      </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => onPressedCard('red')}>
      <View style={styles.card, styles.red}>
        <Text> {cardText} </Text>
        <View style={styles.cardBox}></View>
      </View>
      </TouchableHighlight>
      </View>
      <View style={styles.dice}>
      </View>
    <View style={styles.footer}>
      <Button
        onPress={() => navigation.navigate('TBD')}
        title="Login"
      />
    </View>
    </View>
  );
}
function AboutScreen({navigation}) {
  return (
    <Text>'This board game will help parents teach their kids basic steps to stay healthy' </Text>
    );
}

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.playButton}>
        <Button
          onPress={() => navigation.navigate('Play')}
          title="Let's play!"
        />
      </View>
      <View style={styles.login}>
        <Button
          onPress={() => navigation.navigate('TBD')}
          title="Login"
      />
      </View>
      <View style={styles.footer}>
       <Button
         title="About"
         onPress={() => navigation.navigate('About')}
        />
      </View>
    </View>
  );
}
function TBD({navigation}) {
  return (
    <Text>'Waiting for version 2.0...' </Text>
    );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="About" component={AboutScreen}/>
        <Stack.Screen name="Play" component={PlayScreen}/>
        <Stack.Screen name="TBD" component={TBD}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  button: {
    alignSelf: 'stretch'
  },
  playButton: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },
  login: {
  },
  footer: {
    flexDirection: 'column-reverse',
    justifyContent: 'flex-end',
  },
  dice: {
  },
  card: {
    justifyContent: 'center',
  },
  cardBox: {
    height: 200,
    width: 200,
  },
  cardRow: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  green: {
    backgroundColor: 'limegreen'
  },
  blue: {
    backgroundColor: 'steelblue'
  },
  yellow: {
    backgroundColor: 'gold'
  },
  red: {
    backgroundColor: 'red'
  },
});
