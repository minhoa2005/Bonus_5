import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppsScreen from './AppsScreen';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProfileScreen from './ProfileScreen';
import NavAllApps from './icon/NavAllApps';
import NavAllAppsActive from './icon/NavAllAppsActive';
import NavGold from './icon/NavGold';
import NavGoldActive from './icon/NavGoldActive';
import GameIcon from './icon/NavGame';
import GameIconActive from './icon/NavGameActive';
import HomeIcon from './icon/NavHome';
import HomeIconActive from './icon/NavHomeActive';
import ProfileIcon from './icon/NavProfile';
import ProfileIconActive from './icon/NavProfileActive';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <SafeAreaProvider style={{ backgroundColor: '#fefefe' }}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={AppsScreen} options={{
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return (
                  <HomeIconActive />
                )
              } else {
                return (
                  <HomeIcon />
                )
              }
            }
          }} />
          <Tab.Screen name="All Apps" component={AppsScreen} options={{
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return (
                  <NavAllAppsActive />
                )
              } else {
                return (
                  <NavAllApps />
                )
              }
            }
          }} />
          <Tab.Screen name="Gold" component={AppsScreen} options={{
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return (
                  <NavGoldActive />
                )
              } else {
                return (
                  <NavGold />
                )
              }
            }
          }} />
          <Tab.Screen name="Game" component={AppsScreen} options={{
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return (
                  <GameIconActive />
                )
              } else {
                return (
                  <GameIcon />
                )
              }
            }
          }} />
          <Tab.Screen name="Profile" component={ProfileScreen} options={{
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return (
                  <ProfileIconActive />
                )
              } else {
                return (
                  <ProfileIcon />
                )
              }
            }
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}


