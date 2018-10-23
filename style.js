import { StyleSheet } from "react-native"

export default StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center"
  },
  modalInner: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(52, 52, 52, 0.8)"
  },
  select: {
    backgroundColor: "#FFF",
    margin: 10,
    padding: 10,
    borderRadius: 6,
    alignItems: "stretch"
  },
  button: {
    marginBottom: 0,
    alignItems: "center",
    borderColor: "#CCC"
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderColor: "#EAEAEA"
  },
  buttonSelectedColor: {
    backgroundColor: "#273a8c"
  },
  buttonColor: {
    backgroundColor: "white"
  },
  buttonText: {
    padding: 15
  },
  footerText: {
    fontWeight: "bold"
  },
  textSelectedColor: {
    color: "#FFF"
  },
  tagInput: {
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 10,
    maxHeight: 78
  },
  tag: {
    padding: 5,
    backgroundColor: "#273a8c",
    color: "#FFF",
    margin: 2,
    borderRadius: 6
  }
})
