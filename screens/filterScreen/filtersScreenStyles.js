import { StyleSheet } from "react-native";
import { COLORS } from "../../core/styles/colors";

export default styles = StyleSheet.create({
  topBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 13,
    marginHorizontal: 16,
  },
  topBarHeading: {
    marginLeft: 16,
    fontFamily: "Roboto-Medium",
    fontSize: 20,
    lineHeight: 24,
  },
  topBarButtonContainer: {
    marginRight: 0,
    position: "absolute",
    end: 0,
    alignSelf: "center",
  },
  topBarButton: {
    fontFamily: "Roboto-Medium",
    fontSize: 14,
    lineHeight: 16,
  },
  chipContainer: { marginBottom: 10, marginLeft: 10 },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  chipText: {
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    lineHeight: 20,
  },
  filtersList: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 6,
    paddingBottom: 10,
  },
  filterGroupHeading: {
    marginHorizontal: 16,
    marginVertical: 20,
    fontFamily: "Roboto-Medium",
    fontSize: 14,
    lineHeight: 16,
    color: COLORS.filterGroupHeading,
  },
  group: {
    borderTopWidth: 1,
    borderTopColor: COLORS.divider,
  },
});
