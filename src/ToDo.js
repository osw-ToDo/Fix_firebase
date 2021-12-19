import React, {useEffect, useState} from 'react';
import {StatusBar, Switch, View, SafeAreaView, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import {viewStyles, textStyles,ToggleStyles } from './styles';
import {images} from './images';
import { theme } from './theme';
import { IconButton as IconBtn} from 'react-native-paper';
import { goBack } from './J_index';
import { DB, getTodoRef ,updateToDo} from './utils/firebase';
import { _handleCreateToDoPress } from './CreateToDo';


export const _handleUpdateToDoPress = async ({id,startDay,endDay,toDo,cate,Flag}) => {

    try {
     
     const newdata = await updateToDo({id, cate,start:startDay,end:endDay,todo:toDo,flag:!Flag});
      //navigation.replace('showSign', { navigation, id: id, text : TodaySignText, tSign : TrafficSignData, pSign :PicSign});
      // navigation.replace('makeSign', { id, TodaySignText });
      // Alert.alert('sign success',e.message);
     console.log("new data",newdata);
        
     return newdata;
     
    } catch (e) {
     // Alert.alert('Creation Error', e.message);
      Alert.alert("fill out the required field");
    }
  };
  

const App =({navigation,route}) => {

    const [data,setData]=useState('');
    const [todo,setToDo] =useState(''); 
    const [start,setStart] = useState('');
    const [cate,setCate] = useState('');
    const [end,setEnd] = useState('');
    const [flag,setFlag] = useState('');
    const data_temp = route.params.item;
    const [isEnabled, setIsEnabled] = useState(false);
   
    const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    //const startDay = new Date(start);
    console.log('flag |',isEnabled);
    
    _handleUpdateToDoPress({navigation,id:data_temp.id,startDay:data_temp.Start,endDay:data_temp.End, cate:cate,toDo:todo,Flag:isEnabled});
    var flag = isEnabled;
    setData(({...data,flag}));
    console.log("new data",data);
    }

   
    useEffect(()=>{
      
        setData(data_temp);
        console.log("Todo Data",data);

        if(typeof data != "undefined" ){
        const startDate = new Date(data_temp.Start.seconds*1000);
        const endDate = new Date(data_temp.End.seconds*1000);
        setStart(startDate.toDateString());
        setEnd(endDate.toDateString());
        setCate(data_temp.Cate);
        setFlag(data_temp.Flag);
        setToDo(data_temp.ToDo);
        setIsEnabled(flag);
      
        }
    },[flag]);
    

    console.log("cate :",cate,flag,start);
  
   // const{cate,end,start,flag} = {cate:data.Cate, end:endDate, start:startDate, flag:data.Flag.toString()};

   
    
    //const isEnabled = false;
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
                    <Text style={taskStyles.textbox}>{start}</Text>
                </View>
                <View style={taskStyles.column}>
                <Text style={taskStyles.text}>Due-Date:</Text>
                    <Text style={taskStyles.textbox}>{end}</Text>
                </View>
                <View style={taskStyles.column}>
                <Text style={taskStyles.text}>Category:</Text>
                    <Text style={taskStyles.textbox} >{cate}</Text>
                </View>
                <View style={taskStyles.container}>
                <Text style={taskStyles.text}>To-do:</Text>
                <View style={taskStyles.containerbox}>
                <View style={taskStyles.Input2}>
                <Text style={taskStyles.Input} >{todo}</Text>
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
                
                    disabled={false}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    />
                </View>
                </View>
            </View>
            </ScrollView>
            <View style={viewStyles.box}>
            <IconBtn icon={images.edit}  onPress={() => navigation.navigate('modifyToDo',{data}) }/>
            </View>
            </View>
        </SafeAreaView>
    );

}
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

export default App;