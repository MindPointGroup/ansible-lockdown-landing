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
  this.el.innerHTML = `</br><span class="wrap">${this.txt}</span>`
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

    if (el.target.matches('.button') || el.target.closest('.button')) {
      const anchor = el.target.closest('a')

      if (anchor.href.includes('/#')) {
        console.log('do #')
        const anchor = el.target.innerText.toLowerCase().replace(' ', '-')
        const element = document.getElementById(anchor)
        const yPos = this.getY(element)
        scrollToY(window, yPos, 200)
      } else if (anchor.href.startsWith('http')) {
        window.location = anchor.href
      }
    }

  }

  render () {
    debug(this.props)
    return this.html`
<section class="hero is-primary is-medium">
  <div class="hero-head">
    
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
              <a href='#get-started' class="button is-primary is-inverted is-outlined">
                Get Started
              </a>
              <a href="http://github.com/ansible/ansible-lockdown/" class="button is-primary is-inverted">
                <span class="icon">
                  <i class="fab fa-lg fa-github"></i>
                </span>
                <span>Github</span>
              </a>
            </p>
          </div>
        </div>
      </nav>
    </br>
    </div>
  </div>

  <div class="hero-foot">
    
  </div>
</section>

`
  }
}

Tonic.add(Hero)

module.exports = Hero
