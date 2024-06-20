

import React from 'react';
import {
  Alert,
  Animated,
  TouchableOpacity,
} from 'react-native';
import 'react-native-gesture-handler'
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { styles } from './style';
import Home from './src/Home/home';
import SignUp from './src/SignUp/signup';
import Login from './src/Login/login';

export default function App() {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = '';

    switch (routeName) {
      case 'Home':
        icon = 'home';
        break;
      case 'Login':
        icon = 'settings-outline';
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? 'black' : 'gray'}
      />
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };
  return (
    <>
    <NavigationContainer>
      <CurvedBottomBar.Navigator
        type="DOWN"
        style={styles.bottomBar}
        shadowStyle={styles.shawdow}
        height={55}
        circleWidth={50}
        bgColor="white"
        initialRouteName="Login"
        borderTopLeftRight
        renderCircle={({ selectedTab, navigate}) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigate('SignUp')}
            >
              <Ionicons name={'apps-sharp'} color="gray" size={25} />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBar.Screen
          name="Home"
          component={() => <Home />}
          position="RIGHT"
        />
        <CurvedBottomBar.Screen
          name="Login"
          component={() => <Login />}
          position="RIGHT"
        />
        <CurvedBottomBar.Screen
          name="SignUp"
          component={() => <SignUp />}
        />
      </CurvedBottomBar.Navigator>
    </NavigationContainer>
    </>
  );
}