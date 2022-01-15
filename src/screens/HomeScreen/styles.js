import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  rowMenu: {
    width: '100%',
    height: 74,
    justifyContent: 'center'
  },
  adminMng: {
    backgroundColor: '#ccf',
    height: 70,
    width: '98%',
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: 'center',
    alignSelf: "center"
  },
  adminMngTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: "bold"
  },
  workflow: {
    backgroundColor: '#ffd',
    height: 70,
    width: '98%',
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: 'center',
    alignSelf: "center"
  },
  workflowTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: "bold"
  },
  products: {
    backgroundColor: '#dfd',
    height: 70,
    width: '98%',
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: 'center',
    alignSelf: "center"
  },
  productsTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: "bold"
  },
  logout: {
    backgroundColor: '#f25',
    marginRight: '1%',
    height: 50,
    width: '30%',
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center',
    alignSelf: "flex-end"
  },
  logoutTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold"
  }
})