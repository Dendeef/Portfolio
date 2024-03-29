import React from "react";
import { DiFirebase, DiReact,  } from "react-icons/di";
import {SiGnubash}from "react-icons/si"
import {BiChip} from "react-icons/bi"

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
     <SectionDivider />
    <br/>
    
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I learned and practised with a lot of different technologies like:
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with:
            <br /> Javascript, HTML and REACT framework
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with:
            <br /> MySql, Python and C
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
      <SiGnubash size="3rem" />
        <ListContainer>
          <ListTitle>Shell scripting</ListTitle>
          <ListParagraph>
            Experience with:
            <br/>
            writing scripts in BASH
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <BiChip size="3rem" />
        <ListContainer>
          <ListTitle>Assembly language </ListTitle>
          <ListParagraph>
          Experience with: 
          <br />
           x86 and 8086
           </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
