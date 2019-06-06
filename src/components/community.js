const Tonic = require('@conductorlab/tonic')

class ACommunity extends Tonic {
  stylesheet () {
    return `
      community .tile .box div {
        padding-bottom: 1rem;
      }
    `
  }

  render () {
    return `
    <section id='community' class='has-background-primary section'>
      <div class='container'>
        <nav class='level'>
          <span class='level-item'>
            <h1 class='has-text-white title'>Community</h1>
            <br>
          </span>
        </nav>
        <h3 class='has-text-centered subtitle is-5 has-text-white'>
          Join the Ansible Lockdown Community 
        </h3>
        <br>
      </div>

      <div class='tile is-ancestor'>
        <div class='tile is-parent is-4'>
          <div class='tile is-child box'>
            <div class="has-text-centered">
              <p class='subtitle has-text-centered'>GitHub</p>
            </div>

            <div>
              <p>
                The project is split across multiple repositories, but we do keep track of all of them from the central ansible-lockdown repo.
              </p>
            </div>

            <div class="has-text-centered">
              <a href='https://github.com/ansible/ansible-lockdown' class="button is-info">Repo</a>
            </div>
          </div>
        </div>

        <div class='tile is-parent is-4'>
          <div class='tile is-child box'>
            <div class="has-text-centered">
              <p class="subtitle">Mailing List</p>
            </div>

            <div>
            <p>
              Have questions, ideas, or something else you want to share with the community? Check out our public mailing list.
            </p>
            </div>

            <div class="has-text-centered">
              <a href='https://groups.google.com/forum/#!forum/ansible-lockdown' class="button is-info">Archives/Sign Up</a>
            </div>
          </div>
        </div>

        <div class='tile is-parent is-4'>
          <div class='tile is-child box'>
            <div class="has-text-centered">
            <p class="subtitle">IRC</p>
            </div>

            <div>
            <p>
              Want to chat? Find us on #ansible-lockdown on Freenode
            </p>
            </div>

            <div class="has-text-centered">
              <a href='https://fedoramagazine.org/beginners-guide-irc' class="button is-info">New to IRC?</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    `
  }
}

Tonic.add(ACommunity)
module.exports = ACommunity
