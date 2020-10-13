var app = new Vue({
    el: '#app',
    data: {
        projectHover: false,
        darkMode: false,
        imgHover: false,
        currentProject: null,
        featuredProjects: [
            {
                title: {
                    text: 'Sloth',
                    url: 'https://github.com/jeevp/sloth'
                },
                description:
                    `A Spotify-powered Mac app that generates interval workouts to
                    the tune of a song.`,
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
                    `Song quiz Android app built with Spotify Web Player API 
                    and Android Studio.`,
                tags: ['Java', 'API'],
                image: 'assets/tuneup.svg'
            },
            {
                title: {
                    text: 'LitMap',
                    url: 'https://litmap.jeev.me'
                },
                description:
                    `Web application to map locations in a document built with NLTK 
                    and StanfordNER.`,
                tags: ['Python', 'JS', 'HTML', 'CSS'],
                image: 'assets/litmap.png'
            },
            {
                title: {
                    text: 'Rabble',
                    url: 'https://scrabble.jeev.me'
                },
                description:
                    `Multiplayer Scrabble game built in collaboration with
                    <a href="https://gyan.biz" target="_blank">Gyan</a>`,
                tags: ['JS', 'HTML', 'CSS'],
                image: 'assets/rabble.png'
            },
            {
                title: {
                    text: 'Erasure',
                    url: 'https://erasure.jeev.me'
                },
                description:
                    `Erasure poetry generator built with HTML/CSS & JavaScript.`,
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
                return 'assets/invisible_square.png'
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