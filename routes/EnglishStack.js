import { createStackNavigator } from '@react-navigation/stack';
import Header from '../screens/Component/Header';
import DetailHeader from '../screens/Component/DetailHeader';
import React from 'react';
import Book from '../screens/English/Book';
import Chapters from '../screens/English/Chapters';
import Verses from '../screens/English/Verses';

const Stack = createStackNavigator();
const EnglishStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Index" 
                component={Book} 
                options = {{
                headerShown: false,
            }}
            />
            <Stack.Screen 
                name="Chapters" 
                component={Chapters} 
                options = {{
                headerShown: true,
                header: ({navigation, route}) => <DetailHeader navigation={navigation} title={route.params.params.page} />
            }}
            />
            <Stack.Screen 
                name="Verses" 
                component={Verses} 
                options = {{
                headerShown: true,
                header: ({navigation, route}) => <DetailHeader navigation={navigation} title={route.params.book + " " + route.params.chapter} />
            }}
            />
        </Stack.Navigator>
    )
}

export default EnglishStack;