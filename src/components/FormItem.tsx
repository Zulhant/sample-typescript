import React from "react";
import { Form, Select, Input } from "antd";
import { FormInterface } from "../interfaces/formItem";

const { Option } = Select;

const InputForm = (props: FormInterface) => {
  const renderComponent = () => {
    switch (props.Type) {
      case "select":
        return (
          <Form.Item label={props.Title}>
            <Select
              style={{
                width: "100%"
              }}
              value={props.Value}
              onChange={props.SetData}
            >
              {props.OptionList?.map((item, i) => {
                return (
                  <Option key={i} value={item.value}>
                    {item.label}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
        );
      default:
        return (
          <Form.Item label={props.Title}>
            <Input value={props.Value} onChange={props.SetData} />
          </Form.Item>
        );
    }
  };

  return <div>{renderComponent()}</div>;
};

export default InputForm;
