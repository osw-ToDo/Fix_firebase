import React, {useState} from 'react';
import {StatusBar, View, SafeAreaView, Text, ScrollView, Alert, StyleSheet, RefreshControl,Button} from 'react-native';
import {viewStyles, textStyles, pickerSelectStyles} from './styles';
import ToggleSwitch from 'toggle-switch-react-native';
import { images } from './images';
import RNPickerSelect from 'react-native-picker-select';
import { IconButton } from 'react-native-paper';
import { goBack } from './J_index';



const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
    
export default function App({navigation}) {
    function add_category() {
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
                  text: "OK",
                  onPress: new_category => console.log("new category: " + new_category )
                  //new_category값 db전송 코드
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
    
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
      }, []);
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
                    <ToggleSwitch
                    isOn={false}
                    onColor="green"
                    offColor="red"
                    size="large"
                    onToggle={isOn => console.log("changed to : ", isOn)}
                    /></View>
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
                <IconButton type={images.add} onPressOut= {() => navigation.navigate('creatToDo') }/>
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
        marginTop:13,
        marginLeft: 20,
        marginBottom:0,
    },
    box:{
        marginLeft:25,

    }

});