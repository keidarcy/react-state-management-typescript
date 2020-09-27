import React, { useContext } from 'react';
import { AppContext } from './context';
import { Types } from './reducers';

interface Props {}

const Proudcts = (props: Props) => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div>
      {/* <input type="text" value={state.products} /> */}
      {state.products.length > 0 &&
        state.products.map(({ id, name, price }) => (
          <span key={name}>
            <div>{name}</div>
            <div>{price}</div>
            <button
              onClick={() =>
                dispatch({ type: Types.Create, payload: { id, name, price } })
              }
            >
              ADD
            </button>
          </span>
        ))}
      <button
        onClick={() => {
          dispatch({ type: Types.Add });
        }}
      >
        click
      </button>
      {state.shoppingCart}
      <pre>{JSON.stringify(state)}</pre>
    </div>
  );
};

export default Proudcts;
