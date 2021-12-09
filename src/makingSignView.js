import React from 'react';
import { StyleSheet,StatusBar,SafeAreaView, Text, View, Keyboard ,Button,BackHandler } from 'react-native';
import { viewStyles, textStyles,  iconStyles } from './styles';
import EventInput from './EventInput';
import { TouchableWithoutFeedback } from 'react-native';
import {Input} from './components/signInput';
import {images} from './images';
// import {IconButton} from './components/IconButton';
import TrafficSign from './components/J_trafficSign';
import J_List from './components/J_List';
import { NavigationContainer } from '@react-navigation/native';
import { IconButton} from 'react-native-paper';
import { goBack } from './J_index';
const makeSign= ({ navigation, route }) => {

 
 
  return (


        <SafeAreaView style={viewStyles.container}>
          <StatusBar barStyle="light-content" style={textStyles.statusBar} />
          <View style={viewStyles.header}>
            <IconButton icon={images.back} onPress={ () => {goBack({navigation});}}/>
          </View>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={viewStyles.content}>

            <Text style={textStyles.title}>Today's Sign</Text>
            <Input />
            <TrafficSign doneListNum={5} totalListNum={115} />
            <View style={viewStyles.test}><J_List /></View>
          </View>
          </TouchableWithoutFeedback>
          
          <View style={viewStyles.footer}>
            <View>
            {/* <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate('showSign')}
    /> */}
              <IconButton icon={images.done} onPress={() => navigation.navigate('showSign') }/>
            </View>
          </View>

        </SafeAreaView>
     

    
  );
}




export default makeSign;

