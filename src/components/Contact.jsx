import { useRef, useState } from 'react';
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
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    query: "",
  });
  // const [open,setOpen] = useState(false);
//   const contactRef = useRef(null); // Create a ref for the Contact section
  const [disable, setdisable] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setdisable(true);
    console.log(formData, "formData values");

    await postEmail(formData);
    console.log("data submitted");

    setdisable(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      query: "",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <Container
      data-section="contact"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "100%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                marginTop: { xs: 0, md: 8 },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: { xs: 2, sm: 3 },
                bgcolor: "background.paper",
                border: "3px solid",
                borderColor: "text.primary",
                boxShadow: (theme) =>
                  theme.palette.mode === "light"
                    ? "8px 8px 0 #111111"
                    : "8px 8px 0 #ffd500",
              }}
            >
              <Avatar
                sx={{
                  m: 1,
                  bgcolor: "secondary.light",
                  color: "#111111",
                  border: "3px solid",
                  borderColor: "text.primary",
                }}
              >
                <ConnectWithoutContactIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Contact Us
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ mt: 3, width: "100%" }}
              >
                <Grid
                  container
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  spacing={{ xs: 2, sm: 3 }}
                >
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      name="firstName"
                      InputLabelProps={{ shrink: true }}
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      id="lastName"
                      label="Last Name"
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      InputLabelProps={{ shrink: true }}
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      name="contact"
                      label="Contact"
                      type="text"
                      id="contact"
                      InputLabelProps={{ shrink: true }}
                      value={formData.contact}
                      onChange={handleInputChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="query"
                      label="Enter your query"
                      type="text"
                      id="address"
                      InputLabelProps={{ shrink: true }}
                      value={formData.query}
                      onChange={handleInputChange}
                      multiline
                      maxRows={4}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 1,
                        mt: 1.5,
                        textAlign: "left",
                        color: "text.secondary",
                        fontWeight: 600,
                      }}
                    >
                      <Checkbox
                        defaultChecked
                        color="secondary"
                        sx={{ p: 0.25 }}
                      />
                      <Typography variant="body2">
                        I want to receive inspiration, marketing promotions and
                        updates via email.
                      </Typography>
                    </Box>
                  </Grid>
                  <Button
                    type="submit"
                    disabled={disable}
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      width: { xs: "calc(100% - 32px)", sm: "auto" },
                    }}
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

          <Grid item xs={12} md={5}>
            <Box
              sx={{
                width: "100%",
                minHeight: "100%",
                p: { xs: 2, sm: 4 },
                bgcolor: "primary.light",
                color: "#111111",
                border: "3px solid",
                borderColor: "text.primary",
                boxShadow: "8px 8px 0 #111111",
              }}
            >
              <Stack spacing={2} useFlexGap sx={{ width: "100%" }}>
                <Typography
                  variant="h6"
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row", md: "column" },
                    alignSelf: "flex-start",
                    textAlign: "left",
                    fontSize: { xs: "2.4rem", sm: "3rem", md: "4rem" },
                    lineHeight: 0.95,
                    width: "100%",
                    minWidth: 0,
                    maxWidth: "100%",
                  }}
                >
                  MA
                  <Typography
                    component="span"
                    variant="h6"
                    sx={{
                      ml: { xs: 0, sm: 1, md: 0 },
                      mt: { xs: 0.5, sm: 0, md: 0.5 },
                      // ↓ Reduced on desktop so the full word fits without breaking
                      fontSize: { xs: "inherit", sm: "inherit", md: "3rem" },
                      color: "#111111",
                      maxWidth: "100%",
                      display: "inline-block",
                      // ↓ Keeps "Enterprises" intact on one line for md and up
                      whiteSpace: { md: "nowrap" },
                    }}
                  >
                    Enterprises
                  </Typography>
                </Typography>
                <Typography
                  variant="caption"
                  textAlign="left"
                  sx={{ opacity: 0.9, fontWeight: 900 }}
                >
                  MEP Excellence, Every Time, Every Project
                </Typography>
                <Grid
                  container
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  spacing={2}
                >
                  <Grid item xs={4} sm={6} md={3} className="grid_end_content">
                    <Avatar
                      sx={{
                        m: 1,
                        bgcolor: "background.paper",
                        color: "#111111",
                        border: "3px solid #111111",
                      }}
                    >
                      <CallIcon />
                    </Avatar>
                  </Grid>
                  <Grid
                    item
                    xs={8}
                    sm={6}
                    md={9}
                    className="grid_start_content"
                  >
                    <a
                      style={{ textDecoration: "none" }}
                      href={"tel:+91 8286132845"}
                    >
                      <Typography
                        textAlign="center"
                        color="#111111"
                        sx={{ fontWeight: 900, wordBreak: "break-word" }}
                      >
                        +91 8286132845
                      </Typography>
                    </a>
                  </Grid>
                  <Grid item xs={4} sm={6} md={3} className="grid_end_content">
                    <Avatar
                      sx={{
                        m: 1,
                        bgcolor: "background.paper",
                        color: "#111111",
                        border: "3px solid #111111",
                      }}
                    >
                      <AllInboxIcon />
                    </Avatar>
                  </Grid>
                  <Grid
                    item
                    xs={8}
                    sm={6}
                    md={9}
                    className="grid_start_content"
                  >
                    <a
                      style={{ textDecoration: "none" }}
                      href={
                        "mailto:maenterprises.bz@gmail.com?subject=Interest in Work"
                      }
                    >
                      <Typography
                        textAlign="center"
                        color="#111111"
                        sx={{ fontWeight: 900, wordBreak: "break-word" }}
                      >
                        info@maenterprisse.com
                      </Typography>
                    </a>
                  </Grid>
                  <Grid item xs={4} sm={6} md={3} className="grid_end_content">
                    <Avatar
                      sx={{
                        m: 1,
                        bgcolor: "background.paper",
                        color: "#111111",
                        border: "3px solid #111111",
                      }}
                    >
                      <LocationCityIcon />
                    </Avatar>
                  </Grid>
                  <Grid
                    item
                    xs={8}
                    sm={6}
                    md={9}
                    className="grid_start_content"
                  >
                    <Typography
                      textAlign="center"
                      color="#111111"
                      sx={{ fontWeight: 900 }}
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
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={disable}
        autoHideDuration={1200}
        message="Your Data Submitted"
        key={{ vertical: "bottom", horizontal: "right" }}
      />
    </Container>
  );
}

export default Contact
