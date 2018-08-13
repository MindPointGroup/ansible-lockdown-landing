const Tonic = require('tonic')

class About extends Tonic {
  render () {
    return `
    <section class='section'>
      <div class='container'>
        <div class="columns">
          <div class="column is-three-fifths is-offset-one-fifth">
            <nav class='level'>
              <span class='level-item'>
                <h1 id='about' class='title'>About</h1>
              </span>
            </nav>
            <div>
              <span class='has-text-centered'>
                <p>Ansible Lockdown is an open source project with one principal focus; to make it easy for anyone to <strong>conduct security operations in a way that is safe, maintainable, and automated.</strong></p>
                </br>
                <p>Speaking in literal terms, it is a curated collection of information security themed Ansible roles that are both vetted and actively maintained.</p>
                </br>
                <p>The project is backed by a collaborative effort between RedHat and MindPoint Group</p>
              </span>
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
