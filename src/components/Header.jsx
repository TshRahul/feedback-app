import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


const Header = ({text, bgColor, textColor}) => {

    const headerStyles = {
        backgroundColor: bgColor, 
        color: textColor
    }

  return (
    <header >
      <div className="container">
          <Link to="/" style={headerStyles}>
            <h2>{text}</h2>
          </Link>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
};

Header.propTypes = {
    text: PropTypes.string
}

export default Header
