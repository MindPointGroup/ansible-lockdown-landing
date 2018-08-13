const Tonic = require('tonic')
const domReady = require('domReady')
const { qs, qsa } = require('qs')

require('./components/hero')
require('./components/about')
require('./components/roles')

require('./main.scss')

const roles = [
  {
    name: 'RedHat Enterprise Linux 7 STIG',
    repoLink: 'https://github.com/MindPointGroup/RHEL7-STIG',
    tags: ['stig', 'hardening', 'linux', 'rhel']
  },
  {
    name: 'RedHat Enterprise Linux 7 CIS',
    repoLink: 'https://github.com/MindPointGroup/RHEL7-CIS',
    tags: ['cis', 'hardening', 'linux', 'rhel']
  },
  {
    name: 'RedHat Enterprise Linux 6 STIG',
    repoLink: 'https://github.com/MindPointGroup/RHEL6-STIG',
    tags: ['stig', 'hardening', 'linux', 'rhel']
  },
  {
    name: 'Microsoft Windows Server 2008R2 Member Server',
    repoLink: 'https://github.com/MindPointGroup/Windows-2008R2-Member-Server-STIG',
    tags: ['stig', 'hardening', '2008R2', 'windows']
  },
  {
    name: 'Microsoft Windows Server 2012 Member Server',
    repoLink: 'https://github.com/MindPointGroup/Windows-2012-Member-Server-STIG',
    tags: ['stig', 'hardening', '2012', 'windows']
  },
  {
    name: 'Microsoft Windows Server 2012 Domain Controller',
    repoLink: 'https://github.com/MindPointGroup/Windows-2012-Domain-Controller-STIG',
    tags: ['stig', 'hardening', '2012', 'windows']
  }
]

class App extends Tonic {
  render () {
    const brandTitle = 'Ansible Lockdown'
    const heroTitle = 'Security Through Automation'
    const heroSubtitle = 'Ansible Roles That Secure Your Systems'
    return `
    <hero title="${heroTitle}" brandTitle="${brandTitle}" subtitle="${heroSubtitle}"></hero>

    <about></about>
    <roles data='${JSON.stringify(roles)}'></roles>
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
