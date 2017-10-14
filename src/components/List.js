import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const defaultWords = [
    { en: 'hello', vn: 'xin chào', isMemorized: false, key: 1 },
    { en: 'good morning', vn: 'chào buổi sáng', isMemorized: true, key: 2 },
    { en: 'afternoon', vn: 'buổi chiều', isMemorized: false, key: 3 },
];

export default class List extends Component {
    render() {
        return (
            <View>
                { defaultWords.map(word => (
                    <View key={word.en}>
                        <Text>{word.en}</Text>
                        <Text>{word.vn}</Text>
                    </View>
                )) }
            </View>
        );
    }
}

const styles = StyleSheet.create({

});
