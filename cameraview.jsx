import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import { Button, ScrollView, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Camera } from 'expo-camera';

export default function CameraView({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const camera = useRef(null)

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.container}>
            <Camera style={styles.camera} ref={camera} type={type}>
                <View style={styles.finderRect} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.shutterButton}
                        onPress={async () => {
                            await camera.current.takePictureAsync()
                            navigation.navigate('Loading')
                        }}>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
        margin: 50,
    },
    shutterButton: {
        alignSelf: 'flex-end',
        position: 'absolute',
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: '#fff'
    },
    finderRect: {
        width: '80%',
        height: '70%',
        marginTop: '15%',
        marginLeft: '10%',
        // backgroundColor: '#fff',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#fff'
    },
});