


const thund = [
    "https://cdn.glitch.com/8705c5c4-1bca-4235-af9e-a9b399e41b3d%2Fthund1.mp3",
    "https://cdn.glitch.com/8705c5c4-1bca-4235-af9e-a9b399e41b3d%2Fthund2.mp3"
  ];
  const rain = [
    "https://cdn.glitch.com/8705c5c4-1bca-4235-af9e-a9b399e41b3d%2Frain2.mp3",
    "https://cdn.glitch.com/8705c5c4-1bca-4235-af9e-a9b399e41b3d%2Frain3.mp3",
    "https://cdn.glitch.com/8705c5c4-1bca-4235-af9e-a9b399e41b3d%2Frain5.mp3",
    "https://cdn.glitch.com/8705c5c4-1bca-4235-af9e-a9b399e41b3d%2Frain1.mp3",
    "https://cdn.glitch.com/8705c5c4-1bca-4235-af9e-a9b399e41b3d%2Frain4.mp3",
    "https://cdn.glitch.com/8705c5c4-1bca-4235-af9e-a9b399e41b3d%2Frain6.mp3"
  ];
  const sun = [
    "https://cdn.glitch.com/8705c5c4-1bca-4235-af9e-a9b399e41b3d%2Fsun3.mp3",
    "https://cdn.glitch.com/8705c5c4-1bca-4235-af9e-a9b399e41b3d%2Fsun1.mp3",
    "https://cdn.glitch.com/8705c5c4-1bca-4235-af9e-a9b399e41b3d%2Fsun4.mp3",
    "https://cdn.glitch.com/8705c5c4-1bca-4235-af9e-a9b399e41b3d%2Fsun5.mp3",
    "https://cdn.glitch.com/8705c5c4-1bca-4235-af9e-a9b399e41b3d%2Fsun2.mp3"
  ];

  function getBackgroundImage(resultImp) {
    let conditions = document.querySelector("#conditions");
    let condIcon = document.querySelector("#condIcon");
    let currentConditions = resultImp.weather[0].main;
    // console.log(currentConditions);
    conditions.textContent = `${resultImp.weather[0].main}`;
    condIcon.src = `https://openweathermap.org/img/wn/${resultImp.weather[0].icon}@2x.png`;
    
    let i = Math.floor(Math.random() * sun.length);
    let k = Math.floor(Math.random() * rain.length);
    let j = Math.floor(Math.random() * thund.length);
    
    if (currentConditions === "Clear") {
      document.querySelector("#rain-js").style.opacity = 0;
      document.getElementById("snow-js").style.opacity = 0;
      document.body.style.backgroundImage =
      "radial-gradient(circle, rgba(245,189,189,1) 0%, rgba(255,255,255,0) 120%), url('https://cdn.glitch.com/8705c5c4-1bca-4235-af9e-a9b399e41b3d%2Fclearsky.jpg')";
      document.querySelector("audio").src = sun[i];
      pause.style.display = "block";
    }
    
    if (currentConditions === "Clouds") {
      document.getElementById("rain-js").style.opacity = 0;
      document.getElementById("snow-js").style.opacity = 0;
      document.body.style.backgroundImage =
      "radial-gradient(circle, rgba(245,189,189,1) 0%, rgba(255,255,255,0) 120%), url('https://cdn.glitch.com/8705c5c4-1bca-4235-af9e-a9b399e41b3d%2Ffewclouds.jpg')";
      document.querySelector("audio").pause();
      playPause.removeAttribute("class");
      playPause.setAttribute("class", "far fa-stop-circle");
    }
    
    if (currentConditions === "Mist" || currentConditions === "Smoke" || currentConditions === "Haze" || currentConditions === "Dust" || currentConditions === "Fog" || currentConditions === "Sand" || currentConditions === "Ash" || currentConditions === "Squall" || currentConditions === "Tornado") {
      document.getElementById("rain-js").style.opacity = 0;
      document.getElementById("snow-js").style.opacity = 0;
      document.body.style.backgroundImage =
      "radial-gradient(circle, rgba(245,189,189,1) 0%, rgba(255,255,255,0) 120%), url('https://cdn.glitch.com/8705c5c4-1bca-4235-af9e-a9b399e41b3d%2Fmist.jpg')";
      document.querySelector("audio").pause();
      playPause.removeAttribute("class");
      playPause.setAttribute("class", "far fa-stop-circle");
    }
    
    if (currentConditions === "Snow") {
      document.getElementById("rain-js").style.opacity = 0;
      document.getElementById("snow-js").style.opacity = 1;
      document.body.style.background = `radial-gradient(circle, rgba(245,189,189,1) 0%, rgba(255,255,255,0) 110%), url('https://cdn.glitch.com/8705c5c4-1bca-4235-af9e-a9b399e41b3d%2Fsnow1.jpg')`;
      document.querySelector("audio").pause();
      playPause.removeAttribute("class");
      playPause.setAttribute("class", "far fa-stop-circle");
    }
    
    if (currentConditions === "Rain") {
      document.getElementById("rain-js").style.opacity = 1;
      document.getElementById("snow-js").style.opacity = 0;
      document.body.style.background = `radial-gradient(circle, rgba(245,189,189,1) 0%, rgba(255,255,255,0) 120%), url('https://images.unsplash.com/photo-1585160214005-23a90c0314f6')`;
      document.querySelector("audio").src = rain[k];
      pause.style.display = "block";
    }
    
    if (currentConditions === "Drizzle") {
      document.getElementById("rain-js").style.opacity = 1;
      document.getElementById("snow-js").style.opacity = 0;
      document.body.style.background = `radial-gradient(circle, rgba(245,189,189,1) 0%, rgba(255,255,255,0) 120%), url('https://images.unsplash.com/photo-1585160214005-23a90c0314f6')`;
      document.querySelector("audio").src = rain[k];
      pause.style.display = "block";
    }
    
    if (currentConditions === "Thunderstorm") {
      document.getElementById("rain-js").style.opacity = 0;
      document.getElementById("snow-js").style.opacity = 0;
      document.body.style.backgroundImage =
      "radial-gradient(circle, rgba(245,189,189,1) 0%, rgba(255,255,255,0) 120%), url('https://cdn.glitch.com/8705c5c4-1bca-4235-af9e-a9b399e41b3d%2Fthunderstorm.jpg')";
      document.querySelector("audio").src = thund[j];
      pause.style.display = "block";
    }
  }
  