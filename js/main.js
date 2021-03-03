var app = new Vue({
    el: '#app',
    data: {
        projectHover: false,
        darkMode: false,
        imgHover: false,
        currentProject: null,
        placeholder: 'assets/invisible_square.png',
        featuredProjects: [
            {
                title: {
                    text: 'Tracey',
                    url: 'https://svg-tracey.herokuapp.com/'
                },
                description:
                    `An online tool to transform raster images into SVG line art. Built using Flask, the OpenCV Python library, Vue and Heroku.`,
                tags: ['Python', 'Flask', 'Vue'],
                image: 'assets/tracey.png'
            },
            {
                title: {
                    text: 'Who Pays Technical Writers',
                    url: 'https://whopaystechnicalwriters.com/'
                },
                description:
                    `Designed/developed the frontend of a curated collection of active publishers, publications, and agencies that pay technical writers.`,
                tags: ['JS', 'HTML', 'Bootstrap'],
                image: 'assets/wptw.png'
            },
            {
                title: {
                    text: 'Sloth',
                    url: 'https://github.com/jeevp/sloth'
                },
                description:
                    `A Mac application that generates short interval workouts to
                    synchronized with a song. Built in Electron using the Spotify API.`,
                tags: ['Electron', 'Vue', 'JS'],
                image: 'assets/sloth.png'
            },
            {
                title: {
                    text: 'COVID-19 Risk Calculator',
                    url: 'https://github.com/gyanishere/padrones'
                },
                description:
                    `Web app to calculate an individual's COVID-19 risk
                    based on location, type of activity, and health profile. 
                    Won "Best Application" at the City of LA x RMDS 
                    <a href="https://grmds.org/2020challenge" target="_blank">COVID-19 Computational Challenge.</a>`,
                tags: ['Python', 'JS', 'HTML', 'CSS'],
                image: 'assets/covid_challenge.png'
            },
            {
                title: {
                    text: 'TuneUp',
                    url: 'https://github.com/jeevp/tuneup'
                },
                description:
                    `Android app to discover new music through song-based quizzes. Built with Spotify API 
                    and Android Studio.`,
                tags: ['Java', 'API'],
                image: 'assets/tuneup.svg'
            },
            {
                title: {
                    text: 'Litmap',
                    url: 'https://litmap-2-gj4gzk4w8.vercel.app/'
                },
                description:
                    `Web application to visualize the locations mentioned in a document. 
                    Built using SpaCy, the Google Maps Geocoding API, and the Mapbox API.`,
                tags: ['Flask', 'Vue', 'HTML', 'CSS'],
                image: 'assets/litmap.png'
            },
            {
                title: {
                    text: 'Rabble',
                    url: 'https://scrabble.jeev.me'
                },
                description:
                    `Online multiplayer Scrabble game built in collaboration with
                    <a href="https://gyan.biz" target="_blank">Gyan</a> using Vue and Firebase.`,
                tags: ['JS', 'HTML', 'CSS'],
                image: 'assets/rabble.png'
            },
            {
                title: {
                    text: 'Erasure',
                    url: 'https://erasure.jeev.me'
                },
                description:
                    `Simple web application to generate erasure poetry. Built using the Compromise JS library.`,
                tags: ['JS', 'HTML', 'CSS'],
                image: 'assets/erasure.png'
            },
        ]
    },
    computed: {
        imgSource() {
            if (this.currentProject && this.currentProject) {
                return this.currentProject.image
            }
            else {
                return this.placeholder
            }
        }
    },
    methods: {
        toggleDarkMode() {
            const body = document.body;
            this.darkMode = !this.darkMode;
            if (this.darkMode) {
                body.classList.add('dark')
            }
            else {
                body.classList.remove('dark')
            }
        }
    },
    mounted() {
        mql = window.matchMedia('(prefers-color-scheme: dark)')
        if (mql.matches) {
            this.darkMode = true
        }
        window.matchMedia("(prefers-color-scheme: dark)").addListener(
            e => e.matches && this.toggleDarkMode()
        );
    }
})