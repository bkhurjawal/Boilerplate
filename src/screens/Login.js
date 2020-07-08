import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  AsyncStorage,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import colors from "../components/colors";

export default (Login = ({ navigation }) => {
  const { width } = Dimensions.get("window");
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [form, setForm] = useState({
    email: "",
    password: "",
    loading: false,
  });

  doLogin = () => {
    console.log("Login", form);
    if (
      form.email.length > 0 &&
      form.password.length > 0 &&
      reg.test(form.email)
    ) {
      setForm({ ...form, loading: true });
      AsyncStorage.setItem("token", "token").then(() => {
        setForm({ ...form, loading: false });
        navigation.navigate("Home");
      });
    } else if (form.email.length <= 0) {
      alert("kindly fill your email");
    } else if (form.password.length <= 0) {
      alert("kindly fill your password");
    } else if (reg.test(form.email) === false) {
      alert("Kindly enter a valid email");
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {form.loading === false ? (
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <Header title="Login" />
          <View
            style={{
              justifyContent: "center",
              // backgroundColor: "black",
              flex: 1,
            }}
          >
            <View style={{ marginHorizontal: wp("10%") }}>
              <Input
                placeholder="Email"
                value={form.email}
                changeText={(text) => setForm({ ...form, email: text })}
              />
              <Input
                placeholder="Password"
                value={form.password}
                secure={true}
                changeText={(text) => setForm({ ...form, password: text })}
              />
              <Button name={"Login"} onPress={doLogin} />
            </View>
          </View>
        </KeyboardAvoidingView>
      ) : (
        <ActivityIndicator
          size={"large"}
          color={colors.appColor}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        />
      )}
    </View>
  );
});
