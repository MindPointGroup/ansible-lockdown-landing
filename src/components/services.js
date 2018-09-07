const Tonic = require('tonic')
const debug = require('debug')('services')

class Services extends Tonic {
  render () {
    return this.html`
<section id='professional-services' class='section'>
  <div class='container'>
    <nav class='level'>
      <span class='level-item'>
        <h1 class='title'>Professional Services</h1>
        </br>
      </span>
    </nav>
    <div class="columns">
      <div class="column is-three-fifths is-offset-one-fifth">
        <p class="has-text-justified">
          <strong>Professional services for Ansible Security Automation</strong> initiatives are available whether directly related to Ansible Lockdown or otherwise. If you need need help implementing some security automation and would also like to support this project. You can also achieve both thins by hiring some of the bright folks behind this project to help your organization do security better through Ansible.
          <br>
          <br>
          Contact information and more details can be found at <a href='#'>MindPoint Group</a>.
        </p>
      </div>
    </div>
  </div>
</section>
`
  }
}

Tonic.add(Services)
module.exports = Services
