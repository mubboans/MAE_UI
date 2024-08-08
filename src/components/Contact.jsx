
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
const Contact = () => {

    return (
        <Container
            id="contact"
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
                <Grid container spacing={3} alignItems="center" justifyContent="center">
                    <Grid
                        item

                        xs={12}
                        md={6}
                    >

                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={6}

                    >
                        <Box
                            style={{
                                backgroudUrl: "https://blocks.primeng.org/assets/images/blocks/contact/contact-1.png",

                            }}
                        >

                        </Box>

                    </Grid>

                </Grid>
            </Box>
        </Container>
    )
}

export default Contact