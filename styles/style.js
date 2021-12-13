import { StyleSheet } from "react-native";
const PRIMARY = "#07074e";
const SECONDARY = "#17185a";
const fontPRIMARY = "#fff";
const fontSECONDARY = "#9b9bb7";
const BORDER = "#4b478b";

export const style = StyleSheet.create({
  body: {
    flex: 1,
    height: "100%",
    padding: 20,
    paddingTop: 40,
    backgroundColor: PRIMARY,
  },
  loginHeaderBox: { paddingTop: "20%", paddingBottom: "15%" },
  loginHeaderTitle: { color: fontPRIMARY, fontSize: 35 },
  loginHeaderText: { color: fontSECONDARY, fontSize: 30 },
  loginInputBox: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderColor: BORDER,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: SECONDARY,
  },
  loginBoxLast: {
    marginTop: "25%",
    justifyContent: "flex-end",
    alignSelf: "center",
  },
  loginInput: {
    width: "100%",
    alignSelf: "flex-start",
    color: fontPRIMARY,
  },
  messagePrivacyPolicy: { marginTop: 15, color: fontSECONDARY, fontSize: 12 },
  messagePrivacyPolicyLink: { color: fontPRIMARY },
  goButton: {
    backgroundColor: SECONDARY,
    marginTop: "20%",
    padding: 20,
    borderColor: BORDER,
    borderWidth: 1,
    borderRadius: 40,
    alignSelf: "center",
  },
  goButtonText: { color: "fontPRIMARY", fontSize: 20 },
  toRegisterText: { color: fontPRIMARY },
  warningMessage: { color: "red", alignSelf: "center" },
});
