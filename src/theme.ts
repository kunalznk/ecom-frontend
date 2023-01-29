import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export let theme = createTheme( {
    typography: {
        fontFamily: ["Montserrat"].join(","),
        h1: {
            fontWeight: 800,
            fontSize: "58px",
            lineHeight: 1,
            letterSpacing: "0.013rem"
        },
        h2: {
            fontWeight: 700,
            fontSize: "40px",
            lineHeight: 1,
            letterSpacing: "0.013rem"
        },
        h3: {
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: 1,
            letterSpacing: "0.006rem"
        },
        h4: {
            fontWeight: 500,
            fontSize: "20px",
            lineHeight: 2,
            letterSpacing: "0.013rem"
        },
        h5: {
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: 2,
            letterSpacing: "0.006rem"
        },
        h6: {
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: 2,
            letterSpacing: "0.013rem"
        },
        button: {
            fontWeight: 700,
            fontSize: "14px",
            lineHeight: 2,
            letterSpacing: "0.013rem",
        },
        /* Paragraph */
        body1: {
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: 1,
            letterSpacing: "0.013rem",
        },
        body2: {
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: 1,
            letterSpacing: "0.013rem",
            color: "#737373"

        },
        /* list */
        subtitle1: {
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: 1,
            letterSpacing: "0.013rem"
        },
        /* link */
        subtitle2: {
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: 1,
            letterSpacing: "0.013rem",
            color:"#23A6F0"
        }
    },
    palette:{
        primary:{
            main: "#23A6F0",
            light: "#2A7CC7",
            dark:"#2A7CC7",
            contrastText: "#FFFFFF"
        },
        text: {
            primary: "#252B42",
            secondary:"#737373",
        },


    },
    
    
   
});

theme = responsiveFontSizes(theme);

