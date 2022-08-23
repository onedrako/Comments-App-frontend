import React from 'react'
// import { setState } from '../redux/slices/stateSlice'
// import { useDispatch, useSelector } from 'react-redux'
import { useGetData } from '@hooks/useGetData'
import config from '../../config/index'

const HelloWorld = () => {
  // const dispatch = useDispatch()
  // const state = useSelector((state: any) => state.state)
  const [data, loading, error] = useGetData('/users')

  // useEffect(() => {
  //   dispatch(setState([1]))
  // }, [])

  // console.log(state)

  console.log(data)
  console.log(loading)
  console.log(error)

  return (
    <>
      <h1>Hello World</h1>
      <p>{config.api}</p>
    </>
  )
}

export { HelloWorld }
