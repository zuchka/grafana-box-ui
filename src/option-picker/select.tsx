import { Box, Container } from '@mui/material';
import * as Picker from './select-helpers'

export default function SelectLabels() {
  return (
    <Container>
        <Picker.DistroPicker  />
        <Picker.BinaryPicker  />
        <Picker.CpuPicker     />
        <Picker.WorkflowPicker/>
    </Container>
  );
}
