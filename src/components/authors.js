const Tonic = require('tonic')

class Author extends Tonic {
  render () {
    console.log(this.props.data)
    return `
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
      authorCards += `
        <author data='${JSON.stringify(person)}'></author> 
      `
    }

    return `
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
