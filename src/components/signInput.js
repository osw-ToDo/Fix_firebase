
import React from 'react';
import { Box, Dimensions, StyleSheet, Text, TextInput,Image,View} from 'react-native';
import { theme } from "../theme";
import { images } from '../images';

export const Input= () => {
  let time = new Date()
  let todayDate = time.getDate()
  let todayDay = time.getDay()

  const week= ['SUN','MON','TUE','WED','THU','FRI','SAT']
  let dayOfWeek = week[todayDay]
//<TextInput value ="a" editable = {false} style={inputStyles.dayText} multiline={true}></TextInput>
  return (
    <>
      <View style = {inputStyles.box}>
      <View style ={inputStyles.date}>
      <View  style ={inputStyles.underline}><Text style ={inputStyles.dayText}>{todayDate}</Text></View>
      <Text style = {inputStyles.dayOfWeek}>{dayOfWeek}</Text>
     </View>

      <TextInput style = {inputStyles.textInput} multiline={true} >
      </TextInput>
      </View>
      </>
   
  );
};


export const SignText= () => {
  let time = new Date()
  let todayDate = time.getDate()
  let todayDay = time.getDay()

  const week= ['SUN','MON','TUE','WED','THU','FRI','SAT']
  let dayOfWeek = week[todayDay]
//<TextInput value ="a" editable = {false} style={inputStyles.dayText} multiline={true}></TextInput>
  return (
    <>
      <View style = {inputStyles.box}>
      <View style ={inputStyles.date}>
      <View  style ={inputStyles.underline}><Text style ={inputStyles.dayText}>{todayDate}</Text></View>
      <Text style = {inputStyles.dayOfWeek}>{dayOfWeek}</Text>
     </View>

      <Text style = {inputStyles.textInput} multiline={true} >
      </Text>
      </View>
      </>
   
  );
};




export const inputStyles = StyleSheet.create({
    textInput: {
      fontSize: 25,
      width: Dimensions.get('window').width-80,
      height: 280, 
      alignContent: 'center',
      textAlign: 'left',
      textAlignVertical: 'top',
      marginTop: 10,
      paddingLeft:5,
      paddingRight:15,
      paddingTop: 5, 
      
      backgroundColor: theme.itmeBackground,
      color: theme.text, 
      
    
    },
    underline: { //textDecorationLine: 'underline',
    width : 35,
    borderBottomWidth : 1,
    borderBottomColor : 'black',
    alignContent: 'center',
    textAlign: 'center',
    },
    date: { //textDecorationLine: 'underline',
      width : 35,
      alignContent: 'center',
      textAlign: 'center',
    // backgroundColor: 'yellow',
      },
    dayOfWeek: {fontSize : 15,
      textAlign: 'center'},
    dayText: {
      textAlign: 'center',
      fontSize : 20
    },
    box: {
      fontSize: 25,
      width: Dimensions.get('window').width -40,
      height: 365, 
      alignContent: 'center',
      textAlign: 'left',
      textAlignVertical: 'top',
      marginTop: 10,
      paddingLeft:15,
      paddingRight:15,
      paddingTop: 10, 
      borderRadius: 2,
      backgroundColor:theme.itmeBackground,
      color: theme.text, 
      borderWidth:3,
      borderColor: theme.text

    }
  });




