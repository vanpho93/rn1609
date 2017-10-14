import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Button extends Component {
    render() {
        const { text, style } = this.props;
        return (
            <TouchableOpacity  {...this.props} style={[styles.button, style]}>
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
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
