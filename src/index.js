const Tonic = require('tonic')
const domReady = require('domReady')
const { qs, qsa } = require('qs')
const roles = require('./fixtures/roles')
const debug = require('debug')('index')

require('highlightjs')
require('./components/hero')
require('./components/about')
require('./components/roles')
require('./components/demo-interface')
require('./components/community')
require('./components/services')
require('./components/fuuter')

require('./main.scss')

class App extends Tonic {

  stylesheet () {
    return `
    #scrollup {
      position: fixed;
      bottom: 20px;
      right: 30px;
      z-index: 99;
      cursor: pointer;
      padding: 15px;
    }
    `
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
    <a id="scrollup" class="button is-black">Anchor</a>
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

domReady(() => {
  Tonic.add(App)
  navbarEventInit()
})
