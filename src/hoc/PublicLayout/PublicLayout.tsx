import React, { FC } from "react";
import { Outlet } from "react-router-dom";

const PublicLayout: FC = () => {
  return (
    <div>
      PublicLayout
      <Outlet />
    </div>
  );
};

export default PublicLayout;
