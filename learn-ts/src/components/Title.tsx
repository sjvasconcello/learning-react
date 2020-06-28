import React, { FunctionComponent } from "react";

type TitleProps = {
  first_title?: string;
  second_title: string;
};

const Title: FunctionComponent<TitleProps> = ({
  first_title,
  second_title,
}) => {



  return (
    <div>
      <h1>{first_title}</h1>
      <hr />
      <h2>{second_title}</h2>
    </div>
  );
};

export default Title
