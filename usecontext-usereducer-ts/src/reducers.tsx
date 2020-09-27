type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? { type: Key }
    : {
        type: Key
        payload: M[Key]
      }
}

export enum Types {
  Create = 'create_product',
  Delete = 'delete_product',
  Add = 'add_product'
}

// Product
type ProductType = {
  id: number
  name: string
  price: number
}

type ProductPayload = {
  [Types.Create]: {
    id: number
    name: string
    price: number
  }
  [Types.Delete]: {
    id: number
  }
}

// type Action =
//   | { type: 'ADD' }
//   | { type: 'CREATE', create: object }
//   | { type: 'DELETE', id: string };

export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<
  ProductPayload
>]

type ShoppingCartPayload = { [Types.Add]: undefined }

export type ShoppingCartActions = ActionMap<
  ShoppingCartPayload
>[keyof ActionMap<ShoppingCartPayload>]

export const productReducer = (
  state: ProductType[],
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case Types.Create:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price
        }
      ]
    case Types.Delete:
      return [...state.filter((product) => product.id !== action.payload.id)]
    default:
      return state
  }
}

export const shoppingCartReducer = (
  state: number,
  action: ProductActions | ShoppingCartActions
) => {
  switch (action.type) {
    case Types.Add:
      return state + 1
    default:
      return state
  }
}
