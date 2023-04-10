import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
container:{
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    margin: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ADD8E6'
},
viewImg:{
    width: '26%',
    height: '150',
},
img:{
 height: 140,
 width:'100%',
 borderRadius: 5,
 alignItems: 'center'
},
viewData:{
    padding: 10,
    width: '74%',
    height: '100%',
    textAlign: 'center'
},
nome:{
 fontSize: 18,
 fontWeight: 'bold',
 color: 'red'
},
descricao:{
    fontSize: 16,
    color: 'black',
    fontFamily: 'arial',
    marginTop: '5px',
    padding: '10px'
},
button:{
    marginTop: 10,
    padding: 10
},
titulo:{
  fontSize: 17,
},

});

export default styles;