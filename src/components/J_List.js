import React, {Component,useState,useEffect} from 'react';
import {Image,FlatList,View,Text,TouchableOpacity, CheckBox, StyleSheet } from 'react-native';
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

{/*class checkbox extends Component {

    render() {
        const [isSelected, setSelection] = useState(false);
        return (
            <View style={styles.container}>
                <View style={styles.checkboxContainer}>
                    <Checkbox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox}/>
                    <Text style={styles.label}>todo</Text>
                </View>
            </View>
            );
        
    }
}
*/}

onCheck = {items, i}
    let item = this.state.listArray
    item[i].checked = item[i].checked ? ! item[i].checked : true
    this.setState({listArray:item})
}

export function Todo_List({navigation,data}){
    var ListData = data;
    const listArray = Object.values(ListData);

    const [ toggleCheckBox, setToggleCheckBox ] = useState(false)
    
    //const [listArray,setList] = useState('');
   // console.log("list : ",Object.values(ListData));

    // useEffect(()=>{
    //     setList(Object.values(ListData));
    
    
    // });
    return (
       <View style={{flex: 1,  marginTop: 0, justifyContent: 'center'}}>
           <FlatList
                data ={listArray}
                horizontal = {false}
                renderItem = {({item,index})=>{
                    const Day = new Date(item.End.seconds*1000);
                    
                    console.log(`Item=${JSON.stringify(item)}, index= ${index}`,Day.getDate())
                    return(
                        //<Text >{item.ToDo}</Text> 
                      // <Text>{item}a</Text>   
                      <TouchableOpacity onPress={() => navigation.navigate('toDo',{item})}> 
                      <View style={{ padding:20, borderBottomWidth: 1, borderColor: "black", flexDirection: "row" }}>
                          <CheckBox 
                          checked={item.checked}
                          onPress={()=>this.onCheck(item,index)} />
                          <Text styles={styles.todo}>{item.ToDo} </Text>
                          <Text styles={styles.duedate}> Due Date {Day.getMonth()+1}.{Day.getDate()}</Text>
                      </View>
                      </TouchableOpacity>
                    );
                }}
           />
       </View>
    );



            }

            const styles = StyleSheet.create({
                container: {
                    flex:1,
                    alignItems: "center",
                    justifyContent: "center",
                },
                checkboxContainer: {
                    flexDirection: "row",
                    marginBottom: 20,
                },
                checkbox: {
                    alignSelf: "center",
                },
                //화면에 리스트 뜨면 다시 style 설정! 
                todo: {
                    fontSize: 10,
                },
                duedate: {
                    fontSize: 10,
                },
            })
                
export default J_List;