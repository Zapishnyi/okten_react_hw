import React, { FC } from "react";

interface IValuesProps {
  values: string[];
}

const ValueList: FC<IValuesProps> = ({ values }) => {
  return (
    <ol>
      {values.map((value, index) => (
        <li key={index}>{JSON.stringify(value)}</li>
      ))}
    </ol>
  );
};
export default ValueList;
