import { Box, Image, Text } from '@chakra-ui/react'
import React , {useRef, useEffect} from 'react'
import Typed from 'typed.js';


function Poem() {
    const el = useRef(null);

    useEffect(() => {
      if (el.current) {
        const typed = new Typed(el.current, {
          strings: [
          `
        Happy One Year Anniversary In Canada 🌹❤️
        <br>
        May our love grow much more as we get established in this land. Love you 
        <br>
        5ran6
          ` 
          
          ],
          typeSpeed: 90,
          backSpeed: 80,
          backDelay: 300,
          loop: true,
        });
  
        return () => {
          typed.destroy();
        };
      }
    }, []);
  return (
    <Box
    width={'100%'}
    zIndex={1000}
    position={'fixed'}
    marginTop={'50px'}
    >
      <Box
      color={'white'}
      width={'100%'}
      m={'auto'}
    
      textAlign={'center'}
      >
        <Text
        fontFamily='"Satoshi", "sans-serif"'
        as="div" display="inline-block"
        width={'80%'}
        margin={'auto'}
        fontSize={'20px'}
        color={'white'}
        >
        <span ref={el}></span>
        </Text>
      </Box>
    </Box>
  )
}

export default Poem
