
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';

export default function Hero() {
    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        const offset = 128;
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset;
            sectionElement.scrollIntoView({ behavior: 'smooth' });
            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth',
            });

        }
    };
    return (
        <Box
            id="hero"
            sx={(theme) => ({
                width: '100%',
                backgroundImage:
                    theme.palette.mode === 'light'
                        ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
                        : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
                backgroundSize: '100% 20%',
                backgroundRepeat: 'no-repeat',
            })}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 14, sm: 20 },
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
                    <Typography
                        variant="h1"
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignSelf: 'center',
                            textAlign: 'center',
                            fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                        }}
                    >
                        MA&nbsp;
                        <Typography
                            component="span"
                            variant="h1"
                            sx={{
                                fontSize: 'clamp(3rem, 10vw, 4rem)',
                                color: (theme) =>
                                    theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                            }}
                        >
                            Enterprises
                        </Typography>
                    </Typography>
                    <Typography
                        textAlign="center"
                        color="text.secondary"
                        sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
                    >
                        ELECTRICAL, HVAC, ELV, PLUMBING, FIFRE FIGHTING &
                        FIRE ALARM CONTRACTOR.
                        ELECTRICAL PANEL MANUFACTURER
                    </Typography>
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        alignSelf="center"
                        spacing={1}
                        useFlexGap
                        sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
                    >
                        <Typography
                            textAlign="center"
                            color="text.secondary"
                            sx={{ alignSelf: 'center', width: { sm: '100%', md: '100%' } }}
                        >
                            Constructing Excellence, Delivering Assurance.

                        </Typography>
                        {/* <TextField
                            id="outlined-basic"
                            hiddenLabel
                            size="small"
                            variant="outlined"
                            aria-label="Enter your email address"
                            placeholder="Enter your email address"
                            inputProps={{
                                autoComplete: 'off',
                                'aria-label': 'Enter your email address',
                            }}
                        />
                        <Button variant="contained" color="primary">
                            Start now
                        </Button> */}
                    </Stack>
                    <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
                        Transforming Spaces, Enhancing Lives.
                    </Typography>
                    <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
                        {/* Start Building us with today &quot;Start now&quot; you agree to our&nbsp; */}
                        <Link onClick={() => scrollToSection('pricing')} color="primary">
                            Contact us
                        </Link>
                        .
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
}