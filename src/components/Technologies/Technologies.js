import React from 'react';
import { DiFirebase, DiJavascript, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id ="tech">
   <SectionDivider/>
<br />
<SectionTitle> Technologies</SectionTitle>
<SectionText>
  I have worked with a range of technologies Both in the FrontEnd and in the Backend.
</SectionText>
<List>
<ListItem>

<DiJavascript size ="3rem"/>
<ListContainer>
  <ListTitle>
Front_End
  </ListTitle>
  <ListParagraph>Experience with



    <br/> Javascript,React.js,CSS,Sass,HTML
  </ListParagraph>
</ListContainer>

</ListItem>
<ListItem>

<DiFirebase size ="3rem"/>
<ListContainer>
  <ListTitle>
Back_End
  </ListTitle>
  <ListParagraph>Experience with



    <br/> Python and Java
  </ListParagraph>
</ListContainer>

</ListItem>




</List>
  </Section>
  
);

export default Technologies;
