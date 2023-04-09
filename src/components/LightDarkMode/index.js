import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onButtonClick = () => {
    this.setState(eachPrev => ({isDarkMode: !eachPrev.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const boxChange = isDarkMode ? 'dark-mode ' : 'light-mode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode '

    return (
      <div className="bg-container">
        <div className={`container ${boxChange}`}>
          <h1 className="heading"> Click To Change Mode</h1>
          <button className="button" onClick={this.onButtonClick} type="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
