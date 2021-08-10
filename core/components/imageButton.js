import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { COLORS } from "../../core/styles/colors";

export default function ImageButton(props) {
  return (
    <TouchableOpacity style={props.buttonStyle} onPress={props.onPress}>
      <Image
        style={props.imageStyle}
        resizeMode="cover"
        source={props.imageURL}
        tintColor={COLORS.primary}
      />
    </TouchableOpacity>
  );
}
