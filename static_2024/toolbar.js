console.log(
  `                                 

                                             *************                                        
                                         ********************                                        
                                     ***************************                                    
                                  *********************************                                 
                                *************************************                               
                               ****************************************                             
                             *******************************************                            
                            **********************************************                          
                           ************************************************                         
                          *****************=-----------------+*************#                        
                         ******************:                 =**************                        
                         ******************:                 =***************                       
                        ****************************:        =***************                       
                        **************************-          =****************                      
                        ************************-      ==    =****************                      
                        **********************=      -**=    =****************                      
                        ********************=      -****=    =****************                      
                        ******************+.     :******=    =***************                       
                         ***************+:     .+*******=    =***************                       
                         ***************:    .=**********++++***************                        
                          ***************+..=*******************************                        
                           ************************************************                         
                            **********************************************                          
                             ********************************************                           
                              *****************************************                             
                                *************************************                               
                                   ********************************                                 
                                     ***************************                                    
                                         ********************                                       
                                             ************            
                                                                         
                              eek! don\'t peek too hard behind the curtains!


`
)

/**********************
RAIN SOUND
      __   _
    _(  )_( )_
   (_   _    _)
  / /(_) (__)
 / / / / / /
/ / / / / /
 ****************/
let audioContext;
let source;
let gainNode;
let rainSound = null;
let isRainFadingIn = false;
const soundButton = document.getElementById('sound-button');

function initAudio() {
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  rainSound = new Audio('assets/rain.mp3');
  rainSound.loop = 'true';
  source = audioContext.createMediaElementSource(rainSound);
  gainNode = audioContext.createGain();
  source.connect(gainNode);
  gainNode.connect(audioContext.destination);
  gainNode.gain.value = 0; // Initial volume is 0 (mute)
}

function fadeIn() {
  if (rainSound !== null) {
    // stop the fadeout process
    gainNode.gain.setValueAtTime(gainNode.gain.value, audioContext.currentTime);
  } else {
    initAudio();
    rainSound.play();
  }
  isRainFadingIn = true;
  gainNode.gain.linearRampToValueAtTime(.5, audioContext.currentTime + 5); // Fade-in over 5 seconds

  soundButton.innerHTML = `<i class="ph-bold ph-pause"></i> <span>Rain</span>`
}

const fadeOutTime = 2
function fadeOut() {
  isRainFadingIn = false;
  gainNode.gain.setValueAtTime(gainNode.gain.value, audioContext.currentTime);
  gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + fadeOutTime ); // Fade-out over 2 seconds

  soundButton.innerHTML = `<i class="ph-bold ph-play"></i> <span>Rain</span>`

  setTimeout(function() {
      if (!isRainFadingIn) {
        rainSound.pause();
        rainSound.currentTime = 0;
        rainSound = null; // TODO: is this necessary?
      }
  }, fadeOutTime  * 1000);
}

soundButton.addEventListener('click', () => {
  if (soundButton.classList.contains('disabled')) { return; }  
  if (isRainFadingIn) {
    fadeOut()
  } else {
    fadeIn()
  }
});

/**********************
GET TIME
.'`~~~~~~~~~~~`'.
(  .'11 12 1'.  )
|  :10 \|   2:  |
|  :9   @   3:  |
|  :8       4;  |
'. '..7 6 5..' .'
 ~-------------~ 
 ********************/
function updateClockTime() {
  var currentTimeElement = document.getElementById('current-time');
  var nyTime = new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' });
  currentTimeElement.textContent = nyTime;
}
// Update the time every second
setInterval(updateClockTime, 1000);

// Initial update
updateClockTime();



/**********************
GET WEATHER
      ;   :   ;
   .   \_,!,_/   ,
    `.,'     `.,'
     /         \
~ -- :         : -- ~
     \         /
    ,'`._   _.'`.
   '   / `!` \   `
      ;   :   ; 
 ****************/

