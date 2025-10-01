import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <p>&copy; 2025 [Anindra Taqi Wardhana]. All rights reserved.</p>
        <SocialLinks>
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:email@anda.com">
            <i className="fas fa-envelope"></i>
          </a>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  background: linear-gradient(
    135deg,
   
    #000000ff 100%  /* Abu gelap */
  );
  color: white;
  padding: 2rem 0;
  margin-top: auto;
  text-align: center;
`


const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s;
    
    &:hover {
      color: #6366f1;
    }
  }
`

export default Footer
