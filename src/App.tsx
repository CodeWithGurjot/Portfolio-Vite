import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import AboutCard from './components/AboutCard';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box minH='100vh' w='100%'>
      <Navbar />
      <Landing />
      <AboutCard />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </Box>
  );
};

export default App;
