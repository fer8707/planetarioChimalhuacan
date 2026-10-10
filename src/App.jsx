import { useState } from "react";
import {
  AutoAwesome,
  CalendarMonth,
  CameraAlt,
  Close,
  Email,
  Facebook,
  Groups,
  LocationOn,
  Menu,
  NorthEast,
  RocketLaunch,
  Science,
  Star,
  Theaters,
  Today,
  Visibility,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import domeProjection from "./images/WhatsApp Image 2026-09-24 at 10.19.53 PM (10).jpeg";
import domeExterior from "./images/IMG_1438.jpeg";
import planetModels from "./images/IMG_1219.jpeg";
import schoolVisit from "./images/IMG_2717.jpeg";
import scienceWall from "./images/IMG_2730.jpeg";
import nightExterior from "./images/WhatsApp Image 2026-09-24 at 10.19.53 PM (14).jpeg";
import "./App.css";

const navItems = [
  ["Inicio", "inicio"],
  ["Quiénes somos", "quienes-somos"],
  ["Exhibiciones", "exhibiciones"],
  ["Proyecciones", "proyecciones"],
  ["Talleres", "talleres"],
  ["Visitas", "visitas"],
  ["Eventos", "eventos"],
  ["Galería", "galeria"],
  ["Contacto", "contacto"],
];
const exhibitions = [
  [
    "Sistema Solar",
    "Viaja entre planetas, lunas y asteroides a través de maquetas a escala y experiencias interactivas.",
    <AutoAwesome />,
    "#48cae4",
  ],
  [
    "Simuladores espaciales",
    "Prepárate para una misión: conoce cómo se vive, se trabaja y se explora más allá de la Tierra.",
    <RocketLaunch />,
    "#f4b942",
  ],
  [
    "Realidad virtual",
    "Recorre paisajes cósmicos y observa nuestro planeta desde una perspectiva completamente nueva.",
    <Visibility />,
    "#c77dff",
  ],
  [
    "Historia cósmica",
    "Descubre los grandes momentos que explican el origen del universo y nuestro lugar en él.",
    <Science />,
    "#79e2c0",
  ],
];
const events = [
  [
    "Noches de observación",
    "Mira la Luna, planetas y estrellas con telescopios.",
    <Star />,
  ],
  [
    "Charlas con expertos",
    "Conversaciones cercanas sobre ciencia y exploración.",
    <Groups />,
  ],
  [
    "Exposiciones temporales",
    "Nuevas historias y descubrimientos para visitar.",
    <Theaters />,
  ],
  [
    "Efemérides científicas",
    "Celebremos juntos los días que cambiaron la ciencia.",
    <Today />,
  ],
  [
    "Lunadas",
    "Una noche para compartir preguntas bajo el cielo.",
    <AutoAwesome />,
  ],
];
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#48cae4", contrastText: "#07111f" },
    secondary: { main: "#b968d4" },
    background: { default: "#07111f", paper: "#101d31" },
    text: { primary: "#ffffff", secondary: "#ffffff" },
  },
  typography: {
    fontFamily: '"Manrope", "Helvetica Neue", sans-serif',
    h1: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    h2: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    h3: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    button: { fontWeight: 700, textTransform: "none" },
  },
  shape: { borderRadius: 4 },
  components: {
    MuiButton: { defaultProps: { disableElevation: true } },
    MuiCard: { styleOverrides: { root: { backgroundImage: "none" } } },
  },
});
function SectionHeading({ eyebrow, title, children, light = false }) {
  return (
    <Box sx={{ maxWidth: 700, mb: { xs: 5, md: 7 } }}>
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
        <Box
          sx={{
            width: 28,
            height: 2,
            bgcolor: light ? "primary.main" : "secondary.main",
          }}
        />
        <Typography
          variant="overline"
          sx={{
            color: light ? "primary.main" : "secondary.main",
            letterSpacing: "0.18em",
            fontWeight: 800,
          }}
        >
          {eyebrow}
        </Typography>
      </Stack>
      <Typography
        variant="h2"
        sx={{
          color: "#ffffff",
          fontSize: { xs: "2rem", md: "3rem" },
          lineHeight: 1.08,
          mb: 2,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{ color: "#d5dee7", fontSize: "1.05rem", lineHeight: 1.75 }}
      >
        {children}
      </Typography>
    </Box>
  );
}
function ImagePlaceholder({ label, src, className = "" }) {
  return (
    <Box
      className={`image-placeholder ${className}`}
    >
      <Box component="img" src={src} alt={label} className="placeholder-image" />
      <Box className="image-shade" />
      <Typography variant="caption" className="image-label">{label}</Typography>
    </Box>
  );
}
function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigateTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setDrawerOpen(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        className="site-header"
      >
        <Toolbar
          component={Container}
          maxWidth="xl"
          sx={{ minHeight: { xs: 72, md: 84 } }}
        >
          <Button
            onClick={() => navigateTo("inicio")}
            className="brand"
            sx={{ color: "text.primary", p: 0, minWidth: 0, textAlign: "left" }}
          >
            <span className="brand-mark">
              <RocketLaunch fontSize="small" />
            </span>
            <span>
              <strong>PLANETARIO</strong>
              <small>Digital Chimalhuacán</small>
            </span>
          </Button>
          <Box sx={{ flexGrow: 1 }} />
          <Stack
            component="nav"
            direction="row"
            spacing={{ md: 1, lg: 2 }}
            className="desktop-nav"
          >
            {navItems.map(([label, id]) => (
              <Button
                key={id}
                onClick={() => navigateTo(id)}
                color="inherit"
                size="small"
              >
                {label}
              </Button>
            ))}
          </Stack>
          <IconButton
            color="inherit"
            onClick={() => setDrawerOpen(true)}
            className="mobile-menu"
            aria-label="Abrir menú"
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{ width: 290, p: 2, bgcolor: "background.paper", height: "100%" }}
          role="presentation"
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 3, px: 1 }}
          >
            <Typography variant="h6">Navegación</Typography>
            <IconButton
              onClick={() => setDrawerOpen(false)}
              aria-label="Cerrar menú"
            >
              <Close />
            </IconButton>
          </Stack>
          <List>
            {navItems.map(([label, id]) => (
              <ListItem disablePadding key={id}>
                <ListItemButton onClick={() => navigateTo(id)}>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main">
        <Box component="section" id="inicio" className="hero-section">
          <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
            <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
              <Grid size={{ xs: 12, md: 7 }}>
                <Chip
                  label="Ciencia · Comunidad · Cosmos"
                  size="small"
                  className="hero-chip"
                />
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "3.1rem", sm: "4.4rem", lg: "5.8rem" },
                    lineHeight: 0.98,
                    letterSpacing: "-.045em",
                    mt: 3,
                    mb: 3,
                  }}
                >
                  Bienvenido al
                  <br />
                  <span className="text-gradient">Planetario Digital</span>
                  <br />
                  de Chimalhuacán.
                </Typography>
                <Typography
                  sx={{
                    maxWidth: 580,
                    color: "text.secondary",
                    fontSize: { xs: "1.05rem", md: "1.2rem" },
                    lineHeight: 1.65,
                  }}
                >
                  Un espacio dedicado a la divulgación científica y el asombro
                  por el universo.
                </Typography>
                <Typography
                  color="text.secondary"
                  sx={{ maxWidth: 560, mt: 2, lineHeight: 1.7 }}
                >
                  Descubre exhibiciones, proyecciones inmersivas y actividades
                  para toda la familia. Vive la experiencia de explorar el
                  cosmos sin salir de tu ciudad.
                </Typography>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  sx={{ mt: 4 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigateTo("exhibiciones")}
                    endIcon={<NorthEast />}
                  >
                    Explorar exhibiciones
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => navigateTo("visitas")}
                    endIcon={<CalendarMonth />}
                  >
                    Planear visita
                  </Button>
                </Stack>
                <Box className="hero-visit-info">
                  <Typography className="visit-info-title">
                    Costos de entrada
                  </Typography>
                  <Box className="price-grid">
                    <Box>
                      <span>Público general</span>
                      <strong>$40</strong>
                    </Box>
                    <Box>
                      <span>Niños</span>
                      <strong>$20</strong>
                    </Box>
                    <Box>
                      <span>Adulto mayor</span>
                      <strong>$20</strong>
                    </Box>
                    <Box>
                      <span>
                        Paquete familiar <small>2 adultos · 2 niños</small>
                      </span>
                      <strong>$100</strong>
                    </Box>
                    <Box>
                      <span>
                        Paquete escolar <small>15 estudiantes</small>
                      </span>
                      <strong>$150</strong>
                    </Box>
                  </Box>
                  <Box className="hero-hours">
                    <Typography className="visit-info-title">
                      Horarios
                    </Typography>
                    <Box>
                      <span>Martes a domingo</span>
                      <strong>10:00 – 18:00 h</strong>
                    </Box>
                    <Box>
                      <span>Lunes</span>
                      <strong>Cerrado</strong>
                    </Box>
                    <Typography className="last-function">
                      Última función: 17:00 h
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <Box className="hero-art">
                  <div className="planet planet-one" />
                  <div className="planet planet-two" />
                  <div className="orbit orbit-one" />
                  <div className="orbit orbit-two" />
                  <div className="hero-sun">
                    <RocketLaunch />
                  </div>
                  <Typography className="hero-art-label">
                    Explora lo
                    <br />
                    <strong>inimaginable</strong>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box
          component="section"
          id="quienes-somos"
          className="section section-light"
        >
          <Container maxWidth="xl">
            <SectionHeading
              eyebrow="Nuestra razón de ser"
              title="La curiosidad también transforma comunidades."
              light
            >
              Acercamos la ciencia y la astronomía a todas las personas, creando
              experiencias que despiertan preguntas y abren nuevas
              posibilidades.
            </SectionHeading>
            <Grid container spacing={3} alignItems="stretch">
              <Grid size={{ xs: 12, md: 5 }}>
                <Paper className="mission-panel" elevation={0}>
                  <Typography variant="h4" sx={{ mb: 2 }}>
                    Nuestra misión
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    Promover la apropiación social del conocimiento científico y
                    tecnológico mediante educación no formal, inclusiva y
                    cercana. Cultivamos el pensamiento crítico, la cultura de
                    paz y el bienestar social.
                  </Typography>
                  <Box className="mission-line" />
                </Paper>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <Stack spacing={3} sx={{ height: "100%" }}>
                  <Box>
                    <Typography variant="h5" sx={{ mb: 1 }}>
                      Una visión compartida
                    </Typography>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                      Ser un referente local y nacional como espacio público
                      inclusivo, accesible y socialmente responsable, donde cada
                      visitante pueda reconocerse como parte del universo.
                    </Typography>
                  </Box>
                  <Divider />
                  <Box>
                    <Typography variant="h5" sx={{ mb: 1 }}>
                      Personas que hacen posible la experiencia
                    </Typography>
                    <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                      Nuestro equipo multidisciplinario reúne educadores,
                      divulgadores, técnicos y creadores que convierten la
                      innovación en encuentros memorables con la ciencia.
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box component="section" id="exhibiciones" className="section">
          <Container maxWidth="xl">
            <SectionHeading
              eyebrow="Recorre nuestras salas"
              title="El universo está más cerca de lo que imaginas."
            >
              Toca, observa, experimenta. Cada sala está diseñada para aprender
              haciendo y descubrir que la ciencia empieza con una buena
              pregunta.
            </SectionHeading>
            <Grid container spacing={2}>
              {exhibitions.map(([title, text, icon, color], index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={title}>
                  <Card className="exhibition-card">
                    <Box className="card-number">0{index + 1}</Box>
                    <Box
                      className="exhibition-icon"
                      sx={{ color, borderColor: `${color}55` }}
                    >
                      {icon}
                    </Box>
                    <CardContent sx={{ p: 0 }}>
                      <Typography variant="h5" sx={{ mb: 1.5 }}>
                        {title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ lineHeight: 1.7 }}
                      >
                        {text}
                      </Typography>
                    </CardContent>
                    <NorthEast className="card-arrow" />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        <Box
          component="section"
          id="proyecciones"
          className="immersive-section"
        >
          <Container maxWidth="xl">
            <Grid container spacing={{ xs: 5, md: 10 }} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <Box className="dome-placeholder">
                  <Box
                    component="img"
                    src={domeProjection}
                    alt="Visitantes disfrutando una proyección inmersiva"
                    className="dome-image"
                  />
                  <Box className="dome-shade" />
                  <Box className="dome-caption">
                    <Typography>DOMO DIGITAL</Typography>
                    <span>una ventana al cosmos</span>
                  </Box>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <SectionHeading
                  eyebrow="Funciones todos los días"
                  title="El cielo se cuenta mejor bajo un domo."
                  light
                >
                  Déjate envolver por imágenes, sonidos y narraciones que
                  convierten la astronomía en una experiencia para recordar.
                </SectionHeading>
                <Stack spacing={2} className="projection-list">
                  <Box>
                    <span>01</span>
                    <Typography>
                      <strong>Astronomía</strong> · las historias que escriben
                      las estrellas
                    </Typography>
                  </Box>
                  <Box>
                    <span>02</span>
                    <Typography>
                      <strong>Exploración espacial</strong> · misiones que
                      cambiaron nuestra mirada
                    </Typography>
                  </Box>
                  <Box>
                    <span>03</span>
                    <Typography>
                      <strong>Fenómenos científicos</strong> · el universo en
                      movimiento
                    </Typography>
                  </Box>
                </Stack>
                <Typography color="text.secondary" sx={{ mt: 4 }}>
                  Consulta la cartelera vigente. Recomendado para público
                  escolar, familias y entusiastas del cielo.
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box
          component="section"
          id="talleres"
          className="section section-accent"
        >
          <Container maxWidth="xl">
            <Grid container spacing={5} alignItems="end">
              <Grid size={{ xs: 12, md: 7 }}>
                <SectionHeading
                  eyebrow="Ciencia aplicada"
                  title="Aprender es construir, probar y volver a intentar."
                  light
                >
                  Programas para niñas, niños, jóvenes y adultos que conectan la
                  ciencia, la tecnología y los saberes de nuestra comunidad.
                </SectionHeading>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <Stack
                  direction="row"
                  flexWrap="wrap"
                  gap={1}
                  justifyContent={{ md: "flex-end" }}
                >
                  {[
                    "Robótica",
                    "Astronomía",
                    "Física",
                    "Experimentación",
                    "Cultura",
                  ].map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      variant="outlined"
                      className="accent-chip"
                    />
                  ))}
                </Stack>
              </Grid>
            </Grid>
            <Card className="workshop-banner">
              <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  justifyContent="space-between"
                  spacing={3}
                  alignItems={{ md: "center" }}
                >
                  <Box>
                    <Typography variant="h4" sx={{ mb: 1 }}>
                      Talleres que dejan huella
                    </Typography>
                    <Typography color="text.secondary">
                      Experiencias prácticas para imaginar soluciones y
                      compartir conocimientos.
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    onClick={() => navigateTo("contacto")}
                    endIcon={<NorthEast />}
                  >
                    Conoce la programación
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Container>
        </Box>
        <Box component="section" id="visitas" className="section">
          <Container maxWidth="xl">
            <Grid container spacing={7} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <SectionHeading
                  eyebrow="Para escuelas"
                  title="Una visita que continúa en el aula."
                >
                  Invitamos a instituciones de todos los niveles educativos a
                  agendar recorridos guiados, proyecciones y experiencias
                  diseñadas para aprender en comunidad.
                </SectionHeading>
                <Stack spacing={2}>
                  {[
                    "Recorrido guiado por las exhibiciones",
                    "Proyección inmersiva seleccionada por edad",
                    "Actividades educativas para reforzar la visita",
                  ].map((text) => (
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      key={text}
                    >
                      <Box className="check-mark">✓</Box>
                      <Typography>{text}</Typography>
                    </Stack>
                  ))}
                </Stack>
                <Button
                  variant="outlined"
                  sx={{ mt: 4 }}
                  onClick={() => navigateTo("contacto")}
                  endIcon={<Email />}
                >
                  Solicitar información
                </Button>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <ImagePlaceholder
                  label="Experiencia educativa"
                  src={schoolVisit}
                  className="school-placeholder"
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box
          component="section"
          id="eventos"
          className="section events-section"
        >
          <Container maxWidth="xl">
            <SectionHeading
              eyebrow="Siempre hay algo sucediendo"
              title="Mira arriba. Mira alrededor. Ven a encontrarnos."
            >
              Actividades para observar, conversar y celebrar la ciencia durante
              todo el año.
            </SectionHeading>
            <Grid container spacing={0} className="events-grid">
              {events.map(([title, text, icon]) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={title}>
                  <Box className="event-item">
                    <Box className="event-icon">{icon}</Box>
                    <Box>
                      <Typography variant="h6">{title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {text}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        <Box
          component="section"
          id="galeria"
          className="section gallery-section"
        >
          <Container maxWidth="xl">
            <Grid container spacing={3} alignItems="end">
              <Grid size={{ xs: 12, md: 5 }}>
                <SectionHeading
                  eyebrow="Imágenes y herramientas"
                  title="Un lugar para mirar, aprender y compartir."
                >
                  Encuentra materiales didácticos, guías, infografías y recursos
                  para estudiantes y docentes.
                </SectionHeading>
                <Button variant="outlined" endIcon={<NorthEast />}>
                  Ver recursos educativos
                </Button>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <Grid container spacing={1.5}>
                  <Grid size={{ xs: 7 }}>
                    <ImagePlaceholder
                      label="El domo exterior"
                      src={domeExterior}
                      className="gallery-large"
                    />
                  </Grid>
                  <Grid size={{ xs: 5 }}>
                    <ImagePlaceholder
                      label="Exhibiciones"
                      src={planetModels}
                      className="gallery-small"
                    />
                  </Grid>
                  <Grid size={{ xs: 5 }}>
                    <ImagePlaceholder
                      label="Talleres infantiles"
                      src={scienceWall}
                      className="gallery-small"
                    />
                  </Grid>
                  <Grid size={{ xs: 7 }}>
                    <ImagePlaceholder
                      label="Observaciones nocturnas"
                      src={nightExterior}
                      className="gallery-wide"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      <Box component="footer" id="contacto" className="contact-section">
        <Container maxWidth="xl">
          <Grid container spacing={5}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.4rem" },
                  lineHeight: 1.05,
                  mb: 2,
                }}
              >
                Ven a mirar
                <br />
                <span className="text-gradient">más lejos.</span>
              </Typography>
              <Typography
                color="text.secondary"
                sx={{ maxWidth: 420, lineHeight: 1.7 }}
              >
                Planea tu visita y haz del asombro una experiencia compartida.
              </Typography>
              <Box className="developer-credit">
                <Typography variant="caption" className="developer-credit-label">
                  Sitio desarrollado por
                </Typography>
                <Typography
                  component="a"
                  href="https://github.com/fer8707"
                  target="_blank"
                  rel="noreferrer"
                  className="developer-credit-link"
                >
                  Fernando Tavera <NorthEast fontSize="inherit" />
                </Typography>
              </Box>
              <Stack direction="row" spacing={1} sx={{ mt: 4 }}>
                <IconButton aria-label="Facebook" color="primary">
                  <Facebook />
                </IconButton>
                <IconButton aria-label="Instagram" color="primary">
                  <CameraAlt />
                </IconButton>
                <IconButton aria-label="TikTok" color="primary">
                  <AutoAwesome />
                </IconButton>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Typography
                variant="overline"
                color="primary.main"
                sx={{ letterSpacing: ".16em" }}
              >
                Encuéntranos
              </Typography>
              <Stack spacing={2} sx={{ mt: 2 }}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <LocationOn color="primary" fontSize="small" />
                  <Typography color="text.secondary">
                    Manzana 030, Xochiaca Parte Alta,
                    <br />
                    C.P. 56350, Chimalhuacán,
                    <br />
                    Estado de México.
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Email color="primary" fontSize="small" />
                  <Typography color="text.secondary">
                    planetario.chimalhuacan.2024@gmail.com
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          <Divider sx={{ my: 6, borderColor: "rgba(255,255,255,.1)" }} />
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            spacing={2}
          >
            <Typography variant="caption" color="text.secondary">
              © 2024 Planetario Digital de Chimalhuacán
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Facebook: Planetario Digital Chimalhuacán · Instagram:
              @planetariodigitalchima · TikTok: @planetariodichimalhuacan
            </Typography>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
export default App;
