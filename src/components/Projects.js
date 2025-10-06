import React, { useEffect, useState } from "react"
import styled from "styled-components"
import ProjectCard from "./ProjectCard"
import projectsData from "../data/projects.json"

const Projects = () => {
  const [isBrowser, setIsBrowser] = useState(false)
  const [SwiperComponents, setSwiperComponents] = useState(null)
  const [motionDiv, setMotionDiv] = useState(null)

  useEffect(() => {
    // Cek jika berjalan di browser
    if (typeof window !== "undefined") {
      setIsBrowser(true)

      // Lazy-load Swiper dan Framer Motion
      Promise.all([
        import("swiper/react"),
        import("swiper/css"),
        import("swiper/modules"),
        import("framer-motion"),
      ]).then(([swiperReact, , swiperModules, framerMotion]) => {
        const { Swiper, SwiperSlide } = swiperReact
        const { Autoplay } = swiperModules
        const { motion } = framerMotion
        setSwiperComponents({ Swiper, SwiperSlide, Autoplay })
        setMotionDiv(motion.div)
      })
    }
  }, [])

  // Jika belum di-load (saat SSR atau awal render)
  if (!isBrowser || !SwiperComponents || !motionDiv) {
    return null
  }

  const { Swiper, SwiperSlide, Autoplay } = SwiperComponents
  const MotionWrapper = styled(motionDiv)`
    width: 100%;
    height: 100%;
  `

  const repeatedProjects = [
    ...projectsData.projects,
    ...projectsData.projects,
    ...projectsData.projects,
  ]

  return (
    <ProjectsContainer>
      <ProjectsContent>
        <h2>Proyek Terbaru</h2>

        <StyledSwiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={"auto"}
          loop={true}
          allowTouchMove={false}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 2 },
            768: { slidesPerView: 2, spaceBetween: 3 },
            1024: { slidesPerView: 3, spaceBetween: 4 },
          }}
        >
          {repeatedProjects.map((project, index) => (
            <SwiperSlide key={index} style={{ width: "350px" }}>
              <MotionWrapper
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <ProjectCard project={project} />
              </MotionWrapper>
            </SwiperSlide>
          ))}
        </StyledSwiper>

        <ViewAllButton href="/portfolio">Lihat Semua Proyek</ViewAllButton>
      </ProjectsContent>
    </ProjectsContainer>
  )
}

const ProjectsContainer = styled.section`
  padding: 4rem 2rem;
  background: #000;
`

const ProjectsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  h2 {
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: 700;
    color: #facc15;
  }
`

// styled() butuh di luar komponen
const StyledSwiper = styled.div`
  .swiper-wrapper {
    transition-timing-function: linear !important;
    align-items: stretch;
  }
  .swiper-slide {
    display: flex;
    height: auto;
  }
`

const ViewAllButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: #facc15;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  margin-top: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: #facc15;
    transform: translateY(-2px);
  }
`

export default Projects
