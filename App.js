import React, { useState } from 'react';
import * as Font from "expo-font"
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import {Text, Image, StatusBar} from "react-native";
import { Asset } from 'expo-asset';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './navigation/Stack';

const cacheImages = (images) => {
  return images.map(image => {
    if(typeof image === "string"){
      return Image.prefetch(image)
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  })
}

const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font));

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      ,require("./assets/splash.png")
    ]);
    const fonts = cacheFonts([Ionicons.font, FontAwesome.font]);
    return Promise.all([...images, ...fonts]);
  }
  const onFinish = () => setIsReady(true);

  return (
    isReady
    ? (
      <>
        <NavigationContainer>
            <Stack />
        </NavigationContainer>
        <StatusBar barStyle="light-content" />
      </>
    )
    : <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    />
  );
}