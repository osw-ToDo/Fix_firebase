import React, { useState } from 'react';
import { StatusBar, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import Navigation from './navigations';
import { images } from './utils/images';
import { ProgressProvider, UserProvider } from './contexts';

import {DB} from './utils/firebase';

const cacheImages = images => {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};
const cacheFonts = fonts => {
  return fonts.map(font => Font.loadAsync(font));
};

const App = () => {

    const TodoRef = DB.collection('Todo')    

    //0. 모든 카테고리 불러오기
    TodoRef.get().then((snapshot)=>{
      snapshot.forEach((doc)=>{
          console.log("0. get all items:", doc.data());
      });
  })

    //1. 미완료/완료된 일만 뜨기
    TodoRef.where('Flag','==','false').orderBy('End','asc').get().then((snapshot)=>{
      snapshot.forEach((doc)=>{
          console.log("1. where flagFalse ordeBy End asc:", doc.data());
      });
  })

    //2. 투두 수정 (해당 투두 id 받기)
    TodoRef.doc('aiE9w5JrWr35YgrMIrmr').update({
      Cate: 'Club',
      End:1607110465663,
      Flag: false,
      Start:1607110465663,
      ToDo:'update todo test'
    })
    

    //3. 투두 삭제(해당 투두 id 받기)
    const deleted = TodoRef.doc('rBITGTShVkAQimuNwyq9');
    if(deleted == null){
      console.log('no such document exist!');
    }else{
      deleted.delete();
      console.log('well deleted');
    }
    

  const [isReady, setIsReady] = useState(false);

  const _loadAssets = async () => {
    const imageAssets = cacheImages([
      require('../assets/splash.png'),
      ...Object.values(images),
    ]);
    const fontAssets = cacheFonts([]);

    await Promise.all([...imageAssets, ...fontAssets]);
  };

  return isReady ? (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <ProgressProvider>
          <StatusBar barStyle="dark-content" />
          <Navigation />
        </ProgressProvider>
      </UserProvider>
    </ThemeProvider>
  ) : (
    <AppLoading
      startAsync={_loadAssets}
      onFinish={() => setIsReady(true)}
      onError={console.warn}
    />
  );
};

export default App;
