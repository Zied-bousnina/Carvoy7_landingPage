import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Stack from '@mui/material/Stack';
import { IconChevronDown } from '@tabler/icons-react';
import Logo from "@/app/(WebsiteLayout)/layout/shared/logo/Logo"
import AppLinks from '@/app/(WebsiteLayout)/layout/vertical/header/AppLinks';
import QuickLinks from '@/app/(WebsiteLayout)/layout/vertical/header/QuickLinks';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

const MobileSidebar = () => {
    const [toggle, setToggle] = useState(false)
    const [toggle2, setToggle2] = useState(false)

    return (
        <>
            <Box px={3}>
                <Logo />
            </Box>
            <Box p={3}>

                <Stack direction="column" spacing={2} >




                    <Button color="primary" variant="contained" href="https://carvoy-7.vercel.app/">Login</Button>
                    <Button
    color="primary"
    variant="outlined"
    startIcon={<AccountCircleTwoToneIcon />}
    component="a" // This makes the button a clickable link
    target="_blank" // Opens the link in a new tab
    rel="noopener noreferrer" // Recommended for security reasons
    href='https://carvoy-7.vercel.app/register'
  >
    S'inscrire
  </Button>
                </Stack>
            </Box>
        </>


    );
};

export default MobileSidebar;