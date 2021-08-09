import React from "react";
import { Button } from "react-native-elements";
import { COLORS } from "../styles/colors";

export default function PrimaryButton(props) {
  return (
    <Button
      onPress={props.onPress}
      title={props.label}
      containerStyle={props.buttonStyle}
      buttonStyle={{ backgroundColor: COLORS.primary }}
      titleStyle={props.labelStyle}
    />
  );
}
