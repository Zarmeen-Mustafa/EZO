import React from "react";
import { TouchableNativeFeedback } from "react-native";
import { Button } from "react-native-elements";
import { COLORS } from "../styles/colors";

export default function Link(props) {
  return (
    <Button
      onPress={props.onPress}
      title={props.label}
      containerStyle={props.containerStyle}
      buttonStyle={{ padding: 0 }}
      type="clear"
      TouchableComponent={TouchableNativeFeedback}
      titleStyle={{ color: COLORS.primary, ...props.style }}
    />
  );
}
