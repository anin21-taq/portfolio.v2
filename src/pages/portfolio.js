import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import seo from "../components/seo"
import ProjectCard from "../components/ProjectCard"
import projectsData from "../data/projects.json"
import styled, { keyframes } from "styled-components"

const PortfolioPage = () => {
  const [projectsToShow, setProjectsToShow] = useState([])

  useEffect(() => {
    const updateProjects = () => {
      let cols = 3 // default desktop
      if (window.innerWidth < 640) cols = 1
      else if (window.innerWidth < 1024) cols = 2
      else if (window.innerWidth < 1400) cols = 3
      else cols = 4

      const maxItems = cols * 2 // 2 baris
      setProjectsToShow(projectsData.projects.slice(0, maxItems))
    }

    updateProjects()
    window.addEventListener("resize", updateProjects)
    return () => window.removeEventListener("resize", updateProjects)
  }, [])

  return (
    <Layout>
      <seo title="Portfolio" />
      <PortfolioContainer>
        <h1>Proyek Saya</h1>
        <p>Berikut adalah beberapa proyek pilihan saya:</p>
        <ProjectsGrid>
          {projectsToShow.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </ProjectsGrid>
      </PortfolioContainer>
    </Layout>
  )
}

/* ✨ animasi glow untuk judul */
const glow = keyframes`
  0% { text-shadow: 0 0 5px #facc15, 0 0 10px #facc15; }
  50% { text-shadow: 0 0 20px #facc15, 0 0 30px #facc15; }
  100% { text-shadow: 0 0 5px #facc15, 0 0 10px #facc15; }
`

/* ✨ animasi fade-in */
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const PortfolioContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background: #000;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #facc15;
    animation: ${glow} 2.5s infinite ease-in-out;
  }

  p {
    margin-top: 0.5rem;
    color: #ccc;
    font-size: 1.1rem;
  }
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  animation: ${fadeInUp} 1s ease-out;
  
  /* ✨ efek hover untuk tiap card */
  & > * {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  & > *:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 0 20px rgba(250, 204, 21, 0.4);
  }
`

export default PortfolioPage
