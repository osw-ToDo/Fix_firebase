import React, {useState} from 'react';
import {StatusBar, View, SafeAreaView, Text, ScrollView, StyleSheet} from 'react-native';
import {viewStyles, textStyles } from './styles';
import Input from './components/Input';
import {images} from './images';
import IconButton from './components/IconButton';
import Category from './components/Category';


export default function App() {
    
    return (
        <SafeAreaView style={viewStyles.container}>
            <StatusBar barStyle="light-content" style={textStyles.statusbar}/>
            <Text style={textStyles.title}>Category</Text>
            <View style={viewStyles.card}>
            <ScrollView>
            <View style={CategoryStyles.container}>
              <Text style={CategoryStyles.text2}>See Only Uncompleted To-dos:</Text>
              <View style={CategoryStyles.box}><IconButton type={images.off} /></View>
            </View>
              <View style={CategoryStyles.line} />
              <View style={CategoryStyles.container}>
                  <Text style={CategoryStyles.text}>Select Cateory: </Text><Category />
                </View>
                <View style={CategoryStyles.line} />
                <Text style={textStyles.main}>To-dos: </Text>
            </ScrollView>
            <View style={viewStyles.box}><IconButton type={images.add} /></View>
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