// ok terrible idea, i'm going to hard map all the phosphor icons to weather conditions
// this is taken from https://www.weatherapi.com/docs/weather_conditions.json
const weatherIconMap = [
	{
		"name" : "Sunny",
		"icon" : "sun"
	},
	{
		"name" : "Clear",
		"icon" : "moon"
	},
	{
		"name" : "Partly cloudy",
    "is_day": 1,
		"icon" : "cloud-sun"
	},
  {
		"name" : "Partly cloudy",
    "is_day": 0,
		"icon" : "cloud-moon"
	},
	{
		"name" : "Cloudy",
		"icon" : "cloud"
	},
	{
		"name" : "Overcast",
		"icon" : "cloud-fog"
	},
	{
		"name" : "Mist",
		"icon" : "waves"
	},
	{
		"name" : "Patchy rain possible",
		"icon" : "cloud-rain"
	},
	{
		"name" : "Patchy snow possible",
		"icon" : "cloud-snow"
	},
	{
		"name" : "Patchy sleet possible",
		"icon" : "cloud-snow"
	},
	{
		"name" : "Patchy freezing drizzle possible",
		"icon" : "cloud-rain"
	},
	{
		"name" : "Thundery outbreaks possible",
		"icon" : "cloud-lightning"
	},
	{
		"name" : "Blowing snow",
		"icon" : "cloud-snow"
	},
	{
		"name" : "Blizzard",
		"icon" : "cloud-snow"
	},
	{
		"name" : "Fog",
		"icon" : "waves"
	},
	{
		"name" : "Freezing fog",
		"icon" : "waves"
	},
	{
		"name" : "Patchy light drizzle",
		"icon" : "cloud-rain"
	},
	{
		"name" : "Light drizzle",
		"icon" : "cloud-rain"
	},
	{
		"name" : "Freezing drizzle",
		"icon" : "cloud-rain"
	},
	{
		"name" : "Heavy freezing drizzle",
		"icon" : "cloud-rain"
	},
	{
		"name" : "Patchy light rain",
		"icon" : "cloud-rain"
	},
	{
		"name" : "Light rain",
		"icon" : "cloud-rain"
	},
	{
		"name" : "Moderate rain at times",
		"icon" : "cloud-rain"
	},
	{
		"name" : "Moderate rain",
		"icon" : "cloud-rain"
	},
	{
		"name" : "Heavy rain at times",
		"icon" : "cloud-rain"
	},
	{
		"name" : "Heavy rain",
		"icon" : "cloud-rain"
	},
	{
		"name" : "Light freezing rain",
		"icon" : "cloud-rain"
	},
  {
		"name" : "Moderate or heavy freezing rain",
		"icon" : "cloud-rain"
	},
	{
		"name" : "Light sleet",
		"icon" : "cloud-snow"
	},
	{
		"name" : "Moderate or heavy sleet",
		"icon" : "cloud-snow"
	},
	{
		"name" : "Patchy light snow",
		"icon" : "cloud-snow"
	},
	{
		"name" : "Light snow",
		"icon" : "cloud-snow"
	},
	{
		"name" : "Patchy moderate snow",
		"icon" : "cloud-snow"
	},
	{
		"name" : "Moderate snow",
		"icon" : "cloud-snow"
	},
	{
		"name" : "Patchy heavy snow",
		"icon" : "cloud-snow"
	},
	{
		"name" : "Heavy snow",
		"icon" : "cloud-snow"
	},
	{
		"name" : "Ice pellets",
		"icon" : "cloud-rain"
	},
	{
		"name" : "Light rain shower",
		"icon" : "cloud-rain"
	},
	{
		"name" : "Moderate or heavy rain shower",
		"icon" : " cloud-rain"
	},
	{
		"name" : "Torrential rain shower",
		"icon" : " cloud-rain"
	},
	{
		"name" : "Light sleet showers",
		"icon" : " cloud-rain"
	},
	{
		"name" : "Moderate or heavy sleet showers",
		"icon" : " cloud-rain"
	},
	{
		"name" : "Light snow showers",
		"icon" : " cloud-snow"
	},
	{
		"name" : "Moderate or heavy snow showers",
		"icon" : "cloud-snow"
	},
	{
		"name" : "Light showers of ice pellets",
		"icon" : "cloud-snow"
	},
	{
		"name" : "Moderate or heavy showers of ice pellets",
		"icon" : "cloud-snow"
	},
	{
		"name" : "Patchy light rain with thunder",
		"icon" : "cloud-lightning"
	},
	{
		"name" : "Moderate or heavy rain with thunder",
		"icon" : "cloud-lightning"
	},
	{
		"name" : "Patchy light snow with thunder",
		"icon" : "cloud-lightning"
	},
	{
		"name" : "Moderate or heavy snow with thunder",
		"icon" : "cloud-lightning"
	}
]

