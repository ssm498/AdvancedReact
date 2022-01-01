import { useState, useEffect, useCallback } from 'react'

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])
  // In order to add a dependency array to useEffect, you want to wrap getProducts in 'useCallBack' and set the useEffect to detect changes to the url, otherwise you will get an infinit loop as the states continually update each other.
  const getProducts = useCallback(async () => {
    const response = await fetch(url)
    const products = await response.json()
    setProducts(products)
    setLoading(false)
  }, [url])

  useEffect(
    () => {
      getProducts()
    },
    [url],
    getProducts
  )
  return { loading, products }
}

// To create your own hooks, you can write the functions and return the state values.
