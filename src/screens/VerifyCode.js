import { useNavigation } from "@react-navigation/native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";

import CustomTitle from "../components/CustomTitle";
import { GlobalColours, GlobalFonts } from "../constants/Constants";

const VerifyCode = () => {
  const navigator = useNavigation();

  const [otp, setOtp] = useState();

  const onSubmitHandler = () => {
    if (otp === "1234") {
      Alert.alert("Success", "Your new code will be 123456.", [
        {
          text: "Okey Master",
          onPress: () => navigator.goBack(),
          style: "default",
        },
      ]);
    }
  };

  return (
    <View style={styles.screen}>
      <CustomTitle>Verification Code</CustomTitle>
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>
          dalkjdsdlkad adadadka l sk;ldkaldka; dskaldk a;ldk;ladk adoajdkajdk
          ldkaldklaskdlasd adlkal;dkad adkjoasdoaid
        </Text>
      </View>
      <Text style={styles.instructionTitle}>OTP Code</Text>
      <View style={styles.otpInputContainer}>
        <OTPInputView
          style={{ width: "80%", height: 100 }}
          pinCount={4}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          selectionColor={styles.underlineStyleHighLighted}
          onCodeFilled={(code) => {
            setOtp(code);
          }}
        />
        <CustomButton onPress={onSubmitHandler}>Submit</CustomButton>
      </View>
      <View style={styles.timerContainer}>
        <Text>Resend code to</Text>
        <Text>01:30</Text>
      </View>
    </View>
  );
};

export default VerifyCode;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  instructionContainer: {
    alignItems: "center",
  },
  instructionText: {
    fontFamily: GlobalFonts.regular,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  underlineStyleBase: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    color: GlobalColours.BLACK,
  },
  underlineStyleHighLighted: {
    borderColor: GlobalColours.ORANGE,
  },
  instructionTitle: {
    fontSize: 18,
    fontFamily: GlobalFonts.bold,
    paddingHorizontal: 15,
    marginHorizontal: 20,
  },
  otpInputContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  timerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginHorizontal: 38,
    marginVertical: 10,
  },
});
