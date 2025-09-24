tsParticles.load("tsparticles", {
      fullScreen: { enable: false },
      background: { color: { value: "#0d0d0d" } },
      particles: {
        number: { value: 100 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 2 },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          outModes: { default: "bounce" }
        },
        links: { enable: false }
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          resize: true
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 }
        }
      }
    });