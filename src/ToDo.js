import React, {useState} from 'react';
import {StatusBar, Switch, View, SafeAreaView, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import {viewStyles, textStyles,ToggleStyles } from './styles';
import {images} from './images';
import { theme } from './theme';
import { IconButton as IconBtn} from 'react-native-paper';
import { goBack } from './J_index';


export default function App({navigation}) {

    const isEnabled = false;
    //위 코드에서 db에서 값 불러와 isEnabled에 저장
    //const [isEnabled, setIsEnabled] = useState(false);
    //const toggleSwitch = () => 
    //setIsEnabled(previousState => !previousState);

    return (
        <SafeAreaView style={viewStyles.container}>
            <StatusBar barStyle="light-content" style={textStyles.statusbar}/>
            <View style={viewStyles.header}>
            <IconBtn icon={images.back} onPress={ () => {goBack({navigation});}}/>
          </View>
            <Text style={textStyles.title}>My To-do List</Text>
            <View style={viewStyles.card}>
            <ScrollView>
            <View>
                <View style={taskStyles.column}>
                <Text style={taskStyles.text}>Start-Date:</Text>
                    <Text style={taskStyles.textbox}>database</Text>
                </View>
                <View style={taskStyles.column}>
                <Text style={taskStyles.text}>Due-Date:</Text>
                    <Text style={taskStyles.textbox}>database</Text>
                </View>
                <View style={taskStyles.column}>
                <Text style={taskStyles.text}>Category:</Text>
                    <Text style={taskStyles.textbox}>database</Text>
                </View>
                <View style={taskStyles.container}>
                <Text style={taskStyles.text}>To-do:</Text>
                <View style={taskStyles.containerbox}>
                <View style={taskStyles.Input2}>
                <Text style={taskStyles.Input}>database</Text>
                </View>
                </View>
                </View>
                <View style={taskStyles.column}>
                <Text style={taskStyles.text}>Completed:</Text>
                 <View style={ToggleStyles.container}>
                    <Switch
                    trackColor={{ false: "#808080", true: "#2Faf53" }}
                    ios_backgroundColor="#808080"
                    //onValueChange={toggleSwitch} //수정 > todoview는 only view
                    value={isEnabled} //db에서 값 받아오기
                    disabled={true}
                    />
                </View>
                </View>
            </View>
            </ScrollView>
            <View style={viewStyles.box}>
            <IconBtn icon={images.edit}  onPress={() => navigation.navigate('modifyToDo') }/>
            </View>
            </View>
        </SafeAreaView>
    );

};
const taskStyles=StyleSheet.create({
    container: {
        margin:10,
        marginLeft:0,
        padding:5,
        marginTop:20,
       
    },
    column:{
        flexDirection: 'row',
        margin:10,
        marginLeft:0,
        padding:5,
        marginTop:20,
        
        
    },
    text:{
        flex:1,
        fontSize:23,
        fontWeight: '500',
        color: theme.cate,
        marginTop: 10,
        marginLeft: 20,
        width: 150,
        textAlignVertical: 'center',
    },

    textbox: {
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
    Input: {
        fontSize: 17,
        paddingTop:14,
        color: theme.text,
    },
    Input2: {
        width: 300,
        height: 50,
        marginTop: 10,
        marginLeft: 20,
        paddingLeft:15,
        borderRadius: 10,
        backgroundColor: theme.itemBackground,
    },
});
