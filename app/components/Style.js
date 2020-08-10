"use strict";
import { StyleSheet } from "react-native";
import colors from "../config/colors";

export default StyleSheet.create({
  flipCard: {
    flex: 1,
  },

  face: {
    flex: 1,
  },

  back: {
    flex: 1,
  },

  numberSide: {
    backgroundColor: colors.white,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  numberText: {
    color: colors.black,
    fontSize: 28,
  },

  cardBackBorder: {
    borderRadius: 10,
    backgroundColor: colors.white,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cardBack: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    height: "95%",
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: colors.white,
    fontSize: 38,
  },
});
