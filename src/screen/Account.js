import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";

function Account() {
  const auth = null;

  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
}

export default Account;
