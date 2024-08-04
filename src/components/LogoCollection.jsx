import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import jioicon from "../assets/jioicon.png"
import jpchase from "../assets/jpchaseicon.png"
import sp from "../assets/spi-icon.png"
import sbut from "../assets/sbut-icon.png";
import eq from "../assets/equi.png";
import pri from "../assets/pri.png";
const whiteLogos = [
    jioicon,
    jpchase,
    sp,
    sbut,
    eq,
    pri
];

const darkLogos = [
    jioicon,
    jpchase,
    sp,
    sbut,
    eq,
    pri
];

const logoStyle = {
    width: 'auto',
    height: '80px',
    margin: '0 32px',
    opacity: 0.7,
};

export default function LogoCollection() {
    const theme = useTheme();
    const logos = theme.palette.mode === 'light' ? darkLogos : whiteLogos;

    return (
        <Box id="logoCollection" sx={{ py: 4 }}>
            <Typography
                component="p"
                variant="subtitle2"
                align="center"
                color="text.secondary"
            >
                Trusted by Industry Leaders
            </Typography>
            <Grid container justifyContent="center" sx={{ mt: 5, opacity: 0.6 }}>
                {logos.map((logo, index) => (
                    <Grid item key={index}>
                        <img
                            src={logo}

                            alt={`Fake company number ${index + 1}`}
                            style={logoStyle}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}