const Tonic = require('tonic')
const { qsa } = require('qs')
const debug = require('debug')('hero')
const scrollToY = require('scrolltoy')

const TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate
  this.el = el
  this.loopNum = 0
  this.period = parseInt(period, 10) || 2000
  this.txt = ''
  this.tick()
  this.isDeleting = false
}

TxtRotate.prototype.tick = function () {
  let i = this.loopNum % this.toRotate.length
  const fullTxt = this.toRotate[i]
  this.isDeleting
    ?
    this.txt = fullTxt.substring(0, this.txt.length - 1)
    :
    this.txt = fullTxt.substring(0, this.txt.length + 1)
  this.el.innerHTML = `<span class="wrap">${this.txt}</span>`
  const that = this
  let delta = 300 - Math.random() * 100

  if (this.isDeleting) {
    delta /= 2
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period
    this.isDeleting = true
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false
    this.loopNum++
    delta = 500
  }

  setTimeout(function () { that.tick() }, delta)
}

window.onload = () => {
  const elements = qsa('.txt-rotate')
  for (let i = 0; i < elements.length; i++) {
    const toRotate = elements[i].getAttribute('data-rotate')
    const period = elements[i].getAttribute('data-period')
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period)
    }
  }

  const css = document.createElement('style')
  css.type = 'text/css'
  css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid }'
  document.body.appendChild(css)
}

class Hero extends Tonic {
  style () {
    return `
      hero #project-title {
        font-family: 'Cutive Mono';
        font-weight: 'bolder';
      }
    `
  }

  getY (el) {
    let yPos = 0
    while (el) {
      yPos += (el.offsetTop - el.scrollTop + el.clientTop)

      el = el.offsetParent
    }
    return yPos
  }

  click (el) {
    el.preventDefault()
    if (el.target.className === 'navbar-item') {
      const anchor = el.target.innerText.toLowerCase().replace(' ', '-')
      const element = document.getElementById(anchor)
      const yPos = this.getY(element)
      scrollToY(window, yPos, 200)
    }

    if (el.target.id === 'down-arrow' || el.target.closest('#down-arrow')) {
      const element = document.getElementById('about')
      scrollToY(window, this.getY(element), 200)
    }
  }

  render () {
    debug(this.props)
    return this.html`
<section class="hero is-fullheight is-primary is-medium">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <h1 id='project-title'>${this.props.brandtitle}</h1>
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
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
  </div>

  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title is-1">
        ${this.props.title}
      </h1>
      <h2 class="subtitle is-4">
        ${this.props.subtitle}
          <span id='swap'
                class='txt-rotate'
                data-period='1000'
                data-rotate=${this.props.swaplist}>
          </span>
      </h2>
      <nav class="level">
        <div class="level-item">
          <div class="field is-grouped">
            <p class="control">
              <button class="button is-primary is-inverted is-outlined">
                Get Started
              </button>
              <button class="button is-primary is-inverted">
                <span class="icon">
                  <i class="fab fa-lg fa-github"></i>
                </span>
                <span>Github</span>
              </button>
            </p>
          </div>
        </div>
      </nav>
      </br>
    </div>
  </div>

  <div class="hero-foot">
    <div class="container">
      <nav class="level">
        <div class="level-item">
          <span class="icon">
            <a id='down-arrow'>
              <span class="fa-stack fa-2x">
                  <i data-fa-transform="up-7" class="fal fa-circle fa-stack-2x"></i>
                  <i data-fa-transform="up-14" class="fas fa-chevron-double-down fa-stack-1x"></i>
              </span>
            </a>
          </span>
        </div>
      </nav>
    </div>
  </div>

</section>

`
  }
}

Tonic.add(Hero)

module.exports = Hero
