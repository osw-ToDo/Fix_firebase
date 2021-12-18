import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Button } from "react-native";
import moment from "moment";
import styled from "styled-components";
import firebase from 'firebase';
import firebase from '@react-native-firebase/firestore'; //문제 
import { TextInput, Button } from 'react-native-paper';
import Todo from '..Todo/'; 

{/*import { initializeApp } from 'firebase/app';
import {getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//목록에서 검색
async function getTasks(db) {
  const tasksCol = collection(db, 'tasks');
  const taskSnapshot = await getDocs(tasksCol);
  const taskList = taskSnapshot.docs.map(doc => doc.data());
  return taskList;
} */}

//2

export default function Main({ navigation }) {
  const monthDate = moment().format("MM");
  const date = new Date();
  const day = moment(date).add("0", "d").format("DD");

  const [ todo, setTodo ] = useState('');
  const [ loading, setLoading ] = useState(true);
  const [ todos, setTodos ] = useState([]);

  const ref = firestore().collection('todos');

  //새로운 todo를 firebase db 항목 추가
    async function addTodo(){
        await ref.add({
            title: todo,
            duedate: 2021-12-20,
            complete: false,
        });
        setTodos('');

    }
    //실시간 수정 
    useEffect(()=> {
        return ref.onSnapshot((querySnapshot) => {
            const list = [];
            querySnapshot.forEach(doc => {
                const { title, duedate, complete } = doc.data();
                list.push({
                    id: doc.id,
                    title,
                    duedate,
                    complete,
                });
            });

            setTodos(list);

            if (loading){
                setLoading(false);
            }
        });
    }, []);

    if(loading) {
        return null;
    }

    //UI

  return (
    <View>
      <HeaderTitleView>
        <HeaderTitleTxt>TODAY's LIST</HeaderTitleTxt>
        <TouchableOpacity onPress={() => navigation.navigate('Profile') }>
        <HeaderImg style={{ marign: 100 }} source={require("../assets/images/mainSetting.png")} />
        </TouchableOpacity>
      </HeaderTitleView>
      <BodyView>
        <BodySignView>
        <BodySignDateImg source={require("../assets/images/mainSign1.png")} />
        <BodySignMonth>{monthDate}</BodySignMonth>
        <BodySignDate>{day}</BodySignDate>
        </BodySignView>
        <BodyMenuView>
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

      {/*수정*/}

      <BodyTxtView>
    
            <TouchableOpacity   onPress={() => navigation.navigate('toDo') }> 
            <FlatList
              style={{flex: 1}}
              data={todos}
              keyExtractor={(item)=> item.id}
              renderItem={({ item })=> <Todo {...item} />}
            />

            <TextInput label={'New Todo'} value={todo} onChangeText={setTodo} />
            {/*addTodo 생성 버튼*/}
            <Button onPress={() => addTodo()}>Add TODO</Button> 
            </TouchableOpacity>
          
      </BodyTxtView>

      <FooterView>
       <TouchableOpacity style = {FooterButtonImg1.icon}  onPress={() => navigation.navigate('showSign') }>
          <Image style = {FooterButtonImg1.icon} source={require("../assets/images/mainButton.png")}/>
        </TouchableOpacity>

        <TouchableOpacity style = {FooterButtonImg1.icon}  onPress={() => navigation.navigate('creatToDo') }>
          <Image style = {FooterButtonImg1.icon} source={require("../assets/images/mainPlus.png")}/>
        </TouchableOpacity>
       
      </FooterView>
    </View>
  );
};


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

{/*수정*/}
const BodyTxtView = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
`;

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;
const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.listBorder};
  padding: 15px 20px;
`;

const ItemTextContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;
const ItemTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;
const ItemDescription = styled.Text`
  font-size: 16px;
  margin-top: 5px;
  color: ${({ theme }) => theme.listDescription};
`;
const ItemTime = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.listTime};
`;

const BodySignView = styled(View)` 
  //일단 위에 처리하고 다시 스타일 맞추기
`

const BodySignDateImg = styled(Image)`
  width: 150px;
  height: 150px;
`;

const BodySignMonth = styled(Text)`
  position: absolute
  top:35
  bottom:0
  left:20
  right:0
  font-size: 50px;
  justify-content: center;
`;

const BodySignDate = styled(Text)`
 position: absolute
  top:50
  bottom:0
  left:75
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

//const styles = StyleSheet.create({});