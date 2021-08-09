import React from "react";
import { StyleSheet, Dimensions } from "react-native";
let screenHeight = Dimensions.get("window").height;
import { COLORS } from "../../core/styles/colors";

export default styles = StyleSheet.create({
  screenContainer: {
    flexDirection: "column",
    paddingHorizontal: 28,
    width: "100%",
    height: screenHeight,
  },
  logoContainer: { flex: 0.46, justifyContent: "center" },
  logoImage: {
    alignSelf: "center",
    resizeMode: "cover",
    width: 222,
    height: 60,
  },
  form: {
    flex: 0.54,
    alignItems: "center",
  },
  signInButton: {
    width: "100%",
    marginTop: 26,
    borderRadius: 4,
  },
  passwordIcon: {
    height: 24,
    width: 24,
  },
  signInButtonLabel: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
  },
  inputContainer: {
    height: 45,
    marginHorizontal: -10,
    borderBottomColor: COLORS.inputBottom,
    borderBottomWidth: 2,
  },
  input: {
    width: "100%",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  link: { color: COLORS.primary },
  forgetPassword: {
    marginTop: 34,
  },
  forgetPasswordFont: {
    fontFamily: "Roboto-Medium",
    fontSize: 14,
    lineHeight: 16,
  },
  footer: {
    marginBottom: 0,
    marginTop: 95,
  },
  footerFont: {
    fontSize: 12,
    lineHeight: 14,
    fontFamily: "Roboto-Regular",
    textDecorationLine: "underline",
  },
});
