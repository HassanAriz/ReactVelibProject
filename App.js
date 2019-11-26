import React from 'react';
import Homepage from  './components/Homepage';
import AnimationViewPage from "./components/AnimationViewPage";
import ThirdPage from "./components/ThirdPage";


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
    Home: {screen: Homepage},
    DoubleView: {screen: AnimationViewPage},
    ThirdPage: {screen: ThirdPage},
});

const App = createAppContainer(MainNavigator);

export default App;
