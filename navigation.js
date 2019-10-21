import { createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './screens/HomeScreen'
import CalendarScreen from './screens/CalendarScreen'
import AddTagScreen from './screens/AddTagScreen'
import EditTagScreen from './screens/EditTagScreen'
import TodoScreen from './screens/TodoScreen'

const TabNavigator = createMaterialTopTabNavigator({
  Calendar: { screen: CalendarScreen },
  ToDo: { screen: TodoScreen },
  Home: { screen: HomeScreen },
}, {
  swipeEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#c2ccda',
    inactiveTintColor: '#787f8a',
    style: {
      backgroundColor: '#1f252d',
    },
    labelStyle: {
      fontWeight: '600',
      textTransform: 'capitalize',
      fontSize: 15,
    },
    indicatorStyle: {
      backgroundColor: '#11b8d896'
    }
  }
})

const MainStack = createStackNavigator({
  TabScreen: {
    screen: TabNavigator,
    navigationOptions: {
      header: null,
    }
  },
  AddTagScreen: {
    screen: AddTagScreen,
    navigationOptions: {
      title: 'Add tags',
      headerTintColor: '#000000d6',
      headerForceInset: { top: 'never', bottom: 'never' }
    }
  },
  EditTagScreen: {
    screen: EditTagScreen,
    navigationOptions: {
      title: 'Edit tags',
      headerTintColor: '#000000d6',
      headerForceInset: { top: 'never', bottom: 'never' }
    }
  }
}, {
  initialRoute: 'TabScreen',
})

export default createAppContainer(MainStack)