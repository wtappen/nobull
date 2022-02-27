import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NoBull from './NoBull';
import CameraView from './cameraview';
import BillSummary from './BillSummary';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to another screen!"
        onPress={() => {
          navigation.navigate('CameraView')
        }}
      >
      </Button>
    </View>
  );
}

function AnotherScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ANOTHER Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="NoBull" component={NoBull} />
        <Stack.Screen name="Camera" component={CameraView} />
        <Stack.Screen name="BillSummary" component={BillSummary} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AnotherScreen" component={AnotherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

