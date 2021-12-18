import React from "react";
import { StyleSheet, Text, View, Image,TouchableOpacity, FlatList } from "react-native";
import moment from "moment";
import styled from "styled-components";
import { mainRows } from "../rows";
import Icon from "react-native-vector-icons/Ionicons";
import { DB } from "./utils/firebase";
import { useEffect } from "react";
import { useState } from "react";

export default function Main({ navigation }) {
  const monthDate = moment().format("MM");
  const date = new Date();
  const day = moment(date).add("0", "d").format("DD");
  const doDate =(date.getFullYear()).toString()+'-'+monthDate+'-'+(date.getDate()).toString();
  //가져오기만 하기 
  var markedData = {};
  var todoData = {}; //초기화 -> 얘가 const여야 하나..? 
  useEffect(()=>{
    
    const signRef = DB.collection('TodaySign');
   
    signRef.get().then((snapshot)=>{
       snapshot.forEach((doc) =>{
         
        // console.log(doc.id, '=>', doc.data().TrafficSignData);
        
         var key;
         var value;
        key = doc.id
        value = doc.data().TrafficSignData;
        switch(value){
          case "0" : 
           value = { marked: true, dotColor: 'red'};
           break;
           case "1" : 
           value = { marked: true, dotColor: 'orange'};
           break;
           case "2" : 
          value = { marked: true, dotColor: 'green'};
           break;
        }
        markedData[key]  =  value;
    });});
    const todoRef = DB.collection('Todo');

    todoRef.get().then((snapshot)=>{
      snapshot.forEach((doc) =>{
       
        var key;
        var value;
        key = doc.id
        value = doc.data();

        if(doc.data().Start.seconds<=date.getTime()&&
        doc.data().End.seconds*1000>date.getTime()&&
        doc.data().Flag == false){
          todoData[key] =value;
        }
       });
       console.log("TODODATA" ,todoData);
});

console.log("today", date.getTime());
});
  
  return (
    <View>
      <HeaderTitleView>
        <HeaderTitleTxt>TODAY's LIST</HeaderTitleTxt>
        <TouchableOpacity onPress={() => navigation.navigate('Profile') }>

        <HeaderImg style={{ marign: 100 }} source={require("../assets/images/mainSetting.png")} />
        </TouchableOpacity>
      </HeaderTitleView>
      <BodyView>
        <BodySignDateImg source={require("../assets/images/mainSign1.png")} />
        <BodySignMonth>{monthDate}</BodySignMonth>
        <BodySignDate>{day}</BodySignDate>
        <BodyMenuView>
          <TouchableOpacity style = {BodyMenuImg1.shadow} onPress={() => navigation.navigate('montly',{markedData}) }>
          <Image style = {BodyMenuImg1.M}  source={require("../assets/images/Mbutton.png")}/>
          </TouchableOpacity>
          <TouchableOpacity style = {BodyMenuImg1.shadow} onPress={() => navigation.navigate('weekly') }>
          <Image style = {BodyMenuImg1.W} source={require("../assets/images/Wbutton.png")}/>
          </TouchableOpacity>
          <TouchableOpacity style = {BodyMenuImg1.shadow} onPress={() => navigation.navigate('category') }>
          <Image style = {BodyMenuImg1.C} source={require("../assets/images/Cbutton.png")}/>
          </TouchableOpacity>
        </BodyMenuView>
      </BodyView>
    
             
            <View style={{flex: 1,  marginTop: 22 , justifyContent: 'center'}}>
            <FlatList
                    data ={todoData}
                    horizontal = {false}
                    renderItem = {({item,index})=>{
                      console.log({item});
                        //console.log(`Item=${JSON.stringify(item)}, index= ${index}`)
                        return(
                          <TouchableOpacity   onPress={() => navigation.navigate('toDo') }>
                          <View style={{ padding: 15, borderBottomWidth: 1, borderColor: "black", flexDirection: "row" }}>
                          <View style={{ marginRight: 10 }}>
                            <Icon name="square-outline" size={30} color="gray" />
                          </View>
                          <View>
                           <Text>{item.ToDo}</Text>
                           
                          </View>
                          
                        </View>       
                        </TouchableOpacity>                  
                        );
                    }}
                  /> 
            </View>


      <FooterView>
        
       <TouchableOpacity style = {FooterButtonImg1.icon}  onPress={() => navigation.navigate('makeSign',{date: doDate}) }>
          <Image style = {FooterButtonImg1.icon} source={require("../assets/images/mainButton.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {FooterButtonImg1.icon}  onPress={() => navigation.navigate('creatToDo') }>
          <Image style = {FooterButtonImg1.icon} source={require("../assets/images/mainPlus.png")}/>
        </TouchableOpacity>
       
      </FooterView>
    </View>
  );
}

const HeaderTitleView = styled(View)`
  flex:1
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  width: 320px;
`;

const HeaderTitleTxt = styled(Text)`
  font-size: 24px;
  padding-top: 40px;
`;

const HeaderImg = styled(Image)`
  width: 37px;
  height: 35px;
  margin-left: 60px;
  margin-top: 20px;
`;

const BodyView = styled(View)`
  flex: 2;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top-width: 1px;
  border-bottom-width: 1px;
`;

const BodyTxtView = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
`;

const BodySign = styled(View)`
  position: relative,
  flex: 1,
`;

const BodySign1 = StyleSheet.create({
  main : 
  {position: 'relative',
  flex: 1,
  },
  date: 
  {position: 'absolute',
  top:40,
  bottom:0,
  left:12,
  right:0,
  fontSize: 50,
  paddingLeft:10,
 
  },
  day: 
  {position: 'absolute',
  top:40,
  bottom:0,
  left:45,
  right:0,
  fontSize: 50,
  paddingLeft:30
  }

})

const BodySignDateImg = styled(Image)`
  width: 150px;
  height: 150px;
`;

const BodySignMonth = styled(Text)`
  position: absolute
  top:85
  bottom:0
  left:30
  right:0
  font-size: 50px;
  justify-content: center;
`;

const BodySignDate = styled(Text)`
 position: absolute
  top:100
  bottom:0
  left:85
  right:0
  font-size: 50px;
  justify-content: center;
`;

const BodyMenuImg = styled(Image)`
  width: 150px;
  height: 200px;
`;

const FooterView = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const FooterPlusImg = styled(Image)`
  width: 35px;
  height: 35px;
  margin: 7px;
`;

const FooterButtonImg = styled(Image)`
  width: 35px;
  height: 35px;
  margin: 7px;
 
`;

const FooterButtonImg1 = StyleSheet.create({
  icon: {
    margin:7,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
    resizeMode : 'contain',
   
    width: 35,
    height: 35,

  },
});


const BodyMenuImg1 = StyleSheet.create({
  shadow:
  {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,

  },
  M: {
  
    
    resizeMode : 'contain',
   
    marginLeft:40,
    width: 80,
    height: 73,

    //backgroundColor : 'black'

  },
  W: {
  
 
    
    resizeMode : 'contain',
    marginLeft:40,
    width: 79,
    height: 57, 

    //backgroundColor : 'black'

  },
  C: {
  
    resizeMode : 'contain',
    marginLeft:33,
    width: 93,
    height: 59,

    //backgroundColor : 'black'

  },
});


const BodyMenuView = styled(View)`
  width: 150px;
  height: 200px;
`;

const BodyMMenuImg = styled(View)`
  position: absolute;
  top: 195px;
  right: 78px;
  z-index: 1;
  font-weight: 700;
  object-fit: cover;
`;

const BodyWMenuImg = styled(View)`
  position: absolute;
  top: 255px;
  right: 78px;
  z-index: 1;
  font-weight: 700;
`;

const BodyCMenuImg = styled(View)`
  position: absolute;
  top: 315px;
  right: 78px;
  z-index: 1;
  font-weight: 700;
`;

const styles = StyleSheet.create({});
