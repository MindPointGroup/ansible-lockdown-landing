const Tonic = require('tonic')
const debug = require('debug')('roles')

class Roles extends Tonic {
  render () {
    debug(this.props.data)
    let repoCards = ''
    for (const role of this.props.data) {
      repoCards += `
          <div class="column is-one-third">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  ${role.name}
                </div>
              </div>
              <footer class="card-footer">
                <a href="${role.repoLink}" class="card-footer-item">
                  <p class="has-text-primary">
                    <i class="fab fa-lg fa-github"></i>
                    GitHub
                  </p>
                </a>
              </footer>
            </div>
          </div>

      `
    }
    return `
    <section id='roles' class='has-background-primary section'>
      <div class='container'>
        <nav class='level'>
          <span class='level-item'>
            <h1 class='has-text-white title'>Roles</h1>
            </br>
          </span>
        </nav>
        <h3 class='has-text-centered subtitle is-5 has-text-white'>
          Ansible Lockdown is always working on adding more content.
          </br>
          These are the roles we currently maintain.
        </h3>

        <div class="columns is-multiline">
          ${repoCards}
        </div>
        <div class="columns"></div>

        <h3 class='has-text-centered has-text-white'>
          <strong class='has-text-white'>Need different content?</strong>
          </br>
          Let Us Know on GitHub, the Mailing List or for urgent needs contact us to inquire about premium support. 
        </h3>
      </div>
    </section>
    `
  }
}

Tonic.add(Roles)
module.exports = Roles
