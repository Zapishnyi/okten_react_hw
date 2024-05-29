import React from "react";
import { IRegisterProps } from "../models/IRegisterProps";
import { ICreatedProps } from "../models/ICreatedProps";

export const ObjectCrawlerToRender = (props: ICreatedProps) =>
  Object.entries(props).map(([key, value], index) => (
    <div key={index} className={"dataLine"}>
      <div>
        <span className={"key"}>{key}</span>
      </div>
      <span className={"separator"}>:</span>
      <div>
        {typeof value === "object" ? (
          ObjectCrawlerToRender(value)
        ) : (
          <span className={"value"}>{value.toString()}</span>
        )}
      </div>
    </div>
  ));
