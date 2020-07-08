import React from "react";
import { View, Image } from "react-native";
import colors from "./colors";
import { Font } from "./Fonts";
import { TouchableOpacity } from "react-native-gesture-handler";

const Header = (props) => {
  return (
    <View
      {...props}
      style={{
        backgroundColor: colors.appColor,
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
      }}
    >
      <View>
        {props.back ? (
          <TouchableOpacity onPress={props.back}>
            {/* <Image
            source={require("../assets/icons/Path.png")}
            style={{ height: 20, width: 20, resizeMode: "contain" }}
          /> */}
            <Font> {"<-"} </Font>
          </TouchableOpacity>
        ) : null}
      </View>
      <View>
        <Font style={{ color: colors.white, fontSize: 18 }}>{props.title}</Font>
      </View>
      <View />
    </View>
  );
};
export default Header;
