import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { theme } from '../theme';

const Input = ({value, onChangeText, onSubmitEditing}) => {
    return(
        <TextInput style={inputStyle.textInput}
        placeholder="Enter your To-do!"
        placeholderTextColor={theme.text}
        maxLength={50}
        keyboardAppearance="light"
        value={value} onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}>
        </TextInput>
    );

};

const inputStyle = StyleSheet.create({
    textInput: {
        fontSize: 17,
        width: 300,
        height: 50,
        marginTop: 10,
        marginLeft: 20,
        paddingLeft:15,
        paddingTop:2,
        borderRadius:10,
        backgroundColor: theme.itemBackground,
        color: theme.text,
    },
});
export default Input;