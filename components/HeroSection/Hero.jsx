import React from 'react';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Fade from 'react-reveal/Fade';
import Grid from '@mui/material/Grid';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};

function Hero() {
    return (
        <>
            <Box id="Hero" sx={{
                width: '100%', height: {
                    xxxl: '2000px',
                    xxl: '1600px',
                    md: '1300px',
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
                    <Fade bottom cascade>
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
                            The first on-chain<br />gamified protocol<br />for <Box component={'span'} sx={{ color: '#2758FF' }} >DeFi</Box>
                        </Typography>
                    </Fade>
                    {/* <Box sx={{
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
                    </Box> */}
                    <Box sx={{
                        width: '100vw', height: '500px', position: 'relative', overflow: 'hidden', display: {
                            md: 'none'
                        }
                    }} >
                        <Image src={'/assets/pictures/hero bg.png'} layout={'fill'} objectFit={'cover'} />
                    </Box>
                </Container>
            </Box>
            <Container maxWidth="lgBig">
                <Box sx={{
                    flexGrow: 1, width: '80%', m: 'auto', display: {
                        md: 'flex',
                        xs: 'none'
                    }, justifyContent: 'center', alignItems: 'center', mt: {
                        xl: '-300px',
                        lgBig: '-400px',
                        lg: "-500px",
                        md: "-700px"
                    }
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Fade top cascade>
                                <Box sx={{
                                    height: '174px', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', background: 'rgba(8, 21, 37, 0.25)', borderRadius: '16px', p: 4, boxShadow: '0px 4px 250px #2758FF', backdropFilter: 'blur(25px)'
                                }} >
                                    <Typography variant='h4' sx={{
                                        fontSize: {
                                            md: '20px',
                                            xs: '36px'
                                        }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                                            md: '28px',
                                            xs: '43.67px'
                                        }, fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }, mr: 2
                                    }} >
                                        Token rewards are sent directly to your wallet every single block.
                                    </Typography>
                                    {/* <Typography variant='h4' sx={{
                                        fontSize: '16px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '19.41pxpx', fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', letterSpacing: '5%', textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }, mt: 2
                                    }} >
                                        Circulating Supply
                                    </Typography> */}
                                </Box>
                            </Fade>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Fade bottom cascade>
                                <Box sx={{
                                    height: '174px', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', background: 'rgba(8, 21, 37, 0.25)', borderRadius: '16px', p: 4, boxShadow: '0px 4px 250px #2758FF', backdropFilter: 'blur(25px)'
                                }} >
                                    <Typography variant='h4' sx={{
                                        fontSize: {
                                            md: '20px',
                                            xs: '36px'
                                        }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                                            md: '28px',
                                            xs: '43.67px'
                                        }, fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }, mr: 2
                                    }} >
                                        No gas for staking or claiming tokens!
                                    </Typography>
                                    {/* <Typography variant='h4' sx={{
                                        fontSize: '16px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '19.41pxpx', fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', letterSpacing: '5%', textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }, mt: 2
                                    }} >
                                        Holders
                                    </Typography> */}
                                </Box>
                            </Fade>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Fade top cascade>
                                <Box sx={{
                                    height: '174px', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', background: 'rgba(8, 21, 37, 0.25)', borderRadius: '16px', p: 4, boxShadow: '0px 4px 250px #2758FF', backdropFilter: 'blur(25px)'
                                }} >
                                    <Typography variant='h4' sx={{
                                        fontSize: {
                                            md: '20px',
                                            xs: '36px'
                                        }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                                            md: '28px',
                                            xs: '43.67px'
                                        }, fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }, mr: 2
                                    }} >
                                        Just watch as your $ATLAS balance automatically increases every block!
                                    </Typography>
                                    {/* <Typography variant='h4' sx={{
                                        fontSize: '16px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '19.41pxpx', fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', letterSpacing: '5%', textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }, mt: 2
                                    }} >
                                        ATLAS Price
                                    </Typography> */}
                                </Box>
                            </Fade>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{
                    width: '90%',
                    m: 'auto', display: {
                        md: 'none',
                        xs: 'flex'
                    }, justifyContent: 'center', alignItems: 'center', mt: {
                        sm: -18,
                        xs: -24
                    }
                }} >
                    <Box sx={{
                        width: "100vw", position: 'relative'
                    }} >
                        <Slider {...settings}>
                            <Box sx={{ py: 4.5, px: 2 }} >
                                <Box sx={{
                                    height: '174px', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', background: 'rgba(8, 21, 37, 0.25)', borderRadius: '16px', p: 4, boxShadow: '0px 0px 50px #2758FF'
                                }} >
                                    <Typography variant='h4' sx={{
                                        fontSize: '18px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '24px', fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }, mr: 2
                                    }} >
                                        Token rewards are sent directly to your wallet every single block.
                                    </Typography>
                                    {/* <Typography variant='h4' sx={{
                                    fontSize: '16px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '19.41pxpx', fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', letterSpacing: '5%', textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }, mt: 2
                                }} >
                                    Circulating Supply
                                </Typography> */}
                                </Box>
                            </Box>
                            <Box sx={{ py: 4.5, px: 2 }} >
                                <Box sx={{
                                    height: '174px', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', background: 'rgba(8, 21, 37, 0.25)', borderRadius: '16px', p: 4, boxShadow: '0px 0px 50px #2758FF'
                                }} >
                                    <Typography variant='h4' sx={{
                                        fontSize: '18px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '24px', fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }, mr: 2
                                    }} >
                                        No gas for staking or claiming tokens!
                                    </Typography>
                                    {/* <Typography variant='h4' sx={{
                                        fontSize: '16px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '19.41pxpx', fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', letterSpacing: '5%', textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }, mt: 2
                                    }} >
                                        Holders
                                    </Typography> */}
                                </Box>
                            </Box>
                            <Box sx={{ py: 4.5, px: 2 }} >
                                <Box sx={{
                                    height: '174px', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', background: 'rgba(8, 21, 37, 0.25)', borderRadius: '16px',p: 4, boxShadow: '0px 0px 50px #2758FF'
                                }} >
                                    <Typography variant='h4' sx={{
                                        fontSize: '18px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '24px', fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }, mr: 2
                                    }} >
                                        Token rewards are sent directly to your wallet every single block.
                                    </Typography>
                                    {/* <Typography variant='h4' sx={{
                                        fontSize: '16px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '19.41pxpx', fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', letterSpacing: '5%', textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }, mt: 2
                                    }} >
                                        ATLAS Price
                                    </Typography> */}
                                </Box>
                            </Box>
                        </Slider>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Hero