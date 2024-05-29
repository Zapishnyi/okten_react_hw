import React, { FC, useEffect, useState } from "react";
import carsApi from "../../services/cars.api.service";
import { IRegisterProps } from "../../models/IRegisterProps";
import { ICreateResult } from "@hookform/resolvers/vest";
import { ICreatedProps } from "../../models/ICreatedProps";
import RegisterResponse from "../../components/RegisterResponse/RegisterResponse";
import { storage } from "../../services/localStorageService";
import { useNavigate, useParams } from "react-router-dom";
import { AxiosError, AxiosResponse } from "axios";
import { IPaginInfo } from "../../models/IPaginInfo";
import { ITokensProps } from "../../models/ITokensProps";
import tokenService from "../../services/TokenService";

const MeInfo: FC = () => {
  const num = useParams();
  console.log("me marker:", num);
  const [me, setMe] = useState<ICreatedProps | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    tokenService(carsApi.me, "/me", navigate).then((data) => {
      if (data && "updated" in data) {
        setMe(data);
      }
    });
  }, [num]);

  return <div>{me && <RegisterResponse response={me} />}</div>;
};

export default MeInfo;
