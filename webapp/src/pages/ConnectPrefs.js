import React from 'react';
import { Typography } from '@mui/material';
import { useHistory } from "react-router-dom";
import { FancyButton, FancySlider } from '../Buttons';
import PersonIcon from '@mui/icons-material/Person';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import './ConnectPrefs.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';

function ConnectPrefsPage({ logoFullbg, connectorArrows }) {
  const [country, setCountry] = React.useState('');
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const [city, setCity] = React.useState('');
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const [gender, setGender] = React.useState('');
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const [age, setAge] = React.useState([20, 28]);
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const [size, setSize] = React.useState([20, 40]);
  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const history = useHistory();
  const handleClick = (e) => {
    const detailsLinkTo = {
      pathname: '/chat/',
      city: city,
    }
    history.push(detailsLinkTo);
  }

  const identity = (arg) => arg;

  return <>
      <div className="page-connectprefs vw-100 vh-100 d-flex flex-column p-4 align-items-stretch">
        <div className="flex-grow-1 d-flex flex-column h-100">
          <div className="d-flex justify-content-center align-items-center my-5">
            <img src={logoFullbg} />
            <img src={connectorArrows} className="connector-arrows" />
            <PersonIcon className="connector-arrows-icon" />
          </div>
          <Typography variant="h1" className="mb-4">Enter your preferences now</Typography>
          <div className="d-flex flex-column" style={{ overflowY: 'scroll' }}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className="w-100">
              <InputLabel id="prefs-form-country">Country</InputLabel>
              <Select
                labelId="prefs-form-country-label"
                id="prefs-form-country"
                value={country}
                onChange={handleCountryChange}
                label="Country">
                <MenuItem value="Česko">Česko</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className="w-100">
              <InputLabel id="prefs-form-city">City</InputLabel>
              <Select
                labelId="prefs-form-city-label"
                id="prefs-form-city"
                value={city}
                onChange={handleCityChange}
                label="City">
                <MenuItem value="Praha">Praha</MenuItem>
                <MenuItem value="Brno">Brno</MenuItem>
                <MenuItem value="Liberec">Liberec</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }} className="w-100">
              <InputLabel id="prefs-form-gender">Gender</InputLabel>
              <Select
                required
                labelId="prefs-form-city-gender"
                id="prefs-form-gender"
                value={gender}
                onChange={handleGenderChange}
                label="Gender">
                <MenuItem value="No preference">No preference</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </FormControl>
            <Typography id="age-slider" className="mt-3">
              Age
            </Typography>
            <FancySlider
              getAriaLabel={() => 'Age'}
              value={age}
              onChange={handleAgeChange}
              valueLabelDisplay="auto"
              getAriaValueText={identity}
              min={16}
              max={45}
              color="primary"
            />
            <TextField
              id="tenant-count"
              label="Total number of tenants"
              type="number"
              variant="standard"
              InputLabelProps={{
                shrink: true,
              }}
              className="mt-3"
            />
            <Typography id="disposition-slider" className="mt-4 mb-2">
              Disposition
            </Typography>
            <Grid container rowSpacing={0} columnSpacing={0}>
              <Grid item xs={6}>
                <FormControlLabel control={<Checkbox value={"ten-1"} />} label="1+1 / 1+kk"/>
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel control={<Checkbox value={"ten-2"} />} label="2+1 / 2+kk" />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel control={<Checkbox value={"ten-3"} />} label="3+1 / 3+kk" />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel control={<Checkbox value={"ten-4"} />} label="4+1 / 4+kk" />
              </Grid>
            </Grid>
            <FormControlLabel control={<Checkbox value={"ten-own"} />} label="I want a private room" />
            <Typography id="size-slider" className="mt-3">
              Flat size
            </Typography>
            <FancySlider
              getAriaLabel={() => 'Flat size'}
              value={size}
              onChange={handleSizeChange}
              valueLabelDisplay="auto"
              getAriaValueText={identity}
              min={10}
              max={80}
              color="primary"
            />
          </div>
          <div className="text-center mt-3">
            <FancyButton variant="contained" className="mb-2 w-100" onClick={handleClick}>Connect</FancyButton>
          </div>
        </div>
      </div>
    </>;
}

export default ConnectPrefsPage;
