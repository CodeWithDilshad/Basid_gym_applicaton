import React from 'react'
import '../App.css'
import { Box, Stack, Grid, Typography, Button } from '@mui/material'

import Bannerimg from '../Assets/Images/Banner2img.jpg'


const HeroBanner = () => {
    return (
        <div>
            <div className='MyBanner'>


                <div className='left'>
                    <Box
                        sx={{
                            mt: { lg: '212px', xs: '70px' },
                            ml: { sm: '50px' }
                        }}
                        position='relative'
                        p='20px'


                    >

                        <Typography
                            color="red"
                            fontWeight="600"
                            fontSize="20px"
                            mb="23px"
                            mt="30px"
                        >
                            Fitness Club
                        </Typography>
                        <Typography
                            fontWeight={700}
                            sx={{ fontSize: { lg: '44px', xs: '40px' } }}
                        >
                            Sweat, Smile <br /> and Repeat
                        </Typography>

                        <Typography
                            fontSize="22px"
                            lineHeight="35px"
                            mb={4}
                        >
                            Check out the most effective Exercisese
                        </Typography>
                        <Button
                            variant='contained'
                            color="error"
                            href='#exercises'
                            sx={{backgroundColor:"#FF2625", padding:"10px"}}
                        >
                            Explore Exercises
                        </Button>



                    </Box>
                    <div className='Exercise'><Typography
                        fontWeight={600}
                        color='#ff2625'
                        sx={{
                            opacity: '0.1',
                            display: { lg: "block", xs: 'none' }
                        }}
                        fontSize="200px"
                    >
                        Exercise
                    </Typography></div>
                </div>

                <div className='Right'>
                    <img src={Bannerimg} alt="Banner" className='hero-banner-img'

                    />
                </div>
            </div>
        </div >
    )
}

export default HeroBanner
