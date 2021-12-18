import React, {Component,useState,useEffect} from 'react';
import {Image,FlatList,View} from 'react-native';
import picListData from '../J_picListData';
import { PicButton } from './IconButton';

class FlatListItem extends Component{
    render() {
        return(
          <View style ={{flex:1,marginRight: 30,justifyContent: 'center', alignItems: 'center'}}>
              <Image source={{uri:this.props.item.imageUrl ,width : 30 , height: 30}}></Image>
              {//</View>Text>{this.props.item.key}</Text>}
             }
          </View>

        );
    }
}
class J_List extends Component {
    render() {
        return (
           <View style={{flex: 1,  marginTop: 22 , justifyContent: 'center'}}>
               <FlatList
                    data ={picListData}
                    horizontal = {true}
                    renderItem = {({item,index})=>{
                        //console.log(`Item=${JSON.stringify(item)}, index= ${index}`)
                        return(
                            <PicButton type = {item.img}/>                            
                        );
                    }}
               />
           </View>
        );
    }
}


export function Todo_List({navigation,data}){
    var ListData = data;
    const listArray = Object.values(ListData);
    //const [listArray,setList] = useState('');
    console.log("list : ",Object.values(ListData));

    // useEffect(()=>{
    //     setList(Object.values(ListData));

    // });
    return (
       <View style={{flex: 1,  marginTop: 22 , justifyContent: 'center'}}>
           <FlatList
                data ={Object.values(ListData)}
                horizontal = {false}
                renderItem = {({item,index})=>{
                    const Day = new Date(item.End.seconds*1000);

                    console.log(`Item=${JSON.stringify(item)}, index= ${index}`,Day.getDate())
                    return(
                        //<Text >{item.ToDo}</Text> 
                      // <Text>{item}a</Text>   
                      //<TouchableOpacity onPress={() => console.log(`Item=${JSON.stringify(item)}, index= ${index}`)}> 
                      <View style={{ padding:20, borderBottomWidth: 1, borderColor: "black", flexDirection: "row" }}>
                          <Text>{item.ToDo} </Text>
                          <Text>Due Date {Day.getMonth()+1}.{Day.getDate()}</Text>
                      </View>
                      //</TouchableOpacity>
                    );
                }}
           />
       </View>
    );

            }
export default J_List;