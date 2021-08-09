import React, { useState, useRef } from "react";
import {
  View,
  Image,
  ToastAndroid,
  TouchableWithoutFeedback,
} from "react-native";
import { Input } from "react-native-elements";
import { IMAGES } from "../../assets/images/images";
import { COLORS } from "../../core/styles/colors";
import PrimaryButton from "../../core/components/primaryButton.js";
import Link from "../../core/components/link";
import signInScreenStyles from "./signInScreenStyles";
import { validateEmailValue } from "../../core/utils/validators/validators";
import { validatePasswordValue } from "../../core/utils/validators/validators";

export default function SignIn() {
  const [isSecureTextEntryPassword, setSecureTextEntryPassword] =
    useState(true);
  const [emailTextInputValue, setEmailTextInputValue] = useState("");
  const [passwordTextInputValue, setPasswordTextInputValue] = useState("");
  const refPasswordField = useRef();

  return (
    <View style={signInScreenStyles.screenContainer}>
      <View style={signInScreenStyles.logoContainer}>
        <Image
          style={signInScreenStyles.logoImage}
          source={IMAGES.ezo_logo_full}
        />
      </View>
      <View style={signInScreenStyles.form}>
        <Input
          onSubmitEditing={() => refPasswordField.current.focus()}
          onChangeText={(text) => {
            validateEmailValue(text);
            setEmailTextInputValue(text);
          }}
          value={emailTextInputValue}
          placeholder="Username"
          placeholderTextColor={COLORS.text}
          style={signInScreenStyles.input}
          selectionColor={COLORS.primary}
          inputContainerStyle={signInScreenStyles.inputContainer}
          returnKeyType="next"
        />
        <Input
          ref={(input) => (refPasswordField.current = input)}
          onSubmitEditing={() => signIn()}
          onChangeText={(text) => {
            validatePasswordValue(text);
            setPasswordTextInputValue(text);
          }}
          value={passwordTextInputValue}
          placeholder="Password"
          placeholderTextColor={COLORS.text}
          style={signInScreenStyles.input}
          selectionColor={COLORS.primary}
          inputContainerStyle={signInScreenStyles.inputContainer}
          secureTextEntry={isSecureTextEntryPassword}
          returnKeyType="done"
          rightIcon={
            <TouchableWithoutFeedback
              onPress={() => {
                setSecureTextEntryPassword(!isSecureTextEntryPassword);
              }}
            >
              <Image
                tintColor={
                  isSecureTextEntryPassword ? COLORS.iconGrey : COLORS.primary
                }
                resizeMode="cover"
                style={signInScreenStyles.passwordIcon}
                source={IMAGES.iconEye}
              />
            </TouchableWithoutFeedback>
          }
        />

        <PrimaryButton
          onPress={() => signIn()}
          label="Sign In"
          buttonStyle={signInScreenStyles.signInButton}
          titleStyle={signInScreenStyles.signInButtonLabel}
        />

        {/* COMMENT: rename (to be decided) */}
        <Link
          onPress={gotoForgetPasswordScreen}
          label="Forgot password"
          containerStyle={signInScreenStyles.forgetPassword}
          style={signInScreenStyles.forgetPasswordFont}
        />

        <Link
          onPress={gotoHelpScreen}
          label="Need Help?"
          containerStyle={signInScreenStyles.footer}
          style={signInScreenStyles.footerFont}
        />
      </View>
    </View>
  );

  function gotoHelpScreen() {
    console.log("help!!");
  }

  function gotoForgetPasswordScreen() {
    console.log("forgot");
  }

  function signIn() {
    if (!validateEmailValue(emailTextInputValue))
      ToastAndroid.show("Username is Not Correct", ToastAndroid.SHORT);

    if (!validatePasswordValue(passwordTextInputValue))
      ToastAndroid.show(
        "Minimum 8 characters, at least one uppercase letter, at least one lowercase letter, one special letter and one number",
        ToastAndroid.SHORT
      );
  }
}
