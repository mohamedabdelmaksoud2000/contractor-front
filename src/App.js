import Box from '@mui/material/Box';
import SideBar from './components/SideBar';
import MainComponent from './components/MainComponent';



function App() {

  return (

      <Box sx={{ display: 'flex' }}>
        <SideBar />
        <Box className='BigMain' component="main" sx={{ flexGrow: 1, p: 3, position: "relative" }}>
          <MainComponent />
        </Box>
      </Box>

  );
}

export default App;
