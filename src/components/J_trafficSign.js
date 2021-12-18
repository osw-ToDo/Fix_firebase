
import React from 'react';
import { StyleSheet, Image} from 'react-native';
import { images } from '../images';

const TrafficSign = ({setTraffic}) => {

  return (
        <Image source = {PrintTrafficSign({setTraffic})} style = {trafficStyle.icon} />
  );
};


export const ShowTrafficSign = ({trafficSign}) => {

  let image;

  if (trafficSign==2){
  
     image =  images.greenSign
   } else if (trafficSign==1){
    
    image = images.yellowSign
   } else {
   
    image =  images.redSign
   }

  return (
        <Image source = {image} style = {trafficStyle.icon} />
  );
};



function PrintTrafficSign({setTraffic}){
    

   let donePercent = 0
  // donePercent = doneListNum*100/totalListNum 
    // console.log('donePercent : %d %d %d',donePercent,doneListNum,totalListNum)
    if (donePercent>=70){
     setTraffic("2");
      return  images.greenSign
    } else if (donePercent>=50){
     setTraffic("1");
      return images.yellowSign
    } else {
     setTraffic("0");
      return images.redSign
    }

}

const trafficStyle = StyleSheet.create({
    icon: {
        resizeMode: 'contain', 
        width: 140,
        height: 62,
        marginTop :10,
        
    },
});


export default TrafficSign;