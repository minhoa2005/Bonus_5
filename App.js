import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppsScreen from './AppsScreen';
import { View } from 'react-native';
import HomeIcon from './assets/nav_home.svg';
// import HomeIconActive from './assets/nav_home_active.svg';
import AllApps from './assets/nav_allapps.svg';
import AllAppsActive from './assets/nav_allapps_active.svg';
import GoldIcon from './assets/nav_gold.svg'
import GoldIconActive from './assets/nav_gold_active.svg'
import GameIcon from './assets/nav_game.svg';
import GameIconActive from './assets/nav_game_active.svg';
import ProfileIcon from './assets/nav_profile.svg';
import ProfileIconActive from './assets/nav_user_active.svg';
import HomeIconActive from './assets/nav_home_active.svg';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProfileScreen from './ProfileScreen';
export default function App() {
  const Tab = createBottomTabNavigator();
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
                  <AllAppsActive />
                )
              } else {
                return (
                  <AllApps />
                )
              }
            }
          }} />
          <Tab.Screen name="Gold" component={AppsScreen} options={{
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return (
                  <GoldIconActive />
                )
              } else {
                return (
                  <GoldIcon />
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


