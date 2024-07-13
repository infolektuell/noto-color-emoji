import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>👌 Noto Color Emoji 👋</h1>
    <p class="read-the-docs">
      ✏️ The same emoji font in all modern browsers. ❤️
    </p>
    <p>
    ❇️ See <a href="https://github.com/infolektuell/noto-color-emoji">Repo</a> for usage instructions. 📢
    </p>
  </div>
`
