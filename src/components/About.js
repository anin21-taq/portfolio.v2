import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  padding: 4rem 2rem;
  background: #000; /* hitam polos */
  color: white;
`;

const AboutContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: #ffd32a;
  }

  p {
    line-height: 1.8;
    opacity: 0.85;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContent>
        <h2>Tentang Saya</h2>
        <p>
          Saya Anindra Taqi Wardhana, punya ketertarikan di bidang IT, networking, hardware & software, dan web development. Berpengalaman dalam instalasi & konfigurasi jaringan, perakitan komputer, troubleshooting sistem, serta membangun website modern dengan React, Gatsby, Styled Components. Siap belajar hal baru dan berkontribusi lewat pengalaman kerja.
        </p>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
