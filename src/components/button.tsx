import React from "react";
import { Button, Icon } from "antd";

export const ButtonSave = (props: { Title: string; OnClick?: any }) => {
  return (
    <Button
      onClick={props.OnClick}
      type="danger"
      style={{
        float: "right"
      }}
    >
      <Icon type="save" /> {props.Title}
    </Button>
  );
};

export const ButtonBack = (props: { Title: string; OnClick?: any }) => {
  return (
    <Button type="default" onClick={props.OnClick}>
      <Icon type="rollback" /> {props.Title}
    </Button>
  );
};

export const ButtonAdd = (props: { Title: string; OnClick?: any }) => {
  return (
    <Button
      type="link"
      style={{ border: "1px solid #f1eaea" }}
      onClick={props.OnClick}
    >
      <Icon type="plus" /> {props.Title}
    </Button>
  );
};

export const ButtonEdit = (props: { Title: string; OnClick?: any }) => {
  return (
    <Button type="dashed" onClick={props.OnClick}>
      <Icon type="plus" /> {props.Title}
    </Button>
  );
};

export const ButtonPrint = (props: { Title: string; OnClick?: any }) => {
  return (
    <Button type="primary" onClick={props.OnClick}>
      <Icon type="plus" /> {props.Title}
    </Button>
  );
};
