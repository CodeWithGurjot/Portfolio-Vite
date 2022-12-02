import { Button, Flex, Text } from '@chakra-ui/react';
import Animation from './Animation';
import animationData from '../assets/animations/coding.json';
import { BsFillCloudDownloadFill } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import scrollToElement from '../utils/scroll';

const Landing = () => {
  return (
    <Flex
      id='home'
      scrollMarginTop='40'
      mt={5}
      h={{ base: '100%', lg: '86vh' }}
      direction={{ base: 'column', lg: 'row' }}
      w='100%'
      px={[4, 8]}
    >
      <Flex justifyContent='center' w={{ base: '100%', lg: '50%' }} direction='column'>
        <Text fontSize='60px' mb={[0, 2]} fontFamily='h' fontWeight='extrabold'>
          Kia Ora! I'am Gurjot
        </Text>
        <Text fontFamily='h' fontSize='32px'>
          Full-Stack Developer
        </Text>
        <Text w={['100%', '70%']} fontFamily='h' letterSpacing={2} fontSize='22px' pt={2}>
          A<span style={{ fontWeight: 'bold' }}> Developer</span> passionate about Web Apps and
          latest tech. Eager to learn something new
          <span style={{ fontWeight: 'bold' }}> Everyday.</span>
        </Text>
        <Flex pt={[5, 10]}>
          <Button
            onClick={() => {
              scrollToElement('contact');
            }}
            size='lg'
            rightIcon={<FaTelegramPlane />}
            colorScheme='purple'
          >
            Contact Me
          </Button>
          <Button
            rightIcon={<BsFillCloudDownloadFill />}
            size='lg'
            bgColor='purple.100'
            color='black'
            _hover={{ bgColor: '#805AD5', color: 'white' }}
            ml={5}
          >
            Download CV
          </Button>
        </Flex>
      </Flex>
      <Animation animationData={animationData} />
    </Flex>
  );
};

export default Landing;
