import { createContext, useState } from "react";

export const Context = createContext({});

export const ContextProvider = (props) => {
  const [name, setName] = useState("");
  return (
    <>
      <Context.Provider value={{ name, setName }}>
        {props.children}
      </Context.Provider>
    </>
  );
};
