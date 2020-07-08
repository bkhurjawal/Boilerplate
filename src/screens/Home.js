import React, { useState } from "react";
import { Font, Bold } from "../components/Fonts";
import { View, AsyncStorage } from "react-native";
import Header from "../components/Header";
import Button from "../components/Button";

const Home = ({ navigation }) => {
  return (
    <View>
      <Header title="Home" />
      <Bold>This is home</Bold>
      <View style={{ marginHorizontal: 20 }}>
        <Button
          name={"Logout"}
          onPress={() => {
            AsyncStorage.clear().then(() => {
              navigation.navigate("Login");
            });
          }}
        />
      </View>
    </View>
  );
};

export default Home;
