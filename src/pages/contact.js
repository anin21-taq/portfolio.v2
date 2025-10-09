import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import styled, { keyframes } from "styled-components"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />
    <ContactContainer>
      <h1>Hubungi Saya</h1>
      <p>
        Saya selalu terbuka untuk peluang baru dan kolaborasi menarik. 
        Jangan ragu untuk menghubungi saya!
      </p>

      <ContactInfo>
        <ContactItem>
          <i className="fas fa-envelope"></i>
          <a href="mailto:email@anda.com">anindrataqi1@gmail.com</a>
        </ContactItem>
        <ContactItem>
          <i className="fab fa-linkedin"></i>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </ContactItem>
        <ContactItem>
          <i className="fab fa-github"></i>
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </ContactItem>
      </ContactInfo>

      <ContactForm>
        <form>
          <input type="text" placeholder="Nama Anda" required />
          <input type="email" placeholder="Email Anda" required />
          <textarea placeholder="Pesan Anda" rows="5" required></textarea>
          <button type="submit">Kirim Pesan</button>
        </form>
      </ContactForm>
    </ContactContainer>
  </Layout>
)

/* ✨ Animasi glow kuning */
const glow = keyframes`
  0%   { text-shadow: 0 0 5px #facc15, 0 0 10px #facc15; }
  50%  { text-shadow: 0 0 20px #facc15, 0 0 30px #facc15; }
  100% { text-shadow: 0 0 5px #facc15, 0 0 10px #facc15; }
`

const ContactContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  margin: 0;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    color: #facc15;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    animation: ${glow} 2.5s infinite;
  }

  p {
    color: #bbb;
    max-width: 700px;
    margin: 0 auto 1.5rem auto;
    line-height: 1.6;
  }
`

const ContactInfo = styled.div`
  margin: 2rem 0;
`

const ContactItem = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 1.1rem;

  i {
    color: #facc15;
    font-size: 1.3rem;
    transition: transform 0.3s ease, color 0.3s ease;
  }

  i:hover {
    transform: scale(1.2);
    color: #fde047;
  }

  a {
    color: #facc15;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #fde047;
      text-decoration: underline;
    }
  }
`

const ContactForm = styled.div`
  margin-top: 2rem;
  width: 100%;
  max-width: 500px;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input,
  textarea {
    padding: 0.9rem;
    border: 1px solid #333;
    border-radius: 6px;
    font-size: 1rem;
    background: #111;
    color: #eee;
    outline: none;
    transition: border 0.3s ease, box-shadow 0.3s ease;

    &:focus {
      border: 1px solid #facc15;
      box-shadow: 0 0 10px rgba(250, 204, 21, 0.5);
    }
  }

  button {
    padding: 0.9rem 1.5rem;
    background: #facc15;
    color: #000;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: background 0.3s ease, transform 0.2s ease;

    &:hover {
      background: #fde047;
      transform: translateY(-3px);
    }
  }
`

export default ContactPage
