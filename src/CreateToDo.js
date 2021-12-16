import React,{useState} from 'react';
import {StatusBar, View, SafeAreaView, Text, ScrollView,Alert} from 'react-native';
import {viewStyles, textStyles, taskStyles } from './styles';
import {images} from './images';
//import {IconButton} from './components/IconButton';
import Day from './components/Date';
import Category from './components/Category';
import ToggleSwitch from 'toggle-switch-react-native';
import TodoInput from './components/TodoInput';
import { IconButton as IconBtn} from 'react-native-paper';
import { goBack } from './J_index';
import { createTodo } from './utils/firebase';


export default function CreateToDo({navigation}) {
    const press_add_ok= () =>
    {
        console.log("The addition has been completed.")
        _handleCreateToDoPress({navigation,startDay,endDay,cate,toDo});
        goBack({navigation})
    }
    const add_task = () => 
    Alert.alert(                   
     "Add this To-Do?",                   
     "add this To-Do to your To-Do list",                         
     [                              
       {
         text: "OK",                              
         onPress: () => press_add_ok()
         //DB삽입 코드     
       },
       { text: "Cancel", style: "cancel", onPress: () => console.log("The addition has been canceled.") }, 
     ],
     { cancelable: false }
    );
    const [text, setText] = useState("");
    const [startDay,setStartDay] = useState("");
    const [endDay,setEndDay] = useState("");
    const [cate,setCate] = useState("");
    const [toDo,setToDo] = useState("");
    
    const placeholder = 'Select the Category';
    const onChangeText = (value) => {
            setText(value);
    }
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

    const SetStart = (text) => {
        console.log(text);
        setStartDay(text);
      }

      const SetEnd = (text) => {
        console.log(text);
        setEndDay(text);
      }
      const SetCate = (text) => {
        console.log(text);
        setCate(text);
      }
      
      const SetToDo= (text) => {
        console.log(text);
        setToDo(text);
      }

    return (
        <SafeAreaView style={viewStyles.container}>
            <StatusBar barStyle="light-content" style={textStyles.statusbar}/>
            <View style={viewStyles.header}>
            <IconBtn icon={images.back} onPress={ () => {goBack({navigation});}}/>
            </View>
            <Text style={textStyles.title}>Create To-do List</Text>
            <View style={viewStyles.card}>
            <ScrollView>
            <View>
                <View style={taskStyles.column}>
                <Text style={taskStyles.text}>Start-Date:</Text>
                <Day set= {SetStart}/>
                </View>
                <View style={taskStyles.column}>
                <Text style={taskStyles.text}>Due-Date:</Text>
                <Day set={SetEnd}/>
                </View>
                <View style={taskStyles.column}>
                <Text style={taskStyles.text}>Category:</Text>
                <Category/>
                </View>
                <View style={taskStyles.container}>
                <Text style={taskStyles.text}>To-do:</Text>
                <TodoInput set={SetToDo}/>
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
            <View style={viewStyles.box}><IconBtn icon={images.done} onPress={()=>add_task()} /></View>
            </View>
        </SafeAreaView>
    );
};


const _handleCreateToDoPress = async ({navigation ,startDay,endDay,toDo,cate}) => {

    try {
        
      console.log(startDay);
      const id = await createTodo({Start:startDay,End:endDay,Cate:cate,ToDo:toDo})
      //navigation.replace('showSign', { navigation, id: id, text : TodaySignText, tSign : TrafficSignData, pSign :PicSign});
      // navigation.replace('makeSign', { id, TodaySignText });
      // Alert.alert('sign success',e.message);
    } catch (e) {
      Alert.alert('Creation Error', e.message);
    }
  };
  