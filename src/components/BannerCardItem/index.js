// Write your code here.
import './index.css'

const BannerDetails = props => {
  const {userDetails} = props
  const {headerText, description, className} = userDetails
  return (
    <li className={`${className} card-banner-item`}>
      <div>
        <h1 className="heading"> {headerText}</h1>
        <p className="description"> {description}</p>
        <button className="more-button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerDetails
