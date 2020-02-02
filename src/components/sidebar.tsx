import React from "react";
import { Layout, Menu, Avatar, Icon, Divider } from "antd";
import "./style.css";

const { Content, Sider } = Layout;

const SideBarApp = (props: any) => {
  return (
    <Layout>
      <Sider theme="light" width="250">
        <div>
          <div className="avatar-selector">
            <Avatar size={64} icon="user" />
          </div>
          <Divider />
          <Menu>
            <Menu.Item key="1">
              <Icon type="home" />
              Beranda
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="user" />
              Managemen Pengguna
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="home" />
              Abituren
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="home" />
              Jemaah Haji
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="login" />
              Logout
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
      <Content>{props.children}</Content>
    </Layout>
  );
};

export default SideBarApp;
