import * as React from 'react';
import { Text, View  , Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../components/Home.js";
import MyRecipes from "../components/MyRecipes.js"
import { FontAwesome , FontAwesome5 , MaterialIcons} from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import KitchenStackComponent from "../stacks/KitchenStack.js";
import LikedRecipesStack from "../stacks/LikedRecipesStack.js";

const Tab = createBottomTabNavigator();





export default function TapNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Kitchen') {
            iconName = focused
              ? 'kitchen'
              : 'kitchen';
          } else if (route.name === 'My Recipes') {
           // iconName = focused ? 'headphones' : 'headphones';
            return <MaterialIcons name={"book"} size={size} color={color} />
          }

          
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      
      >
        <Tab.Screen name="Kitchen" component={KitchenStackComponent} />
        <Tab.Screen name="My Recipes" component={LikedRecipesStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
