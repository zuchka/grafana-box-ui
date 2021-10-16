import { Grid, Box, Typography } from '@mui/material';
import * as Picker from './select-helpers'



export default function SelectLabels() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Grid item xs={6} spacing={3}>
        <Picker.DistroPicker  />
        <Picker.LicensePicker />
        <Picker.CpuPicker     />
        <Picker.WorkflowPicker/>
      </Grid>
      <Grid item xs={6} spacing={3}>
        <Typography variant="h4" component="h1" ml={10} gutterBottom>output here</Typography>
      </Grid>
    </Grid>
  );
}
