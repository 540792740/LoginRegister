import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export function ButtonFilled({title, style, onPress}) {
    return (
        <TouchableOpacity style={[styles.container, style]}
                          onPress={onPress}>
            <Text style={styles.text}>{title.toUpperCase()}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {},
    text: {}

})
