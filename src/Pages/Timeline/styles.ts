import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bottomActions:{
    flex:1,
    justifyContent:"space-around",
    alignItems:"baseline",
  },
  button:{
    borderRadius:"100px",
    textTransform:"capitalize",
    color:"white",
    backgroundColor:theme.palette.secondary.dark,
    padding:0,
    marginTop:5
  },
  content:{
    margin:"0px 20px",
    padding:10
  },
  media:{
    height:"600px",
    border:"1px solid grey",
  },
  moreIcon:{
    marginRight:10
  },
}));

export default useStyles;
