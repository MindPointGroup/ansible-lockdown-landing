const Tonic = require('@conductorlab/tonic')
const highlight = require('highlight.js')
require('highlight.js/styles/default.css')

const code = [
  {
    'title': 'Apply Individual Categories',
    'size': 'is-half',
    'content': highlight.highlight('yaml', `
- name: Security Stack
  hosts: someServers
  roles:
    - role: rhel7-stig
      rhel7stig_cat1: yes`
    ).value
  },
  {
    'title': 'Exclude Rules',
    'size': 'is-half',
    'content': highlight.highlight('yaml', `
- name: Security Stack
  hosts: someServers
  roles:
    - role: rhel7-stig
      exclude:
        - 'RHEL-07-010020'`
    ).value
  },
  {
    'title': 'Tailored Logic',
    'size': '',
    'content': highlight.highlight('yaml', `
- name: Security Stack
  hosts: someServers
  roles:
    - role: rhel7-stig
      rhel7stig_lftpd_required: yes
      rhel7stig_firewall_service: iptables`
    ).value
  }
]

class DemoInterface extends Tonic {
  render () {
    return `
    <section id='get-started' class='section'>
      <div class='container'>
        <nav class='level'>
          <span class='level-item'>
            <h1 class='title'>Configurable</h1>
          </span>
        </nav>
        <div class='tile is-ancestor'>
          <div class="tile is-parent is-6">
            <article class="tile is-child box">
             <p class="subtitle has-text-centered">${code[0].title}</p>
             <pre>
              ${code[0].content}
             </pre>
            </article>
          </div>
          <div class="tile is-parent is-6">
            <article class="tile is-child box">
              <p class="subtitle has-text-centered">${code[1].title}</p>
              <pre>
                ${code[1].content}
              </pre>
            </article>
          </div>
        </div>
        <div class="tile is-ancestor">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child box">
              <p class="subtitle has-text-centered">${code[2].title}</p>
              <pre>
                ${code[2].content}
              </pre>
            </article>
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
