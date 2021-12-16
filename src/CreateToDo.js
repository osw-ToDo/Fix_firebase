import React,{useState} from 'react';
import {StatusBar, Switch, View, SafeAreaView, Text, ScrollView,Alert} from 'react-native';
import {viewStyles, textStyles, taskStyles,ToggleStyles } from './styles';
import {images} from './images';
import Day from './components/Date';
import Category from './components/Category';
import TodoInput from './components/TodoInput';
import { IconButton as IconBtn} from 'react-native-paper';
import { goBack } from './J_index';


export default function CreateToDo({navigation}) {
    const press_add_ok= () =>
    {
        console.log("The addition has been completed.")
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

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => 
    setIsEnabled(previousState => !previousState);

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
                <View style={ToggleStyles.container}>
                    <Switch
                    trackColor={{ false: "#808080", true: "#2Faf53" }}
                    ios_backgroundColor="#808080"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    />
                </View>
                </View>
            </View>
            </ScrollView>
            <View style={viewStyles.box}><IconBtn icon={images.done} onPress={()=>add_task()} /></View>
            </View>
        </SafeAreaView>
    );
};
