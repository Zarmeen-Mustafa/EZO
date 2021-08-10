import React from "react";
import { View, Text, Image } from "react-native";
import dashboardStyles from "./dashboardStyles";
import { COLORS } from "../../core/styles/colors";
import { IMAGES } from "../../assets/images/images";
import ImageButton from "../../core/components/imageButton";

export default function DashboardTopBar() {
  return (
    <View style={dashboardStyles.dashboardTopBarContainer}>
      <Text style={dashboardStyles.dashboardHeading}>Dashboard</Text>

      <ImageButton
        imageStyle={dashboardStyles.dashboardIcon}
        imageURL={IMAGES.calendar}
      />

      <ImageButton
        imageStyle={dashboardStyles.dashboardIcon}
        imageURL={IMAGES.bell}
      />

      <ImageButton
        imageStyle={dashboardStyles.dashboardIcon}
        imageURL={IMAGES.search}
      />

      <ImageButton
        imageStyle={dashboardStyles.dashboardIcon}
        imageURL={IMAGES.cart}
      />
    </View>
  );
}
