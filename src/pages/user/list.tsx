import React from "react";
import { Card, Row, Col, Divider } from "antd";
import { ButtonAdd } from "../../components/button";
import { Link } from "react-router-dom";
import HeaderPage from "../../components/header";

const PenggunaList = React.memo(() => {
  return (
    <Row>
      <HeaderPage title="Pengguna" />
      <Col span={24}>
        <Card>
          <div style={{ float: "right" }}>
            <Link to="?action=add">
              <ButtonAdd Title="Tambah" />
            </Link>
          </div>
          <br />
          <Divider />
          <p>lorem</p>
        </Card>
      </Col>
    </Row>
  );
});

export default PenggunaList;
