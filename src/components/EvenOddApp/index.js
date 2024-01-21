// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onClickIncrementButton = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state
    const numType = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg">
        <h1 className="count-heading">Count {count}</h1>
        <p className="count-type">Count is {numType}</p>
        <button
          type="button"
          className="button"
          onClick={this.onClickIncrementButton}
        >
          Increment
        </button>
        <p className="range">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
