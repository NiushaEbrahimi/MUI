import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Container, IconButton } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Home from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';

const MaterialUISwitch = styled(Switch)(() => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#8796A5',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 10,
  },
}));

const HeaderComponent = styled(Container)(() => ({
  width: 'min(100%, 1080px)',
  padding: '0.75rem 1rem',
  borderRadius: '1rem',
  backgroundColor: 'rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(16px)',
  border: '1px solid rgba(255, 255, 255, 0.16)',
  position: 'fixed',
  top: '1rem',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1200,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1rem',
}))

function Header(props){
  return (
    <HeaderComponent maxWidth="xl">
      <FormGroup sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 1 }}>
        <FormControlLabel
          checked={props.darkTheme}
          onChange={(e) => props.setDarkTheme(e.target.checked)}
          control={<MaterialUISwitch sx={{ m: 0 }} />}
          label={props.darkTheme ? 'Dark Mode' : 'Light Mode'}
          labelPlacement="start"
          sx={{ color: 'text.primary', mr: 0 }}
        />
      </FormGroup>

      <NavLink to="/">
        {({ isActive }) => (
          <IconButton
            sx={{
              backgroundColor: isActive ? 'rgba(255,255,255,0.22)' : 'transparent',
              color: 'text.primary',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.16)' },
            }}
          >
            <Home sx={{ color: 'inherit' }} />
          </IconButton>
        )}
      </NavLink>

      <NavLink to="/liked">
        {({ isActive }) => (
          <IconButton
            sx={{
              backgroundColor: isActive ? 'rgba(255,255,255,0.22)' : 'transparent',
              color: 'text.primary',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.16)' },
            }}
          >
            <FavoriteIcon sx={{ color: 'inherit' }} />
          </IconButton>
        )}
      </NavLink>
    </HeaderComponent>
  );
}
export default Header;
