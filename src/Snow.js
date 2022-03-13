particlesJS("snow-js", {
    particles: {
      number: {
        value: 800,
        density: {
          enable: false,
          value_area: 1000
        }
      },
      color: {
        value: "#ffffff"
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 30,
        color: "#ffffff",
        opacity: 0.6,
        width: 0
      },
      move: {
        enable: true,
        speed: 10,
        direction: "bottom",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      }
    },
    retina_detect: true
  });