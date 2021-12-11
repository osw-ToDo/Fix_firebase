import React, {useState} from 'react';
import {StatusBar, View, SafeAreaView, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import {viewStyles, textStyles } from './styles';
import {images} from './images';
import {IconButton} from './components/IconButton';
import ToggleSwitch from 'toggle-switch-react-native';
import { theme } from './theme';


export default function App() {

    /*const [newTask, setNewTask]=useState('');
    const [tasks, setTasks] = useState({
        '1': {id: '1', completed:false},
    });

    const _addTask=()=> {
        alert('Add: ${newTask}');
        const ID=Date.now().toString();
        const newTaskObject={
            [ID]: {id: ID, completed:false},
        };
        setNewTask('');
        setNewTask({...tasks, ...newTaskObject});
    }

    const _handleTextChange = text =>{
        setNewTask(text);
    };*/
    return (
        <SafeAreaView style={viewStyles.container}>
            <StatusBar barStyle="light-content" style={textStyles.statusbar}/>
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
                <ToggleSwitch
                    isOn={false}
                    onColor="#2Faf53"
                    offColor="#ecf0f1"
                    size="large"
                    onToggle={isOn => console.log("changed to : ", isOn)}
                    />
                </View>
            </View>
            </ScrollView>
            <View style={viewStyles.box}><IconButton type={images.edit}  /></View>
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
