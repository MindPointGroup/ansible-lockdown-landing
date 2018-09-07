const Tonic = require('tonic')
const domReady = require('domReady')
const { qs, qsa } = require('qs')
const roles = require('./fixtures/roles')
const debug = require('debug')('index')
const scrollToY = require('scrolltoy')

require('highlightjs')
require('./components/hero')
require('./components/about')
require('./components/roles')
require('./components/demo-interface')
require('./components/community')
require('./components/services')
require('./components/fuuter')

require('./main.scss')

function scrollFunction () {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById('scrollup').style.display = 'block'
  } else {
    document.getElementById('scrollup').style.display = 'none'
  }
}

class App extends Tonic {
  stylesheet () {
    return `
    #scrollup {
      position: fixed;
      bottom: 20px;
      right: 30px;
      z-index: 99;
      background: transparent;
      border: none;
      cursor: pointer;
      display: none;
    }
    `
  }

  click (el) {
    if (el.target.id === 'scrollup') {
      scrollToY(window, 0, 200)
    }
  }

  render () {
    debug('render')
    const brandTitle = 'Ansible Lockdown'
    const heroTitle = 'Security Through Automation'
    const heroSubtitle = 'Ansible Roles That Secure Your'
    const heroSwapList = [
      'Systems',
      'Servers',
      'Cloud',
      'Network',
      'Desktops',
      'Middleware'
    ]
    return this.html`
    <hero title="${heroTitle}" brandTitle="${brandTitle}" subtitle="${heroSubtitle}" swapList=${JSON.stringify(heroSwapList)}></hero>

    <about></about>
    <roles data=${roles}></roles>
    <demo-interface></demo-interface>
    <community></community>
    <services></services>
    <fuuter></fuuter>
    <button id="scrollup" class="button"><i class="fas fa-arrow-alt-square-up fa-3x"></i></button>
`
  }
}

const navbarEventInit = () => {
  const $burgers = qsa('.navbar-burger')
  if ($burgers.length > 0) {
    $burgers.forEach(el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target
        const $target = qs(`#${target}`)
        el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }
}

window.onscroll = function () { scrollFunction() }
domReady(() => {
  Tonic.add(App)
  navbarEventInit()
})
