import React, {useEffect, useState} from 'react';
import {StatusBar, Switch, View, SafeAreaView, Text, ScrollView, Alert, StyleSheet, RefreshControl,Button, SnapshotViewIOSBase} from 'react-native';
import {viewStyles, textStyles, pickerSelectStyles, ToggleStyles} from './styles';
import { images } from './images';
import RNPickerSelect from 'react-native-picker-select';
import { IconButton } from 'react-native-paper';
import { goBack } from './J_index';
import { DB, createCategory } from './utils/firebase';
import { Todo_List } from "./components/J_List";

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}


export default function App({navigation}) {
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
      }, []);
    
    
    var categoryDB= {};
    var todoData = {};
    var todoData_2 = {};
    const [todoData_real, settodoRealdata] = useState('');
    const [cateData, setcateData] = useState('');
    const [todoData2, settodoData] = useState('');
    const [todoData3, settodoData2] = useState('');

    useEffect(()=>{
        const cateRef = DB.collection('Cate'); 
        const todoRef = DB.collection('Todo');
        
            function view_all() {
            todoRef.get().then((snapshot)=>{
                snapshot.forEach((doc) =>{
                 
                  var key;
                  var value;
                  key = doc.id
                  value = doc.data();
          
                  //if( 카테고리에는 전부 띄우고 (왜냐면 미완료된일만 표시 때문에 flag=true도 띄움)
                  //doc.data().Flag == false){
                    todoData[key] =value;
                  //}
                 });
                 settodoData(todoData);
                 console.log("TODODATA1" ,todoData);
          });}
          function view_uncom(){
            // 미완료된 일
            todoRef.get().then((snapshot)=>{
            snapshot.forEach((doc) =>{
             
              var key;
              var value;
              key = doc.id
              value = doc.data();
      
              if
              (doc.data().Flag == false){
                todoData_2[key] =value;
              }
             });
             settodoData2(todoData_2);
             console.log("TODODATA23" ,todoData_2);
      });}
        function view_cate(cate_2){
        todoRef.where('Cate','==','School').orderBy('End','asc').get().then((snapshot)=>{
            snapshot.forEach((doc)=>{
                console.log("3. by cate End:", doc.data());

                var cate=cate_2;
                var key;
                var value;
                key = doc.id
                value = doc.data();
                //if(doc.data().Cate==cate_2)


            });
        })
        
        cateRef.get().then((snapshot)=>{
            snapshot.forEach((doc) =>{
                var key;
                var val;
                key = doc.id
                val=doc.data();
                categoryDB[key]=val;
               
            });
            setcateData(categoryDB);
          });  
        }
    },[]);

    function view_com (isEnabled)  {
        if(!isEnabled){
            view_all()
                
        }
        else{
            view_uncom()
        }
        
    }
    console.log('lli3',todoData2);
    console.log('1114',todoData3);
    console.log('lll5',cateData);

    var listArray = Object.values(cateData);
    var add={value: 'Add', label: '+ Add a new category'};
    listArray.push(add);
    
    const press_add_ok= (new_category) =>
    {
        if(new_category){
            console.log("new category: " + new_category )
            _handleCreateCatePress({navigation,new_category}); 
            Alert.alert(
                "A new category: ",
                new_category, 
                );  
            navigation.navigate('category')
        }
        else   
            Alert.alert(
                "CAUTION",
                "Enter a non-space category!",
                [
                    {
                        text:"OK",
                        onPress:() => add_category()
                    }
                ]
            );
        }
    function add_category()  {

        Alert.prompt(
              "Enter category",
              "Enter your own new category",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                {
                  text: "Submit",
                  onPress: (new_category) => press_add_ok(new_category)
                }
              ],
              'plain-text',
            );
    }

    const [text, setText] = useState("");
    const placeholder = 'Select the Category';
    const onChangeText = (value) => {
        if (value == 'Add') {
            add_category()
        }
        else
            setText(value);
    }
   
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch = () => 
        setIsEnabled(previousState => !previousState);
        view_com(isEnabled)
  
    const toggleSwitch2 = () => 
        setIsEnabled2(previousState => !previousState);
  
    
     
    return (
        <SafeAreaView style={viewStyles.container}>
            <StatusBar barStyle="light-content" style={textStyles.statusbar}/>
            <View style={viewStyles.header}>
            <IconButton icon={images.back} onPress={ () => {goBack({navigation});}}/>
            </View>
            <Text style={textStyles.title}>Category</Text>
            <View style={viewStyles.card}>
            <ScrollView 
              refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
            > 
                <View style={CategoryStyles.container}>
                <Text style={CategoryStyles.text2}>Only Uncompleted To-dos:</Text>
                <View style={CategoryStyles.box}>
                <View style={ToggleStyles.container2}>
                    <Switch
                    trackColor={{ false: "#808080", true: "#2Faf53" }}
                    ios_backgroundColor="#808080"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    />
                </View>
                </View>
                </View>
                <View style={CategoryStyles.line} />
                <View style={CategoryStyles.container}>
                    <Text style={CategoryStyles.text}>Select Cateory: </Text>
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
                            items={listArray}
                            
                            style={pickerSelectStyles}
                        />
                    </View>
                    </View>
                </View>
                <View style={CategoryStyles.line} />
                <Text style={CategoryStyles.line2}>end-date</Text>
                <View style={CategoryStyles.toggle2}>
                <Switch
                    trackColor={{ false: "#808080", true: "#2Faf53" }}
                    ios_backgroundColor="#808080"
                    onValueChange={toggleSwitch2}
                    value={isEnabled2}
                    />
                </View>
                <Text style={textStyles.main2}>To-dos: </Text>
                  
                  <Todo_List navigation ={navigation} data = {todoData2}/>
            </ScrollView>
            <View style={viewStyles.box}>
           
                <IconButton icon={require("../assets/images/mainPlus.png")} onPress= {() => navigation.navigate('creatToDo') }/>
            </View>
        </View>
        </SafeAreaView>
        
    );
    
};

const CategoryStyles = StyleSheet.create({
    
    container: {
        //margin:20,
        flex: 1,
        //justifyContent: 'center',
        flexDirection: 'row',
        //alignItems: 'center',
        //backgroundColor: '#868e96',
        marginRight: 20,
        marginTop:10,
        marginBottom:0,
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: 310,
        margin:10,
        marginBottom:0,
        marginLeft:15,
        marginTop:10,
        alignContent:'center',
        
    },
    text: {
        fontSize:17,
        fontWeight: '500',
        color: '#000000',
        alignItems: 'flex-start',
        marginTop:7,
        marginLeft: 20,
        marginBottom:10,
    },
    text2: {
        fontSize:17,
        fontWeight: '500',
        color: '#000000',
        alignItems: 'flex-start',
        marginTop:5,
        marginLeft: 20,
        marginBottom:0,
    },
    box:{
        marginLeft:50,

    },
    toggle2:{
        marginLeft:270,
        marginTop:3,
    },
    line2:{
        marginLeft:270,
        
    }

});



const _handleCreateCatePress = async ({navigation ,new_category}) => {
    try {
      console.log(new_category);
      const id = await createCategory({label:new_category, value:new_category})
      
    } catch (e) {
      Alert.alert('Creation Error', e.message);
    }
  };
  