import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';
import jioicon from "../assets/jioicon.png"
import jpchase from "../assets/jpchaseicon.png"
import sp from "../assets/spi-icon.png"
import sbut from "../assets/sbut-icon.png";
import eq from "../assets/equi.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
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
                variant="h4"
                align="center"
                color="text.secondary"
            >
                Personal Experience of Working with Industry Giants
            </Typography>
            <Swiper
                slidesPerView={1}
                spaceBetween={40}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                breakpoints={{
                    420: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
            >
                {logos.map((logo, index) => (

                    <SwiperSlide key={index}>
                        <img
                            // className="swiper-img"
                            src={logo}

                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* <Grid container justifyContent="center" sx={{ mt: 5, opacity: 0.6 }}>

                {logos.map((logo, index) => (
                    <Grid item key={index}>
                        <img
                            src={logo}
                            alt={`Fake company number ${index + 1}`}
                            style={logoStyle}
                        />
                    </Grid>
                ))}
            </Grid> */}
        </Box>
    );
}