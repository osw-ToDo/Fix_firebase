import React, {Component,TouchableOpacity} from 'react';
import {Image,FlatList,View,Text} from 'react-native';
import { List } from 'react-native-paper';
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

export class Todo_List extends Component {

    
    render() {
        var ListData = this.props.data;
        const listArray = Object.values(ListData);
        console.log("list : ",Object.values(ListData));
        return (
           <View style={{flex: 1,  marginTop: 22 , justifyContent: 'center'}}>
               <FlatList
                    data ={listArray}
                    horizontal = {false}
                    renderItem = {({item,index})=>{
                        
                        console.log(`Item=${JSON.stringify(item)}, index= ${index}`)
                        return(
                            //<Text >{item.ToDo}</Text> 
                          // <Text>{item}a</Text>   

                          //<TouchableOpacity   onPress={() => navigation.navigate('toDo') }> 
                          <View style={{ padding:15, borderBottomWidth: 1, borderColor: "black", flexDirection: "row" }}>
                          
                           
                              <Text>{item.ToDo}</Text>
                          
                            
                          </View>
                       // </TouchableOpacity>

                        );
                    }}
               />
           </View>
        );
    }
}

export default J_List;