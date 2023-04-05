import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import brand_img from './../../brand.svg'
import { PRIMARY_COLOR } from '../../colors';
import { Grid } from '@mui/material';
import { Stack } from '@mui/system';


const pages = ['Home', 'Menu', 'Order', 'Blog', 'About', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };



    return (
        <AppBar component="nav" sx={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
            mt: 2,
            position: 'static'
        }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Grid container spacing={1}>

                        <Grid item md={3} >
                            <IconButton sx={{
                                py: 3,
                                px: 16,
                                display: { xs: 'none', md: 'flex' },
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                }
                            }} disableRipple>
                                <img src={brand_img} alt="" />
                            </IconButton>
                        </Grid>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >

                                <MenuIcon sx={{
                                    color: 'black',
                                    px: 2,
                                    py: 1
                                }} />

                            </IconButton>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' }
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <IconButton sx={{
                            display: { xs: 'flex', md: 'none' },
                            '&:hover': {
                                backgroundColor: 'transparent',
                            },
                            flexGrow: 1
                        }} disableRipple>
                            <img src={brand_img} alt="" />
                        </IconButton>

                        {/* Nav bar page show for the md and lg screen  */}
                        <Grid item md={6} >
                            <Stack direction="column"
                                justifyContent="center"
                                alignItems="center">
                                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                    {pages.map((page) => (
                                        <Button
                                            key={page}
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: 'black', display: 'block' }}
                                        >
                                            {page}
                                        </Button>
                                    ))}
                                </Box>
                            </Stack>
                        </Grid>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    {/* <Avatar alt="Remy Sharp" src="" /> */}
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        {/* sign up  sign in button start  */}
                        <Grid item md={3}>
                            <Stack direction="row"
                                justifyContent="center"
                                alignItems="center">

                                <Button
                                    sx={{ my: 2, color: '#333', }}
                                    variant="outlined" color='warning'>
                                    Sign-up
                                </Button>
                                <Button
                                    sx={{ my: 2, mx: 3, color: '#333', background: PRIMARY_COLOR }}
                                    variant="">
                                    Sign-in
                                </Button>
                            </Stack>
                        </Grid>
                        {/* sign up  sign in button end  */}

                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;