import React from "react";
import { Layout } from "antd";
import "./style.css";

const { Header } = Layout;

const HeaderPage = (props: { title: string }) => (
  <div>
    <Header className="app-header">
      <span className="pin" /> <span className="pin-label">{props.title}</span>
    </Header>
  </div>
);

export default React.memo(HeaderPage);
