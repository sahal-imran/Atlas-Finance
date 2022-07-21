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

function Hero() {
    return (
        <>
            <Box id="Hero" sx={{
                width: '100%', height: {
                    md: '1100px',
                    xs: '100vh'
                }, backgroundColor: 'black'
            }} >
                <Container maxWidth="lgBig" sx={{
                    m: 'auto', height: '100%', display: 'flex', justifyContent: {
                        md: 'start',
                        xs: 'start'
                    }, alignItems: {
                        md: 'start',
                        xs: 'center'
                    }, flexDirection: 'column', pt: {
                        md: 0,
                        xs: 8
                    }
                }} >
                    <Typography variant='h4' sx={{
                        fontSize: {
                            md: '75px',
                            xs: '36px'
                        }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                            md: '90.98px',
                            xs: '43.67px'
                        }, fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', textAlign: {
                            md: 'start',
                            xs: 'center'
                        }
                    }} >
                        A better, smarter<br />
                        revolution for the<br />
                        use of <Box component={'span'} sx={{ color: '#2758FF' }} >DeFi</Box>
                    </Typography>
                    <Box sx={{
                        width: {
                            md: 'unset',
                            xs: '100%'
                        }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
                            md: 'row',
                            xs: 'column'
                        }, mt: {
                            md: 3,
                            xs: 4
                        }
                    }} >
                        <Button variant='contained' sx={{
                            fontSize: '14px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '16.98px', fontStyle: 'normal', letterSpacing: '2%', fontWeight: 500, color: 'white', boxShadow: 'unset', backgroundColor: '#2758FF', "&:hover": {
                                boxShadow: 'unset', backgroundColor: '#2758FF'
                            }, transition: 'all 0.3s ease', width: {
                                md: '122px',
                                xs: '80%'
                            }, height: '45px', p: 0, borderRadius: '60px', textTransform: 'capitalize', mr: {
                                md: 3
                            }
                        }} >
                            Lunch app
                        </Button>
                        <Button variant='outlined' sx={{
                            fontSize: '14px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '16.98px', fontStyle: 'normal', letterSpacing: '2%', fontWeight: 500, color: 'white', boxShadow: 'unset', border: '2px solid #2758FF', "&:hover": {
                                boxShadow: 'unset', backgroundColor: '#2758FF'
                            }, transition: 'all 0.3s ease', width: {
                                md: '122px',
                                xs: '80%'
                            }, height: '45px', p: 0, borderRadius: '60px', textTransform: 'capitalize', mt: {
                                md: 0,
                                xs: 2
                            }
                        }} >
                            learn more
                        </Button>
                    </Box>
                    <Box sx={{width:'100vw',height:'500px',position:'relative',overflow:'hidden',display:{
                        md:'none'
                    }}} >
                        <Image src={'/assets/pictures/hero bg.png'} layout={'fill'} objectFit={'cover'} />
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Hero