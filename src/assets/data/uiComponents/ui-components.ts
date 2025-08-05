import {styled} from "@mui/material/styles";
import {Button, Typography} from "@mui/material";

export const uiComponents = {
    Title: styled(Typography)({
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: '2.9rem',
        fontWeight: '600',

        '@media screen and (max-width: 1440px)': {
            fontSize: '2.45rem'
        },

        '@media screen and (max-width: 1000px)': {
            fontSize: '1.55rem'
        },
        '@media screen and (max-width: 767px)': {
            fontSize: '1.55rem',
            textAlign: 'center',
            width: '12em'
        },

        '@media screen and (max-width: 500px)': {
            fontSize: '1.25rem',
        },
    }),

    Paragraph: styled(Typography)({
        marginTop: '25px',
        color: 'white',
        fontWeight: '400',
        fontSize: '1.38rem',
        width: '112%',
        whiteSpace: 'wrap',

        '@media screen and (max-width: 1440px)': {
            fontSize: '1.17rem',
            marginTop: '20px'
        },

        '@media screen and (max-width: 1400px)': {
            width: '100%'
        },

        '@media screen and (max-width: 1000px)': {
            fontSize: '.9rem',
        },
        '@media screen and (max-width: 767px)': {
            textAlign: 'center',
            width: '18.5em',
            marginTop: '15px',
            fontSize: '1rem'
        },
        '@media screen and (max-width: 500px)': {
            fontSize: '.9rem',
        },
    }),

    WhiteButton: styled(Button)({
        color: 'hsl(257, 40%, 49%)',
        backgroundColor: 'white',
        width: '11.5em',
        marginTop: '26px',
        fontSize: '1.3rem',
        textTransform: 'capitalize',
        height: '3.2em',
        borderRadius: '50px',
        boxShadow: '0 2px 10px 0 gray',
        transition: 'background-color 0.5s ease',

        '&:hover': {
            backgroundColor: 'hsl(300, 69%, 71%)',
            color: 'white',
        },

        '@media screen and (max-width: 1440px)': {
            width: '10.8em',
            height: '3em',
            fontSize: '1.17rem',
            marginTop: '20px'
        },
        '@media screen and (max-width: 1000px)': {
            width: '10em',
            height: '3em',
            fontSize: '.8rem',
            marginTop: '25px'
        },
        '@media screen and (max-width: 767px)': {
            width: '15.5em',
            height: '3.1em'
        },
    })
}