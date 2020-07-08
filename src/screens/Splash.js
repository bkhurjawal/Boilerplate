import React, { useEffect } from "react";
import { View, AsyncStorage, Text, Image, Dimensions } from "react-native";

function Splash({ navigation }) {
  const { height, width } = Dimensions.get("window");

  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem("token").then((data) => {
        if (data) {
          navigation.navigate("Home");
          // navigation.navigate("Login");
        } else {
          navigation.navigate("Login");
        }
      });
    }, 3000);
  }, [0]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={require("../assets/logo.png")}
        style={{ resizeMode: "contain" }}
        resizeMode={"contain"}
      />
    </View>
  );
}
export default Splash;
