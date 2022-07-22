import React from 'react';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

function Navbar() {
    const router = useRouter();
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <>
            <Box sx={{ width: '100%', backgroundColor: 'black', }} >
                <Container maxWidth="lgBig" sx={{
                    m: 'auto', height: {
                        md: '140px',
                        xs: '80px'
                    }, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }} >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                        <Image src={'/assets/pictures/logo.png'} width={40} height={46} objectFit={'contain'} />
                        <Typography variant='h4' sx={{
                            fontSize: '20px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '28px', fontStyle: 'normal', letterSpacing: '20%', fontWeight: 700, color: 'white', textTransform: 'uppercase', textDecoration: 'none', "&:hover": {
                                color: '#2758FF',
                            }, transition: 'all 0.3s ease', ml: 3
                        }} >
                            Atlas<Box component={'span'} sx={{fontWeight:500}} >Finance</Box>
                        </Typography>
                        {/* <Box sx={{
                            display: {
                                md: 'flex',
                                xs: 'none'
                            }, justifyContent: 'space-between', alignItems: 'center', ml: 4
                        }} >
                            <Link href={''} >
                                <a>
                                    <Typography variant='h4' sx={{
                                        fontSize: '16px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '19.41px', fontStyle: 'normal', letterSpacing: '20%', fontWeight: 500, color: 'white', textTransform: 'uppercase', textDecoration: 'none', "&:hover": {
                                            color: '#2758FF'
                                        }, transition: 'all 0.3s ease', mr: 5
                                    }} >
                                        Home
                                    </Typography>
                                </a>
                            </Link>
                            <Link href={''} >
                                <a>
                                    <Typography variant='h4' sx={{
                                        fontSize: '16px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '19.41px', fontStyle: 'normal', letterSpacing: '20%', fontWeight: 500, color: 'white', textTransform: 'uppercase', textDecoration: 'none', "&:hover": {
                                            color: '#2758FF'
                                        }, transition: 'all 0.3s ease', mr: 5
                                    }} >
                                        Swap
                                    </Typography>
                                </a>
                            </Link>
                            <Link href={''} >
                                <a>
                                    <Typography variant='h4' sx={{
                                        fontSize: '16px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '19.41px', fontStyle: 'normal', letterSpacing: '20%', fontWeight: 500, color: 'white', textTransform: 'uppercase', textDecoration: 'none', "&:hover": {
                                            color: '#2758FF'
                                        }, transition: 'all 0.3s ease', mr: 5
                                    }} >
                                        account
                                    </Typography>
                                </a>
                            </Link>
                            <Link href={''} >
                                <a>
                                    <Typography variant='h4' sx={{
                                        fontSize: '16px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '19.41px', fontStyle: 'normal', letterSpacing: '20%', fontWeight: 500, color: 'white', textTransform: 'uppercase', textDecoration: 'none', "&:hover": {
                                            color: '#2758FF'
                                        }, transition: 'all 0.3s ease'
                                    }} >
                                        launchapad
                                    </Typography>
                                </a>
                            </Link>
                        </Box> */}
                    </Box>
                    <Box sx={{
                        display: {
                            md: 'block',
                            xs: 'none'
                        }
                    }} >
                        <Button variant='outlined' sx={{
                            fontSize: '14px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '16.98px', fontStyle: 'normal', letterSpacing: '2%', fontWeight: 500, color: 'white', textTransform: 'capitalize', boxShadow: 'unset', border: '2px solid #2758FF', "&:hover": {
                                color: 'white', border: '2px solid #2758FF', backgroundColor: '#2758FF',boxShadow:'0 0 50px #2758FF'
                            }, transition: 'all 0.3s ease', width: '147px', height: '45px', p: 0, borderRadius: '6px'
                        }} >
                            Launch app
                        </Button>
                    </Box>
                    {isOpen ? < CloseIcon onClick={toggleDrawer} sx={{
                        color: '#FFFFFF', fontSize: '36px', cursor: 'pointer', position: 'relative', zIndex: 2, display: {
                            md: 'none'
                        }
                    }} /> : < MenuIcon onClick={toggleDrawer} sx={{
                        display: {
                            md: 'none'
                        }, color: 'white', fontSize: '36px', cursor: 'pointer', position: 'relative', zIndex: 2
                    }} />}
                </Container>
                <Drawer
                    open={isOpen}
                    onClose={toggleDrawer}
                    direction='left'
                    className='drawer'
                    style={{ width: '80%', backgroundColor: 'black', display: 'flex', justifyContent: 'start', alignItems: 'center', flexDirection: 'column', padding: '50px 0px' }}
                >
                    <Box>
                        <Image src={'/assets/pictures/logo2.png'} width={260} height={100} objectFit={'contain'} />
                    </Box>
                    {/* <Box sx={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 5
                    }} >
                        <Link href={''} >
                            <a>
                                <Typography variant='h4' sx={{
                                    fontSize: '16px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '19.41px', fontStyle: 'normal', letterSpacing: '20%', fontWeight: 500, color: 'white', textTransform: 'uppercase', textDecoration: 'none', "&:hover": {
                                        color: '#2758FF'
                                    }, transition: 'all 0.3s ease', mb: 3
                                }} >
                                    Home
                                </Typography>
                            </a>
                        </Link>
                        <Link href={''} >
                            <a>
                                <Typography variant='h4' sx={{
                                    fontSize: '16px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '19.41px', fontStyle: 'normal', letterSpacing: '20%', fontWeight: 500, color: 'white', textTransform: 'uppercase', textDecoration: 'none', "&:hover": {
                                        color: '#2758FF'
                                    }, transition: 'all 0.3s ease', mb: 3
                                }} >
                                    Swap
                                </Typography>
                            </a>
                        </Link>
                        <Link href={''} >
                            <a>
                                <Typography variant='h4' sx={{
                                    fontSize: '16px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '19.41px', fontStyle: 'normal', letterSpacing: '20%', fontWeight: 500, color: 'white', textTransform: 'uppercase', textDecoration: 'none', "&:hover": {
                                        color: '#2758FF'
                                    }, transition: 'all 0.3s ease', mb: 3
                                }} >
                                    account
                                </Typography>
                            </a>
                        </Link>
                        <Link href={''} >
                            <a>
                                <Typography variant='h4' sx={{
                                    fontSize: '16px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '19.41px', fontStyle: 'normal', letterSpacing: '20%', fontWeight: 500, color: 'white', textTransform: 'uppercase', textDecoration: 'none', "&:hover": {
                                        color: '#2758FF'
                                    }, transition: 'all 0.3s ease'
                                }} >
                                    launchapad
                                </Typography>
                            </a>
                        </Link>
                    </Box> */}
                    <Box sx={{ mt: 4 }} >
                    <Button variant='outlined' sx={{
                            fontSize: '14px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '16.98px', fontStyle: 'normal', letterSpacing: '2%', fontWeight: 500, color: 'white', textTransform: 'capitalize', boxShadow: 'unset', border: '2px solid #2758FF', "&:hover": {
                                color: 'white', border: '2px solid #2758FF', backgroundColor: '#2758FF',boxShadow:'0 0 50px #2758FF'
                            }, transition: 'all 0.3s ease', width: '147px', height: '45px', p: 0, borderRadius: '6px'
                        }} >
                            Launch app
                        </Button>
                    </Box>
                </Drawer>
            </Box>
        </>
    )
}

export default Navbar