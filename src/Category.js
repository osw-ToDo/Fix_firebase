import React, {useEffect, useState} from 'react';
import {StatusBar, Switch, View, SafeAreaView, Text, ScrollView, Alert, StyleSheet, RefreshControl,Button, SnapshotViewIOSBase} from 'react-native';
import {viewStyles, textStyles, pickerSelectStyles, ToggleStyles} from './styles';
import { images } from './images';
import RNPickerSelect from 'react-native-picker-select';
import { IconButton } from 'react-native-paper';
import { goBack } from './J_index';
import { DB, createCategory } from './utils/firebase';
import { FlatList } from 'react-native-gesture-handler';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
    
export default function App({navigation}) {
    var categoryDB = {};
    var realCate={};
    useEffect(()=>{
        const cateRef = DB.collection('Cate'); 
        cateRef.get().then((snapshot)=>{
            snapshot.forEach((doc) =>{
                console.log(doc.data());
                
                var key;
                var val;
                key = doc.id
                val=doc.data();
                categoryDB[key]=val;
            
            });
            console.log('hiddd');
            console.log(categoryDB);
            
          });
          
         
    });
    console.log('asd',{categoryDB});
    
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
    function view_completed(){
        if(isEnabled==true){
            //Flag=='false'만
            
        }
        else{
            //전체
        }
    }
    function view_category(value){
        
    }
    const [text, setText] = useState("");
    const placeholder = 'Select the Category';
    const onChangeText = (value) => {
        if (value == 'Add') {
            add_category()
        }
        else
            setText(value);
            view_category(value)
    }
    
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => 
    setIsEnabled(previousState => !previousState);
    view_completed()

    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
      }, []);

      //카테고리 리스트
      
      
     
      /*const TodoRef = DB.collection('Todo');

      //투두 반환(전체) - 종료 일자 빠른 순
      TodoRef.orderBy('End','desc').get().then((snapshot)=>{
          snapshot.forEach((doc)=>{
              console.log("1. entire return orderby End:", doc.data());
          });
      })

      //반환(전체) - 생성 일자 순 빠른 순(지금은 시작 일자 빠른 순임)
      TodoRef.orderBy('Start','asc').get().then((snapshot)=>{
        snapshot.forEach((doc)=>{
            console.log("2. entire return orderby Start:", doc.data());
        });
    })

      //카테고리 별 투두 반환(한 카테고리 내) - 종료 일자 빠른 순
      TodoRef.where('Cate','==','School').orderBy('End','asc').get().then((snapshot)=>{
        snapshot.forEach((doc)=>{
            console.log("3. by cate End:", doc.data());
        });
    })

      //카테고리 별 투두 반환(한 카테고리 내) - 생성 일자 순
      TodoRef.where('Cate','==','School').orderBy('Start','asc').get().then((snapshot)=>{
        snapshot.forEach((doc)=>{
            console.log("4. by cate start:", doc.data());
        });
    })
    
      //특정 아이템 검색 (전체, prefix search) elastic nono
      TodoRef.where('ToDo','>=','s').where('ToDo','<=','s'+'\uf8ff').get().then((snapshot)=>{
        snapshot.forEach((doc)=>{
            console.log("5. search:", doc.data());
        });
    })*/


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
                            items={[
                                
                                { label: 'School', value: 'School'},
                                { label: 'Club', value: 'Club'},
                                { label: 'Assignment', value: 'Assignment'},
                                { label: 'Extra', value: 'Extra'},
                                { label: '+ Add Category', value: 'Add' },
                            ]}
                            style={pickerSelectStyles}
                        />
                    </View>
                    </View>
                </View>
                <View style={CategoryStyles.line} />
                <Text style={textStyles.main}>To-dos: </Text>
                    
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
  