import { Box, Container, Typography, Button, Grid, Card, CardContent, Divider, Stack } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import LayersIcon from '@mui/icons-material/Layers';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import MemoryIcon from '@mui/icons-material/Memory';
import coverImg from '../assets/Cover.png';
import bookPdf from '../assets/Book.pdf';



export default function Home() {
  return (
    <Box>
      {/* 
        ================ HERO ================
      */}
      <Box 
        component="section" 
        id="hero"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          pt: 12, pb: 8,
          background: 'linear-gradient(180deg, #080c14 0%, #0b1120 40%, #0f172a 100%)',
        }}
      >
        {/* Glow effect */}
        <Box sx={{
          position: 'absolute',
          top: '30%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '800px', height: '800px',
          background: 'radial-gradient(ellipse at center, rgba(34, 211, 238, 0.08), transparent 70%)',
          pointerEvents: 'none',
        }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                animation: 'fadeSlideUp 0.8s ease-out forwards',
                '@keyframes fadeSlideUp': {
                  '0%': { opacity: 0, transform: 'translateY(30px)' },
                  '100%': { opacity: 1, transform: 'translateY(0)' }
                }
              }}>
                <Box 
                  sx={{ 
                    display: 'inline-block', px: 2, py: 0.5, mb: 3, 
                    borderRadius: 10, border: '1px solid rgba(34, 211, 238, 0.25)', 
                    bgcolor: 'rgba(34, 211, 238, 0.05)', color: 'primary.main',
                    fontWeight: 500, fontSize: '0.85rem', letterSpacing: '1px'
                  }}
                >
                  First Edition · 2026
                </Box>
                <Typography variant="h1" sx={{ color: 'text.primary', mb: 1, fontSize: { xs: '3rem', md: '4.5rem' } }}>
                  The Last
                </Typography>
                <Typography variant="h1" sx={{ 
                  mb: 3, fontSize: { xs: '3rem', md: '4.5rem' },
                  background: 'linear-gradient(135deg, #d4c5a0, #c4a44e)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  Abstraction
                </Typography>
                <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, mb: 2, lineHeight: 1.6, maxWidth: 480 }}>
                  How Humans Abstracted Away from Physics, and Built the System That Bypasses Abstractions
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.disabled', mb: 5 }}>
                  by <Box component="span" sx={{ color: 'text.secondary', fontWeight: 500 }}>Lokeshwar Reddy Nandanapalli</Box>
                </Typography>
                
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    size="large"
                    startIcon={<DownloadIcon />}
                    href={bookPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download PDF — Free
                  </Button>
                  <Button variant="outlined" color="secondary" size="large" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                    Learn More
                  </Button>
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ 
                animation: 'zoomIn 1s ease-out 0.3s forwards',
                opacity: 0,
                '@keyframes zoomIn': {
                  '0%': { opacity: 0, transform: 'scale(0.9)' },
                  '100%': { opacity: 1, transform: 'scale(1)' }
                }
              }}>
                <Box sx={{
                  position: 'relative',
                  perspective: 1200,
                  transformStyle: 'preserve-3d',
                  animation: 'float 6s ease-in-out infinite',
                  '@keyframes float': {
                    '0%, 100%': { transform: 'rotateY(-18deg) rotateX(3deg) translateY(0)' },
                    '50%': { transform: 'rotateY(-18deg) rotateX(3deg) translateY(-15px)' }
                  },
                  '&:hover': {
                    transform: 'rotateY(-10deg) rotateX(0deg) translateY(-5px) !important', // overrides animation momentarily on hover
                    transition: 'transform 0.5s ease',
                  }
                }}>
                  <Box component="img" src={coverImg} alt="Book Cover" sx={{
                    width: { xs: 260, sm: 320, md: 400 },
                    borderRadius: 2,
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 80px rgba(34, 211, 238, 0.08)',
                  }} />
                  {/* Spine effect */}
                  <Box sx={{
                    position: 'absolute', top: 0, left: -25, width: 25, height: '100%',
                    background: 'linear-gradient(90deg, #0e1a2e, #152238)',
                    transform: 'rotateY(90deg)', transformOrigin: 'right center',
                    borderRadius: '3px 0 0 3px',
                  }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 
        ================ ABOUT ================
      */}
      <Box component="section" id="about" sx={{ py: 12, backgroundColor: '#0b1120' }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 8, textAlign: { xs: 'left', md: 'center' } }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 3 }}>About the Book</Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 3 }}>A Journey Through <Box component="em" sx={{ color: 'secondary.main', fontStyle: 'italic' }}>Every Layer</Box> of Computing</Typography>
          </Box>
          <Grid container spacing={4}>
            {[
              { 
                icon: <LayersIcon fontSize="large" sx={{ color: 'primary.main' }} />, 
                title: 'From Ground Up', 
                desc: 'Trace the complete evolution of computing, from the raw physics of electrons and transistors, through logic gates, processors, and programming languages, all the way to the cutting edge of AI.'
              },
              { 
                icon: <AutoGraphIcon fontSize="large" sx={{ color: 'primary.main' }} />, 
                title: 'Layers of Abstraction', 
                desc: 'Understand how each layer of computing builds on the one below it, creating increasingly powerful abstractions that let us do more while knowing less about what\'s underneath.'
              },
              { 
                icon: <MemoryIcon fontSize="large" sx={{ color: 'primary.main' }} />, 
                title: 'The Final Layer', 
                desc: 'Discover how AI agents represent the "last abstraction", systems that can learn, reason, and act autonomously, bypassing the very abstraction layers humans built over decades.'
              }
            ].map((feature, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', p: 1 }}>
                  <CardContent>
                    <Box sx={{ 
                      width: 56, height: 56, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      bgcolor: 'rgba(34, 211, 238, 0.05)', border: '1px solid rgba(34, 211, 238, 0.2)', mb: 3
                    }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" sx={{ mb: 2 }}>{feature.title}</Typography>
                    <Typography variant="body1" color="text.secondary">{feature.desc}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>



      {/* 
        ================ AUTHOR ================
      */}
      <Box component="section" id="author" sx={{ py: 12 }}>
        <Container maxWidth="md">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 3 }}>The Author</Typography>
                <Typography variant="h3" sx={{ mt: 1 }}>Lokeshwar Reddy <Box component="span" sx={{ color: 'secondary.main', fontStyle: 'italic' }}>Nandanapalli</Box></Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>


    </Box>
  );
}
