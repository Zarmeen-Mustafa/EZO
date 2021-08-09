import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import SignIn from "./screens/signInScreen/signIn";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { FONTS } from "./assets/fonts/fonts";
import Filters from "./screens/filterScreen/filters";

export default function App() {
  let [fontsLoaded] = useFonts(FONTS);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SignIn />
      <Filters></Filters>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