fetch('https://api.weatherapi.com/v1/current.json?key=6ab000ae26124b1a8ea52406241601&q=10009&aqi=no&callback=?')
  .then(response => {
      if (!response.ok) {
          document.getElementById('current-weather').innerHTML = `Weather error`
          throw new Error('Network response was not ok');
      }
      return response.json();
  })
  .then(data => {
      let temp = data.current.temp_f
      let condition = data.current.condition.text
      let iconName = weatherIconMap.find((elt) => {
        return elt.name.toLowerCase() === condition.toLowerCase() && (elt.is_day === undefined || elt.is_day === data.current.is_day)
      }).icon;
      if (iconName === undefined) {
        iconName = "sun"
      }
      document.getElementById('current-weather').innerHTML = `<i class="ph-bold ph-${iconName}"></i> <span>${condition}, ${temp.toFixed(0)}°F</span>`
  })
  .catch(error => {
      console.error('Error fetching data:', error.message);
  });


/**********************
GET STATS
   b.
   88b
   888b.
   88888b
   888888b.
   8888P"
   P" `8.
       `8.   
        `8
 ****************/
// LISTENERS AND STATS 
const STATS = 
[
  {
    'name': 'Pointer speed',
    'getValue': () => `${currentPointerSpeed.toFixed(1)} in/s`,
    'icon': `<i class="ph-bold ph-cursor-click"></i>`,
    'label': "",
    'over_time': true
  },
  {
    'name': 'Inches traveled',
    'getValue': () => `${totalDistance.toFixed(1)} in`,
    'icon': `<i class="ph-bold ph-ruler"></i>`,
    'label': "",
    'over_time': false // does this need to be updated every millisecond?
  },
  {
    'name': 'Elapsed time',
    'getValue': () => `${timeElapsed.toFixed(1)} sec`,
    'icon': `<i class="ph-bold ph-timer"></i>`,
    'label': "",
    'over_time': true 
  },
  {
    'name': 'Average pointer speed',
    'getValue': () => `${(totalDistance / timeElapsed).toFixed(1)} in/s`,
    'icon': `<i class="ph-bold ph-cursor-click"></i>`,
    'label': "Avg",
    'over_time': true
  },
  {
    'name': 'Max pointer speed',
    'getValue': () => `${maxPointerSpeed.toFixed(1)} in/s`,
    'icon': `<i class="ph-bold ph-cursor-click"></i>`,
    'label': "Max",
    'over_time': true
  },
  {
    'name': 'Clickable elements hovered',
    'getValue': () => `${nLinksHovered} hovered`,
    'icon': `<i class="ph-bold ph-link"></i>`,
    'label': "",
    'over_time': false
  },
  {
    'name': 'Clickable elements clicked',
    'getValue': () => `${nLinksClicked} clicked`,
    'icon': `<i class="ph-bold ph-link"></i>`,
    'label': "",
    'over_time': false
  }
]
let statIndex = 0;
let incrementStatIndex = () => {
  statIndex = (statIndex + 1)  % STATS.length;
  updateCursorStatsDiv()
}
document.getElementById('cursor-stats-clickable').addEventListener('click', incrementStatIndex);

let updateCursorStatsDiv = () => {
  document.getElementById('cursor-stats-content').innerHTML = `
    ${STATS[statIndex].icon}
    <span>${STATS[statIndex].label ? `${STATS[statIndex].label}:` : ""} ${STATS[statIndex].getValue()}</span>
  `
}

document.addEventListener('mousemove', (e) => {  
  updateDistance(e.pageX, e.pageY);
  updateCursorStatsDiv()
});

document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    if (touch) {
        updateDistance(touch.pageX, touch.pageY);
    }
});
// lower down, the HTML is also updated over time.


// POINTER DISTANCE
let lastX, lastY;
let totalDistance = 0;

function calculateDistance(x1, y1, x2, y2) {
  // Assuming standard DPI of 96
  const dpi = 96;
  const distanceX = Math.abs((x2 - x1) / dpi);
  const distanceY = Math.abs((y2 - y1) / dpi);
  return Math.sqrt(distanceX ** 2 + distanceY ** 2);
}

function updateDistance(x, y) {
  if (lastX !== undefined && lastY !== undefined) {
    const distance = calculateDistance(lastX, lastY, x, y);
    totalDistance += distance;
  }
  lastX = x;
  lastY = y;
}

// TIME AND SPEED
let startTime = performance.now();
let lastDistance = 0;
let lastXYTime;
let endTime;
let timeElapsed; // in seconds
let currentPointerSpeed = 0;
let maxPointerSpeed = 0;
function updateCurrentTime() {
  endTime = performance.now();
  timeElapsed = (endTime - startTime) / 1000;
  if (STATS[statIndex].over_time) {
    updateCursorStatsDiv();
  }
}

