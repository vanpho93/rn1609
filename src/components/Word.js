import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Button from './controls/Button';

export default class Word extends Component {
    render() {
        return (
            <View>
                <Text style={styles.en}>Hello</Text>
                <Text style={styles.vn}>Xin chào</Text>
                <Button 
                    text="HIDE" 
                    onPress={() => console.log('abcd')}
                    style={{ backgroundColor: '#0B50BF' }} 
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    en: {
        fontSize: 30,
        color: 'green'
    },
    vn: {
        fontSize: 20,
        color: 'blue'
    },
    button: {
        padding: 10,
        backgroundColor: '#705697',
        justifyContent: 'center',
        alignItems:'center',
        borderRadius: 3
    },
    buttonText: {
        color: 'white'
    }
});
