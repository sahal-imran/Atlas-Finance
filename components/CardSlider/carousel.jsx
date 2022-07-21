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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from '@mui/material/Grid';


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


function carousel() {
    return (
        <>
            <Box sx={{
                width: '100%', overflow: 'hidden', position: 'relative', pt: {
                    md: 15,
                    xs: 8
                }, pb: {
                    md: 40,
                    xs: 8
                }, background: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
            }} >
                <Box sx={{
                    flexGrow: 1, width: '80%', m: 'auto', display: {
                        md: 'flex',
                        xs: 'none'
                    }, justifyContent: 'center', alignItems: 'center',
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Box sx={{
                                height: '174px', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', background: 'rgba(8, 21, 37, 0.25)', borderRadius: '16px', p: 4, boxShadow: '0px 4px 250px #2758FF', backdropFilter: 'blur(25px)'
                            }} >
                                <Typography variant='h4' sx={{
                                    fontSize: {
                                        md: '48px',
                                        xs: '36px'
                                    }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                                        md: '58.22px',
                                        xs: '43.67px'
                                    }, fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }, mr: 2
                                }} >
                                    $10M
                                </Typography>
                                <Typography variant='h4' sx={{
                                    fontSize: '16px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '19.41pxpx', fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', letterSpacing: '5%', textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }, mt: 2
                                }} >
                                    Circulating Supply
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{
                                height: '174px', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', background: 'rgba(8, 21, 37, 0.25)', borderRadius: '16px', p: 4, boxShadow: '0px 4px 250px #2758FF', backdropFilter: 'blur(25px)'
                            }} >
                                <Typography variant='h4' sx={{
                                    fontSize: {
                                        md: '48px',
                                        xs: '36px'
                                    }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                                        md: '58.22px',
                                        xs: '43.67px'
                                    }, fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }, mr: 2
                                }} >
                                    $10M
                                </Typography>
                                <Typography variant='h4' sx={{
                                    fontSize: '16px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '19.41pxpx', fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', letterSpacing: '5%', textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }, mt: 2
                                }} >
                                    Circulating Supply
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{
                                height: '174px', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', background: 'rgba(8, 21, 37, 0.25)', borderRadius: '16px', p: 4, boxShadow: '0px 4px 250px #2758FF', backdropFilter: 'blur(25px)'
                            }} >
                                <Typography variant='h4' sx={{
                                    fontSize: {
                                        md: '48px',
                                        xs: '36px'
                                    }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                                        md: '58.22px',
                                        xs: '43.67px'
                                    }, fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }, mr: 2
                                }} >
                                    $10M
                                </Typography>
                                <Typography variant='h4' sx={{
                                    fontSize: '16px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '19.41pxpx', fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', letterSpacing: '5%', textAlign: {
                                        md: 'start',
                                        xs: 'center'
                                    }, mt: 2
                                }} >
                                    Circulating Supply
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{
                    width: '90%',
                    m: 'auto', display: {
                        md: 'none',
                        xs: 'flex'
                    }, justifyContent: 'center', alignItems: 'center',
                }} >
                    <Box sx={{
                        width: "100%", position: 'relative'
                    }} >
                        <Slider {...settings}>
                            <Box sx={{ px: 1 }} >
                                <Box sx={{
                                    height: '174px', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', background: 'rgba(8, 21, 37, 0.25)', borderRadius: '16px', border: '2px solid #2758FF', p: 4
                                }} >
                                    <Typography variant='h4' sx={{
                                        fontSize: {
                                            md: '48px',
                                            xs: '36px'
                                        }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                                            md: '58.22px',
                                            xs: '43.67px'
                                        }, fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }, mr: 2
                                    }} >
                                        $10M
                                    </Typography>
                                    <Typography variant='h4' sx={{
                                        fontSize: '16px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '19.41pxpx', fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', letterSpacing: '5%', textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }, mt: 2
                                    }} >
                                        Circulating Supply
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ px: 1 }} >
                                <Box sx={{
                                    height: '174px', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', background: 'rgba(8, 21, 37, 0.25)', borderRadius: '16px', border: '2px solid #2758FF', p: 4
                                }} >
                                    <Typography variant='h4' sx={{
                                        fontSize: {
                                            md: '48px',
                                            xs: '36px'
                                        }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                                            md: '58.22px',
                                            xs: '43.67px'
                                        }, fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }, mr: 2
                                    }} >
                                        $10M
                                    </Typography>
                                    <Typography variant='h4' sx={{
                                        fontSize: '16px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '19.41pxpx', fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', letterSpacing: '5%', textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }, mt: 2
                                    }} >
                                        Circulating Supply
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ px: 1 }} >
                                <Box sx={{
                                    height: '174px', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', background: 'rgba(8, 21, 37, 0.25)', borderRadius: '16px', border: '2px solid #2758FF', p: 4
                                }} >
                                    <Typography variant='h4' sx={{
                                        fontSize: {
                                            md: '48px',
                                            xs: '36px'
                                        }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                                            md: '58.22px',
                                            xs: '43.67px'
                                        }, fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }, mr: 2
                                    }} >
                                        $10M
                                    </Typography>
                                    <Typography variant='h4' sx={{
                                        fontSize: '16px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '19.41pxpx', fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', letterSpacing: '5%', textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }, mt: 2
                                    }} >
                                        Circulating Supply
                                    </Typography>
                                </Box>
                            </Box>
                        </Slider>
                    </Box>
                </Box>
                <Box sx={{
                    width: {
                        md: '70%',
                        xs: '100%'
                    }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 14
                }} >
                    <Typography variant='h4' sx={{
                        fontSize: {
                            md: '48px',
                            xs: '28px'
                        }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                            md: '58.22px',
                            xs: '33.96px'
                        }, fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', textAlign: 'center'
                    }} >
                        A simple<br />
                        buy-hold-earn System
                    </Typography>
                    <Typography variant='h4' sx={{
                        fontSize: {
                            md: '24px',
                            xs: '16px'
                        }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                            md: '38px',
                            xs: '28px'
                        }, fontStyle: 'normal', fontWeight: 400, color: '#6C7EBA', textAlign: 'center', mt: 3
                    }} >
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </Typography>
                    <Typography variant='h4' sx={{
                        fontSize: {
                            md: '75px',
                            xs: '48px'
                        }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                            md: '90.98px',
                            xs: '58.22px'
                        }, fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', textAlign: 'center', mt: 3
                    }} >
                        102483.58%
                    </Typography>
                    <Typography variant='h4' sx={{
                        fontSize: {
                            md: '20px',
                            xs: '16px'
                        }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                            md: '24.26px',
                            xs: '16.98px'
                        }, fontStyle: 'normal', fontWeight: 500, color: {
                            md: '#56DBBE',
                            xs: '#2758FF'
                        }, textAlign: 'center', mt: 2
                    }} >
                        Fixed APY
                    </Typography>
                </Box>
                <Box sx={{
                    width: '100%', height: '495.6px', position: 'relative', mt: {
                        md: -8,
                        xs: -14
                    }
                }} >
                    <Image src={'/assets/pictures/globe.png'} layout={'fill'} objectFit={'cover'} />
                </Box>

                {/* Lunchpad */}
                <Container maxWidth="lgBig" sx={{
                    m: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: {
                        md: 32
                    }
                }} >
                    <Box sx={{
                        flexGrow: 1, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
                    }}>
                        <Grid container rowSpacing={{md:0,xs:14}} columnSpacing={{md:2,xs:0}}>
                            <Grid item xs={12} md={6}>
                                <Box sx={{
                                    width: '100%', display: 'flex', justifyContent: 'center', alignItems: {
                                        md: 'start',
                                        xs: 'center'
                                    }, flexDirection: 'column', mt: {
                                        md: -24
                                    }
                                }} >
                                    <Typography variant='h4' sx={{
                                        fontSize: {
                                            md: '20px',
                                            xs: '16px'
                                        }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                                            md: '24.26px',
                                            xs: '28px'
                                        }, fontStyle: 'normal', fontWeight: 500, color: '#2758FF', textAlign: 'center', letterSpacing: '5%'
                                    }} >
                                        ATLAS Launchpad
                                    </Typography>
                                    <Typography variant='h4' sx={{
                                        fontSize: {
                                            md: '75px',
                                            xs: '48px'
                                        }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                                            md: '90.98px',
                                            xs: '58.22px'
                                        }, fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', textAlign: 'center', mt: 1
                                    }} >
                                        $100,000
                                    </Typography>
                                    <Typography variant='h4' sx={{
                                        fontSize: {
                                            md: '24px',
                                            xs: '16px'
                                        }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                                            md: '38px',
                                            xs: '28px'
                                        }, fontStyle: 'normal', fontWeight: 400, color: '#6C7EBA', textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }, mt: 2, display: {
                                            md: 'block',
                                            xs: 'none'
                                        }
                                    }} >
                                        Early project funding & backing,<br /> holders gain a percentage stake<br /> within investments.
                                    </Typography>
                                    <Typography variant='h4' sx={{
                                        fontSize: {
                                            md: '24px',
                                            xs: '16px'
                                        }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                                            md: '38px',
                                            xs: '28px'
                                        }, fontStyle: 'normal', fontWeight: 400, color: '#6C7EBA', textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }, mt: 2, display: {
                                            md: 'none',
                                            xs: 'block'
                                        }
                                    }} >
                                        Early project funding & backing, holders gain a percentage stake within investments.
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
                                            Buy now
                                        </Button>
                                        <Typography variant='h4' sx={{
                                            fontSize: {
                                                md: '20px',
                                                xs: '16px'
                                            }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                                                md: '24.26px',
                                                xs: '28px'
                                            }, fontStyle: 'normal', fontWeight: 500, color: 'white', textAlign: 'center', letterSpacing: '5%', mt: {
                                                md: 0,
                                                xs: 1
                                            }
                                        }} >
                                            Try your luck!
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', mt: 8 }} >
                                        <Box sx={{ borderRadius: '36px', overflow: 'hidden', boxShadow: '0px 4px 250px #2758FF', backdropFilter: 'blur(25px)' }} >
                                            <Image src={'/assets/pictures/lunchpad-blue.png'} width={535} height={710} objectFit={'cover'} />
                                        </Box>
                                        <Box sx={{ position: 'absolute', right: '-60px', top: '0px' }} >
                                            <Image src={'/assets/pictures/diamond-blue.png'} width={150} height={140} objectFit={'cover'} />
                                        </Box>
                                        <Box sx={{ position: 'absolute', left: '-70px', top: '30%' }} >
                                            <Image src={'/assets/pictures/triangle-blue.png'} width={150} height={140} objectFit={'cover'} />
                                        </Box>
                                        <Box sx={{ position: 'absolute', right: '-70px', top: '60%' }} >
                                            <Image src={'/assets/pictures/triangle-blue2.png'} width={150} height={140} objectFit={'cover'} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box sx={{
                                    width: '100%', display: 'flex', justifyContent: 'center', alignItems: {
                                        md: 'start',
                                        xs: 'center'
                                    }, flexDirection: 'column', mb: {
                                        md: -24
                                    }
                                }} >
                                    <Typography variant='h4' sx={{
                                        fontSize: {
                                            md: '20px',
                                            xs: '16px'
                                        }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                                            md: '24.26px',
                                            xs: '28px'
                                        }, fontStyle: 'normal', fontWeight: 500, color: '#96F4A8', textAlign: 'center', letterSpacing: '5%'
                                    }} >
                                        ATLAS DEX Offerings
                                    </Typography>
                                    <Typography variant='h4' sx={{
                                        fontSize: {
                                            md: '75px',
                                            xs: '48px'
                                        }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                                            md: '90.98px',
                                            xs: '58.22px'
                                        }, fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', textAlign: 'center', mt: 1
                                    }} >
                                        80+ Projects
                                    </Typography>
                                    <Typography variant='h4' sx={{
                                        fontSize: {
                                            md: '24px',
                                            xs: '16px'
                                        }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                                            md: '38px',
                                            xs: '28px'
                                        }, fontStyle: 'normal', fontWeight: 400, color: '#48746A', textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }, mt: 2, display: {
                                            md: 'block',
                                            xs: 'none'
                                        }
                                    }} >
                                        Integrated with launchpad projects &<br /> high potential tokens. $ATLAS holders<br /> get preferential rates.
                                    </Typography>
                                    <Typography variant='h4' sx={{
                                        fontSize: {
                                            md: '24px',
                                            xs: '16px'
                                        }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                                            md: '38px',
                                            xs: '28px'
                                        }, fontStyle: 'normal', fontWeight: 400, color: '#48746A', textAlign: {
                                            md: 'start',
                                            xs: 'center'
                                        }, mt: 2, display: {
                                            md: 'none',
                                            xs: 'block'
                                        }
                                    }} >
                                        Integrated with launchpad projects & high potential tokens. $ATLAS holders get preferential rates.
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
                                            fontSize: '14px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '16.98px', fontStyle: 'normal', letterSpacing: '2%', fontWeight: 500, color: 'black', boxShadow: 'unset', backgroundColor: '#96F4A8', "&:hover": {
                                                boxShadow: 'unset', backgroundColor: '#96F4A8'
                                            }, transition: 'all 0.3s ease', width: {
                                                md: '122px',
                                                xs: '80%'
                                            }, height: '45px', p: 0, borderRadius: '60px', textTransform: 'capitalize', mr: {
                                                md: 3
                                            }
                                        }} >
                                            Play now
                                        </Button>
                                        <Typography variant='h4' sx={{
                                            fontSize: {
                                                md: '20px',
                                                xs: '16px'
                                            }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                                                md: '24.26px',
                                                xs: '28px'
                                            }, fontStyle: 'normal', fontWeight: 500, color: 'white', textAlign: 'center', letterSpacing: '5%', mt: {
                                                md: 0,
                                                xs: 1
                                            }
                                        }} >
                                            Win by saving
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', mt: 8 }} >
                                        <Box sx={{ borderRadius: '36px', overflow: 'hidden', boxShadow: '0px 4px 250px  #56DBBE', backdropFilter: 'blur(12px)' }} >
                                            <Image src={'/assets/pictures/lunchpad-green.png'} width={535} height={710} objectFit={'cover'} />
                                        </Box>
                                        <Box sx={{ position: 'absolute', right: '-100px', top: '40%' }} >
                                            <Image src={'/assets/pictures/diamond-green.png'} width={200} height={170} objectFit={'cover'} />
                                        </Box>
                                        <Box sx={{ position: 'absolute', left: '8%', top: '-35px' }} >
                                            <Image src={'/assets/pictures/diamond-green2.png'} width={150} height={140} objectFit={'cover'} />
                                        </Box>
                                        <Box sx={{ position: 'absolute', left: '-70px', top: '40%' }} >
                                            <Image src={'/assets/pictures/triangle-green.png'} width={150} height={140} objectFit={'cover'} />
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default carousel;