function updateSpeed() {
  let time = performance.now();
  currentPointerSpeed = (totalDistance - lastDistance) / (time - lastXYTime) * 1000;
  if (currentPointerSpeed) {
    maxPointerSpeed = Math.max(currentPointerSpeed, maxPointerSpeed);  
  }
  lastDistance = totalDistance;
  lastXYTime = time;
}

setInterval(updateCurrentTime, 100);
setInterval(updateSpeed, 100);
updateCurrentTime();

// NUMBER OF LINKS CLICKED/HOVERED
let nLinksHovered = 0;
let nLinksClicked = 0;
let linkList = document.querySelectorAll('a, .clickable');
linkList.forEach((link) => {
  link.addEventListener('mouseenter', (e) => {
    nLinksHovered += 1;
    updateCursorStatsDiv();
  });
  link.addEventListener('click', (e) => {
    nLinksClicked += 1;
    updateCursorStatsDiv();
  });
});

// initial run
updateCursorStatsDiv();









/******
RANDOM WEBPAGE
 _       _                       _   
(_)     | |                     | |  
 _ _ __ | |_ ___ _ __ _ __   ___| |_ 
| | '_ \| __/ _ \ '__| '_ \ / _ \ __|
| | | | | ||  __/ |  | | | |  __/ |_ 
|_|_| |_|\__\___|_|  |_| |_|\___|\__|
                                  
 */

let LINKS = 
[
  'https://thatsmathematics.com/mathgen/',
  'https://www.youtube.com/watch?v=3GNG12g2bKw',
  'https://www.youtube.com/watch?v=KPeYYXDxyUg',
  'https://www.youtube.com/watch?v=wO61D9x6lNY',
  'https://www.youtube.com/watch?v=n_n8toR4Bxo',
  'https://www.youtube.com/watch?v=_o7qjN3KF8U',
  'https://xkcd.com/1110/',
  'https://en.wikipedia.org/wiki/List_of_common_misconceptions?useskin=vector',
  'https://www.mezzacotta.net/garfield/?comic=3751',
  'https://omauk.bandcamp.com/album/mf-doom-instrumentals-live-at-the-hip-hop-chip-shop-2023',
  'https://vimeo.com/220328022',
  'http://blackpeopleloveus.com/index.html',
  'https://www.subtraction.com/2018/04/02/in-defense-of-design-thinking-which-is-terrible/',
  'https://fermatslibrary.com/s/the-mundanity-of-excellence-an-ethnographic-report-on-stratification-and-olympic-swimmers',
  'https://we-b.site/',
  'https://www.thispersondoesnotexist.com/',
  'https://www.pavley.com/2020/02/20/no-modes/',
  'https://accidental-friction-435.notion.site/A-Pattern-Language-for-Interfaces-c2f88d6b16d84293995c006042e79d88',
  'https://y-n10.com/',
  'https://juicybeast.com/2017/02/09/all-the-tools-we-use-to-make-games/',
  'https://vimeo.com/115154289',
  'https://mollymielke.notion.site/Computing-History-Hub-be72f307fc2e4b05abe3dc67eb937521',
  'http://www.artypapers.com/essay/imagination/',
  'https://thesephist.com/posts/materials/',
  'https://frankchimero.com/blog/2015/the-webs-grain/',
  'https://daverupert.com/2020/01/the-web-is-industrialized-and-i-helped-industrialize-it/',
  'http://imagineallthepeople.info/Munari-1966-Design-as-art.pdf',
  'https://rsms.me/work/figma/',
  'https://refresh.study/',
  'https://rauterberg.employee.id.tue.nl/lecturenotes/APPLE-Guidelines-2005.pdf',
  'https://www.youtube.com/watch?v=70ML-MPjvNY',
  'https://www.youtube.com/watch?v=RhjHAPw1q-M',
  'https://www.youtube.com/watch?v=ci2bFFGM8T8',
  'https://www.youtube.com/watch?v=rzLIUgnKY40',
  'https://www.youtube.com/watch?v=SUtXMRuhQcM',
  'https://www.youtube.com/watch?v=pp8vIJhwESw',
  'https://www.youtube.com/watch?v=kJ20nm_g3Uc',
  'https://www.youtube.com/watch?v=dNJdJIwCF_Y',
  'https://www.youtube.com/watch?v=oUtSlfJ4SMs',
  'https://mathigon.org/course/circles/spheres-cones-cylinders#sphere-maps',
  'https://symphosizer.wearecollins.com/',
  'https://seventeenpeople.com/',
  'https://poke-holo.simey.me/',
  'https://tixy.land/',
  'http://www.radicalcartography.net/',
  'https://reciprocal.ltd/',
  'https://gordonbrander.com/pattern/',
  'https://www.ogilvy.com/work/no-need-fly',
  'https://www.dimensions.com/',
  'https://ninja-muffin24.itch.io/funkin',
  'https://www.youtube.com/watch?v=Z7ioqD4ugh8',
  'https://www.space.com/26604-apollo-11-failure-nixon-speech.html',
  'https://improbable.com/ig/ig-pastwinners.html',
  'https://www.theosthinktank.co.uk/',
  'https://outofcontextarthur.tumblr.com/tagged/classic%20hits',
  'https://liturgies.nyc/A-Liturgy-for-Those-Falling-Asleep',
  'https://www.openculture.com/2019/06/the-us-government-commissioned-7500-watercolor-paintings.html',
  'http://weavesilk.com/',
  'https://www.businessinsider.com/the-hedge-fund-presentation-on-olive-garden-is-a-masterpiece-2014-9',
  'https://imgur.com/gallery/bCqRp',
  'https://plink.in/',
  'https://peoplesgdarchive.org/',
  'https://www.gameszap.com/arthur-games.html',
  'https://archive.org/details/fwrrmarchive/FETCH.with.Ruff.Ruffman.S01E01.AMZN.WEB-DL.DD%2B2.0.mkv'
]
let NUMS = ['one', 'two', 'three', 'four', 'five', 'six']
let current_link_index = Math.floor(Math.random()*LINKS.length)
document.getElementById('random-link').addEventListener('click', (e) => {
  let new_link_index = Math.floor(Math.random()*LINKS.length)
  while (new_link_index == current_link_index) {
    new_link_index = Math.floor(Math.random()*LINKS.length)
  }
  window.open(LINKS[new_link_index], '_blank');
  current_link_index = new_link_index;
  
  document.getElementById('random-link').innerHTML = `<div class="icon-text" >
    <i class="ph-bold ph-dice-${NUMS[current_link_index % NUMS.length]}"></i> 
    <span>Roll again?</span>
  </div>`
});

