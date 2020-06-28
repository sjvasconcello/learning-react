import React, { FunctionComponent } from "react";

type WrapperProps = {
  children: React.ReactNode,
};

const Wrapper: FunctionComponent<WrapperProps> = ({ children }) => {
  return <div>{children}</div>;
}

export default Wrapper;
