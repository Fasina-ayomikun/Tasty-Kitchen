import {
  PRODUCT_ERROR,
  PRODUCT_LOADING,
  PRODUCT_SUCCESS,
  SINGLE_PRODUCT_ERROR,
  SINGLE_PRODUCT_LOADING,
  SINGLE_PRODUCT_SUCCESS,
  SORT_PRODUCTS,
} from "../actions";

function reducer(state, action) {
  if (action.type === PRODUCT_LOADING) {
    return { ...state, isLoading: true };
  }
  if (action.type === PRODUCT_ERROR) {
    return {
      ...state,
      isLoading: false,
      isError: true,
      error_message: action.payload,
    };
  }
  if (action.type === PRODUCT_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      isError: false,
      all_products: action.payload,
      filtered_products: [...action.payload],
    };
  }
  if (action.type === SINGLE_PRODUCT_LOADING) {
    return {
      ...state,
      single_product_loading: true,
      single_product_error: false,
    };
  }
  if (action.type === SINGLE_PRODUCT_ERROR) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
      single_error_message: action.payload,
    };
  }
  if (action.type === SINGLE_PRODUCT_SUCCESS) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: false,
      single_product: action.payload,
    };
  }
}

export default reducer;
