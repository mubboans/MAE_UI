import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Hero() {
    const scrollToSection = (sectionId) => {
      const sectionElement = document.querySelector(
        `[data-section="${sectionId}"]`
      ); // Use a data attribute
      const offset = 128;
      if (sectionElement) {
        const targetScroll = sectionElement.offsetTop - offset;
        window.scrollTo({
          top: targetScroll,
          behavior: "smooth",
        });
      }
    };

    return (
      <Box
        id="hero"
        sx={(theme) => ({
          width: "100%",
          borderBottom: "3px solid",
          borderColor: "text.primary",
          backgroundColor: "background.default",
          backgroundImage:
            theme.palette.mode === "light"
              ? "linear-gradient(90deg, rgba(255, 213, 0, 0.44) 0 50%, transparent 50% 100%), linear-gradient(#111111 1px, transparent 1px), linear-gradient(90deg, #111111 1px, transparent 1px)"
              : `linear-gradient(90deg, ${alpha(
                  "#ffd500",
                  0.22
                )} 0 50%, transparent 50% 100%), linear-gradient(#fffdf2 1px, transparent 1px), linear-gradient(90deg, #fffdf2 1px, transparent 1px)`,
          backgroundSize: "100% 100%, 44px 44px, 44px 44px",
        })}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "stretch", md: "center" },
            pt: { xs: 12, sm: 16, md: 18 },
            pb: { xs: 6, sm: 10 },
          }}
        >
          <Stack
            spacing={{ xs: 2, sm: 3 }}
            useFlexGap
            sx={{
              width: "100%",
              maxWidth: 1060,
              p: { xs: 2, sm: 4 },
              bgcolor: "background.paper",
              border: "3px solid",
              borderColor: "text.primary",
              boxShadow: (theme) =>
                theme.palette.mode === "light"
                  ? { xs: "6px 6px 0 #111", sm: "12px 12px 0 #111" }
                  : { xs: "6px 6px 0 #ffd500", sm: "12px 12px 0 #ffd500" },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "flex-start", md: "center" }, // Added: ensures items align properly in column mode
                alignSelf: { xs: "flex-start", md: "center" },
                textAlign: { xs: "left", md: "center" },
                fontSize: { xs: "3.1rem", sm: "4.8rem", md: "6rem" },
                maxWidth: "100%",
                minWidth: 0, // Added: crucial fix — allows flex children to shrink below intrinsic width
                wordBreak: "break-word",
              }}
            >
              MA
              <Typography
                component="span"
                variant="h1"
                sx={{
                  ml: { xs: 0, sm: 1.5 },
                  mt: { xs: 0.5, sm: 0 }, // Added: small vertical spacing when stacked on mobile
                  px: 1,
                  color: "#111111",
                  bgcolor: "primary.light",
                  border: "3px solid",
                  borderColor: "text.primary",
                  fontSize: { xs: "1.8rem", sm: "inherit" }, // Fixed: reduced from 2.1rem so it fits on 320px screens
                  whiteSpace: { xs: "normal", sm: "nowrap" }, // Fixed: allow natural flow on mobile, nowrap only on larger screens
                  maxWidth: "100%", // Added: prevent overflow
                  display: "inline-block", // Added: makes it respect container width while keeping box styling
                }}
              >
                Enterprises
              </Typography>
            </Typography>
            <Typography
              color="text.secondary"
              sx={{
                alignSelf: { xs: "flex-start", md: "center" },
                width: { xs: "100%", md: "82%" },
                textAlign: { xs: "left", md: "center" },
                fontWeight: 700,
                fontSize: { xs: "1rem", sm: "1.2rem" },
              }}
            >
              ELECTRICAL, HVAC, ELV, PLUMBING, FIRE FIGHTING & FIRE ALARM
              CONTRACTOR. ELECTRICAL PANEL MANUFACTURER
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignSelf={{ xs: "stretch", md: "center" }}
              spacing={1.5}
              useFlexGap
              sx={{ pt: 1, width: { xs: "100%", sm: "auto" } }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => scrollToSection("contact")}
                sx={{ width: { xs: "100%", sm: "auto" } }}
              >
                Contact Us
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollToSection("highlights")}
                sx={{ width: { xs: "100%", sm: "auto" } }}
              >
                View Projects
              </Button>
            </Stack>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                gap: 1.5,
                pt: 2,
              }}
            >
              {[
                "Turnkey MEP Works",
                "Testing & Commissioning",
                "Panels & Site Execution",
              ].map((item) => (
                <Typography
                  key={item}
                  variant="body2"
                  sx={{
                    p: 1.5,
                    bgcolor: "secondary.light",
                    color: "#111111",
                    border: "3px solid",
                    borderColor: "text.primary",
                    fontWeight: 900,
                    textAlign: "center",
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
            <Typography
              variant="caption"
              sx={{ opacity: 0.9, fontWeight: 700 }}
            >
              Constructing Excellence, Delivering Assurance. Transforming
              Spaces, Enhancing Lives.
            </Typography>
          </Stack>
        </Container>
      </Box>
    );
}
