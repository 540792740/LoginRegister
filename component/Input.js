import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export function Input({style, ...props}) {
    return (
        <TextInput {...props}
                   style={[styles.input, style]}
        ></TextInput>
    );
}

const styles = StyleSheet.create({
    input: {}

})
