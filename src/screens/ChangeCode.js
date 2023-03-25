import { StyleSheet, Text, View } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";

import CustomTitle from "../components/CustomTitle";
import { GlobalColours, GlobalFonts } from "../constants/Constants";
import CustomButton from "../components/CustomButton";

const Login = () => {
  return (
    <View style={styles.screen}>
      <CustomTitle>Change Code</CustomTitle>
      <View style={styles.instructionContainer}>
        <Text style={styles.instructionText}>
          dalkjdsdlkad adadadka l sk;ldkaldka; dskaldk a;ldk;ladk adoajdkajdk
          ldkaldklaskdlasd adlkal;dkad adkjoasdoaid
        </Text>
      </View>
      <View style={styles.otpInputContainer}>
        <Text style={styles.instructionTitle}>Enter Code</Text>
        <OTPInputView
          style={styles.otpInputStyle}
          pinCount={6}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          selectionColor={styles.underlineStyleHighLighted}
          onCodeFilled={(code) => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
        <Text style={styles.instructionTitle}>Confirm Code</Text>
        <OTPInputView
          style={styles.otpInputStyle}
          pinCount={6}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          selectionColor={styles.underlineStyleHighLighted}
          onCodeFilled={(code) => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
        <CustomButton>Submit</CustomButton>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  instructionContainer: {
    alignItems: "center",
  },
  otpInputStyle: {
    width: "80%",
    height: 100,
  },
  instructionText: {
    fontFamily: GlobalFonts.regular,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  instructionTitle: {
    fontSize: 18,
    fontFamily: GlobalFonts.bold,
    paddingHorizontal: 15,
    marginHorizontal: 20,
    alignSelf: "flex-start",
  },
  otpInputContainer: {
    alignItems: "center",
  },
  underlineStyleBase: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
  },
  underlineStyleHighLighted: {
    borderColor: GlobalColours.ORANGE,
  },
});
