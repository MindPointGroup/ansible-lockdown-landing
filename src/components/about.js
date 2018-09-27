const Tonic = require('tonic')

const ansibleLogo = require('../static/Ansible-Wordmark-RGB-Black.svg')
const mpgLogo = require('../static/MDP_logo_full_color_no_tag.svg')

class About extends Tonic {
  stylesheet () {
    return `
      about hr {
        border: 1px solid #1f4886;
        transform: rotate(90deg);
      }
    `
  }
  render () {
    return `
    <section id='about' class='section'>
      <div class='container'>
        <div class="columns is-multiline">
          <div class="column is-three-fifths is-offset-one-fifth">
            <nav class='level'>
              <span class='level-item'>
                <h1 class='title'>About</h1>
              </span>
            </nav>
            <div>
              <span class='has-text-centered'>
                <p>Ansible Lockdown is an open source project with one principal focus; to make it easy for anyone to <strong>conduct security operations in a way that is safe, maintainable, and automated.</strong></p>
                <br>
                <p>Speaking in literal terms, it is a curated collection of information security themed Ansible roles that are both vetted and actively maintained.</p>
                <br>
                <p>The project is backed by a collaborative effort between <a href='https://www.ansible.com/'>Red Hat® Ansible</a> and <a href='https://www.mindpointgroup.com/services/professional-services/'>MindPoint Group</a></p>
              </span>
            </div>
            <div>
            <br>
            <br>
            </div>
            <div>
              <div class='level'>
                <div class='level-item has-text-centered'>
                  <img src=${ansibleLogo}></img>
                </div>
                <hr width="80" class="is-hidden-mobile">
                <div class='level-item has-text-centered'>
                  <img src=${mpgLogo}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `
  }
}

Tonic.add(About)
module.exports = About
