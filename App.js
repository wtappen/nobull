import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NoBull from './NoBull';
import CameraView from './cameraview';
import BillSummary from './BillSummary';
import LoadingView from './loadingview';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="NoBull" component={NoBull} options={{ title: '' }} />
        <Stack.Screen name="Camera" component={CameraView} options={{ title: 'Scan Bill' }}/>
        <Stack.Screen name="BillSummary" component={BillSummary}
          options={({navigation}) => ({
            title: '',
            headerLeft: () => <Button title="Home" onPress={() => navigation.navigate('NoBull')} />,
          })}
        />
        <Stack.Screen name="Loading" component={LoadingView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

