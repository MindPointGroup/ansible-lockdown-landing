const Tonic = require('tonic')
const debug = require('debug')('footer')

const comboLogo = require('../static/BaseMPGandRHFinalMed.png')

class Fuuter extends Tonic {
  render () {
    debug('render')
    return this.html`
<footer class="footer has-background-primary">
  <div class="content">
      <div class='has-text-centered'>
        <img src=${comboLogo}></img>
      </div>
  </div>
</footer>
  <div class="content box">
    <span>
      <p class='is-size-7'>
        Copyright 2018 MindPoint Group LLC.<br>'Red Hat', the Red Hat 'Shadowman' logo, and 'Ansible' are registered trademarks of Red Hat, Inc. in the United States and other countries. 'MindPoint Group' and the MindPoint Group 'M' logo are registered trademarks of MindPoint Group, LLC in the United States.
      </p>
    </span>
  </div>
`
  }
}

Tonic.add(Fuuter)
module.exports = Fuuter
