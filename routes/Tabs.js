import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import EnglishStack from './EnglishStack';
import YorubaStack from './YorubaStack';
import Icon from 'react-native-vector-icons/AntDesign';


const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
              headerStyle: {
                  backgroundColor: '#2E5984'
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                  fontWeight: 'bold',
              },
          }}
      >
        <Tab.Screen  
          name="English" 
          component={EnglishStack}  
          options={{
            headerShown: true,
            tabBarIcon: ({color, size}) => <Icon name="book" size={size} color={color} />
          }}
        />
        <Tab.Screen 
          name="Yoruba" 
          component={YorubaStack} 
          options={{
            headerShown: true,
            tabBarIcon: ({color, size}) => <Icon name="book" size={size} color={color} />
          }}  
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Tabs;