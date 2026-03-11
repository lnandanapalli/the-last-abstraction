import { Box, Container, Typography, Button, Grid, Card, CardContent, Divider, Stack } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import LayersIcon from '@mui/icons-material/Layers';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import MemoryIcon from '@mui/icons-material/Memory';
import { motion } from 'framer-motion';

const layers = [
  { level: '09', name: 'Agents', desc: 'Autonomous AI systems that perceive, reason, and act — the final abstraction that closes the loop.', color: '#a78bfa' },
  { level: '08', name: 'LLMs', desc: 'Large Language Models that understand and generate human language with unprecedented capability.', color: '#818cf8' },
  { level: '07', name: 'Neural Networks', desc: 'Architectures inspired by the brain, capable of learning complex patterns from data.', color: '#6366f1' },
  { level: '06', name: 'Machine Learning', desc: 'Systems that improve through experience — learning from data instead of explicit instructions.', color: '#3b82f6' },
  { level: '05', name: 'Algorithms', desc: 'Step-by-step procedures that transform inputs into outputs — the recipes of computation.', color: '#22d3ee' },
  { level: '04', name: 'Programming Languages', desc: 'Human-readable notation systems that compile down to machine instructions.', color: '#14b8a6' },
  { level: '03', name: 'Processors', desc: 'Silicon chips executing billions of operations per second — the engines of computation.', color: '#34d399' },
  { level: '02', name: 'Logic Gates', desc: 'Boolean building blocks — AND, OR, NOT — the fundamental decision-makers of digital circuits.', color: '#a3e635' },
  { level: '01', name: 'Transistors', desc: 'Tiny switches carved in silicon — the physical foundation upon which all of computing rests.', color: '#facc15' },
];

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
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
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
                    href="Book.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download PDF — Free
                  </Button>
                  <Button variant="outlined" color="secondary" size="large" href="#about">
                    Learn More
                  </Button>
                </Stack>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 1, delay: 0.3 }}
              >
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
                  <Box component="img" src="/Cover.png" alt="Book Cover" sx={{
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
              </motion.div>
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
                desc: 'Trace the complete evolution of computing — from the raw physics of electrons and transistors, through logic gates, processors, and programming languages, all the way to the cutting edge of AI.'
              },
              { 
                icon: <AutoGraphIcon fontSize="large" sx={{ color: 'primary.main' }} />, 
                title: 'Layers of Abstraction', 
                desc: 'Understand how each layer of computing builds on the one below it — creating increasingly powerful abstractions that let us do more while knowing less about what\'s underneath.'
              },
              { 
                icon: <MemoryIcon fontSize="large" sx={{ color: 'primary.main' }} />, 
                title: 'The Final Layer', 
                desc: 'Discover how AI agents represent the "last abstraction" — systems that can learn, reason, and act autonomously, bypassing the very abstraction layers humans built over decades.'
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
        ================ THE STACK ================
      */}
      <Box component="section" id="layers" sx={{ py: 12, position: 'relative' }}>
        <Container maxWidth="md">
          <Box sx={{ mb: 8, textAlign: 'center' }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 3 }}>The Stack</Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 3 }}>Nine Layers of <Box component="em" sx={{ color: 'secondary.main', fontStyle: 'italic' }}>Human Ingenuity</Box></Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {layers.map((layer) => (
              <Box key={layer.level} sx={{
                display: 'grid', gridTemplateColumns: '60px 1fr 12px', gap: 3, alignItems: 'center',
                p: 2.5, borderRadius: 2, transition: 'all 0.3s ease',
                '&:hover': { bgcolor: 'rgba(34, 211, 238, 0.05)' },
                '&:hover .layer-bar': { width: 16, boxShadow: `0 0 20px ${layer.color}` },
                '&:hover .layer-num': { color: 'primary.main' }
              }}>
                <Typography className="layer-num" sx={{ fontWeight: 700, color: 'text.disabled', textAlign: 'right', transition: 'color 0.3s' }}>
                  {layer.level}
                </Typography>
                <Box>
                  <Typography variant="h6" sx={{ color: 'text.primary', mb: 0.5, fontFamily: '"Playfair Display", serif' }}>{layer.name}</Typography>
                  <Typography variant="body2" color="text.secondary">{layer.desc}</Typography>
                </Box>
                <Box className="layer-bar" sx={{
                  width: 8, height: '100%', minHeight: 40, borderRadius: 1, bgcolor: layer.color,
                  transition: 'all 0.3s ease'
                }} />
              </Box>
            ))}
            
            <Box sx={{
              display: 'grid', gridTemplateColumns: '60px 1fr', gap: 3, alignItems: 'center',
              p: 2.5, mt: 1, borderTop: '1px dashed rgba(34, 211, 238, 0.2)'
            }}>
              <Typography sx={{ fontWeight: 700, color: 'text.disabled', textAlign: 'right' }}>00</Typography>
              <Box>
                <Typography variant="h6" sx={{ color: '#0e7490', fontFamily: '"Playfair Display", serif' }}>Physics Ground</Typography>
                <Typography variant="body2" color="text.disabled">Electrons, quantum mechanics, and the fundamental forces — where it all begins.</Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* 
        ================ BOOK EXCERPTS ================
      */}
      <Box component="section" id="excerpts" sx={{ py: 12, backgroundColor: '#0b1120' }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 3 }}>From the Pages</Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 3 }}>Book Highlights</Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: 2 }}>From the Preface</Typography>
                  <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary', fontSize: '1.05rem', fontStyle: 'italic', position: 'relative' }}>
                    <FormatQuoteIcon sx={{ position: 'absolute', top: -10, left: -15, color: 'rgba(34, 211, 238, 0.1)', fontSize: 60, zIndex: -1 }} />
                    "For three and a half centuries, humans built intelligence by abstracting away from physics. Every generation added a new layer of abstraction on top of the last, each layer hiding the one below it, each one moving further from the raw behavior of electrons and closer to something that looked like thought...<br/><br/>
                    AI does not have those limits. An AI does not need a programming language to express computation. It can configure logic directly... The layers were never fundamental properties of computation. They were accommodations for human minds."
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={4}>
                <Card>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: 2 }}>Chapter 2: Electricity Learns to Count</Typography>
                    <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
                      "This was the first moment in the history of computation where the physical layer essentially disappeared. When you reason in Boolean algebra, you are not thinking about electrons. You are thinking about TRUE and FALSE. The electrons are below the level of concern, they have been abstracted away."
                    </Typography>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 600, letterSpacing: 2 }}>Chapter 15: The Last Abstraction</Typography>
                    <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
                      "The last abstraction, intelligence, arrived at the top of the stack. And unlike every abstraction before it, it is not a tool for humans. It is the thing itself. An intelligence running on the stack does not need the stack in the way that a human programmer needs it."
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 
        ================ AUTHOR ================
      */}
      <Box component="section" id="author" sx={{ py: 12 }}>
        <Container maxWidth="md">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Box sx={{ 
                p: 4, borderRadius: 4, bgcolor: 'rgba(34, 211, 238, 0.05)', 
                borderLeft: '4px solid', borderColor: 'primary.main', position: 'relative'
              }}>
                <FormatQuoteIcon sx={{ color: 'primary.dark', fontSize: 40, mb: 1 }} />
                <Typography variant="h5" sx={{ fontStyle: 'italic', fontFamily: '"Playfair Display", serif', color: 'text.primary', lineHeight: 1.5 }}>
                  "We built layer upon layer of abstraction to escape the complexity of physics. Then we built a system that learned to bypass them all."
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: 3 }}>The Author</Typography>
              <Typography variant="h3" sx={{ mt: 1, mb: 3 }}>Lokeshwar Reddy <Box component="span" sx={{ color: 'secondary.main', fontStyle: 'italic' }}>Nandanapalli</Box></Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', mb: 2 }}>
                A passionate technologist and writer who bridges the gap between deep technical understanding and accessible storytelling. 
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
                <Box component="em" sx={{ color: 'secondary.light', fontStyle: 'normal', fontWeight: 500 }}>The Last Abstraction</Box> is a culmination of years of studying, building upon, and observing the evolution of computing — from its physical roots in early physics to the dawn of autonomous AI.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 
        ================ CTA ================
      */}
      <Box component="section" sx={{ py: 12, backgroundColor: '#0b1120', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <Container maxWidth="md">
          <Box sx={{ 
            textAlign: 'center', p: { xs: 4, md: 8 }, 
            borderRadius: 6, background: 'linear-gradient(145deg, rgba(21, 29, 46, 0.8), rgba(15, 23, 42, 0.6))',
            border: '1px solid rgba(34, 211, 238, 0.1)', position: 'relative', overflow: 'hidden'
          }}>
            <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60%', height: '2px', background: 'linear-gradient(90deg, transparent, #22d3ee, transparent)' }} />
            
            <Typography variant="h2" sx={{ mb: 2 }}>Read It Now — Completely Free</Typography>
            <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, mb: 4 }}>
              The Last Abstraction is available as a free PDF. No sign-ups. No paywalls.
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              size="large" 
              sx={{ py: 1.5, px: 4, fontSize: '1.1rem', borderRadius: 10 }}
              startIcon={<DownloadIcon />}
              href="Book.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Full Book PDF
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
