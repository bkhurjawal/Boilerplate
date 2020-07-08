import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "./colors";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Button(props) {
  return (
    <TouchableOpacity
      {...props}
      style={[
        {
          backgroundColor: colors.appColor,
          padding: 10,
          paddingVertical: 20,
          borderRadius: 5,
          marginVertical: hp("2%"),
        },
        props.style,
      ]}
    >
      <Text
        style={{ textAlign: "center", color: colors.white, fontWeight: "600" }}
      >
        {props.name}
      </Text>
      {props.children}
    </TouchableOpacity>
  );
}
