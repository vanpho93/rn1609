import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Button from './controls/Button';

export default class Word extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '123456'
        };
    }
    render() {
        const { en, vn } = this.props;
        return (
            <View>
                <Text style={styles.en}>{en}</Text>
                <Text style={styles.vn}>{vn}</Text>
                <TextInput 
                    style={styles.input} 
                    value={this.state.username}
                    onChangeText={text => this.setState({ username: text })}
                />
                <Button 
                    text="HIDE" 
                    onPress={() => console.log(this.state.username)}
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
    input: {
        backgroundColor: '#E5E5E5',
        width: 500,
        height: 40,
        paddingHorizontal: 5,
        margin: 5
    }
});
