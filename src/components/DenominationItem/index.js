// Write your code here
import './index.css'

const DenominationItem = props => {
  const {btnDetails, onAmount} = props
  const {value} = btnDetails
  const minus = () => {
    onAmount(value)
  }
  return (
    <li className="btn-cont">
      <button className="btn" type="button" onClick={minus}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
