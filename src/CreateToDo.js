import React,{useState} from 'react';
import {StatusBar, View, SafeAreaView, Text, ScrollView,Alert} from 'react-native';
import {viewStyles, textStyles, taskStyles, pickerSelectStyles } from './styles';
import {images} from './images';
import {IconButton} from './components/IconButton';
import Day from './components/Date';
import RNPickerSelect from 'react-native-picker-select';
import ToggleSwitch from 'toggle-switch-react-native';
import TodoInput from './components/TodoInput';


export default function CreateToDo() {
    const add_task = () => 
    Alert.alert(                   
     "Add this To-Do?",                   
     "add this To-Do to your To-Do list",                         
     [                              
       {
         text: "OK",                              
         onPress: () => console.log("Add has been completed."),
         //DB삽입 코드     
       },
       { text: "Cancel", style: "cancel", onPress: () => console.log("The addition has been canceled.") }, 
     ],
     { cancelable: false }
    );
    const [text, setText] = useState("");
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
    return (
        <SafeAreaView style={viewStyles.container}>
            <StatusBar barStyle="light-content" style={textStyles.statusbar}/>
            <Text style={textStyles.title}>Create To-do List</Text>
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
                    onToggle={isOn => console.log("changed to : ", isOn)}
                    />
                </View>
            </View>
            </ScrollView>
            <View style={viewStyles.box}><IconButton type={images.submit} onPressOut={()=>add_task()} /></View>
            </View>
        </SafeAreaView>
    );
};
