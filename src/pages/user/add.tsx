import React from "react";
import { Row, Col } from "antd";
import HeaderPage from "../../components/header";
import PenggunaForm from "./form";

const PenggunaAdd = React.memo(() => {
  return (
    <Row>
      <Col span={6} />
      <Col span={12}>
        <br />
        <HeaderPage title="Tambah Pengguna" />
        <PenggunaForm />
        <br />
      </Col>
      <Col span={6} />
    </Row>
  );
});

export default PenggunaAdd;
