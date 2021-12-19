
import React, { useEffect } from 'react';
import { StyleSheet, Image} from 'react-native';
import { images } from '../images';
import { DB } from '../utils/firebase';
import { useState } from 'react';

const TrafficSign = ({setTraffic}) => {

  return (
        <Image source = {PrintTrafficSign({setTraffic})} style = {trafficStyle.icon} />
  );
};

function PrintTrafficSign({setTraffic}){
    
  var donePercent = Flag();
  
 // donePercent = doneListNum*100/totalListNum 
   console.log('donePercent : %d ',donePercent);
   if (donePercent>=80){
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

function Flag() {
  const todoRef = DB.collection('Todo');
  var todoData = {}; //초기화
  const [todo_data,settodoData] = useState('');
  var doneNum =0, total =0;

  useEffect(()=>{
    todoRef.get().then((snapshot)=>{
      snapshot.forEach((doc) =>{
       
        var key;
        var value;
        key = doc.id
        value = doc.data();
        const enddate = new Date(doc.data().End.seconds*1000);
        const date = new Date();
         console.log(enddate.toDateString());
        if(enddate.toDateString()==date.toDateString())
        {// &&doc.data().Flag == false
          todoData[key] =value;
          total +=1;
          if(value.Flag==true){
            doneNum+=1;
          }
          console.log("TODOD" ,value);
        }
        //}
       });
       settodoData(todoData);
       console.log("TODODATA1" ,todo_data);
  });

  },[]);

  var donpercent=0;

  if(total!=0)
    donpercent = doneNum/total*100;
  else{
    donpercent=100;
  }
    return donpercent;

  
  //if(length(doc.data())*(0.7) <= length(doc.data().Flag == true)) {
  //   return 1;
  // } 
  // else if ((length(doc.data())*(0.5) <= length(doc.data().Flag == true)) &&
  //  (length(doc.data())*(0.5) > length(doc.data().Flag == true))) {
  //   return 2;
  // }

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


//수정 data -> 다만.. doc.data() 불러오는게 맞는지
// -> Flag : completed 여부 


};

const trafficStyle = StyleSheet.create({
    icon: {
        resizeMode: 'contain', 
        width: 140,
        height: 62,
        marginTop :10,
        
    },
});


export default TrafficSign;