import './advice_slip.css'
import Box from '@mui/system/Box';

export default function AdviceBox() {
  return (
    <Box component="section" sx={{ 
        borderRadius: '8px',
        bgcolor: 'hsl(217, 19%, 24%)',
        padding: '3rem 2rem'
    }}>
      <p className='advice-label'>ADVICE #{"123"}</p>
      <p className='advice-content'>&quot;{"Generated advice placeholder lorem ipsum Generated advice placeholder lorem ipsum."}&quot;</p>
      <img className='content-divider' src='/src/assets/pattern-divider-mobile.svg'></img>
    </Box>
  );
}
