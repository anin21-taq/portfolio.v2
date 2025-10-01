import React from "react";

export default function ProjectDetail({ pageContext }) {
  const { title, slug } = pageContext;

  return (
    <main style={{ padding: "20px" }}>
      <h1>{title}</h1>
      <p>Slug: {slug}</p>
      <p>Deskripsi proyek akan ditambahkan di sini...</p>
    </main>
  );
}
