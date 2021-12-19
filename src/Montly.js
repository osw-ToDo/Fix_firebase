import React, { Component} from 'react'
import {StatusBar, View, ToastAndroid} from 'react-native';
import{Montlystyles,viewStyles,textStyles} from './styles';
import {Calendar,LocaleConfig} from 'react-native-calendars';
import { theme } from './theme';

import {images} from './images';
import { IconButton} from 'react-native-paper';
import { goBack } from './J_index';

LocaleConfig.locales['ko'] = {
  monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
  monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
  dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
  dayNamesShort: ['일', '월','화','수','목','금','토'],
  today: '오늘'
};
LocaleConfig.defaultLocale = 'ko';

 //var markedData = {};

class Montly extends Component {


  render() {
    const navigation = this.props.navigation 
    const markedData = this.props.route.params.marked_data;
    //const markedData = this.props.markedData
    // const signRef = DB.collection('TodaySign');

    // signRef.get().then((snapshot)=>{
    //    snapshot.forEach((doc) =>{
         
    //      console.log(doc.id, '=>', doc.data().TrafficSignData);
      
    //     this.key = doc.id
    //     this.value = doc.data().TrafficSignData;
    //     switch(this.value){
    //       case "0" : 
    //        this.value = { marked: true, dotColor: 'red'};
    //        break;
    //        case "1" : 
    //        this.value = { marked: true, dotColor: 'orange'};
    //        break;
    //        case "2" : 
    //        this.value = { marked: true, dotColor: 'green'};
    //        break;
    //     }
    //     markedData[this.key]  =  this.value;
    //     });
      
    // });
   

   
     //console.log(JSON.stringify(markedData));

    

    console.log("render",markedData);
   
     return (
     <><View style={viewStyles.header}>
       <IconButton icon={images.back} onPress={() => { goBack({ navigation }); } } />
     </View>
     <View style={Montlystyles.container}>

         <StatusBar barStyle="light-content" style={textStyles.statusBar} />


         <View style={Montlystyles.wrapper}>
           <Calendar style={{ height: 500, width: 400 }}
             onDayPress={(day) => {
               console.log('selected day', day);
               ToastAndroid.showWithGravity(
                 day.dateString,
                 ToastAndroid.SHORT,
                 ToastAndroid.CENTER
               );
            
             const dayObj = day
             //  const date =day.year+'-'+day.month+'-'+dayObj.day;
             const date = day.dateString;
             
                navigation.navigate('showSign',{date:date});
              
             } }
             monthFormat={'yyyy, MM월'}
             onMonthChange={(month) => { console.log('month changed', month); } }
             // Hide month navigation arrows. Default = false
             hideExtraDays={false}
             // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
             disableMonthChange={true}
             // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
             firstDay={7}
             hideDayNames={false}
             onPressArrowLeft={substractMonth => substractMonth()}
             onPressArrowRight={addMonth => addMonth()}
             disableAllTouchEventsForDisabledDays={true}
             enableSwipeMonths={true}
             markingType={'custom'}
             markedDates={markedData}
             theme={{
               arrowColor: 'black',
               todayTextColor: 'red',
               monthTextColor: 'black',
               calendarBackground: theme.background,
               'stylesheet.calendar.header': {
                 monthText: {
                   fontSize: 20,
                 },
                 week: {
                   marginTop: 20,
                   marginHorizontal: 12,
                   flexDirection: 'row',
                   justifyContent: 'space-between'
                 },
                 dayHeader: {
                   color: 'black',
                   marginBottom: 7,
                   textAlign: 'center',
                   width: 32
                 },
               },
               'stylesheet.dot': {
                 dot: {
                   marginTop: 10,
                   width: 20,
                   height: 20,
                   borderRadius: 9
                 },
               },
               'stylesheet.day.basic': {
                 base: {
                   height: 70,
                   alignItems: 'center'
                 }
               }
             }} />
         </View>
       </View></>
     );
   };
 }

export default Montly;