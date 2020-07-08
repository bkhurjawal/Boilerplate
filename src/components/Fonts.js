import React from "react";
import { Text } from "react-native";

// Add fontFamily under style

export const Font = (props) => {
  return (
    <Text {...props} style={[props.style]}>
      {props.children}
    </Text>
  );
};
export const Bold = (props) => {
  return (
    <Text {...props} style={[props.style]}>
      {props.children}
    </Text>
  );
};
