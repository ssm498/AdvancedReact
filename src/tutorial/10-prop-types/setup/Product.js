import React from 'react'
import PropTypes from 'prop-types'
import defaultImg from '../../../assets/default-image.jpeg'

const Product = ({ image, name, price }) => {
  const url = image && image.url // Adding checks like this will make your code messy and less readable. The preferred method is use PropTypes?
  return (
    <article className='product'>
      <img src={url || defaultImg} alt={name || 'Default Name'} />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </article>
  )
}

Product.PropType = {
  image: PropTypes.object.isRequired, // And object because in curly braces
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

// Product.defaultProps = {
//   name: 'Default Name',
//   price: 3.99,
//   image: defaultImg,
// }
export default Product
