import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
    flexDirection: "row"
  },
  text: {
    paddingHorizontal: 20,
    fontSize: 20,
    color: "green",
    fontWeight: "700"
  },
  input: {
    width: "auto",
    borderRadius: 12,
    padding: 12,
    paddingHorizontal: 40,
    margin: 12,
    backgroundColor: "#D6FFD9"
  },
  icon: {
    position: 'absolute',
    left: 10,
    top: 30,
    paddingHorizontal: 15
  },
  logBtn: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    color: "black",
    backgroundColor: "#D6FFD9",
    width: 120,
    borderRadius: 20,
  },
  signBtn: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginBottom: 70,
    backgroundColor: "#024220",
    width: 120,
    borderRadius: 20,
    marginHorizontal: 12
  },
  signBtn1: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginBottom: 70,
    backgroundColor: "#D6FFD9",
    width: 120,
    borderRadius: 20,
    marginHorizontal: 12,
  },
  textBtn: {
    fontWeight: "600",
  },
  textSignBtn: {
    fontWeight: "600",
    color: "white",
  },
  textSignBtn1: {
    fontWeight: "600",
    color: "black",
  },
  caruselContainer: {
    justifyContent: "center", 
    alignItems: "center",
    height: 300

  },
  carouselImage: {
    flex: 0.7,
    borderRadius: 5,
    objectFit: "contain",
    justifyContent: "center"
  },
  title: {
    fontWeight: "800",
    fontSize: 20,
    marginVertical: 10,
    color: "green",
    textAlign: "center"
  },
  description: {
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "green",
    marginHorizontal: 8,
  },
  box:{
    borderColor: "#4d4c4c4d",
    borderWidth: 1,
    borderRadius: 5,
    margin: 12,
    
  },
  boxImage: {
    width: 120,
    height: 100,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    objectFit: "contain"
  },
  boxTitle :{
    marginHorizontal: 10,
    marginVertical: 5,
    fontWeight: "700",
    fontSize: 16,
    width: 48,
    color: "black"
  },
  boxPrice :{
    marginHorizontal: 10,
    marginBottom: 5,
    color: "black"
  },
  boxIcon: {
    color: "gold",
    fontSize: 16,
    marginTop: 3,
    marginRight: 2
  },
  boxRating:{
    fontSize: 16,
    fontWeight: "700",
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  sider : {
    padding: 9,
    width: "auto",
    position: "absolute",
    top: 10,
    right: 0,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: "#5a5e60"
  },
  siderIcon: {
    fontSize: 22,
    color: "#fff"
  }
})

export default Styles