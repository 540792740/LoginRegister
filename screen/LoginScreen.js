import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Heading} from "../component/Heading";
import {Input} from "../component/Input";
import {ButtonFilled} from "../component/ButtonFilled";
import {TextButton} from "../component/TextButton";

export function LoginScreen() {
    return (
        <View style={styles.container}>
            <Heading style={styles.title}>Login</Heading>
            <Input style={styles.input}
                   placeholder={'Email'}
                   keyboardType={'email-address'}
            />
            <Input style={styles.input}
                   placeholder={'Password'}
                   secureTextEntry
            />
            <ButtonFilled title={'Login'}
                          style={styles.loginButton}
                          onPress={() => {
                              navigation.navigate('Registration')
                          }}
            />
            <TextButton title={"New User? Create Account"}
                        onPress={() => {

                        }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    title: {},
    input: {},
    loginButton: {}
})
