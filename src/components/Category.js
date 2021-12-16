import React, {useState} from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import { theme } from '../theme';


export default function Category({set}) {
    
    const [text, setText] = useState("");
    const placeholder = 'Select the Category';
    const onChangeText = (value) => {
            setText(value);
    }
         
    return (
        <View style={pickerSelectStyles.container}>
        <View style={{ width: 170 }}>
             <RNPickerSelect
                textInputProps={{ underlineColorAndroid: 'transparent'}}
                placeholder={{
                    label: placeholder,
                }}
                fixAndroidTouchableBug={true}
                value={text}
                onValueChange={value => onChangeText(value)}
                onClose={set(text)}
                useNativeAndroidPickerStyle={false}
                items={[
                    { label: 'School', value: 'School'},
                    { label: 'Club', value: 'Club'},
                    { label: 'Assignment', value: 'Assignment'},
                    { label: 'Extra', value: 'Extra'},
                    
                ]}
                style={pickerSelectStyles}
            />

        </View>
        </View>
  );
}
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        color: '#9b111e',
        height: 40, 
        width: 170, 
        textAlign:'center',
        //backgroundColor: theme.itemBackground, 
        borderWidth: 1, 
        borderColor:theme.itemBackground,
        borderRadius: 10,
        padding: 10
    },
    inputAndroid: {
        fontSize: 16,
        color: '#9b111e',
        height: 40, 
        width: 170, 
        textAlign:'center',
        //backgroundColor: theme.itemBackground, 
        borderWidth: 1, 
        borderColor:theme.itemBackground,
        borderRadius: 10,
        padding: 10
    },
    
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        //backgroundColor: '#868e96',
        marginRight: 0,
        
    },

});