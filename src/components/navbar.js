const Tonic = require('@conductorlab/tonic')
const debug = require('debug')('navbar')
const scrollToY = require('scrolltoy')

class ANavbar extends Tonic {
  stylesheet () {
    return `
      navbar .navbar-brand {
        font-family: 'Orbitron';
        font-weight: 500;
      }
    `
  }

  getY (el) {
    let yPos = 0
    const headerOffset = document.body.className.includes('has-navbar-fixed-top') ? 50 : 0;
    if (el) {
      yPos += (el.offsetTop - el.scrollTop + el.clientTop)
    }

    return yPos - headerOffset
  }

  click (el) {
    el.preventDefault()
    if (el.target.className === 'navbar-item') {
      const anchor = el.target.innerText.toLowerCase().replace(' ', '-')
      const element = document.getElementById(anchor)
      const yPos = this.getY(element)
      scrollToY(window, yPos, 200)
    }
  }

  render () {
    debug(this.props)
    return this.html`
  <nav class="navbar is-fixed-top is-primary">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item">
          ${this.props.brandtitle}
        </a>
        <span class="navbar-burger burger" data-target="navbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Roles
          </a>
          <a class="navbar-item">
            Docs
          </a>
          <a class="navbar-item">
            Community
          </a>
          <a class="navbar-item">
            Professional Services
          </a>
        </div>
      </div>
    </div>
  </nav>
`
  }
}

Tonic.add(ANavbar)

module.exports = ANavbar
