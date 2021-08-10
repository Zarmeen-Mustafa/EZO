import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import SignIn from "./screens/signInScreen/signIn";
import DashboardTopBar from "./screens/dashBoard/dashboardTopBar";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { FONTS } from "./assets/fonts/fonts";
import Filters from "./screens/filterScreen/filters";
import { Divider } from "react-native-elements/dist/divider/Divider";

export default function App() {
  let [fontsLoaded] = useFonts(FONTS);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* <SignIn /> */}

      {/* <Filters /> */}

      <DashboardTopBar />
      <Divider />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
