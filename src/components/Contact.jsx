import { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import CallIcon from '@mui/icons-material/Call';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import postEmail from '../servies/emailer';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        query: '',
    });
    // const [open,setOpen] = useState(false);
    const [disable, setdisable] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        setdisable(true)
        console.log(formData, 'formData values');


        await postEmail(formData);
        console.log('data submitted');

        setdisable(false);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            contact: '',
            query: '',
        })
    };


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
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
                    width: { sm: '100%', md: '100%' },
                    textAlign: { sm: 'left', md: 'center' },
                }}
            >
                <Grid container spacing={3} alignItems="center" justifyContent="center">
                    <Grid
                        item

                        xs={12}
                        md={7}
                    >


                        <Box
                            sx={{
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <ConnectWithoutContactIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Contact Us
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                <Grid container style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }} spacing={4}>
                                    <Grid item xs={12} sm={6} md={5}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="First Name"
                                            variant="outlined"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            autoFocus
                                        />

                                    </Grid>
                                    <Grid item xs={12} sm={6} md={5}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            id="lastName"
                                            label="Last Name"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={5}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={5}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="contact"
                                            label="Contact"
                                            type="text"
                                            id="contact"
                                            value={formData.contact}
                                            onChange={handleInputChange}
                                        />
                                    </Grid>
                                    <Grid item xs={11}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="query"
                                            label="Enter your query"
                                            type="text"
                                            id="address"
                                            value={formData.query}
                                            onChange={handleInputChange}
                                            multiline
                                            maxRows={4}
                                        />
                                        {/* <FormControlLabel
                                            control={<Checkbox defaultChecked color="primary" />}
                                           
                                        />
                                         */}
                                        <Checkbox defaultChecked color="secondary" />
                                        I want to receive inspiration, marketing promotions and updates via email.
                                    </Grid>
                                    <Button
                                        type="submit"
                                        disabled={disable}
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Send
                                    </Button>
                                </Grid>
                                {/* <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            Already have an account? Sign in
                                        </Link>
                                    </Grid>
                                </Grid> */}
                            </Box>
                        </Box>


                    </Grid>

                    <Grid
                        item
                        xs={12}
                        md={5}

                    >
                        <Box
                            style={{
                                width: '100%',
                                backgroundImage: 'linear-gradient(120deg, #FFF,#CEE5FD)',
                                backgroundSize: '100% 20%',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >

                            <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        display: 'flex',
                                        flexDirection: { xs: 'column', md: 'row' },
                                        alignSelf: 'center',
                                        textAlign: 'center',
                                        fontSize: 'clamp(2.5rem, 10vw, 4rem)',
                                    }}
                                >
                                    MA&nbsp;
                                    <Typography
                                        component="span"
                                        variant="h6"
                                        sx={{
                                            fontSize: 'clamp(1rem, 10vw, 4rem)',
                                            color: (theme) =>
                                                theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                                        }}
                                    >
                                        Enterprises
                                    </Typography>

                                </Typography>
                                <Typography variant="caption" textAlign="center" sx={{ opacity: 0.8 }}>
                                    MEP Excellence, Every Time, Every Project
                                </Typography>
                                <Grid container style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }} spacing={2}>
                                    <Grid item xs={4} sm={6} md={3}

                                        className='grid_end_content'
                                    >
                                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                            <CallIcon />
                                        </Avatar>


                                    </Grid>
                                    <Grid item xs={8} sm={6} md={9}
                                        className='grid_start_content'

                                    >
                                        <a style={{
                                            textDecoration: 'none'
                                        }} href={'tel:+91 8286132845'}>
                                            <Typography
                                                textAlign="center"
                                                color="primary.main"

                                            >

                                                +91 8286132845
                                            </Typography>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4} sm={6} md={3}
                                        className='grid_end_content'                               >
                                        <Avatar sx={{ m: 1, bgcolor: 'secondary.primary' }}>
                                            <AllInboxIcon />
                                        </Avatar>


                                    </Grid>
                                    <Grid item xs={8} sm={6} md={9}
                                        className='grid_start_content'
                                    >
                                        <a style={{
                                            textDecoration: 'none'
                                        }} href={'mailto:maenterprises.bz@gmail.com?subject=Interest in Work'}>
                                            <Typography
                                                textAlign="center"
                                                color="primary.main"
                                            >

                                                info@maenterprisse.com
                                            </Typography>
                                        </a>
                                    </Grid>
                                    <Grid item xs={4} sm={6} md={3}
                                        className='grid_end_content'
                                    >
                                        <Avatar sx={{ m: 1, bgcolor: 'secondary.primary' }}>
                                            <LocationCityIcon />
                                        </Avatar>


                                    </Grid>
                                    <Grid item xs={8} sm={6} md={9} className='grid_start_content' >

                                        <Typography
                                            textAlign="center"
                                            color="primary.main"
                                        >

                                            Maharashtra,India
                                        </Typography>

                                    </Grid>
                                </Grid>




                            </Stack>
                        </Box>

                    </Grid>

                </Grid>
            </Box>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={disable}
                autoHideDuration={1200}
                message="Your Data Submitted"
                key={{ vertical: 'bottom', horizontal: 'right' }}
            />
        </Container>
    )
}

export default Contact