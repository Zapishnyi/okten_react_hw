import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import IUserProps from "../../models/IUserProps";

const UserDetails: FC = () => {
  const location = useLocation();
  console.log(location.state);
  const ObjectCrawlerToRender = (props: IUserProps) =>
    Object.entries(props).map(([key, value], index) => (
      <div key={index}>
        <div>
          <span>{key}</span>
        </div>
        <span>:</span>
        <div>
          {typeof value === "object" ? (
            ObjectCrawlerToRender(value)
          ) : (
            <span>{value}</span>
          )}
        </div>
      </div>
    ));
  return <div>{ObjectCrawlerToRender(location.state)}</div>;
};

export default UserDetails;
