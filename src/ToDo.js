import React, {useState} from 'react';
import {StatusBar, View, SafeAreaView, Text, ScrollView} from 'react-native';
import {viewStyles, textStyles } from './styles';
import Input from './components/Input';
import {images} from './images';
import IconButton from './components/IconButton';
import Task from './components/Task';


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
              <Task/>
            </ScrollView>
            <View style={viewStyles.box}><IconButton type={images.edit} /></View>
            </View>
        </SafeAreaView>
    );
};