// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onAmount = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-cont">
        <div className="content-cont">
          <div className="profile-name-cont">
            <div className="profile-cont">
              <h1 className="profile-head">S</h1>
            </div>
            <h1 className="user-name">Sarah Williams</h1>
          </div>
          <div className="balance-cont">
            <p className="balance-para">Your Balance</p>
            <p className="amount">{amount}</p>
          </div>
          <div className="in-rps-cont">
            <p className="in-rps">in Rupees</p>
          </div>
          <div className="denom-cont">
            <p className="withdraw">Withdraw</p>
            <p className="balance-para">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denom-list">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  btnDetails={eachItem}
                  key={eachItem.id}
                  onAmount={this.onAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
