import { useEffect, useRef } from 'react';
import lottie from 'lottie-web/build/player/lottie_light';
import { Box } from '@chakra-ui/react';

interface Props {
  animationData: any;
  base: string;
  md: string;
  lg: string;
  display?: { base: string; lg: string } | string;
}

const Animation = ({ animationData, base, md, lg, display }: Props) => {
  const animationInstance = useRef(null);

  useEffect(() => {
    const animation = JSON.stringify(animationData);
    if (animationInstance.current) {
      const anim = lottie.loadAnimation({
        container: animationInstance.current,
        animationData: JSON.parse(animation),
        renderer: 'svg',
        loop: true,
        autoplay: true,
      });
      return () => {
        anim.stop();
        anim.destroy();
        lottie.stop();
        lottie.destroy();
      };
    }
  }, [animationInstance, animationData]);
  return (
    <Box
      ref={animationInstance}
      objectFit='cover'
      display={display}
      w={{ base, md, lg }}
      h='100%'
    ></Box>
  );
};

Animation.defaultProps = {
  base: '100%',
  md: '100%',
  lg: '50%',
};

export default Animation;
