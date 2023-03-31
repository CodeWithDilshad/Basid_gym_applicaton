import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/system'
import Logo from '../Assets/Images/Logo.avif'



const Navbar = () => {
  return (
    <div>
      <Stack>


        <Stack
          direction="row"
          justifyContent="space-around"
          sx={{ gap: { sm: '122px', xs: "40px" }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }}
          px='20px'

        >

          <Link to="/">
            <img src={Logo} alt="This is our logo"
              style={{ width: '50px', height: '50px', margin: '0px 20px' }} />

          </Link>
          <Stack direction="row"
            gap="40px"
            fontSize="24px"
            alignItems="flex-end"
          >
            <Link to="/" style={{ textDecoration: "none", color: "3A1212", borderBottom: "3px solid #FF2625", }}>Home</Link>
            <a href="#exercises" style={{ textDecoration: "none", color: "#3A1212" }}>Exersizes</a>
          </Stack>
        </Stack>
        {/* <Link>
          <img src={Logo2} alt="" />
        </Link> */}
      </Stack>
    </div>
  )
}

export default Navbar
