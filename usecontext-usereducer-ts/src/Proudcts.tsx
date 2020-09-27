import React, { useContext } from 'react'
import { AppContext } from './context'
import { Types } from './reducers'

interface Props {}

const Proudcts = (props: Props) => {
  const { state, dispatch } = useContext(AppContext)
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: Types.Add })
        }}
      >
        click
      </button>
      {state.shoppingCart}
    </div>
  )
}

export default Proudcts
