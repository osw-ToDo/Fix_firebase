
import React from 'react';
import { Pressable, StyleSheet, View, Image} from 'react-native';
import { theme } from "../theme";
import PropTypes from 'prop-types';
import { images } from '../images';

const TrafficSign = ({doneListNum ,totalListNum }) => {

  return (
        <Image source = {PrintTrafficSign(doneListNum,totalListNum)} style = {trafficStyle.icon} />
  );
};

function PrintTrafficSign({doneListNum  ,totalListNum}){
    
   let donePercent = 0
  // donePercent = doneListNum*100/totalListNum 
    console.log('donePercent : %d %d %d',donePercent,doneListNum,totalListNum)
    if (donePercent>=70){
      return  images.greenSign
    } else if (donePercent>=50){
      return images.yellowSign
    } else {
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