import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';

// Components Rendering
import {ChannelDetail, Feed, Navbar, SearchFeed, SideBar, VideoDetail, SearchBar} from './components';


const App = () => {
  return(
  <BrowserRouter>
  <Box sx={{ backgroundColor: '#000', width: '100%' }}>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Feed />}/>
      <Route path='/video/:id' exact element={<VideoDetail />} />
      <Route path='/channel/:id' element={<ChannelDetail />} />
      <Route path='/search/:searchTerm' element={<SearchFeed />} />
    </Routes>
  </Box>
  </BrowserRouter>
  );
}

export default App;