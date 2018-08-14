const Tonic = require('tonic')
const highlight = require('highlight.js')
require('highlight.js/styles/default.css')

const code = highlight.highlight('yaml', `
- name: Security Stack
  hosts: someServers
  roles:
    - role: rhel7-stig
      rhel7stig_cat1: yes`).value

const code1 = highlight.highlight('yaml', `
- name: Security Stack
  hosts: someServers
  roles:
    - role: rhel7-stig
      exclude:
        - 'RHEL-07-010020'`).value

const code2 = highlight.highlight('yaml', `
- name: Security Stack
  hosts: someServers
  roles:
    - role: rhel7-stig
      rhel7stig_lftpd_required: yes
      rhel7stig_firewall_service: iptables`).value

class DemoInterface extends Tonic {
  render () {
    return `
    <section class='section'>
      <div class='container'>
        <nav class='level'>
          <span class='level-item'>
            <h1 class='title'>Configurable</h1>
          </span>
        </nav>
        <div class='columns is-multiline'>

          <div class="column is-half">
            <div class="box">
              <nav class='level'>
                <span class='level-item'>
                  <h1 class='subtitle'>Apply Individual Categories</h1>
                </span>
              </nav>
              <pre>
                ${code}
              </pre>
            </div>
          </div>

          <div class="column is-half">
            <div class="box">
              <nav class='level'>
                <span class='level-item'>
                  <h1 class='subtitle'>Exclude Rules</h1>
                </span>
              </nav>
              <pre>
                ${code1}
              </pre>
            </div>
          </div>
          <div class="column">
            <div class="box">
              <nav class='level'>
                <span class='level-item'>
                  <h1 class='subtitle'>Tailored Logic</h1>
                </span>
              </nav>
              <pre>
              ${code2}
              </pre>
            </div>
          </div>
        </div>
        <div>
          <h3 class='has-text-centered'>
            <strong>Learn more in our <a href='#'>docs</a></strong>
          </h3>
        </div>
      </div>
    </section>
    `
  }
}

Tonic.add(DemoInterface)
