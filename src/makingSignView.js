
import React ,{useRef,useContext,useState}from 'react';
import { ProgressContext } from './contexts';
import { Alert } from 'react-native';
import { createTodaySignText } from './utils/firebase';
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
import RadioButton from './components/J_radioButton';

const PROP = [
	{
		key: '1',
		text: 'pic1',
    image: images.pic1,
    selimage: images.sPic1
	},
  {
		key: '2',
		text: 'pic2',
    image: images.pic2,
    selimage: images.sPic2
	},
  {
		key: '3',
		text: 'pic3',
    image: images.pic3,
    selimage: images.sPic3
	},
  {
		key: '4',
		text: 'pic4',
    image: images.pic4,
    selimage: images.sPic4
	},
  {
		key: '5',
		text: 'pic5',
    image: images.pic5,
    selimage: images.sPic5
	},
];



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const makeSign= ({ navigation, route }) => {

  // const [TodaySignText, setTodaySignText] = useState('');
  // const descriptionRef = useRef();

  // const { spinner } = useContext(ProgressContext);

  // const _handleCreateButtonPress = async () => {
  //   try {
  //     const id = await createTodaySignText({TodaySignText})
  //     navigation.replace('makeSign', { id, TodaySignText });
  //      Alert.alert('sign success',e.message);
  //   } catch (e) {
  //     Alert.alert('Creation Error', e.message);
  //   }
  // };
 

  return (


        <SafeAreaView style={viewStyles.container}>
          <StatusBar barStyle="light-content" style={textStyles.statusBar} />
          <View style={viewStyles.header}>
            <IconButton icon={images.back} onPress={ () => {goBack({navigation});}}/>
          </View>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={viewStyles.content}>

            <Text style={textStyles.title}>Today's Sign</Text>
            <Input navigation={navigation}/>
            
            {/* value = {TodaySignText} set ={setTodaySignText} */}
            <TrafficSign doneListNum={5} totalListNum={115} />
            <View style={styles.container}>

            <RadioButton PROP={PROP} />

            </View>
            {/* <View style={viewStyles.test}><J_List /></View> */}
          </View>
          </TouchableWithoutFeedback>
          
          <View style={viewStyles.footer}>
            
              <IconButton icon={images.done} onPress={() =>{ 
              navigation.navigate('showSign');}
             }/>
            
          </View>

        </SafeAreaView>
     

    
  );
}




export default makeSign;

