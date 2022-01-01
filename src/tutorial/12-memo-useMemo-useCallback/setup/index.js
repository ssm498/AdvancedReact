import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'
const calculateMostExpensive = (data) => {
  return (
    data.reduce((total, item) => {
      const price = item.fields.price
      if (price >= total) {
        total = price
      }
      return total
    }, 0) / 100
  )
}

// every time props or state changes, component re-renders
// Solution is to use the functin called memo... not useMemo though.
const Index = () => {
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState(0)

  // This will not only update when we update cart
  const addToCart = useCallback(() => {
    setCart(cart + 1)
  }, [cart])
  // the call back function for usememo will expect a value, which calculatemostexpensive returns. Then products is passed into that.
  const mostExpensive = useMemo(
    () => calculateMostExpensive(products),
    [products]
  )
  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: '3rem' }}>Cart:{cart}</h1>
      <h1>Most Expensive: ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  )
}
// Wrap the component in React.memo. This checks weather the props('products') changes, and if it doesnt, it wont re-render. This does not work with function, need to use useCallBack for it to work with functions
const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log('Big List Called')
  })
  return (
    <section className='products'>
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        )
      })}
    </section>
  )
})

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.log('Single Item Called')
  })
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </article>
  )
}
export default Index
