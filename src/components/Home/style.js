import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    div:{
        display: "flex",
        flexDirection:"column",
        width:"50%",
        position:"absolute",
        top:"45%",
        left:"24%",
        gap: "20px",
        alignItems:"center",
        textAlign:"center",
    },
    button :{
        textDecoration: "none",
        color:"#fff"
    }
  });
  export default useStyles