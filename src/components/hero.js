const Tonic = require('tonic')

class Hero extends Tonic {
  style () {
    return `
      hero #project-title {
        font-family: 'Cutive Mono';
        font-weight: 'bolder';
      } 
    `
  }

  render () {
    return `
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
            <a href='#about' class="navbar-item">
              About
            </a>
            <a class="navbar-item">
              Roles
            </a>
            <a class="navbar-item">
              Documentation
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
            <a href='#about'>
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
