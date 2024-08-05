import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import hv from "../assets/hv_lv_systems.png"
import fas from "../assets/fire_alarm_system.png"
import hvac from "../assets/hvac.png";
import plumm from "../assets/plumbing.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


import s1 from "../assets/s1.png";
import s2 from "../assets/s2.jpeg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import s5 from "../assets/s5.webp";
import s6 from "../assets/s6.jpg";
import s7 from "../assets/s7.png";
import s8 from "../assets/s8.png";
import s9 from "../assets/s9.jpg";
const swipperArr = [
    s1, s2, s3, s4, s5, s6, s7, s8, s9
]

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
        occupation: 'Lead Product Designer',
        testimonial:
            "Hydrant, Sprinkler, Drencher, external hydrant & Pump room FF works. Public Address, Card Access, CCTV System, Security System, Audio & Visual Systems, Voice & Data Networking Structured Cabling.",
    },
    {
        avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />,
        name: 'HVAC SYSTEM',
        image: hvac,
        occupation: 'CTO',
        testimonial:
            'DX, VRF/VRV, Chiller, Air Distribution system, Ducting, Copper piping, Annual Rate Contract for all MEP Works, MS & GI pipe with accessories. System Integration with BMS system.',
    },
    {
        avatar: <Avatar alt="Remy Sharp" src="/static/images/avatar/4.jpg" />,
        name: 'PLUMBING SYSTEM',
        occupation: 'Senior Engineer',
        image: plumm,
        testimonial:
            "Domestic piping, Flushing piping, Low noise piping, Shaft piping, Internal water supply, Internal flushing water supply, Prv installation, Pumps installation Panel installation, CI main soil and waste Piping",
    },
    // {
    //     avatar: <Avatar alt="Travis Howard" src="/static/images/avatar/5.jpg" />,
    //     name: 'John Smith',
    //     occupation: 'Product Designer',
    //     testimonial:
    //         "I've tried other similar products, but this one stands out for its innovative features. It's clear that the makers put a lot of thought into creating a solution that truly addresses user needs.",
    // },
    // {
    //     avatar: <Avatar alt="Cindy Baker" src="/static/images/avatar/6.jpg" />,
    //     name: 'Daniel Wolf',
    //     occupation: 'CDO',
    //     testimonial:
    //         "The quality of this product exceeded my expectations. It's durable, well-designed, and built to last. Definitely worth the investment!",
    // },
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
                    textAlign: { sm: 'left', md: 'center' },
                }}
            >
                <Typography component="h2" variant="h4" color="text.primary">
                    Our Services
                </Typography>
                <Typography
                    textAlign="center"
                    style={{
                        marginBottom: '10px'
                    }}
                    color="text.secondary"
                    sx={{ alignSelf: 'center', width: { sm: '100%', md: '100%' } }}
                >
                    MA Enterprises is an end-to-end turnkey solution provider offering services for our clients engineering,
                    procurement, construction, supply, erection, testing and commissioning needs and assist globally in
                    optimizing their performance and maintenance objectives through our services.
                </Typography>
                <Typography style={{
                    marginBottom: '20px'
                }} variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
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
                                style={{
                                    borderRadius: '10px'
                                }}
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
                                    // avatar={testimonial.avatar}
                                    title={testimonial.name}
                                // subheader={testimonial.occupation}
                                />
                                {/* <img
                                    src={logos[index]}
                                    alt={`Logo ${index + 1}`}
                                    style={logoStyle}
                                /> */}
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Grid container spacing={2}>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    {swipperArr.map((x, index) => {
                        // <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex' }}>
                        <SwiperSlide key={index}>
                            <img src={
                                x
                            } height={'auto'} />
                            <span>{index}</span>
                        </SwiperSlide>
                        // </Grid>
                    })}
                </Swiper>
            </Grid>

        </Container>
    );
}