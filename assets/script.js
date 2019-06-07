// const emoji = ['🌚', '🌵', '🦔', '🤷🏻', '🆗', '👩🏻‍💻', '🎮']
// const randomEmoji = document.querySelector('.js-random-emoji')

// if (randomEmoji) {
//   randomEmoji.textContent = emoji[Math.floor(Math.random() * emoji.length)]
// }

// const osDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
// const supportsLocalStorage = 'localStorage' in window
// const darkModeCheckbox = document.querySelector('#dark-mode')
// if (supportsLocalStorage) {
//   darkModeCheckbox.addEventListener('change', rememberMode)
//   const darkMode = localStorage.getItem('darkMode')
//   if (darkMode === '1' || (osDarkMode && darkMode === null)) darkModeCheckbox.checked = true
//
//   function rememberMode () {
    // darkModeCheckbox.checked ? localStorage.setItem('darkMode', '1') : localStorage.setItem('darkMode', '0')
//   }
// }

// // var activeElement = document.activeElement
var nextIntent = 'mousedown'

document.body.classList.add('has-js')
