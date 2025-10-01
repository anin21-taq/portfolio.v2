import React from "react"
import styled from "styled-components"

const Contact = () => {
  return (
    <ContactContainer>
      <ContactContent>
        <h2>Hubungi Saya</h2>
        <p>Saya selalu terbuka untuk peluang baru dan kolaborasi menarik.</p>
        
        <ContactInfo>
          <ContactItem>
            <a href="mailto:anindrataqi1@gmail.com">anindrataqi1@gmail.com</a>
          </ContactItem>
          <ContactItem>
            <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </ContactItem>
          <ContactItem>
            <a href="https://github.com/Taqi25-ai/" target="_blank" rel="noopener noreferrer">
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
      </ContactContent>
    </ContactContainer>
  )
}

const ContactContainer = styled.section`
  padding: 4rem 2rem;
  background: #000; /* Hitam solid */
  color: #f9fafb;   /* Teks putih */
`

const ContactContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #facc15; /* kuning biar kontras */
  }

  p {
    color: #d1d5db;
    font-size: 1.1rem;
  }
`

const ContactInfo = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ContactItem = styled.div`
  a {
    color: #facc15;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #fde047; /* kuning lebih terang */
      text-decoration: underline;
    }
  }
`

const ContactForm = styled.div`
  margin-top: 2rem;
  
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  input, textarea {
    padding: 0.75rem;
    border: 1px solid #333;
    border-radius: 6px;
    font-size: 1rem;
    background: #111; 
    color: #f9fafb;
  }

  input:focus, textarea:focus {
    outline: none;
    border-color: #facc15;
  }
  
  button {
    padding: 0.75rem 1.5rem;
    background: #facc15;
    color: #000;
    font-weight: 600;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;
    
    &:hover {
      background: #eab308;
      transform: translateY(-2px);
    }
  }
`

export default Contact
