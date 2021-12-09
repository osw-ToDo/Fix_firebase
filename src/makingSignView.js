import React,{useContext, useState, useRef} from 'react';
import { StatusBar,SafeAreaView, Text, View, Keyboard ,Alert } from 'react-native';
import { viewStyles, textStyles } from './styles';
import { ProgressContext } from './contexts';
import { TouchableWithoutFeedback } from 'react-native';
import {Input} from './components/signInput';
import {images} from './images';
// import {IconButton} from './components/IconButton';
import TrafficSign from './components/J_trafficSign';
import J_List from './components/J_List';
import { IconButton} from 'react-native-paper';
import { goBack } from './J_index';
import { createTodaySignText } from './utils/firebase';

const makeSign= ({ navigation }) => {
  const { spinner } = useContext(ProgressContext);

  const [TodaySignText, setTodaySignText] = useState('');
  const descriptionRef = useRef();


  const _handleCreateButtonPress = async () => {
    try {
      const id = await createTodaySignText({TodaySignText})
      navigation.replace('TodaySign', { id, TodaySignText });
      Alert.alert('sign success',e.message);
    } catch (e) {
      Alert.alert('Creation Error', e.message);
    }
  };
 
  return (


        <SafeAreaView style={viewStyles.container}>
          <StatusBar barStyle="light-content" style={textStyles.statusBar} />
          <View style={viewStyles.header}>
            <IconButton icon={images.back} onPress={ () => {goBack({navigation});}}/>
          </View>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={viewStyles.content}>

            <Text style={textStyles.title}>Today's Sign</Text>
            <Input 
              value={TodaySignText}
              onSubmitEditing={()=>{
                setTodaySignText(TodaySignText.trim());
                descriptionRef.current.focus();
                _handleCreateButtonPress();
              }}
              
            />
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
              <IconButton icon={images.done} onPress={_handleCreateButtonPress }/>
            </View>
          </View>

        </SafeAreaView>
     

    
  );
}




export default makeSign;

