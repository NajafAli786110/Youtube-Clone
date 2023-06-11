import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

// Logo Import
import { logo } from "../Utils/constants";

const Navbar = () => {
  return(
    <Stack
    display='flex'
    width='auto'
    justifyContent='space-between'
    direction="row"
    alignItems="center"
    padding={2}
    sx={{position:'sticky', background:'#000', top: '0', justifyContent: "space-between" }}
  >
    <Link to='/' style={{display:'flex', alignItems:'center' }}>
      <img src={logo} alt="Website Main logo" height={45}/>
    </Link>
    <SearchBar />
  </Stack>
  )
};

export default Navbar;
