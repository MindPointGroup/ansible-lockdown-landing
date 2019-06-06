const Tonic = require('@conductorlab/tonic')
const domReady = require('domready')
const { qs, qsa } = require('qs')
const roles = require('./fixtures/roles')
const debug = require('debug')('index')
const scrollToY = require('scrolltoy')
console.log('here')
require('highlightjs')
require('./components/navbar')
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
    qs('#scrollup').style.display = 'block'
  } else {
    qs('#scrollup').style.display = 'none'
  }
}

class AApp extends Tonic {
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
    debug(el)
    if (el.target.id === 'scrollup' || el.target.closest('#scrollup')) {
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
    <a-navbar brandTitle="${brandTitle}"></a-navbar>
    <a-hero title="${heroTitle}" subtitle="${heroSubtitle}" swapList=${JSON.stringify(heroSwapList)}></a-hero>
    <a-about></a-about>
    <a-roles data=${roles}></a=roles>
    <demo-interface></demo-interface>
    <a-community></a-community>
    <a-services></a-services>
    <a-fuuter></a-fuuter>
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
  Tonic.add(AApp)
  navbarEventInit()
})
