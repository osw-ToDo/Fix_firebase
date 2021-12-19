import React, {useState} from 'react';
import {StatusBar, Switch, View, SafeAreaView, Text, ScrollView, Alert,Button} from 'react-native';
import {viewStyles, textStyles, taskStyles,ToggleStyles } from './styles';
import {images} from './images';
import Day from './components/Date';
import Category from './components/Category';
import TodoInput from './components/TodoInput';
import { IconButton as IconBtn} from 'react-native-paper';
import { goBack } from './J_index';

export default function ModifyToDo({navigation,route}) {

    const press_mod_ok= () =>
    {
        console.log("Update has been completed.")
        //DB업뎃 코드  
        Alert.alert("To-Do has been updated!");
        navigation.navigate('toDo')
    }
    const press_del_ok= () =>
    {
        console.log("Delete has been completed.")
        //DB삭제 코드
        Alert.alert("To-Do has been deleted!");
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
              
       },
       { text: "Cancel", style: "cancel", onPress: () => console.log("The deletion has been canceled.") }, 
     ],
     { cancelable: false }
    );

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => 
    setIsEnabled(previousState => !previousState);

    const [text, setText] = useState("");
    const [startDay,setStartDay] = useState("");
    const [endDay,setEndDay] = useState("");
    const [cate,setCate] = useState("");
    const [toDo,setToDo] = useState("");
    
    const placeholder = 'Select the Category';
    const onChangeText = (value) => {
            setText(value);
    }

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
            <Text style={textStyles.title}>Modify To-do List</Text>
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
                <Category set ={SetCate}/>
                </View>
                <View style={taskStyles.container}>
                <Text style={taskStyles.text}>To-do:</Text>
                <TodoInput set={SetToDo}/>
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
            <View style={viewStyles.box2}>
                <IconBtn icon={images.delete} onPress={()=>del_task()} />
                <IconBtn icon={images.submit} onPress={()=>mod_task()} />
            </View>
            </View>
        </SafeAreaView>
    );
};