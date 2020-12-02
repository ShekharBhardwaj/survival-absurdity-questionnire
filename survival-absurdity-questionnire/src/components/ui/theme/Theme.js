import { createMuiTheme } from '@material-ui/core/styles';

const badRobotBlue= "#0B72B9";
const badRobotOrange= "#FFBA60";

export default createMuiTheme({

    palette: {
        common: {
           blue: `${badRobotBlue}`,
           orange: `${badRobotOrange}`
        },
        primary: {
            main: `${badRobotBlue}`
        },
        secondary: {
            main:`${badRobotOrange}`
        }
    },

    typography: {
       tab : {
        fontFamily: "Raleway",
        textTransform: "none",
        fontWeight:"700",
        fontSize: '1rem',
       },
       estimate: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "white"
       }
    }

});