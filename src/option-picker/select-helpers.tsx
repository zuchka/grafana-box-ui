import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
    
export function BinaryPicker() {
    const [bin, setBin] = React.useState('');
    const handleBinChange = (event: SelectChangeEvent) => {
      setBin(event.target.value);
      };
      
    return (
        <div>
          <FormControl>
            <InputLabel>Grafana Binary</InputLabel>
            <Select value={bin} label="Binary" onChange={handleBinChange}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"8.2.0"}>8.2.0</MenuItem>
            </Select>
            <FormHelperText>Choose a standalone binary</FormHelperText>
          </FormControl>
        </div>
      );
    }

// TODO: remove hardcoded values and generate via list + map
export function DistroPicker() {
    const [distro, setDistro] = React.useState('');
    const handleDistroChange = (event: SelectChangeEvent) => {
      setDistro(event.target.value);
      };
    return (
      <Stack spacing={3}>
        <FormControl>
          <InputLabel>Distro</InputLabel>
          <Select value={distro} label="Distro" onChange={handleDistroChange} fullWidth>
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
      </Stack>
    );
  }
  
  // TODO: remove hardcoded values and generate via list + map
export function LicensePicker() {
    const [license, setLicense] = React.useState('');
    const handleLicenseChange = (event: SelectChangeEvent) => {
      setLicense(event.target.value);
      };
  
    return (
      <Stack spacing={3}> 
        <FormControl>
          <InputLabel>License</InputLabel>
          <Select value={license} label="license" onChange={handleLicenseChange} fullWidth>
            <MenuItem value={"oss"}>OSS</MenuItem>
            <MenuItem value={"enterprise"}>Enterprise</MenuItem>
          </Select>
          <FormHelperText>Enterprise or OSS?</FormHelperText>
        </FormControl>
      </Stack>
    );
  }
  
  // TODO: remove hardcoded values and generate via list + map
export function CpuPicker() {
    const [cpu, setCpu] = React.useState('');
    const handleCpuChange = (event: SelectChangeEvent) => {
      setCpu(event.target.value);
      };
  
    return (
      <Stack spacing={3}>
        <FormControl>
          <InputLabel>License</InputLabel>
          <Select value={cpu} label="cpu" onChange={handleCpuChange} fullWidth>
            <MenuItem value={"intel"}>Intel</MenuItem>
            <MenuItem value={"amd"}>AMD</MenuItem>
          </Select>
          <FormHelperText>Choose a CPU</FormHelperText>
        </FormControl>
      </Stack>
    );
  }
  
  // TODO: remove hardcoded values and generate via list + map
export function WorkflowPicker() {
    const [workflow, setWorkflow] = React.useState('');
    const handleWorkflowChange = (event: SelectChangeEvent) => {
      setWorkflow(event.target.value);
      };
  
    return (
      <Stack spacing={3}>
        <FormControl >
          <InputLabel>Workflow</InputLabel>
          <Select value={workflow} label="Workflow" onChange={handleWorkflowChange}>
            <MenuItem value={"package"}>Package</MenuItem>
            <MenuItem value={"binary"}>Binary</MenuItem>
            <MenuItem value={"devenv"}>Developer Environment</MenuItem>
            <MenuItem value={"e2e-binary"}>E2E Release Test</MenuItem>
          </Select>
          <FormHelperText >Choose a Workflow</FormHelperText>         
        </FormControl>
        {workflow.startsWith("binary")     && <BinaryPicker    />}         
        {workflow.startsWith("devenv")     && <DevenvPicker    />}                    
        {workflow.startsWith("e2e-binary") && <E2eBinaryPicker />}
      </Stack>
    );
  }


function DevenvPicker() {
    return (
      <Stack spacing={3}>
            <DummyDbPicker />
            <SharedOptions />
      </Stack>
      );
    }

function E2eBinaryPicker() {
    return (
      <Stack spacing={3}>
            <BinaryPicker />
            <SharedOptions />
      </Stack>
      );
    }

function SharedOptions() {
    return (
      <Stack spacing={3}>
            <BranchPicker />
            <NodePicker />
      </Stack>
      );
    }

function BranchPicker() {
  const [branch, setBranch] = React.useState('');
  const handleBranchChange = (event: SelectChangeEvent) => {
    setBranch(event.target.value);
    };

  return (
      <div>
        <FormControl >
          <InputLabel>Remote Branch</InputLabel>
          <Select value={branch} label="branch" onChange={handleBranchChange}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"main"}>main</MenuItem>
          </Select>
          <FormHelperText>Choose a Remote Branch</FormHelperText>
        </FormControl>
      </div>
    );
  }
  
function NodePicker() {
    const [node, setNode] = React.useState('');
    const handleNodeChange = (event: SelectChangeEvent) => {
      setNode(event.target.value);
      };
    
    return (
        <div>
          <FormControl >
            <InputLabel>NodeJS</InputLabel>
            <Select value={node} label="node" onChange={handleNodeChange} defaultValue={"14.18.0"}> 
                <MenuItem value={"14.18.0"}>Node 14 LTS</MenuItem>
            </Select>
            <FormHelperText>Choose a NodeJS version</FormHelperText>
          </FormControl>
        </div>
      );
    }
  
// this needs a different component because it can accept more than one value
function DummyDbPicker() {
    const [dummyDb, setDummyDb] = React.useState('');
    const handleDummyDbChange = (event: SelectChangeEvent) => {
      setDummyDb(event.target.value);
      };

    return (
        <div>
          <FormControl >
            <InputLabel>Dummy Data</InputLabel>
            <Select value={dummyDb} label="dummyDb" onChange={handleDummyDbChange}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"mysql"}>MySQL</MenuItem>
            </Select>
            <FormHelperText>Choose a Dummy Datasource</FormHelperText>
          </FormControl>
        </div>
      );
    }