import React from 'react'
import { Youtube } from 'react-feather';
import Slider from '../components/Slider/Slider';
import Introduction from './Introduction';
import { useSpring, animated } from 'react-spring';

export default function Home() {
  const props = useSpring({
    to: { opacity: 1, transform: 'translateY(0)' },
    from: { opacity: 0, transform: 'translateY(-50px)' },
    config: { duration: 1000 }
  });
  return (
    <>
    <div className='container-fluid'>
    <div className='centered-content w-50'>
      <Youtube size={134}  color='red'/> 
      <animated.div style={props}>
      <h1 className='main-title'>The Web Designer </h1>
    </animated.div>
     
        <h2>The Ultimate Web Developer Resource</h2>
        <p className='main-subtitle'>100% free resources and tools for web developers to help you build amazing products that delight your users.</p>
    </div>
  </div>
<Slider />
<Introduction />
</>
  )
}
