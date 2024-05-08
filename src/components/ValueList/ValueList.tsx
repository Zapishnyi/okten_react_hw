import React, { FC } from "react";

interface IValuesProps {
  previousValue: { previousValue: any };
  currentValue: { currentValue: any };
}

const ValueList: FC<IValuesProps> = ({ previousValue, currentValue }) => {
  return (
    <ul>
      <li>Previous value: {`${previousValue}`}</li>
      <li>Current value: {`${currentValue}`}</li>
    </ul>
  );
};
export default ValueList;
