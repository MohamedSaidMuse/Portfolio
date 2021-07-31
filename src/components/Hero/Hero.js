import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <section row nopadding   >

<LeftSection>
<SectionTitle main center>
welcome to <br/>
My personal Portfolio
</SectionTitle>
<SectionText>
I am a Software Developer specializing in Javascript and React. I am attending school for a bachelors degree in Electrical Engineering with a Minor Computer Sceince. 

</SectionText>
<Button onClick ={( )=> window.location ='https://google.com'}>Resume</Button> 
</LeftSection>
     </section>
);

export default Hero;