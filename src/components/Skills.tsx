import { Divider, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react';
import skills from '../data/skills.json';
import skillsAnimation from '../assets/animations/skills.json';
import Animation from './Animation';

interface Props {
  img: string;
  name: string;
}

const SkillsIcon = ({ img, name }: Props) => {
  return (
    <Flex
      data-aos='zoom-in'
      data-aos-duration='2000'
      data-aos-anchor-placement='top-bottom'
      direction='column'
      alignItems='center'
      justifyContent='center'
    >
      <Image
        loading='lazy'
        rounded='2xl'
        objectFit='cover'
        src={img}
        boxSize='60px'
        cursor='pointer'
      />
      <Text mt={2} fontFamily='p' fontSize='15px'>
        {name}
      </Text>
    </Flex>
  );
};

const Skills = () => {
  return (
    <Flex
      id='skills'
      scrollMarginTop={{ base: 32, md: 24 }}
      alignItems='center'
      justifyContent='center'
      mt={14}
      direction='column'
    >
      <Text textAlign='center' fontFamily='h' fontWeight='700' fontSize='60px'>
        SKILLS
      </Text>
      <Divider mb={8} borderColor={useColorModeValue('black', 'white')} w='50%' />
      <Flex
        alignItems='center'
        justifyContent='center'
        direction={{ base: 'column', lg: 'row' }}
        w={{ base: '100%', lg: '70%' }}
      >
        <Flex
          alignItems='center'
          justifyContent='center'
          width={{ base: '100%', lg: '50%' }}
          px={5}
          gap={12}
          wrap='wrap'
        >
          {skills.map((skill) => (
            <SkillsIcon key={skill.id} img={skill.icon} name={skill.name} />
          ))}
        </Flex>
        <Animation animationData={skillsAnimation} display={{ base: 'none', lg: 'flex' }} />
      </Flex>
    </Flex>
  );
};

export default Skills;
