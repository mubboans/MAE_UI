import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import {



    CardHeader
    // Avatar
} from '@mui/material';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
// import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
// import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
// import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import { useTheme } from '@mui/material';
// import AspectRatio from '@mui/joy/AspectRatio';
import { Button, CardActionArea, CardActions } from '@mui/material';
import card1 from "../assets/card1.png"
import card2 from "../assets/card2.png"
import card3 from "../assets/card3.png"
import card4 from "../assets/card4.png"
import card5 from "../assets/card5.png"
import card6 from "../assets/card6.png"
const items = [
    {

        title: 'SBUT CL-3 Al-Sa’adaah Towers',
        contractor:
            'Capacite Infraprojects',
        duration:
            '08 Jun 2016 to 24 May 2019',
        description3:
            'Project Contract Value: - 8.70 Cr.',
        image: card1,
        values: '8.70 Crores'
    },
    {

        title: 'Oberoi Enigma Tower ',
        description:
            'Experience unmatched durability that goes above and beyond with lasting investment.',
        contractor:
            'Capacite Infraprojects',
        duration:
            ' 1 Feb 2017 to 25 March 2019',
        image: card2,
        values: '8 Crores'
    },
    {

        title: 'Big Bazar @ Vapi',
        description:
            'Integrate our product into your routine with an intuitive and easy-to-use interface.',
        contractor:
            'Future Retail',
        image: card3,
        duration:
            '15 Sept 2017 to 21 Dec 2017',
        values: '60 lakhs'
    },
    {

        title: 'Maharashtra Police Building',
        contractor:
            'RNB Infra Projects pvt',
        duration:
            '20 Jun 2021 to 20 may 2023 ',
        description:
            'Stay ahead with features that set new standards, addressing your evolving needs better than the rest.',
        image: card4,
        values: '2.70 Crores'
    },
    {

        duration:
            '20 Jun 2021 to 20 may 2023',
        title: 'Data Center -2 ',
        contractor:
            'Future Retail Ltd',
        description:
            'Count on our responsive customer support, offering assistance that goes beyond the purchase.',
        image: card5,
        values: '1.45Cr'
    },
    {
        icon: <QueryStatsRoundedIcon />,
        title: 'Goregoan Police Station',
        duration:
            '08 Jun 2016 to 24 May 2019',
        contractor:

            'RNB Infra Projects',
        description:
            'Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.',
        image: card6,
        values: '2.40 Crores'
    },
];

export default function Highlights() {
    // const theme = useTheme();
    // let themeProp = {
    //     color: theme.palette.mode === 'light' ? 'black' : 'white',
    //     bgcolor: theme.palette.mode === 'light' ? '#f0fcfc' : "#ADD8E6",
    // }
    return (
        <Box
            id="highlights"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                // color: themeProp.color,
                // bgcolor: themeProp.bgcolor
            }}
        >
            <Container
                sx={{
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
                    <Typography component="h2" variant="h4">
                        Projects
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'grey.400' }}>
                        Experience Our Expertise a Glimpse into Our Project Excellence
                    </Typography>
                </Box>
                {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }}> */}
                <Grid container spacing={2.5}>
                    {items.map((item, index) => (

                        <Grid sx={{

                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',

                        }} item xs={12} md={4} key={index}>
                            {/* <Stack
                                direction="column"
                                color="inherit"
                                component={Card}
                                spacing={1}
                                useFlexGap
                                sx={{
                                    p: 3,
                                    height: '100%',
                                    border: '1px solid',
                                    borderColor: 'grey.800',
                                    background: 'transparent',
                                    // backgroundColor: themeProp.bgcolor,
                                }}
                            >
                                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                                <div>
                                    <Typography fontWeight="medium" gutterBottom>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'grey.400' }}>
                                        {item.description}
                                    </Typography>
                                </div>
                            </Stack> */}
                            {/* <Card sx={{ display: 'flex' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ flex: '1 0 auto' }}>
                                            <Typography component="div" variant="subtitle1">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="subtitle2" color="text.secondary" component="div">
                                                {item.description}
                                            </Typography>
                                        </CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                            <IconButton aria-label="previous">
                                                {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                                            </IconButton>
                                            <IconButton aria-label="play/pause">
                                                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                                            </IconButton>
                                            <IconButton aria-label="next">
                                                {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                                            </IconButton>
                                            <CardMedia
                                                component="img"

                                                sx={{ width: 200, borderRadius: 10, height: 150 }}
                                                image={item.image}

                                            />
                                        </Box>
                                    </Box>
                                </Card>
                                 */}
                            <Card>
                                <div>
                                    <CardHeader
                                        title={item.title}
                                    />
                                    <CardContent>
                                        {/* <Typography variant="subtitle1" >{item.title}</Typography> */}

                                        <CardMedia>
                                            <img
                                                src={item.image}
                                                // srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                                                loading="lazy"
                                                className='card-img'

                                            />
                                        </CardMedia>
                                    </CardContent>

                                </div>
                                {/* <AspectRatio minHeight="120px" maxHeight="200px"> */}

                                {/* </AspectRatio> */}
                                <CardActions orientation="horizontal">
                                    <div>
                                        <Typography variant="subtitle2">Principal Contractor: {item.contractor}</Typography>
                                        <Typography level="body-xs">Contract Duration:{item.duration}</Typography>
                                        <Typography fontSize="lg" fontWeight="lg">
                                            Project Contract Value:<b> {item.values}</b>
                                        </Typography>
                                    </div>
                                </CardActions>
                            </Card>
                        </Grid>

                    ))}
                </Grid>
                {/* </Box> */}

            </Container >
        </Box >
    );
}