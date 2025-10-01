import React from "react";
import styled from "styled-components";

// Container utama
const HeroContainer = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: hidden;
  background: linear-gradient(
      to bottom,
      rgba(255, 211, 42, 0.15) 0%,   /* Cahaya samar dari atas */
      rgba(0, 0, 0, 0) 30%, 
      rgba(0, 0, 0, 0.6) 100%
    ),
    #0d0d0f; /* Hitam pekat */
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55); /* lapisan gelap tipis */
  z-index: 1;
`;

const HeroContent = styled.div`
  position: relative;
  max-width: 650px;
  z-index: 2;
  padding: 2rem;
`;

// Foto profil
const ProfileWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
`;
const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #FFD32A;
  box-shadow: 0 0 25px rgba(255, 211, 42, 0.5);
`;

// Text
const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
  font-weight: 800;
  span {
    color: #FFD32A;
    text-shadow: 0 0 12px rgba(255, 211, 42, 0.7);
  }
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;
const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  opacity: 0.85;
  margin-bottom: 1.2rem;
`;
const HeroDescription = styled.p`
  font-size: 1rem;
  opacity: 0.8;
  margin-bottom: 2rem;
`;

// Tombol
const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;
const Button = styled.a`
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &.primary {
    background: #FFD32A;
    color: #1C1C1E;
    box-shadow: 0 4px 15px rgba(255, 211, 42, 0.4);
    &:hover {
      background: #F5B700;
      transform: translateY(-3px) scale(1.05);
    }
  }

  &.secondary {
    border: 2px solid white;
    color: white;
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
    &:hover {
      background: white;
      color: #1C1C1E;
      transform: translateY(-3px) scale(1.05);
    }
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Overlay />
      <HeroContent>
        <ProfileWrapper>
          <ProfileImage src="/images/Taqi.jpg" alt="Profile" />
        </ProfileWrapper>
        <HeroTitle>
          Halo, Saya <span>Anindra Taqi Wardhana</span>
        </HeroTitle>
        <HeroSubtitle> | TKJ |</HeroSubtitle>
        <HeroDescription>
          Saya adalah Siswa yang memiliki minat dalam Informatika PT Kereta Api Indonesia
        </HeroDescription>
        <HeroButtons>
          <Button href="#projects" className="primary">🚀 Lihat Proyek</Button>
          <Button href="#contact" className="secondary">📩 Hubungi Saya</Button>
        </HeroButtons>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
