import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native';
import Word from './Word';

const { width } = Dimensions.get('window');

const defaultWords = [
    { en: 'hello', vn: 'xin chào', isMemorized: false, id: 1 },
    { en: 'good morning', vn: 'chào buổi sáng', isMemorized: true, id: 2 },
    { en: 'afternoon', vn: 'buổi chiều', isMemorized: false, id: 3 },
];

export default class List extends Component {
    render() {
        return (
            <View>
                <Image source={require('../media/file.png')} />
                <Image 
                    style={{ width: width / 13, height: width / 13 }}
                    source={{ uri: 'https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png' }}
                />
                <FlatList 
                    data={defaultWords}
                    renderItem={({item}) => <Word {...item} />}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});
