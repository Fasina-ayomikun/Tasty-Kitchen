import { useContext, useEffect, useReducer, useState } from "react";
import React from "react";
import reducer from "../reducer/reducer";
import {
  PRODUCT_ERROR,
  PRODUCT_LOADING,
  PRODUCT_SUCCESS,
  SINGLE_PRODUCT_ERROR,
  SINGLE_PRODUCT_LOADING,
  SINGLE_PRODUCT_SUCCESS,
} from "../actions";
import axios from "axios";
import { gmail_api, yahoo_api } from "../keys";

const AppContext = React.createContext();
const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${yahoo_api}&number=100`;
const initialState = {
  all_product: [],
  isLoading: true,
  isError: false,
  error_message: "Sorry there was an error.",
  single_product: [],
  single_product_loading: true,
  single_product_error: true,
  single_error_message: "Sorry,there was an error.",
};

export const AppContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const fetchProducts = async () => {
    dispatch({ type: PRODUCT_LOADING });
    try {
      const response = await axios.get(url);
      const { results } = response.data;
      dispatch({ type: PRODUCT_SUCCESS, payload: results });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: PRODUCT_ERROR,
        payload: error.response.data.message,
      });
    }
  };

  const fetchSingleProduct = async (url) => {
    dispatch({ type: SINGLE_PRODUCT_LOADING });
    try {
      const response = await axios.get(url);
      const results = response.data[0];
      console.log(response);
      dispatch({ type: SINGLE_PRODUCT_SUCCESS, payload: results });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: SINGLE_PRODUCT_ERROR,
        payload: error.response.data.message,
      });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        closeSidebar,
        openSidebar,
        fetchSingleProduct,

        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppProvider = () => {
  return useContext(AppContext);
};
