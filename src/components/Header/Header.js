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
import brand_img from './../../assets/brand.svg'
import { PRIMARY_COLOR } from '../../colors';
import { Grid } from '@mui/material';
import { Stack } from '@mui/system';
import './Header.css';



const pages = ['Home', 'Menu', 'Order', 'Blog', 'About', 'Contact'];
const pagesSmall = ['Home', 'Menu', 'Order', 'Blog', 'About', 'Contact', 'SIGN-UP', 'SIGN-IN'];

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

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };



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
                            <Box sx={{
                                py: 3,
                                px: 16,
                                display: { xs: 'none', md: 'flex' },
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                }
                            }} disableRipple>
                                <img src={brand_img} alt="" />

                            </Box>
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
                                disableRipple
                            >
                                {pagesSmall.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center" sx={{
                                            textTransform: 'capitalize',
                                        }}>{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Box sx={{
                            display: { xs: 'flex', md: 'none' },
                            '&:hover': {
                                backgroundColor: 'transparent',
                            },
                            flexGrow: 1,
                            pt: 1
                        }} disableRipple>
                            <img src={brand_img} alt="" />
                        </Box>

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
                                            sx={{
                                                my: 5,
                                                mx: 1,
                                                color: 'black',
                                                display: 'block',
                                                fontWeight: '700',
                                                fontSize: '14px',
                                                lineHeight: '17px',
                                                textTransform: 'capitalize'
                                            }}
                                        >
                                            {
                                                page === 'Home' ? <span style={{
                                                    borderBottom: `2px solid ${PRIMARY_COLOR}`,
                                                }}>{page}</span> : page
                                            }
                                        </Button>
                                    ))}
                                </Box>
                            </Stack>
                        </Grid>


                        <Grid item md={3} sx={{
                            display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' }
                        }}>
                            <Stack direction="row"
                                justifyContent="center"
                                alignItems="center"
                                sx={{
                                    my: 4,
                                }}
                            >

                                <Button
                                    sx={{
                                        width: '100px',
                                        height: '41px',
                                        fontWeight: '700',
                                        fontSize: '14px',
                                        color: '#1E1E1E',
                                        lineHeight: '17px',
                                        border: `3px solid ${PRIMARY_COLOR}`,
                                        borderRadius: '8px',
                                        mr: 2,
                                        textTransform: 'capitalize',
                                        '&:hover': {
                                            border: `3px solid ${PRIMARY_COLOR}`,
                                            color: '#1E1E1E'
                                        }
                                    }}
                                    variant="outlined" color='warning'>
                                    Sign-up
                                </Button>
                                <Button
                                    sx={{
                                        width: '96px',
                                        height: '41px',
                                        fontWeight: '700',
                                        fontSize: '14px',
                                        color: '#1E1E1E',
                                        lineHeight: '17px',
                                        borderRadius: '8px',
                                        background: PRIMARY_COLOR,
                                        textTransform: 'capitalize',
                                        '&:hover': {
                                            background: PRIMARY_COLOR,
                                            color: '#1E1E1E'
                                        }
                                    }}
                                    variant="">
                                    Sign-in
                                </Button>
                            </Stack>
                        </Grid>


                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;





