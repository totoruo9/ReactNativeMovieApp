import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import Movies from "../screens/Movies";
import Search from "../screens/Search";
import Favs from "../screens/Favs";
import TV from "../screens/TV";
import { Platform } from "react-native";

const Tabs = createBottomTabNavigator();

const Icons = (category, focused) => {
    let iconName = Platform.OS === "ios" ? "ios-" : "md-";
    if(category === "Movies"){
        iconName += "film"
    }else if(category === "TV"){
        iconName += "tv"
    }else if(category === "Favs"){
        iconName += "heart"
    }else if(category === "Search"){
        iconName += "search"
    }

    return <Ionicons name={iconName} size={26} color={focused ? "#fff" : "#767676"} />
}

export default () => {
    return (
        <Tabs.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#1c1c1c",
                    shadowColor: "#1c1c1c",
                    borderBottomColor: "#1c1c1c"
                },
                headerTintColor: "#fff",
                tabBarStyle: {
                    backgroundColor:"#1c1c1c",
                    shadowColor:"#1c1c1c",
                    borderTopColor:"1c1c1c"
                },
                tabBarShowLabel:false
            }}
        >
            <Tabs.Screen
                name="Movies"
                component={Movies}
                options={{
                    tabBarIcon: (({focused}) => {
                        return Icons("Movies", focused);
                    })
                }}
            />
            <Tabs.Screen
                name="TV"
                component={TV}
                options={{
                    tabBarIcon: (({focused}) => {
                        return Icons("TV", focused);
                    })
                }}
            />
            <Tabs.Screen
                name="Discovery"
                component={Favs}
                options={{
                    tabBarIcon: (({focused}) => {
                        return Icons("Favs", focused);
                    })
                }}
            />
            <Tabs.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: (({focused}) => {
                        return Icons("Search", focused);
                    })
                }}
            />
        </Tabs.Navigator>
    );
};