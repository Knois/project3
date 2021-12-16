import { StyleSheet } from "react-native";
import {
  GREY,
  WHITE,
  BLACK,
  ORANGE,
  BLACKopacity,
} from "../constants/constants";

export const style = StyleSheet.create({
  body: {
    flex: 1,
    height: "100%",
    padding: 20,
    paddingTop: 20,
    backgroundColor: GREY,
  },

  //Блок Welcome
  loginHeaderBox: { paddingTop: "20%", paddingBottom: "15%" },
  loginHeaderTitle: { color: ORANGE, fontSize: 40 },
  loginHeaderText: { color: BLACK, fontSize: 30 },

  //Инпуты авторизации
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
  loginInput: {
    width: "100%",
    alignSelf: "flex-start",
    color: BLACK,
  },
  warningMessage: { color: "red", alignSelf: "center" },

  //Текст правила использования и строка регистрации
  messagePrivacyPolicy: { marginTop: 15, color: BLACK, fontSize: 12 },
  messagePrivacyPolicyLink: { color: ORANGE },

  //Кнопка GO
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

  //Ссылка на регистрацию
  loginBoxLast: {
    marginTop: "20%",
    justifyContent: "flex-end",
    alignSelf: "center",
  },

  //Стили для новостных постов на экране News.js
  newsItemBox: {
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 10,
    position: "relative",
  },
  newsItemImg: { width: 350, height: 234 },
  newsTitleAndAnonsBox: {
    position: "absolute",
    width: "100%",
    padding: 10,
    bottom: 0,
    backgroundColor: BLACKopacity,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  newsItemTitle: {
    color: ORANGE,
    fontWeight: "bold",
  },
  newsItemAnons: { color: WHITE },

  //Категории новостей, футер
  newsCategoryBar: {
    position: "absolute",
    bottom: 0,
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: GREY,
    width: "100%",
    alignSelf: "center",
  },
  newsCategoryItem: {},
  newsCategoryItemTitle: { color: ORANGE, fontSize: 10 },
  //FullInfo экран / новость целиком
  fullInfoImg: {
    width: 350,
    height: 234,
    alignSelf: "center",
    borderColor: ORANGE,
    borderWidth: 2,
  },
  fullInfoTitle: {
    color: ORANGE,
    fontWeight: "bold",
    width: 350,
    alignSelf: "center",
    fontSize: 20,
    marginTop: 10,
  },
  fullInfoAnons: {
    color: ORANGE,
    width: 350,
    alignSelf: "center",
    fontSize: 15,
    marginTop: 0,
    fontStyle: "italic",
  },
  fullInfoArticle: { width: 350, alignSelf: "center", marginTop: 10 },
});
