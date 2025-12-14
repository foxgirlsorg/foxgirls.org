<script lang="ts">
  import bg from './assets/bg.webm'
  import bg_poster from './assets/bg_poster.jpg'
  import Navbar from "./lib/Navbar.svelte";
  import Hero from "./lib/Hero.svelte";
  import About from "./lib/About.svelte";
  import { onMount } from "svelte";
  import Projects from "./lib/Projects.svelte";
  import Socials from "./lib/Socials.svelte";
  import Team from "./lib/Team.svelte";
  import Footer from "./lib/Footer.svelte";

  onMount(() => {
      const handleAnchorClick = (e: MouseEvent) => {
          const link = (e.target as Element).closest('a');
          if (!link) return;

          const href = link.getAttribute('href');
          if (!href || !href.startsWith('#')) return;

          e.preventDefault();

          if (href === '#') {
              window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
              });
              return;
          }

          const targetId = href.substring(1);
          const target = document.getElementById(targetId);

          if (target) {
              const elementHeight = target.getBoundingClientRect().height;
              const windowHeight = window.innerHeight;

              if (elementHeight > windowHeight) {
                  const offset = 3 * parseFloat(getComputedStyle(document.documentElement).fontSize);
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = target.getBoundingClientRect().top;
                  const elementPosition = elementRect - bodyRect;
                  const offsetPosition = elementPosition - offset;

                  window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                  });
              } else {
                  target.scrollIntoView({
                      behavior: "smooth",
                      block: "center"
                  });
              }

              history.pushState(null, "", href);
          }
      };

      window.addEventListener('click', handleAnchorClick);

      return () => {
          window.removeEventListener('click', handleAnchorClick);
      };
  });
</script>

<Navbar></Navbar>
<main>
  <div class="bg">
      <video
              src="{bg}"
              class="bgvideo"
              poster="{bg_poster}"
              autoPlay
              loop
              muted
              playsInline
      ></video>
      <div class="videoOverlay"></div>
      <div class="bgNoise"></div>
  </div>
  <Hero></Hero>
  <About></About>
  <Projects></Projects>
  <Team></Team>
  <Socials></Socials>
  <Footer></Footer>
</main>