import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;
const GREY = "#f1f1f1";
const WHITE = "#fff";
const BLACK = "#000000";
const ORANGE = "#ff6b00";
const fontSECONDARY = "#9b9bb7";

export const style = StyleSheet.create({
  body: {
    flex: 1,
    height: "100%",
    padding: 20,
    paddingTop: 40,
    backgroundColor: GREY,
  },
  loginHeaderBox: { paddingTop: "20%", paddingBottom: "15%" },
  loginHeaderTitle: { color: ORANGE, fontSize: 40 },
  loginHeaderText: { color: BLACK, fontSize: 30 },
  loginInputBox: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderColor: ORANGE,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: WHITE,
  },
  loginBoxLast: {
    marginTop: "20%",
    justifyContent: "flex-end",
    alignSelf: "center",
  },
  loginInput: {
    width: "100%",
    alignSelf: "flex-start",
    color: BLACK,
  },
  messagePrivacyPolicy: { marginTop: 15, color: BLACK, fontSize: 12 },
  messagePrivacyPolicyLink: { color: ORANGE },
  goButton: {
    backgroundColor: BLACK,
    marginTop: "20%",
    padding: 20,
    borderColor: ORANGE,
    borderWidth: 2,
    borderRadius: 40,
    alignSelf: "center",
  },
  goButtonText: { color: WHITE, fontSize: 20 },
  toRegisterText: { color: BLACK },
  warningMessage: { color: "red", alignSelf: "center" },
  newsItem: {
    marginVertical: 10,
    padding: 20,
    alignItems: "center",
    backgroundColor: WHITE,
  },
  newsTitle: { color: BLACK },
  newsImage: { width: 200, height: 100 },
  newsArticle: { color: ORANGE },
});
