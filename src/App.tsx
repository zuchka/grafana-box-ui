import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import SelectLabels from './option-picker/select';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}.
//     </Typography>
//   );
// }

export default function App() {
  return (
    <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom>grafana-box</Typography>
        <SelectLabels />
        {/* <Copyright /> */}
    </Container>
  );
}
