import React from "react";

const initialValue = {
  lists: [],
  loading: true,
  error: "",
};

export const ItemsContext = React.createContext();

const reducer = (value, action) => {
  switch (action.type) {
    case "GET_ITEMS_SUCESS":
      return {
        ...value,
        items: action.payload,
        loading: false,
      };
    case "GET_ITEMS_ERROR":
      return {
        ...value,
        items: [],
        loading: false,
        error: action.payload,
      };
    default:
      return value;
  }
};

async function fetchData(dataSource) {
  try {
    const data = await fetch(dataSource);
    const dataJSON = await data.json();

    if (dataJSON) {
      return await { data: dataJSON, error: false };
    }
  } catch (err) {
    return { data: false, error: err.message };
  }
}

const ItemsContextProvider = ({ children }) => {
  const [value, dispatch] = React.useReducer(reducer, initialValue);

  const getItemsRequest = async (id) => {
    const result = await fetchData(
      `https://my-json-server.typicode.com/PacktPublishing/React-Projects/items/${id}/items`
    );

    if (result.data && result.data.length) {
      dispatch({ type: "GET_LISTS_SUCCESS", payload: result.data });
    } else {
      dispatch({ type: "GET_LISTS_ERROR", payload: result.error });
    }
  };

  return (
    <ItemsContext.Provider value={{ ...value, getItemsRequest }}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContextProvider;
