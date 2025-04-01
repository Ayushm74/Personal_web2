import "./style.css";
import Experience from "./experience/Experience";

const experience = new Experience({
    targetElement: document.querySelector<HTMLDivElement>(".experience"),
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="projects">

    <div class="header">
      <div class="title">
        <h1>Current Projects</h1>
        <p>My present as a programmer</p>
      </div>
      <div class="close-btn">
        <button><img src="/close.svg" alt="" /></button>
      </div>
    </div>

    <div class="container">
      <div class="layout-grid">

        <div class="projects-container">
    <h2>Web Development Projects</h2>

    <a href="https://techweb2.vercel.app/" class="card" target="_blank">
        <img src="https://i.ibb.co/9k7vsLdG/Screenshot-2025-03-22-215134.png" class="img project-img" alt="Futuristic Tech Website" />
        <div class="description">
            <h3>Futuristic Tech Website with Chatbot</h3>
            <p>Modern AI-driven website with an interactive chatbot</p>
        </div>
    </a>

    <a href="https://ayush-bjhc.vercel.app/" class="card" target="_blank">
        <img src="https://i.ibb.co/n2FHTDg/Screenshot-2025-03-29-213653.png" class="img project-img" alt="Online Learning Platform" />
        <div class="description">
            <h3>Online Learning Platform</h3>
            <p>Interactive e-learning platform with courses and quizzes</p>
        </div>
    </a>

    <a href="https://drive.google.com/drive/u/3/folders/1JlzgQ9Z3cyaBMdsVsOHGj0VrxFw7Fiag" class="card" target="_blank">
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20230803111937/Online-Voting-System.webp" class="img project-img" alt="Voting System" />
        <div class="description">
            <h3>Node.js + MongoDB (Voting System)</h3>
            <p>Online voting system using Node.js and MongoDB</p>
        </div>
    </a>

    <a href="https://infographic-66z2.vercel.app/" class="card" target="_blank">
        <img src="https://i.ibb.co/nq30MsDW/Screenshot-2025-03-29-213511.png" class="img project-img" alt="Infographic Image" />
        <div class="description">
            <h3>Infographic Image</h3>
            <p>Beautiful infographic designs showcasing data visually</p>
        </div>
    </a>

    <a href="https://leetcode.com/u/ayUSHmishra74992/" class="card" target="_blank">
        <img src="https://i.ibb.co/jPj7szRy/Screenshot-2025-03-30-220927.png" class="img project-img" alt="LeetCode Profile" />
        <div class="description">
            <h3>LeetCode Profile</h3>
            <p>Check out my coding journey and problem-solving skills</p>
        </div>
    </a>

    <a href="https://drive.google.com/drive/u/3/folders/1JlzgQ9Z3cyaBMdsVsOHGj0VrxFw7Fiag" class="card" target="_blank">
        <img src="https://static.toiimg.com/thumb/msid-105546012,width-1280,height-720,resizemode-4/105546012.jpg" class="img project-img" alt="More Projects" />
        <div class="description">
            <h3>More Projects (Google Drive)</h3>
            <p>Explore additional projects stored in Google Drive</p>
        </div>
    </a>
</div>

      </div>
    </div>

    <footer>
      <div class="contact">
        <a
          href="https://www.linkedin.com/in/ayushmishra74/"
          target="_blank"
          class="linkedin-button"
        ></a>
        <a
          href="https://github.com/Ayushm74"
          target="_blank"
          class="github-button"
        ></a>
      </div>

      <span> © Designed & Coded by Ayush Mishra </span>
    </footer>
  </div>

  <style>
    .project-img {
        width: 100%; 
        max-height: 220px;
        object-fit: cover; 
    }
  </style>

`;

export { experience };
