import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl, { FormControlProps } from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

function DistroPicker(props: FormControlProps) {
  const [distro, setDistro] = React.useState('');
  const bar: any = distro.length
  // const [workflow, setWorkflow] = React.useState('');
  const handleDistroChange = (event: SelectChangeEvent) => {
    setDistro(event.target.value);
    };
  return (
    <div>
      <FormControl {...props}>
        <InputLabel id="demo-simple-select-helper-label">Distro</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={distro}
          label="Distro"
          onChange={handleDistroChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"centos-stream-8"}>Centos Stream 8</MenuItem>
          <MenuItem value={"centos-8"}>CentOS 8</MenuItem>
          <MenuItem value={"centos-7"}>CentOS 7</MenuItem>
          <MenuItem value={"debian-11"}>Debian 11</MenuItem>
          <MenuItem value={"debian-10"}>Debian 10</MenuItem>
          <MenuItem value={"rocky-linux-8"}>Rocky Linux 8</MenuItem>
          <MenuItem value={"ubuntu-2004-lts"}>Ubuntu 20.04 LTS</MenuItem>
          <MenuItem value={"ubuntu-1804-lts"}>Ubuntu 18.04 LTS</MenuItem>
        </Select>
        <FormHelperText>Choose a Linux Distribution</FormHelperText>
      </FormControl>
      <div>
        {distro.startsWith("centos") && 
          <div>
            <FooPicker />
            <FooPicker />
            <FooPicker />
          </div>}
        {distro.startsWith("debian") && 
          <BarPicker />}
        {distro.startsWith("rocky") && 
          <FooPicker />}
        {distro.startsWith("ubuntu") && 
          <BarPicker />}

      </div>
    </div>
  );
}

function FooPicker(props: FormControlProps) {
  const [foo, setFoo] = React.useState('');
  const bar: any = foo.length
  // const [workflow, setWorkflow] = React.useState('');
  const handleFooChange = (event: SelectChangeEvent) => {
    setFoo(event.target.value);
    };

  return (
    <div>
      <FormControl {...props}>
        <InputLabel id="demo-simple-select-helper-label">FOO</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={foo}
          label="foo"
          onChange={handleFooChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Fooooo"}>Foooo</MenuItem>
          <MenuItem value={"FOOOOO"}>FOOOO</MenuItem>
        </Select>
        <FormHelperText>Choose a Foo</FormHelperText>
      </FormControl>
    </div>
  );
}

function BarPicker(props: FormControlProps) {
  const [bar, setBar] = React.useState('');
  const handleBarChange = (event: SelectChangeEvent) => {
    setBar(event.target.value);
    };

  return (
    <div>
      <FormControl {...props}>
        <InputLabel id="demo-simple-select-helper-label">BAR</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={bar}
          label="bar"
          onChange={handleBarChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Barooo"}>Barrr</MenuItem>
          <MenuItem value={"FOOOOO"}>BARRR</MenuItem>
        </Select>
        <FormHelperText>Choose a Bar</FormHelperText>
      </FormControl>
    </div>
  );
}

export default function SelectLabels() {

  return (
    <Container >
      <DistroPicker />
    </Container>
  );
}
