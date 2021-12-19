
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


//수정 data -> 다만.. doc.data() 불러오는게 맞는지
// -> Flag : completed 여부 

function Flag() {
const todoRef = DB.collection('Todo');
        
todoRef.get().then((snapshot)=>{
    snapshot.forEach((doc) =>{
     
      var key;
      var value;
      key = doc.id
      value = doc.data();

      //if( 카테고리에는 전부 띄우고 (왜냐면 미완료된일만 표시 때문에 flag=true도 띄움)
      //doc.data().Flag == false){
        todoData[key] =value;
      //}
     });
     settodoData(todoData);
     console.log("TODODATA1" ,todoData);
});

if(length(doc.data())*(0.7) <= length(doc.data().Flag == true)) {
  return 1;
} 
else if ((length(doc.data())*(0.5) <= length(doc.data().Flag == true)) &&
 (length(doc.data())*(0.5) > length(doc.data().Flag == true))) {
  return 2;
}
};

function PrintTrafficSign({setTraffic}){
    
  var donePercent =Flag();
  
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