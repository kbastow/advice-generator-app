import Box from '@mui/system/Box';

export default function AdviceBox() {
  return (
    <Box component="section" sx={{ 
        borderRadius: '1rem',
        bgcolor: 'hsl(217, 19%, 24%)',
        height: '10rem',
        width: '100%'
    }}>
      This Box renders as an HTML section element.
    </Box>
  );
}
