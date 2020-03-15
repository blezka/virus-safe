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
import { View, Text, Button, StyleSheet } from 'react-native';

function PlayScreen({navigation}) {
  return (
    <View style={styles.playButton}>
      <View style={styles.cardRow}>
      <View style={styles.card, styles.green}>
        <Text> </Text>
      </View>
      <View style={styles.card, styles.blue}>
        <Text> </Text>
      </View>
      </View>
      <View style={styles.cardRow}>
      <View style={styles.card, styles.yellow}>
        <Text> </Text>
      </View>
      <View style={styles.card, styles.red}>
        <Text> </Text>
      </View>
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
    justifyContent: 'space-between',
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
    flex: 1,
  },
  cardRow: {
    justifyContent: 'space-between',
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
