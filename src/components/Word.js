import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Word extends Component {
    render() {
        return (
            <View>
                <Text style={styles.en}>Hello</Text>
                <Text style={styles.vn}>Xin chào</Text>
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
    }
});
