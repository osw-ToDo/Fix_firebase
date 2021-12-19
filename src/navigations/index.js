import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import { Spinner } from '../components';
import { ProgressContext, UserContext } from '../contexts';
import RootStack from '../J_index.js';

const Navigation = () => {
  const { inProgress } = useContext(ProgressContext);
  const { user } = useContext(UserContext);

  return (
    <NavigationContainer>
      {user?.uid && user?.email ? <RootStack/> : <AuthStack />} 
      {inProgress && <Spinner />}
    </NavigationContainer>
  );
};

//<MainStack /> <RootStack/>

export default Navigation;
