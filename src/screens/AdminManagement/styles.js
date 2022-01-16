import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e8e8f5'
  },
  rowAdmin: {
    width: '100%',
    height: 110,
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
  admin: {
    backgroundColor: '#fff',
    height: 100,
    width: '94%',
    borderRadius: 5,
    alignSelf: "center",
    padding: 4,
  },
  adminTitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 5
  },
  adminWorkflow: {
    color: '#000',
    fontSize: 14,
  },
  adminProducts: {
    color: '#000',
    fontSize: 14,
  },
  addAdminBtn: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 54,
    width: 54,
    backgroundColor: '#44b',
    borderRadius: 30,
    alignItems: "center",
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  }
})