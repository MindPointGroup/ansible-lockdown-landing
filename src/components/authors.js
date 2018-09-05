const Tonic = require('tonic')
const debug = require('debug')('authors')

class Author extends Tonic {
  render () {
    debug('author')
    debug(this.props)
    return this.html`
    <div class="column">
      <div class="card">
        <div class="card-image">
          <figure class="image is-128x128">
            <img src="https://avatars.githubusercontent.com/${this.props.data.githubUsername}" alt="${this.props.data.name}'s GitHub Avatar">
          </figure>
        </div>

        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">${this.props.data.name}</p>
            </div>
          </div>
        </div>

        <div class="card-footer">
          <div class="card-footer-item">
            <a href='https://github.com/${this.props.data.githubUsername}'>
              <span class="icon">
                <i class="fab fa-2x fa-github"></i>
              </span>
            </a>
          </div>
          <div class="card-footer-item">
            <a href='${this.props.data.linkedin}'>
              <span class="icon">
                <i class="fab fa-2x fa-linkedin"></i>
              </span>
            </a>
          </div>
          <div class="card-footer-item">
            <a href='https://twitter.com/${this.props.data.twitterHandle}'>
              <span class="icon">
                <i class="fab fa-2x fa-twitter"></i>
              </span>
            </a>
          </div>
        </div>

      </div>
    </div>
    `
  }
}

Tonic.add(Author)

class Authors extends Tonic {
  render () {
    let authorCards = ''
    for (const person of this.props.data) {
      debug('person')
      debug(person) // this shows the proper object
      authorCards += `
        <author data=${person}'></author>
      `
    }

    // i think the error happens here when I try to use
    // a string template var as 'normal' and not as a way
    // to pass in prop data
    return this.html`
    <div class='section'>
      <div class='container'>
        <nav class='level'>
          <span class='level-item'>
            <h1 class='title'>Maintainers</h1>
          </span>
        </nav>
        <div class="columns is-centered">
        ${authorCards}
        </div>
      </div>
    </div>
    `
  }
}

Tonic.add(Authors)
