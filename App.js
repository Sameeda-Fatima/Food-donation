import { View, Text, TouchableOpacity, Platform, Animated } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Badge, Image } from 'react-native-elements';
import Add from './NewScreen/Add'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Reels from './NewScreen/Reels';
import Search from './NewScreen/Search';
import Profile from './NewScreen/Profile';
import HomeScreen from './NewScreen/Home';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions={{
            tabBarActiveTintColor: 'purple',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              paddingBottom: 8,
              paddingTop: 5,
              height: 60,
              backgroundColor: 'black',
            },
            tabBarLabelStyle: {
              display: 'none',
            },
            tabBarItemStyle: {
              width: '20%', // Better for responsive layout
            
          }}}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="home" size={30} color={color} />
              ),
              headerTitle: () => (
                <Text style={{
                  fontSize: 24, 
                  color: 'white',
                  fontFamily: Platform.OS === 'ios' ? 
                    'Dancing Script' : 
                    'DancingScript-Regular',
                }}>
                  Instagram
                </Text>
              ),
              headerStyle: {
                backgroundColor: 'black',
                elevation: 0, // Better than -1 for Android
                shadowOpacity: 0,
              },
              headerRight: () => (
                <View style={{ flexDirection: 'row', marginRight: 12 }}>
                  <TouchableOpacity>
                    <Ionicons 
                      name="heart-outline" 
                      size={25} 
                      color='white' 
                      style={{ marginRight: 15 }} 
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={{ position: 'relative' }}>
                      <Badge
                        value="3"
                        status="error"
                        containerStyle={{
                          position: 'absolute', 
                          top: -6, 
                          right: -7,
                          zIndex: 2,
                        }} 
                      />
                      <MaterialCommunityIcons 
                        name="facebook-messenger" 
                        size={25} 
                        color='white' 
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              ),
            }}
          />
          
          <Tab.Screen 
            name="Search" 
            component={Search}
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <FontAwesome name="search" size={28} color={color} />
              ),
            }} 
          />
          
          <Tab.Screen 
            name="Reels" 
            component={Reels}
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <Ionicons name="play-circle" size={28} color={color} />
              ),
            }}
          />
          
          <Tab.Screen 
            name="Add" 
            component={Add}
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <FontAwesome name="plus-square-o" size={28} color={color} />
              ),
            }}
          />
          
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <Image
                  source={{ uri: 'https://th.bing.com/th/id/OIP.vggFhcDaZAZ0BLI1MKgUzgHaD-?r=0&rs=1&pid=ImgDetMain' }}
                  style={{
                    height: 28,
                    width: 28,
                    borderRadius: 50,
                    borderWidth: 2,
                    borderColor: focused ? 'purple' : 'gray'
                  }}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;