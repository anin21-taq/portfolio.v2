import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

const Skills = () => {
  const skills = [
    {
      category: "Networking",
      description:
        "Instalasi dan konfigurasi jaringan komputer, subnetting, manajemen router & switch, serta troubleshooting jaringan dasar.",
      items: ["Mikrotik", "Lan", "Wan", "Man","Troubleshooting"],
    },
    {
      category: "Hardware & Software",
      description:
        "Perakitan dan perawatan perangkat keras komputer, instalasi serta konfigurasi software, manajemen driver, dan optimasi performa sistem.",
      items: ["PC Assembly", "Maintenance & Upgrade", "Software Installation", "Troubleshooting Hardware"],
    },
    {
      category:  "Website",
      description: "Website  modern dengan animasi dan responsif design.",
      items: ["React", "Gatsby", "Styled Components",],
    },
  ];

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
          else setVisible(false);
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <SkillsContainer ref={sectionRef}>
      <SkillsContent>
        <Title>Kemampuan</Title>
        <SkillsGrid>
          {skills.map((skillGroup, index) => (
            <SkillCard key={index} delay={index * 0.2} $visible={visible}>
              <SkillCategory>{skillGroup.category}</SkillCategory>
              <SkillDescription>{skillGroup.description}</SkillDescription>
              <SkillItems>
                {skillGroup.items.map((item, i) => (
                  <SkillItem key={i}>{item}</SkillItem>
                ))}
              </SkillItems>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsContent>
    </SkillsContainer>
  );
};

// ===== STYLE =====
const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const SkillsContainer = styled.section`
  padding: 4rem 2rem;
  background: #000; /* hitam polos */
  color: white;
`;

const SkillsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 2.2rem;
  font-weight: 700;
  color: #facc15;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SkillCard = styled.div`
  background: #111;
  color: white;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);

  ${({ $visible, delay }) =>
    $visible &&
    css`
      animation: ${fadeInUp} 0.8s ease forwards;
      animation-delay: ${delay}s;
    `}

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 6px 25px rgba(255, 255, 0, 0.3);
  }
`;

const SkillCategory = styled.h3`
  color: #facc15;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const SkillDescription = styled.p`
  font-size: 0.9rem;
  color: #d1d5db;
  margin-bottom: 1rem;
`;

const SkillItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1rem;
`;

const SkillItem = styled.span`
  background: #292524;
  color: #facc15;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 500;
`;

export default Skills;
