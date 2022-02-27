import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { Button, ScrollView, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Camera } from 'expo-camera';

export default function LoadingView({ navigation }) {

    const counter = useRef(counter)

    const delay = ms => new Promise(res => setTimeout(res, ms));

    useEffect(async () => {
        await delay(1000);
        navigation.navigate("BillSummary")
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#219EBC', fontSize: 40, marginBottom: 40, margin: 20, textAlign: 'center' }}>Looking for mistakes...</Text>
        </View>
    );
}