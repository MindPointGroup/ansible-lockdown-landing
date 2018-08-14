const Tonic = require('tonic')
const domReady = require('domReady')
const { qs, qsa } = require('qs')
const roles = require('./fixtures/roles.js')
const authors = require('./fixtures/maintainers.js')

require('highlightjs')
require('./components/hero')
require('./components/about')
require('./components/roles')
require('./components/demo-interface')
require('./components/authors')
require('./components/community')

require('./main.scss')

class App extends Tonic {
  render () {
    const brandTitle = 'Ansible Lockdown'
    const heroTitle = 'Security Through Automation'
    const heroSubtitle = 'Ansible Roles That Secure Your Systems'
    return `
    <hero title="${heroTitle}" brandTitle="${brandTitle}" subtitle="${heroSubtitle}"></hero>

    <about></about>
    <roles data='${JSON.stringify(roles)}'></roles>
    <demo-interface></demo-interface>
    <community></community>
    <authors data='${JSON.stringify(authors)}'></authors>
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
        console.log($target)
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
