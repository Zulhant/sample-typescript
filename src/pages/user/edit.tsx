import React, { useEffect } from "react";
import { Row, Col } from "antd";
import HeaderPage from "../../components/header";
import PenggunaForm from "./form";

const UserEdit = React.memo((props: { id: any }) => {
  useEffect(() => {
    console.log(props.id);
  }, []);

  return (
    <Row>
      <Col span={6} />
      <Col span={12}>
        <br />
        <HeaderPage title="Ubah Pengguna" />
        <PenggunaForm />
      </Col>
      <Col span={6} />
    </Row>
  );
});

export default UserEdit;
