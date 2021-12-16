import React from "react";
import { StyleSheet, Text, View, Image,SafeAreaView, TouchableOpacity } from "react-native";
import moment from "moment";
import styled from "styled-components";
import { viewStyles } from './styles';
import Icon from "react-native-vector-icons/Ionicons";
import { goBack } from './J_index';
import { IconButton as IconBtn} from 'react-native-paper';
import { IconButton } from "./components/IconButton";
import { images } from "./images";

export default function Weekly({ navigation, route }) {
  const monthDate = moment().format("MM");
  const week = new Array(
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT",
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT"
  );

  const date = new Date();
  const day = moment(date).add("0", "d").format("DD");
  const day2 = moment(date).add("1", "d").format("DD");
  const day3 = moment(date).add("2", "d").format("DD");
  const day4 = moment(date).add("3", "d").format("DD");
  const day5 = moment(date).add("4", "d").format("DD");
  const day6 = moment(date).add("5", "d").format("DD");
  const day7 = moment(date).add("6", "d").format("DD");
  const day8 = moment(date).add("7", "d").format("DD");
  const dayOfWeek = week[moment().day()];
  const dayOfWeek2 = week[moment().day() + 1];
  const dayOfWeek3 = week[moment().day() + 2];
  const dayOfWeek4 = week[moment().day() + 3];
  const dayOfWeek5 = week[moment().day() + 4];
  const dayOfWeek6 = week[moment().day() + 5];
  const dayOfWeek7 = week[moment().day() + 6];
  const dayOfWeek8 = week[moment().day() + 7];
  
  return (

    <>

    <View>
        <NavigationView>
          <IconBtn icon={images.back} onPress={() => { goBack({ navigation }); } } />
        </NavigationView>

        <MainHeaderView>
          <MainTitleTxt>{monthDate}</MainTitleTxt>
        </MainHeaderView>
        <BodyView>
          <BodyMonthGroupView>
            <MonthNum>{day}</MonthNum>
            <MonthTxt>{dayOfWeek}</MonthTxt>
          </BodyMonthGroupView>
          <BodyMonthGroupView>
            <MonthNum>{day2}</MonthNum>
            <MonthTxt>{dayOfWeek2}</MonthTxt>
          </BodyMonthGroupView>
          <BodyMonthGroupView>
            <MonthNum>{day3}</MonthNum>
            <MonthTxt>{dayOfWeek3}</MonthTxt>
            <StyledtrafficSing1Img source={require("../assets/images/trafficSign_1.png")} />
          </BodyMonthGroupView>
          <BodyMonthGroupView>
            <MonthNum>{day4}</MonthNum>
            <MonthTxt>{dayOfWeek4}</MonthTxt>
            <StyledtrafficSing3Img source={require("../assets/images/trafficSign_3.png")} />
            <StyledtrafficSing3_2Img source={require("../assets/images/trafficSign_3(2).png")} />
          </BodyMonthGroupView>
          <BodyMonthGroupView>
            <MonthNum>{day5}</MonthNum>
            <MonthTxt>{dayOfWeek5}</MonthTxt>
            <StyledtrafficSing1_2Img source={require("../assets/images/trafficSign_1(2).png")} />
          </BodyMonthGroupView>
          <BodyMonthGroupView>
            <MonthNum>{day6}</MonthNum>
            <MonthTxt>{dayOfWeek6}</MonthTxt>
          </BodyMonthGroupView>
          <BodyMonthGroupView>
            <MonthNum>{day7}</MonthNum>
            <MonthTxt>{dayOfWeek7}</MonthTxt>
          </BodyMonthGroupView>
          <BodyMonthGroupView>
            <MonthNum>{day8}</MonthNum>
            <MonthTxt>{dayOfWeek8}</MonthTxt>
          </BodyMonthGroupView>
        </BodyView>
        
        <FooterView>
          <TouchableOpacity style={FooterButtonImg1.icon} onPress={() => navigation.navigate('creatToDo')}>
            <Image style={FooterButtonImg1.icon} source={require("../assets/images/mainPlus.png")} />
          </TouchableOpacity>
        </FooterView>
      </View></>
  );
}

const styles = StyleSheet.create({});

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


const NavigationView = styled(View)`
  font-size: 24px;
  width: 100%;
  position: absolute;
  margin-top: 0px;

`;

const MainHeaderView = styled(View)`
  flex: 1;
  font-size: 24px;
  justify-content: flex-end;
  align-items: center;
  border-bottom-width: 1px;
  width: 320px;
  padding: 5px;
  margin-top: 40px;

`;

const MainTitleTxt = styled(Text)`
  font-weight: 700;
  font-size: 24px;
`;

const BodyView = styled(View)`
  flex: 7;
  justify-content: center;
  margin-top: 30px;
`;

const BodyMonthGroupView = styled(View)`
  flex-direction: row;
  border-bottom-width: 1px;
  padding: 0px;
`;

const MonthNum = styled(Text)`
  font-size: 40px;
`;

const MonthTxt = styled(Text)`
  font-size: 10px;
  padding-top: 28px;
`;

const FooterView = styled(View)`
  flex: 2;
  justify-content: center;
  align-items: flex-end;
`;

const FooterPlusImg = styled(Image)`
  width: 35px;
  height: 35px;
  margin: 7px;
`;

const StyledtrafficSing1Img = styled(Image)`
  width: 45px;
  height: 35px;
  margin: 10px 7px 7px 39px;
`;

const StyledtrafficSing1_2Img = styled(Image)`
  width: 45px;
  height: 35px;
  margin: 10px 7px 7px 44px;
`;

const StyledtrafficSing3Img = styled(Image)`
  width: 45px;
  height: 35px;
  margin: 10px 7px 7px 40px;
`;

const StyledtrafficSing3_2Img = styled(Image)`
  width: 45px;
  height: 35px;
  margin: 10px 7px 7px 0px;
`;

