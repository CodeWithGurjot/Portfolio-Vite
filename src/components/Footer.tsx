import { Flex, Text } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Flex
      alignItems='center'
      bgColor='purple.500'
      color='white'
      px={5}
      py={6}
      mt={14}
      justifyContent='space-around'
    >
      <Text fontFamily='h' fontSize={{ base: '15px', lg: '18px' }}>
        Copyright &copy; {year} - Gurjot Gill
      </Text>
      <Flex alignItems='center' gap={{ base: 2, lg: 5 }}>
        <a target='_blank' rel='noreferrer' href='https://github.com/CodeWithGurjot'>
          <FaGithub cursor='pointer' size={28} />
        </a>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.linkedin.com/in/gurjot-gill-12673223b'
        >
          <FaLinkedin cursor='pointer' size={28} />
        </a>
        <a href='mailto:hello@gurjotgill.com'>
          <MdEmail cursor='pointer' size={28} />
        </a>
      </Flex>
    </Flex>
  );
};

export default Footer;
