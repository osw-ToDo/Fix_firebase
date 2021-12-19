import React, { useState,useEffect } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { theme } from '../theme';

const Input = ({set,value, onChangeText, onSubmitEditing,init}) => {

    const [toDoText,setToDoText] = useState('');
    useEffect(()=>{
        if(typeof init != "undefined" ){
            setToDoText(init);
        }
        console.log(init,"--------------------------------------")
      
    
    },[init]);
    

    return(
        <TextInput style={inputStyle.textInput}
        placeholder="Enter your To-do!"
        placeholderTextColor={theme.text}
        maxLength={50}
        keyboardAppearance="light"
        value={toDoText} onChangeText={text => setToDoText(text)}
        onSubmitEditing={() => {
            setToDoText(toDoText.trim());
            set(toDoText.trim());
            // _handleCreateButtonPress();
          }}
          onBlur={() => {setToDoText(toDoText.trim());
            set(toDoText.trim());
          }}
          >
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