import { StyleSheet } from "react-native";
import { COLORS } from "../../core/styles/colors";

export default styles = StyleSheet.create({
  dashboardTopBarContainer: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "flex-end",
    marginBottom: 14,
  },
  dashboardIcon: {
    marginRight: 20,
    height: 20,
    width: 20,
  },
  dashboardHeading: {
    marginLeft: 20,
    position: "absolute",
    start: 0,
    alignSelf: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 20,
    lineHeight: 24,
    color: COLORS.primary,
  },
});
