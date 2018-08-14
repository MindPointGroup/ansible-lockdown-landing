const Tonic = require('tonic')

class Community extends Tonic {
  render () {
    return `
    <section class='has-background-primary section'>
      <div class='container'>
        <nav class='level'>
          <span class='level-item'>
            <h1 class='has-text-white title'>Community</h1>
            </br>
          </span>
        </nav>
        <h3 class='has-text-centered subtitle is-5 has-text-white'>
          Join the Ansible Lockdown Community 
        </h3>
        <br>
      </div>

      <div class='columns'>

        <div class='column is-one-third'>
          <div class='box'>
            <span class='has-text-centered'>
              <h1 class='subtitle'>
                GitHub
              </h1>
            </span>
            <br>
            <p>
              The project is split across multiple repositories, but we do keep track of all of them from the central ansible-lockdown repo.
            </p>
            <br>
            <div class='level'>
              <div class='level-item'>
                <div class='field is-grouped'>
                  <p class='control'>
                    <a href='https://github.com/ansible/ansible-lockdown' class="button is-info">Repo</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='column is-one-third'>
          <div class='box'>
            <span class="has-text-centered">
              <h1 class='subtitle'>
                Mailing List 
              </h1>
            </span>
            <br>
            <p>
              Have questions, ideas, or something else you want to share with the community? Check out our public mailing list.
            </p>
            <br>
            <div class='level'>
              <div class='level-item'>
                <div class='field is-grouped'>
                  <p class='control'>
                    <a href='https://groups.google.com/forum/#!forum/ansible-lockdown' class="button is-info">Archives/Sign Up</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='column is-one-third'>
          <div class='box'>
            <span class="has-text-centered">
              <h1 class='subtitle'>
                IRC 
              </h1>
            </span>
            <br>
            <p>
              Want to chat? Find us on #ansible-lockdown on Freenode
            </p>
            <br>
            <div class='level'>
             <div class='level-item'>
               <div class='field is-grouped'>
                 <p class='control'>
                   <a href='https://fedoramagazine.org/beginners-guide-irc' class="button is-info">New to IRC?</a>
                 </p>
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

Tonic.add(Community)
