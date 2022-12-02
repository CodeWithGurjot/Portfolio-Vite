import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { FiMenu } from 'react-icons/fi';
import { ModeSwitch } from './ModeSwitch';
import scrollToElement from '../utils/scroll';

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NavItem = ({ children, onClick }: Props) => {
    return (
      <Text
        cursor='pointer'
        onClick={onClick}
        className='hover-underline-animation'
        color='white'
        fontSize='18px'
      >
        {children}
      </Text>
    );
  };

  const handleNavClick = (id: string) => {
    onClose();
    scrollToElement(id);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <Box
        justifyContent='space-around'
        p={4}
        bgColor='purple.500'
        display={{ base: 'none', lg: 'flex' }}
        position='sticky'
        top='0'
        w='100%'
        zIndex={5}
        shadow='2xl'
        alignItems='center'
      >
        <Text
          cursor='pointer'
          onClick={() => scrollToElement('home')}
          fontSize='35px'
          fontFamily='e'
          fontWeight='600'
          mt='1'
          color='white'
        >
          Gurjot Gill
        </Text>
        <HStack spacing={8}>
          <NavItem onClick={() => scrollToElement('home')}>HOME</NavItem>
          <NavItem onClick={() => scrollToElement('about')}>ABOUT</NavItem>
          <NavItem onClick={() => scrollToElement('projects')}>PROJECTS</NavItem>
          <NavItem onClick={() => scrollToElement('skills')}>SKILLS</NavItem>
        </HStack>
        <Flex>
          <ModeSwitch />
          <Button onClick={() => scrollToElement('contact')} ml={5} rounded='2xl'>
            LET'S CHAT
          </Button>
        </Flex>
      </Box>

      {/* Mobile Navbar */}
      <Box
        justifyContent='space-between'
        p={5}
        bgColor='purple.500'
        display={{ base: 'flex', lg: 'none' }}
        position='sticky'
        top='0'
        w='100%'
        zIndex={5}
        shadow='2xl'
      >
        <Text
          onClick={() => scrollToElement('home')}
          fontSize='25px'
          fontFamily='e'
          fontWeight='600'
          mt='1'
          color='white'
        >
          Gurjot Gill
        </Text>
        <Box>
          <ModeSwitch />
          <IconButton ml={5} aria-label='menu-button' onClick={onOpen} icon={<FiMenu />} />
        </Box>
        <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent borderRight='2px' borderColor='white' bgColor='purple.500'>
            <DrawerCloseButton color='white' m={4} size='lg' />
            <DrawerHeader my={2}>
              <Text
                onClick={() => scrollToElement('home')}
                fontSize='25px'
                fontFamily='e'
                fontWeight='600'
                mt='1'
                color='white'
              >
                Gurjot Gill
              </Text>
            </DrawerHeader>
            <Divider />
            <DrawerBody mt='4'>
              <VStack spacing='7' alignItems='flex-start'>
                <NavItem
                  onClick={() => {
                    handleNavClick('home');
                  }}
                >
                  HOME
                </NavItem>
                <Divider />
                <NavItem
                  onClick={() => {
                    handleNavClick('about');
                  }}
                >
                  ABOUT
                </NavItem>
                <Divider />
                <NavItem
                  onClick={() => {
                    handleNavClick('projects');
                  }}
                >
                  PROJECTS
                </NavItem>
                <Divider />
                <NavItem
                  onClick={() => {
                    handleNavClick('skills');
                  }}
                >
                  SKILLS
                </NavItem>
                <Divider />
                <Button
                  onClick={() => {
                    handleNavClick('contact');
                  }}
                >
                  CONTACT ME
                </Button>
                <Divider />
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
