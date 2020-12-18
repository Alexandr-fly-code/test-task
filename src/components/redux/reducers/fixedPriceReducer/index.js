import { GET_AND_SET_FIXED_PRICE } from '../../actions/fixedPriceAction';

const initialState = 0;

export default function fixedPrice(state = initialState, action) {
  switch (action.type) {
    case GET_AND_SET_FIXED_PRICE:
      const { fixedPrice } = action.payload;
      return fixedPrice;
    default:
      return state;
  }
};