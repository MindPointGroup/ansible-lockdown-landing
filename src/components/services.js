const Tonic = require('@conductorlab/tonic')
const debug = require('debug')('services')

class AServices extends Tonic {
  render () {
    return this.html`
<section id='professional-services' class='section'>
  <div class='container'>
    <nav class='level'>
      <span class='level-item'>
        <h1 class='title has-text-centered'>Professional Services</h1>
        </br>
      </span>
    </nav>
    <div class="columns">
      <div class="column is-three-fifths is-offset-one-fifth">
        <p class="has-text-centered">
          <strong>Professional services for Ansible Security Automation</strong> initiatives are available from the experts at MindPoint Group, whether directly related to Ansible Lockdown or otherwise. Please contact us if you need need help implementing security automation through Ansible and would also like to support further development of this open source project. 
          <br>
          <br>
          The corporate sponsors of this project are dedicated to contributing new roles, enhancements, and other content developed through professional services engagments (where allowable by clients).
          <br>
          <br>
          Contact information and more details can be found at <a href='https://www.mindpointgroup.com/services/professional-services/'>MindPoint Group</a>.
        </p>
      </div>
    </div>
  </div>
</section>
`
  }
}

Tonic.add(AServices)
module.exports = AServices
