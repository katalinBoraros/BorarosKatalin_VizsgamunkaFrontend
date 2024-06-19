<script setup>
import DataService from "../services/dataservice";
import { ref, onMounted } from "vue";
</script>

<template>
  <div class="home-container">
    <div class="content-container">
      <div class="sidebar pastel-pink">
        <div class="social-links">
          <h4>Kapcsolat</h4>
          <ul>
            <li>
              <a href="#" target="_blank">
                <i class="fab fa-instagram"></i> Instagram
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i class="fab fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i class="fab fa-tiktok"></i> TikTok
              </a>
            </li>
          </ul>
        </div>
        <div class="company-links">
          <h4>MarilyNails</h4>
          <ul>
            <li>
              <a href="#" target="_blank">
                <i class="fas fa-globe"></i> Weboldal
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i class="fab fa-tiktok"></i> TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="main-content">
        <div class="intro-section">
          <div class="pink intro-text">
            <h2>Szelle Dominik</h2>
            <p>Műkörömépítő és tartalomgyártó</p>
          </div>
          <div class="intro-image">
            <img src="src/pics/dom.jpg" alt="Szelle Dominik">
          </div>
        </div>

        <div class="about-section">
          <h3 class="pink">Bemutatkozás</h3>
          <blockquote class="text-white">
            <p>Szelle Dominik vagyok, 23 éves és műkörömépítéssel foglalkozom. 2021 májusában végeztem el a kézápoló és műkörömépítő OKJ képzést, 2022 februárjában pedig már vállalkozóként kezdtem el dolgozni. Egy hónapot dolgoztam otthon, majd egy szuper lehetőségnek köszönhetően márciustól már szalonban dolgozhattam Győrben. Idén már több, mint 2 éve dolgozom szalonban, töretlen lelkesedéssel.</p>
            <p>Mindamellett, hogy alapvetően műkörmös vagyok a tartalom gyártással is rendszeresen foglalkozom és minden napos felhasználója vagyok a közösségi oldalaknak. Így tavaly április óta van szerencsém együtt dolgozni a MarilyNails nevű körmös márkával. Ez idő alatt jó néhány oktatónak és a cégnek köszönhetően rengeteget fejlődtem. Bár még rövid ideje vagyok a szakmában, már most rengeteg tudást tudhatok magaménak, ezt majd később szeretném oktatás formájában is tovább adni műkörmös társaim számára.</p>
          </blockquote>
        </div>

        <div class="workplace-section">
          <h3 class="text-white">Jelenlegi munkahely</h3>
          <div class="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2685.5545846799846!2d17.642305276663325!3d47.693069582002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476bbf00ae4ff3d1%3A0x60b500d40cd3f81!2sPuderNails%20-%20N%C3%A9meth%20Szimonetta!5e0!3m2!1shu!2shu!4v1718456288732!5m2!1shu!2shu" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.content-container {
  display: flex;
  justify-content: center;
}

.sidebar {
  width: 200px;
  margin-right: 2rem;
}

.sidebar.pastel-pink {
  background-color: #ffcdd2;
  padding: 1rem;
  border-radius: 5px;
}

.pink{
  color: hotpink;
}


.social-links,
.company-links {
  margin-bottom: 2rem;
}

.social-links h4,
.company-links h4 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.social-links ul,
.company-links ul {
  list-style: none;
  padding: 0;
}

.social-links li,
.company-links li {
  margin-bottom: 0.5rem;
}

.social-links a,
.company-links a {
  display: flex;
  align-items: center;
  color: #333;
  text-decoration: none;
}

.social-links a i,
.company-links a i {
  margin-right: 0.5rem;
  font-size: 1.2rem;
}

.main-content {
  flex: 1;
  background-color: black;
  padding: 2rem;
  border-radius: 5px;
}

.text-white {
  color: white;
}

.intro-section {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.intro-text {
  flex: 1;
}

.intro-text h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.intro-image {
  flex: 1;
  text-align: right;
}

.intro-image img {
  max-width: 200px;
  border-radius: 50%;
}

.about-section {
  margin-bottom: 2rem;
}

.about-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.about-section blockquote {
  font-style: italic;
  line-height: 1.6;
}

.workplace-section {
  margin-bottom: 2rem;
}

.workplace-section h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.map-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.map-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

