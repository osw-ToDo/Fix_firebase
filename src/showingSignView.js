import React from 'react';
import { StyleSheet,StatusBar,SafeAreaView, Text, View, Keyboard ,Image } from 'react-native';
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

picImages = [images.sPic1,images.sPic2,images.sPic3,images.sPic4,images.sPic5]

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
      <View style = {styles.trafficSignShow}>
        <TrafficSign doneListNum = {5} totalListNum = {115}/>
        <Image source={picImages[4]} style={styles.picRed}/>
      </View>
     
      </View>
 
     <View style = {viewStyles.footer}> 
     <View >
       <IconButton  icon = {images.edit} onPress={() => navigation.navigate('makeSign')}/>
     </View> 
     </View> 
      
    </SafeAreaView>
    </TouchableWithoutFeedback>

    
  );
}

const styles = StyleSheet.create({
  trafficSignShow: {
    position: 'relative',
   
  },
 
  picRed: {
    position: 'absolute',
    padding:10,
    marginLeft:16,
    marginTop:26,
    tintColor: 'black',
    width: 30,
    height: 30,
  
    resizeMode: 'contain', 
  },
  picYellow: {
    position: 'absolute',
    padding:10,
    marginLeft:56,
    marginTop:26,
    tintColor: 'black',
    width: 30,
    height: 30,
  
    resizeMode: 'contain', 
  },
  picGreen: {
    position: 'absolute',
    padding:10,
    marginLeft:96,
    marginTop:26,
    tintColor: 'black',
    width: 30,
    height: 30,
  
    resizeMode: 'contain', 
  },
  
  
});

export default showSign;

