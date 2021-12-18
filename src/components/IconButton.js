import React from 'react';
import { Pressable, StyleSheet, Image} from 'react-native';
import PropTypes from 'prop-types';
import { images } from '../images';

export const IconButton= ({type, onPressOut}) => {
  
    return (
        <Pressable onPress = {onPressOut} >
            <Image source={type} style={iconStyle.icon}/>
        </Pressable>

        
    );
};

export const PicButton= ({type, onPressOut}) => {

  return (
    <Pressable onPress = {onPressOut}>
        <Image source = {type} style = {iconStyle.pic}/>
    </Pressable>
   
  );
};


const iconStyle = StyleSheet.create({
    icon: {
        tintColor: 'black',
        width: 30,
        height: 30,
        margin: 10,
        resizeMode: 'contain', 
    },
    pic: {
      tintColor: 'black',
      width: 50,
      height: 50,
      margin: 5,
      resizeMode: 'contain', 
  },
});

IconButton.propTypes={
    type: PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut: PropTypes.func,
};



