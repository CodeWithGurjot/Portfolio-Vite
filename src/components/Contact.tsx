import React, { useRef, useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import contactAnimation from '../assets/animations/contact.json';
import emailjs from '@emailjs/browser';
import {
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import Animation from './Animation';

const Contact = () => {
  const form = useRef(null);

  const [loading, setLoading] = useState(false);

  const schema = yup
    .object({
      name: yup.string().required('This feild is Required'),
      email: yup.string().email('Invalid Email').required('This feild is Required'),
      userMessage: yup.string().required('This feild is Required'),
    })
    .required();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const toast = useToast();

  function onSubmit() {
    setLoading(true);
    if (form.current) {
      emailjs
        .sendForm('service_7ixz5ik', 'template_qvfcqdr', form.current, '1NV0giyqu3p_9aLom')
        .then(
          (result) => {
            console.log(result.text);
            reset();
            toast({
              title: 'Mail Successfully Sent',
              description: "We'll Get in touch Soon!",
              status: 'success',
              duration: 6000,
              isClosable: true,
              position: 'top',
            });
            setLoading(false);
          },
          (error) => {
            console.log(error.text);
            toast({
              title: 'An Error Occured',
              status: 'error',
              duration: 4000,
              isClosable: true,
              position: 'top',
            });
            setLoading(false);
          },
        );
    }
  }

  return (
    <Flex
      id='contact'
      scrollMarginTop={32}
      w='100%'
      direction={{ base: 'column', lg: 'row' }}
      justifyContent='center'
      alignItems='center'
      mt={14}
    >
      <Animation animationData={contactAnimation} />
      <Flex
        w={{ base: '92%', lg: '50%' }}
        alignItems='center'
        justifyContent='center'
        direction='column'
      >
        <Text fontFamily='h' fontWeight='700' fontSize={{ base: '50px', md: '60px' }}>
          Contact Me
        </Text>
        <Divider
          mb={8}
          borderColor={useColorModeValue('black', 'white')}
          w={{ base: '80%', md: '50%' }}
        />
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <Flex
            direction='column'
            w={{ base: '75vw', md: '25vw' }}
            alignItems='center'
            justifyContent='center'
          >
            <FormControl variant='floating' isInvalid={Boolean(errors.name)}>
              <FormLabel htmlFor='name'>Full Name *</FormLabel>
              <Input id='name' placeholder='Enter Name...' {...register('name')} />
              <FormErrorMessage>{errors.name && errors.name.message?.toString()}</FormErrorMessage>
            </FormControl>

            <FormControl mt={2} isInvalid={Boolean(errors.email)}>
              <FormLabel htmlFor='email'>Email *</FormLabel>
              <Input id='email' placeholder='Enter Email...' {...register('email')} />
              <FormErrorMessage>
                {errors.email && errors.email.message?.toString()}
              </FormErrorMessage>
            </FormControl>

            <FormControl mt={2} isInvalid={Boolean(errors.userMessage)}>
              <FormLabel htmlFor='userMessage'>Message *</FormLabel>
              <Textarea
                h={{ base: '20vh', md: '10vh', lg: '20vh' }}
                isInvalid={Boolean(errors.userMessage)}
                id='userMessage'
                placeholder='Enter Message...'
                {...register('userMessage')}
              />
              <FormErrorMessage>
                {errors.userMessage && errors.userMessage.message?.toString()}
              </FormErrorMessage>
            </FormControl>

            <Button
              size={{ base: 'md', md: 'lg' }}
              w='100%'
              mt={4}
              colorScheme='purple'
              isLoading={loading}
              type='submit'
            >
              Submit
            </Button>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default Contact;