document.getElementById('random-link').innerHTML = `<div class="icon-text" >
  <i class="ph-bold ph-dice-${NUMS[current_link_index % NUMS.length]}"></i> 
  <span>Roll the web dice</span>
  </div>`



/***
 THEMING

 m   " m" " m  m
   " m " "m   " " "m m m
 "  m  " "  " "m" " " "m m
m  m m "  " " " " "m"m"m"m"m"m
  " m " " "m"m" "m"m"m"m"m"m"m"m
"m"m m"m" "m m"m"m"m"m"m"m"m"m"m$"m
     $  " "m"m"m"m"m"m"m"m"m"m$"  $m
     "          "m"m"m"m"m"m$"  m"m"m
     $           $"m"m"m"m$"  m"m"  "m
    m"m          m  "m"m$"  m"m"     "m
    $ $          $    $"  m"m"        "m
     "           m    "$m"m"          m"m
                m"m     $"          m"  $
                $ $      $        m"  m"
                "m"       $     m"  m$$
                           $  m"  m$"  $
                            $"  m""$    $
                             """    $    $
                                     $    $
                                      $    $
                                       $    $

*/
const THEMES = [
  {
    'css-name': 'ocean',
    'name': 'Rayleigh'
  },
  {
    'css-name': 'purple',
    'name': 'Pastel Hoodie'
  },
  {
    'css-name': 'klein-blue',
    'name': 'Klein Blue'
  },
  {
    'css-name': 'paper',
    'name': 'Card Stock'
  },
]

const themeToggle = document.getElementById('theme-toggle');
let currentThemeIndex = parseInt(localStorage.getItem('theme-index') ? localStorage.getItem('theme-index') : '0');
document.documentElement.setAttribute('data-theme', THEMES[currentThemeIndex]['css-name']);
themeToggle.innerHTML = `<div class="icon-text" >
  <i class="ph-bold ph-paint-brush"></i> 
  <span>${THEMES[currentThemeIndex]['name']}</span>
  </div>`

let switchTheme = (e) => {
  currentThemeIndex = (currentThemeIndex + 1) % THEMES.length;
  document.documentElement.setAttribute('data-theme', THEMES[currentThemeIndex]['css-name']);
  localStorage.setItem('theme-index', currentThemeIndex.toString());
  themeToggle.innerHTML = `<div class="icon-text" >
    <i class="ph-bold ph-paint-brush"></i> 
    <span>${THEMES[currentThemeIndex]['name']}</span>
    </div>`
}

themeToggle.addEventListener('click', switchTheme, false);
