import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Detail from "../screens/Detail";
import Tabs from "./Tabs";

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerBackTitleVisible: false
            }}
        >
            <Stack.Screen name="Tab" component={Tabs} options={{headerShown:false}} />
            <Stack.Screen name="Detail" component={Detail} options={{cardStyle:{backgroundColor:"#333"}, headerStyle:{backgroundColor:"#1c1c1c"}, headerTintColor:"#fff"}} />
        </Stack.Navigator>
    )
};