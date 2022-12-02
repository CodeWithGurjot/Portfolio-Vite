import { Divider, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react';

const AboutCard = () => {
  function getAge(dateString: string): number {
    const birthday = +new Date(dateString);
    return ~~((Date.now() - birthday) / 31557600000);
  }
  return (
    <Flex
      id='about'
      scrollMarginTop={{ base: 24, lg: 40 }}
      mt={14}
      alignItems='center'
      justifyContent='center'
    >
      <Flex
        py={8}
        px={6}
        w={{ base: '92%', md: '82%', lg: '70%' }}
        rounded='2xl'
        bgColor={useColorModeValue('purple.500', 'purple.100')}
        color={useColorModeValue('white', 'black')}
        alignItems='center'
        justifyContent='center'
        direction={{ base: 'column', lg: 'row' }}
      >
        <Image
          w='50%'
          border='2px'
          rounded='2xl'
          boxSize={{ base: '350px', md: '490px', lg: '400px' }}
          src='https://res.cloudinary.com/gurjotgill/image/upload/v1667274204/Gill/Me_pzq3yi.jpg'
        />
        <Flex
          alignItems={{ base: 'center', lg: 'flex-start' }}
          ml={{ base: 0, lg: 20 }}
          w={{ base: '100%', lg: '45%' }}
          direction='column'
        >
          <Text fontSize={['40px', '60px']} mt={{ base: 5, lg: 0 }} fontFamily='h'>
            ABOUT ME
          </Text>
          <Divider w='90%' borderColor={useColorModeValue('white', 'black')} />
          <Text
            w={['100%', '90%']}
            mt={[2, 5]}
            fontSize={['20px', '25px']}
            letterSpacing={1}
            fontFamily='p'
            textAlign={{ base: 'center', lg: 'left' }}
          >
            Hi, my name is Gurjot Singh. I am a {getAge('2000-05-16')} years old full-stack
            developer. Living in Tauranga, New Zealand. I've completed my Bachelors of Applied IT
            (Level-7) from Toi-Ohomai Institute of technology (2019-2022). I love programming and
            video games.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AboutCard;
