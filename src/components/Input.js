import React from "react";
import { View, TextInput, Platform } from "react-native";
import colors from "./colors";

export default (Inout = (props) => {
  return (
    <View
      style={{
        borderColor: colors.gray,
        borderWidth: 1,
        marginVertical: 5,
        paddingVertical: Platform.OS === "android" ? 0 : 15,
        paddingHorizontal: Platform.OS === "android" ? 10 : 10,
        borderRadius: 10,
      }}
    >
      <TextInput
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={"gray"}
        autoCapitalize={"none"}
        style={{ paddingLeft: 5, color: colors.black }}
        secureTextEntry={props.secure}
        onChangeText={props.changeText}
      />
    </View>
  );
});
