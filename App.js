import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Home from './screens/home';
// import About from './screens/about';
import Navigator from './routes/homestack';

// const Drawer=createDrawerNavigator();

export default function App() {
  // return (
  //   <NavigationContainer>
  //     <Drawer.Navigator initialRouteName="Home Screen">
  //       <Drawer.Screen name="Home" component={Home}/>
  //       <Drawer.Screen name="About" component={About}/>
  //     </Drawer.Navigator>
  //   </NavigationContainer>
  // );
  return(
    <Navigator/>
  )
  
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
