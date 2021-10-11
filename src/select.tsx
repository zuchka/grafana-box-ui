import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl, { FormControlProps } from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import { BinaryPicker, DevenvPicker, E2eBinaryPicker } from './select-helpers'

function DistroPicker(props: FormControlProps) {
  const [distro, setDistro] = React.useState('');
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
    </div>
  );
}

function LicensePicker(props: FormControlProps) {
  const [license, setLicense] = React.useState('');
  const handleLicenseChange = (event: SelectChangeEvent) => {
    setLicense(event.target.value);
    };

  return (
    <div>
      <FormControl {...props}>
        <InputLabel id="demo-simple-select-helper-label">Enterprise?</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={license}
          label="license"
          onChange={handleLicenseChange}
        >
          <MenuItem value="">
            <em>license</em>
          </MenuItem>
          <MenuItem value={"oss"}>OSS</MenuItem>
          <MenuItem value={"enterprise"}>Enterprise</MenuItem>
        </Select>
        <FormHelperText>Enterprise or OSS?</FormHelperText>
      </FormControl>
    </div>
  );
}

function CpuPicker(props: FormControlProps) {
  const [cpu, setCpu] = React.useState('');
  const handleCpuChange = (event: SelectChangeEvent) => {
    setCpu(event.target.value);
    };

  return (
    <div>
      <FormControl {...props}>
        <InputLabel id="demo-simple-select-helper-label">Intel or Amd?</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={cpu}
          label="cpu"
          onChange={handleCpuChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"intel"}>Intel</MenuItem>
          <MenuItem value={"amd"}>AMD</MenuItem>
        </Select>
        <FormHelperText>Choose a CPU</FormHelperText>
      </FormControl>
    </div>
  );
}

function WorkflowPicker() {
  const [workflow, setWorkflow] = React.useState('');
  const handleWorkflowChange = (event: SelectChangeEvent) => {
    setWorkflow(event.target.value);
    };

  return (
    <div>
      <FormControl>
        <InputLabel id="demo-simple-select-helper-label">Workflow</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={workflow}
          label="Workflow"
          onChange={handleWorkflowChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"package"}>Package</MenuItem>
          <MenuItem value={"binary"}>Binary</MenuItem>
          <MenuItem value={"devenv"}>Developer Environment</MenuItem>
          <MenuItem value={"e2e-binary"}>E2E Release Test</MenuItem>
        </Select>
        <FormHelperText >Choose a Workflow</FormHelperText>
        {workflow.startsWith("binary") && <BinaryPicker />}         
        {workflow.startsWith("devenv") && <DevenvPicker />}                    
        {workflow.startsWith("e2e-binary") && <E2eBinaryPicker />}         
        </FormControl>
      </div>
  );
}

export default function SelectLabels() {
  return (
    <Container>
        <DistroPicker  />
        <LicensePicker />
        <CpuPicker     />
        <WorkflowPicker/>
    </Container>
  );
}
