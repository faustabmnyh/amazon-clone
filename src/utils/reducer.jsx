export const initialState = {
  basket: [],
  user: null, // by default the user gonna be null
};

// reducer is essentially when we have this data layer,how we are able to dispatch the action into datalayer

// selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
// this(reduce) is meaning is same like maps or forloop ,something like iterate, and tally up all the item prices and adds it into this final amount and it returns

// state is the application and action what we trying to do
const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state, // returning the originally was
        // but we're going to change the basket

        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1); // artinya disaat kita ngeklik remove button maka dia akan dilepaskan atau hapus
      } else {
        console.warn(
          `Cant remove product (id : ${action.id} as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
