const Tonic = require('@conductorlab/tonic')
const debug = require('debug')('footer')

class AFuuter extends Tonic {
  render () {
    debug('render')
    return this.html`
<footer class="footer has-background-primary">
  <span class='has-text-white is-size-7'>
    <p>
      Copyright &copy2018 MindPoint Group LLC.
    </p>
    <p>
      'MindPoint Group' and the MindPoint Group logo are registered trademarks of MindPoint Group, LLC in the United States.
    </p>
    <p>
      'Red Hat', the Red Hat 'Shadowman' logo, 'Ansible', and the 'Ansible' logo are registered trademarks of Red Hat, Inc. in the United States and other countries. 
    </p>
  </span>
</footer>
`
  }
}

Tonic.add(AFuuter)
module.exports = AFuuter
