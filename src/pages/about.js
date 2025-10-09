import React from "react"
import Layout from "../components/Layout"
import seo from "../components/seo"
import styled, { keyframes } from "styled-components"

const AboutPage = () => (
  <Layout>
    <seo title="About" />
    <AboutContainer>
      <h1>Tentang Saya</h1>
      <Content>
        <p>
          Hai! Saya <span className="highlight">Anindra Taqi Wardhana</span>, seorang yang punya ketertarikan besar di dunia{" "}
          <span className="highlight">IT, networking, hardware & software</span>, dan juga{" "}
          <span className="highlight">web development</span>. 
          Saya berpengalaman dalam instalasi & konfigurasi jaringan, perakitan komputer, troubleshooting sistem, 
          hingga membangun website modern dengan <span className="tech">React</span>,{" "}
          <span className="tech">Gatsby</span>, dan <span className="tech">Styled Components</span>. 
          Saat ini saya terbuka untuk kesempatan baru di mana saya bisa terus belajar, berkembang, dan berkontribusi melalui pengalaman kerja nyata .
        </p>
      </Content>
    </AboutContainer>
  </Layout>
)

// ✨ Animations
const glow = keyframes`
  0% { text-shadow: 0 0 5px #facc15, 0 0 10px #facc15; }
  50% { text-shadow: 0 0 20px #facc15, 0 0 35px #facc15; }
  100% { text-shadow: 0 0 5px #facc15, 0 0 10px #facc15; }
`

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`

// ✨ Styled Components
const AboutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 4rem 2rem;
  text-align: center;
  background: radial-gradient(circle at top, #1a1a1a, #000);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    color: #facc15;
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 2.5rem;
    animation: ${glow} 2.5s infinite ease-in-out;
    letter-spacing: 2px;
  }
`

const Content = styled.div`
  max-width: 850px;
  text-align: justify;
  animation: ${fadeInUp} 1.5s ease forwards;

  p {
    font-size: 1.15rem;
    line-height: 1.9;
    color: #ddd;
  }

  .highlight {
    color: #facc15;
    font-weight: 600;
  }

  .tech {
    color: #38bdf8;
    font-weight: 600;
  }
`
export default AboutPage
