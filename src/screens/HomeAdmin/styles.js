import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e8e8f5'
  },
  rowMenu: {
    width: '100%',
    height: 80,
    justifyContent: 'center'
  },
  shadowBtn: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  adminMng: {
    backgroundColor: '#fff',
    height: 70,
    width: '94%',
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center',
    alignSelf: "center"
  },
  adminMngTitle: {
    color: '#000',
    fontSize: 20,
    fontWeight: "bold",
  },
  workflow: {
    backgroundColor: '#fff',
    height: 70,
    width: '94%',
    borderRadius: 5,
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
    backgroundColor: '#fff',
    height: 70,
    width: '94%',
    borderRadius: 5,
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
    marginRight: '3%',
    height: 40,
    width: '24%',
    borderRadius: 5,
    alignItems: "center",
    justifyContent: 'center',
    alignSelf: "flex-end",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  logoutTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold"
  }
})