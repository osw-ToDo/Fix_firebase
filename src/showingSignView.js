import React from 'react';
import { StyleSheet,StatusBar,SafeAreaView, Text, View, Keyboard  } from 'react-native';
import { viewStyles, textStyles,  iconStyles } from './styles';
import EventInput from './EventInput';
import { TouchableWithoutFeedback } from 'react-native';
import {Input,SignText} from './components/signInput';
import {images} from './images';
// import {IconButton} from './components/IconButton';
import TrafficSign from './components/J_trafficSign';
import J_List from './components/J_List';
import { IconButton} from 'react-native-paper';
import { goBack } from './J_index';

const showSign= ({navigation}) => {



  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
   
    <SafeAreaView style={viewStyles.container}>
      <StatusBar barStyle="light-content" style={textStyles.statusBar}/>
      <View style = {viewStyles.header}>
      <IconButton  icon = {images.back} onPress ={() => {goBack({navigation});}}/>  
      </View>
     
      <View style = {viewStyles.content}> 
      
      <Text style={textStyles.title}>Today's Sign</Text>
      <SignText/>

      <TrafficSign doneListNum = {5} totalListNum = {115}/>
     { //<View style={viewStyles.test}><J_List/></View>
     }
      </View>
 
     <View style = {viewStyles.footer}> 
     <View >
       <IconButton  icon = {images.edit}onPress={() => navigation.navigate('makeSign')}/>
     </View> 
     </View> 
      
    </SafeAreaView>
    </TouchableWithoutFeedback>

    
  );
}


export default showSign;

