import { Box, Container, Typography, Link, Stack } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ 
      py: 6, 
      backgroundColor: 'background.default',
      borderTop: '1px solid rgba(34, 211, 238, 0.1)'
    }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 2 }}
          justifyContent="space-between"
          alignItems={{ xs: 'center', md: 'center' }}
          textAlign={{ xs: 'center', md: 'left' }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontFamily: '"Playfair Display", serif', color: 'secondary.main', mb: 0.5 }}>
              The Last Abstraction
            </Typography>
            <Typography variant="body2" color="text.secondary">
              © 2026 Lokeshwar Reddy Nandanapalli. All rights reserved.
            </Typography>
          </Box>
          <Stack direction="row" spacing={3}>
            <Link href="#about" color="text.secondary" underline="hover">About</Link>
            <Link href="#layers" color="text.secondary" underline="hover">The Stack</Link>
            <Link href="#excerpts" color="text.secondary" underline="hover">Excerpts</Link>
            <Link href="#author" color="text.secondary" underline="hover">Author</Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
