import React from 'react'
import { ThemeProvider, Button, createTheme } from '@mui/material';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { height } from '@mui/system';
import { setLocale } from 'yup';

const ButtonsJoke = ({ changeJoke, like, dislike, joke, numberLikes, numberDislikes}) => {
    const theme = createTheme({
        components: {
        MuiButton: {
            variants: [
            {
                props: { variant: 'dashed' },
                style: {
                width: '70px',
                height: '70px',
                transform: 'scale(0.7)',
                textTransform: 'none',
                border: `4px dashed #1972d2`,
                borderRadius: '100%',
                padding: '10'
                //   filter: 'blur(10px)'
                }
            },
            {
                props: { variant:'next', color:'tertiary'},
                style:{
                    border: `3px dashed #72d219`,
                    color: '#fff'
                }
            }
            ],
        },
        },
    });
    const backgrouButton = 'rgba(255, 255, 255, 0.15)'

  return (
    <ThemeProvider theme={theme}>
            <div className='container_like'>
                <p>{numberLikes}</p>
                <Button onClick={like} variant="dashed" sx={{ m: 1, background: `${joke?.like == null? null : joke.like? '#1972d275' : null}` }}>
                    <ThumbUpIcon sx={{ color:'#fff', fontSize: '40px' }}></ThumbUpIcon>
                </Button>
            </div>
            <div className='container_dislike'>
                <p>{numberDislikes}</p>
                <Button onClick={dislike} variant="dashed"  sx={{ m: 1, borderColor: `#d21972`, background: `${joke?.like == null? null : joke.like === false? '#d2197275' : null}` }} >
                    <ThumbDownIcon sx={{ color:'#fff', fontSize: '40px'  }}> </ThumbDownIcon>
                </Button>
        </div>
        
        <Button onClick={ changeJoke} variant="next" color='tertiary' size="large" sx={{ m: 1, position: 'absolute', bottom: '0', right: '5%'}}>
            Change
        </Button>
    </ThemeProvider>
  )
}

export default ButtonsJoke