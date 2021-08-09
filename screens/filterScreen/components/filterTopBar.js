import React from "react";
import { View, Text } from "react-native";
import filtersScreenStyles from "../filtersScreenStyles";
import Link from "../../../core/components/link";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function FilterTopBar(props) {
  return (
    <View style={filtersScreenStyles.topBarContainer}>
      <Icon name="chevron-left" size={34} color="black" />

      <Text style={filtersScreenStyles.topBarHeading}>{props.title}</Text>

      <Link
        onPress={() => {}}
        label="CANCEL"
        containerStyle={filtersScreenStyles.topBarButtonContainer}
        style={filtersScreenStyles.topBarButton}
      />
    </View>
  );
}
