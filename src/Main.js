import React from "react";
import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";
import styled from "styled-components";
import { mainRows } from "../rows";
import Icon from "react-native-vector-icons/Ionicons";
import { IconButton} from 'react-native-paper';
import {images} from './images';
import {IconButton as IconBtn} from './components/IconButton';

export default function Main({ navigation }) {
  return (
    <View>
      

      <HeaderTitleView>
        <HeaderTitleTxt>TODAY's LIST</HeaderTitleTxt>
        <HeaderImg style={{ marign: 100 }} source={require("../assets/images/mainSetting.png")} />
      </HeaderTitleView>
      <BodyView>
        <BodySignDateImg source={require("../assets/images/mainSign.png")} />
        <BodyMenuView>
          {/* <BodyMMenuImg source={require("../assets/images/Mbutton.png")} /> 
          <BodyWMenuImg source={require("../assets/images/Wbutton.png")} /> 
          <BodyCMenuImg source={require("../assets/images/Cbutton.png")} />  */}

          <TouchableOpacity style = {BodyMenuImg1.shadow} onPress={() => navigation.navigate('montly') }>
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
      <BodyTxtView>
        {mainRows.map((row, idx) => {
          return (
            <View style={{ flex: 1 }} key={idx}>
              <View style={{ padding: 15, borderBottomWidth: 1, borderColor: "black", flexDirection: "row" }}>
                <View style={{ marginRight: 10 }}>
                  <Icon name="square-outline" size={30} color="gray" />
                </View>
                <View>
                  <Text>{row.mainRows[0].title}</Text>
                  <Text>{row.mainRows[0].date}</Text>
                </View>
              </View>
              <View style={{ padding: 15, borderBottomWidth: 1, borderColor: "black", flexDirection: "row" }}>
                <View style={{ marginRight: 10 }}>
                  <Icon name="square-outline" size={30} color="gray" />
                </View>
                <View>
                  <Text>{row.mainRows[1].title}</Text>
                  <Text>{row.mainRows[1].date}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </BodyTxtView>
      <FooterView>
        {/* <FooterButtonImg source={require("../assets/images/mainButton.png")} /> */}
       <TouchableOpacity style = {FooterButtonImg1.icon}  onPress={() => navigation.navigate('showSign') }>
          <Image style = {FooterButtonImg1.icon} source={require("../assets/images/mainButton.png")}/>
        </TouchableOpacity>
        {/* <FooterPlusImg source={require("../assets/images/mainPlus.png")} /> */}

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

const BodySignDateImg = styled(Image)`
  width: 150px;
  height: 150px;
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
    marginLeft:39,
    width: 80,
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
