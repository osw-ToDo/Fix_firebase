import React from 'react';
import {StatusBar, View, SafeAreaView, Text, ScrollView, Alert,Button} from 'react-native';
import {viewStyles, textStyles, taskStyles } from './styles';
import {images} from './images';
//import {IconButton} from './components/IconButton';
import Day from './components/Date';
import Category from './components/Category';
import ToggleSwitch from 'toggle-switch-react-native';
import TodoInput from './components/TodoInput';
import { IconButton as IconBtn} from 'react-native-paper';
import { goBack } from './J_index';

export default function ModifyToDo({navigation}) {
    const press_mod_ok= () =>
    {
        console.log("Update has been completed.")
        navigation.navigate('toDo')
    }
    const press_del_ok= () =>
    {
        console.log("Delete has been completed.")
        navigation.navigate('main') 
    }
    const mod_task = () => 
    Alert.alert(                   
     "Update this To-Do?",                   
     "update this To-Do from the original To-Do",                         
     [                              
       {
         text: "OK",                             
         onPress: () => press_mod_ok()
         //DB업뎃 코드     
       },
       { text: "Cancel", style: "cancel", onPress: () => console.log("The update has been canceled.") }, 
     ],
     { cancelable: false }
    );
    
    const del_task = () => 
    Alert.alert(                   
     "Delete this To-Do?",                   
     "delete this To-Do from your To-Do list. Can't be restored",                         
     [                              
       {
         text: "OK",                              
         onPress: () => press_del_ok()
         //DB삭제 코드     
       },
       { text: "Cancel", style: "cancel", onPress: () => console.log("The deletion has been canceled.") }, 
     ],
     { cancelable: false }
    );
    
   
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
            <View style={viewStyles.header}>
            <IconBtn icon={images.back} onPress={ () => {goBack({navigation});}}/>
          </View>
            <Text style={textStyles.title}>Modify To-do List</Text>
            <View style={viewStyles.card}>
            <ScrollView>
            <View>
                <View style={taskStyles.column}>
                <Text style={taskStyles.text}>Start-Date:</Text>
                <Day/>
                </View>
                <View style={taskStyles.column}>
                <Text style={taskStyles.text}>Due-Date:</Text>
                <Day/>
                </View>
                <View style={taskStyles.column}>
                <Text style={taskStyles.text}>Category:</Text>
                <Category/>
                </View>
                <View style={taskStyles.container}>
                <Text style={taskStyles.text}>To-do:</Text>
                <TodoInput/>
                </View>
                <View style={taskStyles.column}>
                <Text style={taskStyles.text}>Completed:</Text>
                <ToggleSwitch
                    isOn={false}
                    onColor="#2Faf53"
                    offColor="#ecf0f1"
                    size="large"
                    onToggle={
                        isOn => console.log("changed to : ", isOn)}
                    />
                </View>
            </View>
            </ScrollView>
            <View style={viewStyles.box2}>
                <IconBtn icon={images.delete} onPress={()=>del_task()} />
                <IconBtn icon={images.submit} onPress={()=>mod_task()} />
            </View>
            </View>
        </SafeAreaView>
    );
};