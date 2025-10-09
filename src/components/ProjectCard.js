import React from "react";
import styled, { keyframes } from "styled-components";

const ProjectCard = ({ project, isLoading = false }) => {
  if (isLoading) {
    return (
      <Card>
        <SkeletonImage />
        <SkeletonText width="60%" />
        <SkeletonText width="90%" />
        <SkeletonTagWrapper>
          {[1, 2, 3].map((i) => (
            <SkeletonTag key={i} />
          ))}
        </SkeletonTagWrapper>
        <SkeletonLinks>
          <SkeletonButton />
          <SkeletonButton />
        </SkeletonLinks>
      </Card>
    );
  }

  return (
    <Card>
      <ImageWrapper>
        <Image src={project.image} alt={project.title} />
        <Overlay>
          <h3>{project.title}</h3>
        </Overlay>
      </ImageWrapper>
      <Description>{project.description}</Description>
      <TechList>
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </TechList>
      <Links>
        <a href={project.demo} target="_blank" rel="noopener noreferrer">
          🚀 Demo
        </a>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          💻 GitHub
        </a>
      </Links>
    </Card>
  );
};

/* ========== Normal Styling ========== */

const Card = styled.div`
  background: #1c1c1e;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.35);
  color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeIn 0.8s ease forwards;
  min-height: 300px;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.5);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  display: block;
  transition: transform 0.5s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  text-align: left;

  h3 {
    margin: 0;
    font-size: 1.4rem;
    color: #ffd32a;
  }
`;

const Description = styled.p`
  padding: 1rem;
  font-size: 1rem;
  opacity: 0.85;
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0 1rem;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: flex-start;

  li {
    background: rgba(255, 211, 42, 0.15);
    padding: 0.3rem 0.6rem;
    border-radius: 5px;
    font-size: 0.8rem;
    color: #ffd32a;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  a {
    flex: 1;
    text-align: center;
    margin: 0 0.25rem;
    color: #1c1c1e;
    background: #ffd32a;
    font-weight: bold;
    padding: 0.5rem 0.8rem;
    border-radius: 8px;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: #f5b700;
      transform: translateY(-2px);
    }
  }
`;

/* ========== Skeleton Styling ========== */

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const SkeletonBase = styled.div`
  background: linear-gradient(90deg, #2a2a2c 25%, #3a3a3c 50%, #2a2a2c 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 8px;
`;

const SkeletonImage = styled(SkeletonBase)`
  height: 150px;
  width: 100%;
`;

const SkeletonText = styled(SkeletonBase)`
  height: 16px;
  width: ${(props) => props.width || "80%"};
  margin: 8px 1rem;
`;

const SkeletonTagWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 1rem;
`;

const SkeletonTag = styled(SkeletonBase)`
  height: 20px;
  width: 60px;
`;

const SkeletonLinks = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  gap: 0.5rem;
`;

const SkeletonButton = styled(SkeletonBase)`
  flex: 1;
  height: 35px;
  border-radius: 8px;
`;

export default ProjectCard;
