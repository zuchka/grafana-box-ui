import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl, { FormControlProps } from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export function BinaryPicker() {
    return (
        <Box>
            <BinPicker />
        </Box>
    );
    }
  
export function DevenvPicker() {
    return (
        <Box>
            <DummyDbPicker />
            <SharedOptions />
        </Box>
    );
    }

export function E2eBinaryPicker() {
    return (
        <Box>
            <BinPicker />
            <SharedOptions />
        </Box>
    );
    }

function SharedOptions() {
    return (
        <div>
            <BranchPicker />
            <NodePicker />
        </div>
    );
    }

function BranchPicker() {
    return (
        <Typography variant="h4" component="h1" gutterBottom>
          Branch List
        </Typography>
        // <BinPicker />
    );
    }

function NodePicker() {
    return (
        <Typography variant="h4" component="h1" gutterBottom>
          Node List
        </Typography>
        // <BinPicker />
    );
    }

function BinPicker() {
    return (
        <Typography variant="h4" component="h1" gutterBottom>
          Binary List
        </Typography>
        // <BinPicker />
    );
    }

function DummyDbPicker() {
    return (
        <Typography variant="h4" component="h1" gutterBottom>
          Dummy DBs
        </Typography>
        // <BinPicker />
    );
    }
