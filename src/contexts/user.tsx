import React, { useState, ChangeEvent, createContext } from "react";
import { Istate, UserContextInterface, PayloadState } from "../interfaces/user";
import { useHistory } from "react-router-dom";

export const UserContext = createContext<UserContextInterface | null>(null);

const UserContexContainer = (props: any) => {
  const history = useHistory();

  const [data, setData] = useState<Istate>({
    full_name: "",
    email: "",
    tlp_number: 0,
    password: "",
    try_password: "",
    mapping_role_id: []
  });

  const [listData, setListData] = useState<PayloadState>();

  const handleSubmit = () => {
    alert(JSON.stringify(data));
  };

  const handleButtonBack = () => {
    history.goBack();
  };

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    dinamicHandleFunc("full_name", e.target.value);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    dinamicHandleFunc("email", e.target.value);
  };

  const handleTlpNumber = (e: ChangeEvent<HTMLInputElement>) => {
    dinamicHandleFunc("tlp_number", e.target.value);
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    dinamicHandleFunc("password", e.target.value);
  };

  const handleTryPassword = (e: ChangeEvent<HTMLInputElement>) => {
    dinamicHandleFunc("try_password", e.target.value);
  };

  const handleMappingRole = (e: ChangeEvent<HTMLSelectElement>) => {
    dinamicHandleFunc("mapping_role_id", e);
  };

  const dinamicHandleFunc = (key: string, value: any) => {
    setData({
      ...data,
      [key]: value
    });
  };

  const optionRoles: Array<any> = [
    {
      label: "20",
      value: 20
    },
    {
      label: "40",
      value: 40
    },
    {
      label: "50",
      value: 50
    }
  ];

  const userContextValue: UserContextInterface = {
    data,
    handleName,
    handleEmail,
    handlePassword,
    handleMappingRole,
    handleTlpNumber,
    handleTryPassword,
    optionRoles,
    handleButtonBack,
    handleSubmit,
    listData: listData?.payload
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContexContainer;
