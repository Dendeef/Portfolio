import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section>
    <LeftSection>
      <SectionTitle>Welcome to my Portfolio</SectionTitle>
      <SectionText>
        Cybersecurity professional with a strong interest in malware analysis.
        Check out my project samples below.
      </SectionText>
    </LeftSection>
  </Section>
);
export default Hero;
