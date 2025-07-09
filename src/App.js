import React from "react";
import { motion } from "framer-motion";
import "./App.css";

const logoPath = "/Go_For_Giebel6_highres.png";
const familyPhotoPath = "/file_0000000022646230abf64c436350757a.png";

function App() {
  return (
    <main>
      <header style={{ background: "linear-gradient(to right, red, white, blue)", padding: "2rem", textAlign: "center", color: "white" }}>
        <img src={logoPath} alt="Logo" style={{ height: "100px" }} />
        <h1>Kolyn Giebel for Board of Directors</h1>
        <p>Family • Transparency • Community</p>
      </header>

      <section style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
        <h2>About Kolyn</h2>
        <img src={familyPhotoPath} alt="Family" style={{ width: "100%", borderRadius: "1rem" }} />
        <p>Hi! I'm Kolyn Giebel — husband, father, Marine Corps veteran, and electrician. My family and I have found a second home at Sandy Pines since 2022.</p>
        <p>We love turning our site into Whoville every summer and building lasting traditions with the community.</p>
        <p>I'm running for the Board to preserve the values that make Sandy Pines special.</p>
      </section>

      <section style={{ backgroundColor: "#f9f9f9", padding: "2rem" }}>
        <h2 style={{ textAlign: "center", color: "blue" }}>My Agenda</h2>
        <p style={{ maxWidth: "700px", margin: "auto" }}>
          I have no agenda of my own. My purpose is to be a steward for the membership. I will listen to the membership and make decisions based on what the membership wants as a whole.
          It is not just about what the Board of Directors wants, but rather what every single paying member of Sandy Pines deserves — a voice.
        </p>
      </section>

      <section style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Contact</h2>
        <p>Want to connect? I’d love to hear from you.</p>
        <a href="mailto:Kolyn.Giebel@gmail.com">Email Kolyn</a>
      </section>
    </main>
  );
}

export default App;
