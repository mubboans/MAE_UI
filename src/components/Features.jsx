import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import vs from "../assets/aboutbg.svg";
import mission from "../assets/mission.svg"
import obj from "../assets/obj.svg";
import darkabo from "../assets/darkabout.svg"

const items = [
    {
        icon: <ViewQuiltRoundedIcon />,
        title: 'Our Vision',
        description:
            'To be a respectable building contractor delivering beyond expectation, always.',
        imageLight: vs,
        imageDark: darkabo,
    },
    {
        icon: <EdgesensorHighRoundedIcon />,
        title: 'Our Mission',
        description:
            'To procure projects at competitive pricing, provide safe working conditions and deliver quality work within reasonable time frame.',
        imageLight: mission,
        imageDark: obj,
    },
    {
        icon: <DevicesRoundedIcon />,
        title: 'Our objective',
        description:
            "Our emphasis on clear communication and follow through procedures ensures that client’s objectives are top priority in the planning and execution of all our processes.",
        imageLight: obj,
        imageDark: vs,
    },
];

export default function Features() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const [theme, setTheme] = React.useState(0);
    const handleItemClick = (index) => {
        setSelectedItemIndex(index);
    };

    const selectedFeature = items[selectedItemIndex];

    return (
        <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
            <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                    <div>
                        <Typography component="h2" variant="h4" color="text.primary">
                            MA ENTERPRISES
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{ mb: { xs: 2, sm: 4 } }}
                        >
                            MA Enterprises formly known as V-Tek Power Controls began as a general works contractor in 2010. Over the years, the group has undertaken many challenging projects and accumulated skills, know-how and experiences in design and build solutions, project management services, and related engineering works.
                        </Typography>
                    </div>
                    <Grid container item gap={1} sx={{ display: { xs: 'auto', sm: 'none' } }}>
                        {items.map(({ title }, index) => (
                            <Chip
                                key={index}
                                label={title}
                                onClick={() => handleItemClick(index)}
                                sx={{
                                    // borderColor: (x) => {
                                    //     if (x.palette.mode === 'light') {
                                    //         return selectedItemIndex === index ? 'primary.light' : '';
                                    //     }
                                    //     return selectedItemIndex === index ? 'primary.light' : '';
                                    // },
                                    background: (x) => {
                                        if (x.palette.mode === 'light') {
                                            return selectedItemIndex === index ? 'none' : '';
                                        }
                                        return selectedItemIndex === index ? 'none' : '';
                                    },
                                    backgroundColor: selectedItemIndex === index ? 'primary.main' : '',
                                    '& .MuiChip-label': {
                                        color: selectedItemIndex === index ? '#fff' : '',
                                    },
                                }}
                            />
                        ))}
                    </Grid>
                    <Box
                        component={Card}
                        // variant="outlined"
                        sx={{
                            display: { xs: 'auto', sm: 'none' },
                            mt: 4,
                        }}
                    >
                        <Box
                            sx={{
                                backgroundImage: (x) =>
                                    setTheme(x.palette.mode)
                                // backgroundSize: 'cover',
                                // backgroundPosition: 'center',
                                // minHeight: 280,
                            }}
                        >
                            <img src={theme === 'light'
                                ? items[selectedItemIndex].imageLight
                                : items[selectedItemIndex].imageDark} width='420' height='200' />
                        </Box>
                        <Box sx={{ px: 2, pb: 2 }}>
                            <Typography color="text.primary" variant="body2" fontWeight="bold">
                                {selectedFeature.title}
                            </Typography>
                            <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                                {selectedFeature.description}
                            </Typography>
                            <Link
                                color="primary"
                                variant="body2"
                                fontWeight="bold"
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    '& > svg': { transition: '0.2s' },
                                    '&:hover > svg': { transform: 'translateX(2px)' },
                                }}
                            >
                                <span>Contact Us</span>
                                <ChevronRightRoundedIcon
                                    fontSize="small"
                                    sx={{ mt: '1px', ml: '2px' }}
                                />
                            </Link>
                        </Box>
                    </Box>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                        spacing={2}
                        useFlexGap
                        sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
                    >
                        {items.map(({ icon, title, description }, index) => (
                            <Card
                                key={index}
                                // variant="outlined"
                                component={Button}
                                onClick={() => handleItemClick(index)}
                                sx={{
                                    p: 3,
                                    height: 'fit-content',
                                    width: '100%',
                                    background: 'none',
                                    backgroundColor:
                                        selectedItemIndex === index ? 'action.selected' : undefined,
                                    // borderColor: (x) => {
                                    //     if (x.palette.mode === 'light') {
                                    //         return selectedItemIndex === index
                                    //             ? 'primary.light'
                                    //             : 'grey.200';
                                    //     }
                                    //     return selectedItemIndex === index ? 'primary.dark' : 'grey.800';
                                    // },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        textAlign: 'left',
                                        flexDirection: { xs: 'column', md: 'row' },
                                        alignItems: { md: 'center' },
                                        gap: 2.5,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            color: (x) => {
                                                if (x.palette.mode === 'light') {
                                                    return selectedItemIndex === index
                                                        ? 'primary.main'
                                                        : 'grey.300';
                                                }
                                                return selectedItemIndex === index
                                                    ? 'primary.main'
                                                    : 'grey.700';
                                            },
                                        }}
                                    >
                                        {icon}
                                    </Box>
                                    <Box sx={{ textTransform: 'none' }}>
                                        <Typography
                                            color="text.primary"
                                            variant="body2"
                                            fontWeight="bold"
                                        >
                                            {title}
                                        </Typography>
                                        <Typography
                                            color="text.secondary"
                                            variant="body2"
                                            sx={{ my: 0.5 }}
                                        >
                                            {description}
                                        </Typography>
                                        <Link
                                            color="primary"
                                            variant="body2"
                                            fontWeight="bold"
                                            sx={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                '& > svg': { transition: '0.2s' },
                                                '&:hover > svg': { transform: 'translateX(2px)' },
                                            }}
                                            onClick={(event) => {
                                                event.stopPropagation();
                                            }}
                                        >
                                            <span>Contact Us</span>
                                            <ChevronRightRoundedIcon
                                                fontSize="small"
                                                sx={{ mt: '1px', ml: '2px' }}
                                            />
                                        </Link>
                                    </Box>
                                </Box>
                            </Card>
                        ))}
                    </Stack>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ display: { xs: 'none', sm: 'flex' }, width: '100%' }}
                >
                    <Card
                        // variant="outlined"
                        sx={{
                            height: '100%',
                            width: '100%',
                            display: { xs: 'none', sm: 'flex' },
                            pointerEvents: 'none',
                        }}
                    >
                        <Box
                            sx={{
                                m: 'auto',
                                width: 420,
                                height: 500,
                                backgroundSize: 'contain',
                                backgroundImage: (x) =>
                                    setTheme(x.palette.mode)
                                // x.palette.mode === 'light'
                                //     ? items[selectedItemIndex].imageLight
                                //     : items[selectedItemIndex].imageDark,

                            }}
                        >
                            <img src={theme == 'light'
                                ? items[selectedItemIndex].imageLight
                                : items[selectedItemIndex].imageDark} width='420' height='500' />
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}