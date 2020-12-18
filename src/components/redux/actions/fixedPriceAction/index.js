export const GET_AND_SET_FIXED_PRICE = 'GET_AND_SET_FIXED_PRICE';

export const getAndSetFixedPrice = (fixedPrice) => ({
  type: GET_AND_SET_FIXED_PRICE,
  payload: {
    fixedPrice
  },
});