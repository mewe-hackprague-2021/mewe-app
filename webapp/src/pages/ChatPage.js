import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import './ChatPage.css';
import { Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function ChatPage({ logo }) {

  // TODO: Load city from preferences
  let history = useHistory();
  let city = history.location.city;
  if (!city) {
    city = "Praha";
  }

  const [value, setValue] = React.useState(1);
  const handleValueChange = (event, newValue) => {
    setValue(newValue);
  };

  const [flat, setFlat] = React.useState({
    name: 'Pronájem bytu 1+kk',
    loc: 'Brno, třída Kpt. Jaroše',
    price: '7,900 Kč',
    disposition: '1+kk'
  });

  return <>
      <div className="page-chat vw-100 vh-100 d-flex flex-column justify-content-center">
        <div className="pt-4 flex-shrink-1 d-flex flex-column align-items-stretch overflow-hidden">
          <div className="px-4 d-flex align-items-center mb-4">
            <ArrowBackIosIcon />
            <Typography variant="h1">Katerina Studenova</Typography>
          </div>
          <div className="px-3 flex-shrink-1 overflow-scroll">
            <div className="me-5">
              <p className="small mb-0 bg-light p-3" style={{ borderRadius: '1rem' }}>
                <span className="text-secondary">MeWe: </span>Hi, Amanda!<br />
                We found the flatmate for you. Now you can talk together.
              </p>
              <span className="small text-secondary" style={{ fontSize: '0.75rem' }}>18:12</span>
            </div>
            <div className="ms-5" style={{ textAlign: 'right' }}>
              <p className="small mb-0 p-3 text-white" style={{ borderRadius: '1rem', backgroundColor: '#A20092', textAlign: 'left' }}>
                Hi, Katerina!<br />
                Glad that we found each other. Which flat would you like to share?
              </p>
              <span className="small text-secondary" style={{ fontSize: '0.75rem' }}>18:12</span>
            </div>
            <div>
              <p className="text-center mt-3 mb-2 text-secondary small">MeWe: We found this flat for you</p>
              <div className="mx-5 mb-4 overflow-hidden" style={{ borderRadius: '0.5rem' }}>
                <img src="https://www.realitymorava.cz/foto4/19628603_1.jpg" className="w-100" />
                <div className="p-3" style={{ backgroundColor: 'rgba(162, 0, 146, 0.1)' }}>
                  <p className="small mb-0 fw-bold">{ flat.name }</p>
                  <p className="small mb-2">{ flat.loc }</p>
                  <p className="small mb-0">{ flat.price }</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BottomNavigation
          showLabels
          value={value}
          onChange={handleValueChange}
        >
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Chats" icon={<ChatBubbleOutlineIcon />} />
          <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
        </BottomNavigation>
      </div>
    </>;
}

export default ChatPage;
