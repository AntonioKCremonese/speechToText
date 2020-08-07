import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    borderTopLeftRadius:8,
    borderTopRightRadius:8,
  },
  mainText:{
    marginTop:10
  },
  textInput:{
    width:'100%',
    borderColor:'grey',
    borderBottomWidth:1
  },
  containerBody:{
    width:'100%',
    flexDirection:"row",
    justifyContent:'center',
    flexWrap:"wrap"
  },
  bodyText:{
    flexDirection:'row',
    paddingLeft:4,
    marginTop:30,
    marginRight:5,
    borderRadius:8,
    borderColor:'blue',
    backgroundColor:'#add8e6',
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    color:'#fff'
  },
  containerButton:{
    flex:1,
    width:'100%',
    justifyContent:"flex-end",
    marginBottom:40
  },
  recordButton:{
    width:'100%',
  }
});

export default styles;