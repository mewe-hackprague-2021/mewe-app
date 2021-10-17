import React from 'react';
import { Typography } from '@mui/material';
import { useHistory } from "react-router-dom";
import { FancyButton, FancySecondaryButton } from '../Buttons';
import PersonIcon from '@mui/icons-material/Person';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './ConnectPrefs.css';

function ConnectPrefsPage({ logoFullbg, connectorArrows }) {
  const history = useHistory();
  const handleClick = (e) => {
    history.push("/home");
  }

  const [country, setCountry] = React.useState('');
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const [city, setCity] = React.useState('');
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  return <>
      <div className="page-connectbank vw-100 vh-100 d-flex flex-column p-4 align-items-stretch">
        <div className="flex-grow-1">
          <div className="d-flex justify-content-center align-items-center my-5">
            <img src={logoFullbg} />
            <img src={connectorArrows} className="connector-arrows" />
            <PersonIcon className="connector-arrows-icon" />
          </div>
          <Typography variant="h1" className="mb-4">Enter your preferences now</Typography>
          <div className="d-flex flex-column">
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
          </div>
        </div>
        <div class="text-center">
          <FancyButton variant="contained" className="mb-2 w-100" onClick={handleClick}>Connect</FancyButton>
        </div>
      </div>
    </>;
}

export default ConnectPrefsPage;
