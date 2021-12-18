
import React ,{useRef,useContext,useState}from 'react';
import { ProgressContext } from './contexts';
import { Alert } from 'react-native';
import { createTodaySignText } from './utils/firebase';
import { StyleSheet,StatusBar,SafeAreaView, Text, View, Keyboard ,Button,BackHandler ,ScrollView} from 'react-native';
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
import { DB,getTodaySignRef } from './utils/firebase';

const PROP = [
	{
		key: '0',
		text: 'pic1',
    image: images.pic1,
    selimage: images.sPic1
	},
  {
		key: '1',
		text: 'pic2',
    image: images.pic2,
    selimage: images.sPic2
	},
  {
		key: '2',
		text: 'pic3',
    image: images.pic3,
    selimage: images.sPic3
	},
  {
		key: '3',
		text: 'pic4',
    image: images.pic4,
    selimage: images.sPic4
	},
  {
		key: '4',
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

   const [TodaySignText, setTodaySignText] = useState('');
   const [TrafficSignData, setTrafficSign] = useState('');
   const [PicSign, setPicSign] = useState('');
   const [data,setData] = useState('');
   const date = route.params;

  //  useEffect(()=>{
   
  //   console.log('showSign param |',date);
   
  //   getTodaySignRef(date).then(function(doc){
  //     if(!doc.exists){
  //       console.log('No such document!');
  //       //if(route !='montly')
  //      // navigation.replace('makeSign',{date:date});
  //     } else {
  //       console.log('Document data:', doc.data() );
  //       setData(doc.data());
  //     }
  //   });
  // },[])

  // const { text, tSign , pSign } = {text:data.TodaySignText,tSign:data.TrafficSignData,pSign:data.PicSign};
   //const doDate =(date.getFullYear()).toString()+'_'+(date.getMonth()).toString()+'_'+(date.getDate()).toString();

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
  // useEffect(() => {
  //   DB.collection('TodaySign').doc(id).
  //   setTodaySignText('a');

  // },[]);



  const SetText = (text) => {
    console.log(text);
   
    setTodaySignText(text);
  }
  const SetPic = (picNum) => {
    console.log(picNum);
   
    setPicSign(picNum);
  }
  const SetTraffic = (trafficNum) => {
    console.log(trafficNum);
   
    setTrafficSign(trafficNum);
  }
  return (


        <SafeAreaView style={viewStyles.container}>
          <StatusBar barStyle="light-content" style={textStyles.statusBar} />
          <View style={viewStyles.header}>
            <IconButton icon={images.back} onPress={ () => {goBack({navigation});}}/>
          </View>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
          <View style={viewStyles.content}>

            <Text style={textStyles.title}>Today's Sign</Text>
            <Input navigation={navigation} setText = {SetText}  Day = {date}/>
            {/* value = {TodaySignText} set ={setTodaySignText} */}
            <TrafficSign setTraffic={SetTraffic} />
            <View style={styles.container}>

            <RadioButton PROP={PROP} setPic ={SetPic} />

            </View>
            {/* <View style={viewStyles.test}><J_List /></View> */}
          </View>
          </ScrollView>
          </TouchableWithoutFeedback>
          
          <View style={viewStyles.footer}>
            
              <IconButton icon={images.done} onPress={() =>{ 
              _handleCreateButtonPress({navigation , dateObj:date,TodaySignText,TrafficSignData,PicSign});
            }
             }/>
 
          </View>
          

        </SafeAreaView>
     

    
  );
}


const _handleCreateButtonPress = async ({navigation ,dateObj,TodaySignText,TrafficSignData,PicSign}) => {

  console.log(TrafficSignData+ "|"+PicSign);
  try {
    // const dateName = Date.prototype.getDate().toString();
     console.log('pic : %d %s ',PicSign,TrafficSignData)
     console.log("make Sign DATE", dateObj,"")
     const id = await createTodaySignText({date :dateObj.date,TodaySignText,TrafficSignData,PicSign})//name:dateName,
    navigation.replace('showSign', dateObj);
    // navigation.replace('makeSign', { id, TodaySignText });
    // Alert.alert('sign success',e.message);
  } catch (e) {
    Alert.alert('Creation Error', e.message);
  }
};




export default makeSign;

