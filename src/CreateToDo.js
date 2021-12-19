import React,{useState} from 'react';
import {StatusBar, Switch, View, SafeAreaView, Text, ScrollView,Alert} from 'react-native';
import {viewStyles, textStyles, taskStyles,ToggleStyles } from './styles';
import {images} from './images';
import Day from './components/Date';
import Category from './components/Category';
import TodoInput from './components/TodoInput';
import { IconButton as IconBtn} from 'react-native-paper';
import { goBack } from './J_index';
import { createTodo } from './utils/firebase';


export default function CreateToDo({navigation}) {
    const press_add_ok= () =>
    {
        
        if(!startDay||!endDay||!cate||!toDo){
          Alert.alert(
            "CAUTION",
            "Enter a non-space value!",
            [
                {
                    text:"OK",
                }
            ]
        );
        }
        else{
        _handleCreateToDoPress({navigation,startDay,endDay,cate,toDo,Flag:isEnabled});//DB삽입 코드  
        Alert.alert("Add a new To-Do!");
        console.log("The addition has been completed.")
        goBack({navigation})
      }
    }
    const add_task = () => 
    Alert.alert(                   
     "Add this To-Do?",                   
     "add this To-Do to your To-Do list",                         
     [                              
       {
         text: "OK",                              
         onPress: () => press_add_ok()
            
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

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => 
    setIsEnabled(previousState => !previousState);

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
                <Category set={SetCate}/>
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
            <View style={viewStyles.box}><IconBtn icon={images.done} onPress={()=>add_task()} /></View>
            </View>
        </SafeAreaView>
    );
};


export const _handleCreateToDoPress = async ({navigation ,startDay,endDay,toDo,cate,Flag}) => {

    try {
        
      console.log(startDay);
      const id = await createTodo({Start:startDay,End:endDay,Cate:cate,ToDo:toDo,Flag})
      //navigation.replace('showSign', { navigation, id: id, text : TodaySignText, tSign : TrafficSignData, pSign :PicSign});
      // navigation.replace('makeSign', { id, TodaySignText });
      // Alert.alert('sign success',e.message);
    } catch (e) {
      Alert.alert('Creation Error', e.message);
    }
  };
  