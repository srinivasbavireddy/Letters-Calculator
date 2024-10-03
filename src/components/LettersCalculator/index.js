import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputletters: ''}

  onChangeInputText = event => {
    this.setState({inputletters: event.target.value})
  }

  render() {
    const {inputletters} = this.state

    const lettersCount = inputletters.length
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="search">Enter the phrase</label>
          <br />
          <input
            type="text"
            id="search"
            placeholder="Enter new phrase"
            onChange={this.onChangeInputText}
          />
          <br />
          <p className="no-of-letters">No.of letters: {lettersCount}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}
export default LettersCalculator