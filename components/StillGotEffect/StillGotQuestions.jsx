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
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from 'react-reveal/Fade';
import { Zoom } from 'react-reveal';

function StillGotQuestion() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);

    };
    return (
        <>
            <Box sx={{
                width: '100%', backgroundColor: 'black', py: 0, position: "relative"
            }} >
                <Container maxWidth="lgBig" sx={{
                    m: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: {
                        md: 'row',
                        xs: 'column'
                    }
                }} >
                    <Box sx={{
                        width: {
                            md: '50%',
                            xs: '100%'
                        }, display: 'flex', justifyContent: 'center', alignItems: {
                            md: 'start',
                            xs: 'center'
                        }, flexDirection: 'column'
                    }} >
                        <Zoom cascade >
                            <Typography variant='h4' sx={{
                                fontSize: {
                                    md: '75px',
                                    xs: '28px'
                                }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                                    md: '90.98px',
                                    xs: '33.96px'
                                }, fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', textAlign: {
                                    md: 'start',
                                    xs: 'center'
                                }, display: {
                                    md: 'block',
                                    xs: 'none'
                                }
                            }} >
                                Still got<br />Question ?
                            </Typography>
                            <Typography variant='h4' sx={{
                                fontSize: {
                                    md: '75px',
                                    xs: '28px'
                                }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                                    md: '90.98px',
                                    xs: '33.96px'
                                }, fontStyle: 'normal', fontWeight: 500, color: '#FFFFFF', textAlign: {
                                    md: 'start',
                                    xs: 'center'
                                }, display: {
                                    md: 'none',
                                    xs: 'block'
                                }
                            }} >
                                Still got Question ?
                            </Typography>
                        </Zoom>
                        <Box sx={{ width: '100%', mt: 8 }} >
                            {
                                faq.map((item, index) => {
                                    return <Fade bottom > <Accordion sx={{ backgroundColor: 'black' }} key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon sx={{ color: 'white', fontSize: '30px' }} />}
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                            sx={{ backgroundColor: 'black', py: 1, borderBottom: '1px solid #2F2F2F' }}
                                        >
                                            <Typography variant="h2" sx={{
                                                fontSize: {
                                                    md: '20px',
                                                    xs: '16px'
                                                }, fontFamily: ['gilroy', 'Open Sans'], lineHeight: {
                                                    md: '24.26px',
                                                    xs: '19px'
                                                }, fontStyle: 'normal', fontWeight: 400, color: '#FFFFFF', textAlign: {
                                                    md: 'start',
                                                    xs: 'center'
                                                }
                                            }} component="div">
                                                {item.question}
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails sx={{ backgroundColor: 'black' }} >
                                            <Typography variant="h2" sx={{
                                                fontSize: {
                                                    md: '16px',
                                                    xs: '14px'
                                                }, lineHeight: {
                                                    md: '28px',
                                                    xs: '24px'
                                                }, fontFamily: ['gilroy', 'Open Sans'], fontWeight: 400, color: '#22A3D8', textAlign: 'start',
                                            }} component="div">
                                                {item.answer}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    </Fade>
                                })
                            }
                        </Box>
                        <Zoom cascade >
                        <Button variant='outlined' sx={{
                            fontSize: '14px', fontFamily: ['gilroy', 'Open Sans'], lineHeight: '16.98px', fontStyle: 'normal', letterSpacing: '2%', fontWeight: 500, color: 'white', boxShadow: 'unset', border: '2px solid #2758FF', "&:hover": {
                                boxShadow: 'unset', backgroundColor: '#2758FF',boxShadow:'0 0 50px #2758FF'
                            }, transition: 'all 0.3s ease', width: {
                                md: '189px',
                                xs: '80%'
                            }, height: '45px', p: 0, borderRadius: '60px', textTransform: 'capitalize', mt: {
                                md: 0,
                                xs: 2
                            }, position: 'realtive', zIndex: 3, mt: 8
                        }} >
                            See more details
                        </Button>
                        </Zoom>
                    </Box>
                    <Box sx={{
                        width: {
                            md: '50%',
                            xs: '100%'
                        }, height: {
                            md: '773.78px',
                            xs: '500px'
                        }, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: {
                            md: 0,
                            xs: 3
                        }
                    }} >
                        <Zoom cascade >
                        <Image src={'/assets/pictures/globes.png'} layout={'fill'} objectFit={'contain'} />
                        </Zoom>
                    </Box>
                </Container>
                <Box sx={{
                    position: 'absolute', left: '0px', top: '10px', display: {
                        md: 'block',
                        xs: 'none'
                    }
                }} >
                    <Fade left cascade >
                    <Image src={'/assets/pictures/Ellipse left.png'} width={700} height={800} objectFit={'cover'} />
                    </Fade>
                </Box>
            </Box>
        </>
    )
}

export default StillGotQuestion;

const faq = [
    {
        id: 1,
        question: 'What is ATLAS ?',
        answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
    },
    {
        id: 2,
        question: 'How yo buy ?',
        answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
    },
    {
        id: 3,
        question: 'Is it a marketplace ?',
        answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
    },
    {
        id: 4,
        question: 'How can i post project ?',
        answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.'
    }
]