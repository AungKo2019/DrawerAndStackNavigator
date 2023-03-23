import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../screens/home';
import About from '../screens/about';
import Review from '../screens/reviewdetail';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

//const Drawer=createDrawerNavigator();

const screens = {
    Home : {
         screen: Home,
         navigationOptions:{
            title: 'My Home',
            headerStyle : {backgroundColor:'#E1FFEE',},
            headerTintColor:'#f4511e',
            headerTitleStyle:{fontWeight:'bold',textAlign:'center'},
         },
    },
    Review:{
        screen: Review,
        navigationOptions: {
            title: 'My Review၁၂၃', 
            headerStyle: {backgroundColor: '#E1FFEE',}, 
            headerTintColor: '#f4511e',
            headerTitleStyle: {fontWeight: 'bold',textAlign: 'center'},
        },

    }, 
    About: {
        screen: About
    }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);

// export default function App(){
//     return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home Screen">
//         <Drawer.Screen name="Home" component={Home}/>
//         <Drawer.Screen name="About" component={About}/>
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };
