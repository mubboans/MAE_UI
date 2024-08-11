import {
    Container,
    Box,
    Typography,
    Grid,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Avatar
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';




// import { Pagination } from 'swiper/modules';



import hv from "../assets/hv_lv_systems.png";
import fas from "../assets/fire_alarm_system.png";
import hvac from "../assets/hvac.png";
import plumm from "../assets/plumbing.png";
import s1 from "../assets/s1.png";
import s7 from "../assets/s7.png";
import s8 from "../assets/s8.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.webp";
import s6 from "../assets/s6.jpg";
import s9 from "../assets/s9.jpg";

// const swipperArr = [s1, s7, s8, s2, s3, s4, s5, s6, s9];

const userTestimonials = [
    {
        avatar: <Avatar alt="HV & LV Systems" src="/static/images/avatar/1.jpg" />,
        name: 'HV & LV Systems ',
        image: hv,
        testimonial:
            "High Voltage Incoming, Low Voltage Distribution with LT Panels, Bus Duct, Transformer, VCB Breakers, DG Gen Set, UPS, Receiving Station, Ring Main Unit, GIS system & Battery Chargers Etc.",
    },
    {
        avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
        name: 'FF & FAS System',
        image: fas,
        testimonial:
            "Hydrant, Sprinkler, Drencher, external hydrant & Pump room FF works. Public Address, Card Access, CCTV System, Security System, Audio & Visual Systems, Voice & Data Networking Structured Cabling.",
    },
    {
        avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />,
        name: 'HVAC SYSTEM',
        image: hvac,
        testimonial:
            'DX, VRF/VRV, Chiller, Air Distribution system, Ducting, Copper piping, Annual Rate Contract for all MEP Works, MS & GI pipe with accessories. System Integration with BMS system.',
    },
    {
        avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/4.jpg" />,
        name: 'PLUMBING SYSTEM',
        image: plumm,
        testimonial:
            "Domestic piping, Flushing piping, Low noise piping, Shaft piping, Internal water supply, Internal flushing water supply, Prv installation, Pumps installation Panel installation, CI main soil and waste Piping",
    },
];

export default function Services() {
    return (
        <Container
            id="testimonials"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 3, sm: 6 },
            }}
        >
            <Box
                sx={{
                    width: { sm: '100%', md: '60%' },
                    textAlign: { sm: 'center', md: 'center' },
                    justifyContent: 'center'
                }}
            >
                <Typography textAlign="center" component="h2" variant="h4" color="text.primary">
                    Our Services
                </Typography>
                <Typography
                    textAlign="center"
                    sx={{ mb: 2 }}
                    color="text.secondary"
                >
                    MA Enterprises is an end-to-end turnkey solution provider offering services for our clients engineering,
                    procurement, construction, supply, erection, testing and commissioning needs and assist globally in
                    optimizing their performance and maintenance objectives through our services.
                </Typography>
                <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
                    We undertake turnkey HV & LV Electrical, HVAC, FF & FAS, Plumbing Contracts involving Supply,
                    Installation, Testing and Commissioning.
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {userTestimonials.map((testimonial, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex' }}>
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                flexGrow: 1,
                                p: 1,
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="auto"
                                style={{ borderRadius: '10px' }}
                                image={testimonial.image}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {testimonial.testimonial}
                                </Typography>
                            </CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    pr: 2,
                                }}
                            >
                                <CardHeader
                                    title={testimonial.name}
                                />
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            {/* <Typography component="h2" variant="h4" color="text.primary">
                Our Services
            </Typography> */}

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
                <SwiperSlide>
                    <img
                        className="swiper-img"
                        src={s1}

                    />
                </SwiperSlide>
                <SwiperSlide>

                    <img
                        src={s2}
                        className="swiper-img"
                    />
                </SwiperSlide>
                <SwiperSlide>

                    <img
                        src={s3}
                        className="swiper-img"
                    />
                </SwiperSlide>
                <SwiperSlide>

                    <img
                        src={s4}
                        className="swiper-img"
                    />
                </SwiperSlide>

                <SwiperSlide>

                    <img
                        src={s5}
                        className="swiper-img"
                    />

                </SwiperSlide>
                <SwiperSlide>

                    <img
                        src={s6}
                        className="swiper-img"
                    />

                </SwiperSlide>
                <SwiperSlide>

                    <img
                        src={s7}
                        className="swiper-img"
                    />

                </SwiperSlide>
                <SwiperSlide>

                    <img
                        src={s8}
                        className="swiper-img"
                    />

                </SwiperSlide>
                <SwiperSlide>

                    <img
                        src={s9}
                        className="swiper-img"
                    />

                </SwiperSlide>

            </Swiper>
        </Container>
    );
}
