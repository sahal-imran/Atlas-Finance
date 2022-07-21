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
import Grid from '@mui/material/Grid';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Fade from 'react-reveal/Fade';

function Footer() {
    return (
        <>
            <Box sx={{
                width: '100%', backgroundColor: 'black', pt: {
                    md: 14,
                    xs: 8
                }, pb: {
                    md: 4,
                    xs: 4
                }
            }} ><Fade bottom cascade >

                    <Container maxWidth="lgBig" sx={{
                        m: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: {
                            md: 'row',
                            xs: 'column'
                        }
                    }} >
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={4}>
                                <Box sx={{
                                    display: 'flex', justifyContent: 'center', alignItems: {
                                        md: 'start',
                                        xs: 'center'
                                    }, flexDirection: 'column'
                                }} >
                                    <Typography variant='h4' sx={{
                                        fontSize: {
                                            md: '20px',
                                            xs: '16px'
                                        }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                                            md: '24.26px',
                                            xs: '28px'
                                        }, fontStyle: 'normal', fontWeight: 400, color: 'white', textAlign: 'center', letterSpacing: '5%'
                                    }} >
                                        Get on the List
                                    </Typography>
                                    <Box sx={{ width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '36px', mt: 2 }} >
                                        <Box sx={{ width: '80%', height: '100%' }} >
                                            <input type="text" style={{
                                                outline: 'none', border: '1px solid #2758FF', fontSize: '16px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '24px', fontStyle: 'normal', color: 'white', background: 'transparent', width: '100%', height: '100%', padding: '0px 20px'
                                            }} placeholder='Email' />
                                        </Box>
                                        <Box sx={{ width: '20%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#2758FF', cursor: 'pointer' }} >
                                            <ArrowRightAltIcon sx={{ color: 'white' }} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{
                                    width: '100%', display: 'flex', justifyContent: 'center ', alignItems: 'center', mt: {
                                        md: 0,
                                        xs: 4
                                    }
                                }} >
                                    <Image src={'/assets/pictures/logo2.png'} width={260} height={100} objectFit={'contain'} />
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Box sx={{
                                    width: '100%', display: 'flex', justifyContent: 'center', alignItems: {
                                        md: 'end',
                                        xs: 'center'
                                    }, flexDirection: 'column', mt: {
                                        md: 0,
                                        xs: 4
                                    }
                                }} >
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                                        <a href="" style={{ marginRight: '12px' }} >
                                            <Image src={'/assets/pictures/fb.svg'} width={24} height={24} objectFit={'contain'} />
                                        </a>
                                        <a href="" style={{ marginRight: '12px' }} >
                                            <Image src={'/assets/pictures/insta.svg'} width={24} height={24} objectFit={'contain'} />
                                        </a>
                                        <a href="" style={{ marginRight: '12px' }} >
                                            <Image src={'/assets/pictures/twitter.svg'} width={24} height={24} objectFit={'contain'} />
                                        </a>
                                        <a href="" style={{ marginRight: '12px' }} >
                                            <Image src={'/assets/pictures/telegram.svg'} width={24} height={24} objectFit={'contain'} />
                                        </a>
                                    </Box>
                                    <Typography variant='h4' sx={{
                                        fontSize: {
                                            md: '16px',
                                            xs: '14px'
                                        }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                                            md: '24.26px',
                                            xs: '20px'
                                        }, fontStyle: 'normal', fontWeight: 400, color: 'white', textAlign: 'center', letterSpacing: '5%', mt: 2
                                    }} >
                                        © 2022 ATLAS Protocol, All rights reserved.
                                    </Typography>
                                    <a href="">
                                        <Typography variant='h4' sx={{
                                            fontSize: {
                                                md: '16px',
                                                xs: '14px'
                                            }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                                                md: '24.26px',
                                                xs: '20px'
                                            }, fontStyle: 'normal', fontWeight: 400, color: 'white', textAlign: 'center', letterSpacing: '5%', mt: 2
                                        }} >
                                            Disclaimer  •  Terms of use
                                        </Typography>
                                    </a>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Fade>
            </Box>
        </>
    )
}

export default Footer