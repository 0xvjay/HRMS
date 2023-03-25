import { Alert, StyleSheet, Text, View } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";

import CustomTitle from "../components/CustomTitle";
import { GlobalColours, GlobalFonts } from "../constants/Constants";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../redux/user/user";

const Login = () => {
  const navigator = useNavigation();
  const dispatch = useDispatch();

  const [otp, setOtp] = useState();

  const onChangeCodeHandler = () => {
    navigator.navigate("verifyCode");
  };

  const onSubmitHandler = () => {
    if (otp === "123456") {
      dispatch(setToken(otp));
    } else {
      Alert.alert("Wrong code", "Please try again later");
    }
  };

  return (
    <View style={styles.screen}>
      <CustomTitle>Enter Digit Code</CustomTitle>
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>
          dalkjdsdlkad adadadka l sk;ldkaldka; dskaldk a;ldk;ladk adoajdkajdk
          ldkaldklaskdlasd adlkal;dkad adkjoasdoaid
        </Text>
      </View>
      <Text style={styles.instructionTitle}>Enter Code</Text>
      <View style={styles.otpInputContainer}>
        <OTPInputView
          style={{ width: "90%", height: 100 }}
          pinCount={6}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          selectionColor={styles.underlineStyleHighLighted}
          onCodeFilled={(code) => setOtp(code)}
        />
        <CustomButton style={{ width: "90%" }} onPress={onSubmitHandler}>
          Login
        </CustomButton>
      </View>
      <Text style={styles.linkText} onPress={onChangeCodeHandler}>
        Change Code?
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
  },
  instructionContainer: {
    alignItems: "center",
  },
  instructionText: {
    margin: 5,
    fontFamily: GlobalFonts.regular,
  },
  instructionTitle: {
    paddingLeft: 13,
    fontSize: 18,
    fontFamily: GlobalFonts.bold,
  },
  otpInputContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  underlineStyleBase: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    color: GlobalColours.BLACK,
  },
  underlineStyleHighLighted: {
    borderColor: GlobalColours.ORANGE,
  },
  linkText: {
    color: GlobalColours.BLUE,
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: GlobalColours.BLUE,
    width: 90,
    marginLeft: 20,
  },
});
