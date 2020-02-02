import React, { useContext } from "react";
import FormItem from "../../components/FormItem";
import { UserContext } from "../../contexts/user";
import { Card, Divider } from "antd";
import { ButtonSave, ButtonBack } from "../../components/button";

const PenggunaForm = React.memo(() => {
  const context = useContext(UserContext);

  return (
    <Card>
      <FormItem
        Title="Nama Lengkap"
        Type="text"
        Name="name"
        Field="name"
        placeHolder="Masukkan Judul"
        Value={context?.data?.full_name}
        SetData={context?.handleName}
      />

      <FormItem
        Title="Email"
        Type="text"
        Field="email"
        Name="email"
        placeHolder="Masukkan Content"
        Value={context?.data?.email}
        SetData={context?.handleEmail}
      />

      <FormItem
        Title="Nomor Telp"
        Type="text"
        Name="no_telp"
        Field="no_telp"
        placeHolder="Masukkan Judul"
        Value={context?.data?.tlp_number}
        SetData={context?.handleTlpNumber}
      />

      <FormItem
        Title="Password"
        Type="text"
        Name="password"
        Field="password"
        placeHolder="Masukkan Judul"
        Value={context?.data?.password}
        SetData={context?.handlePassword}
      />

      <FormItem
        Title="Ulangi Password"
        Type="text"
        Name="password"
        Field="password"
        placeHolder="Masukkan Judul"
        Value={context?.data?.try_password}
        SetData={context?.handleTryPassword}
      />

      <FormItem
        Title="Level Pengguna"
        Type="select"
        Field="role_id"
        Name="role_id"
        placeHolder="Masukkan Content"
        Value={context?.data?.mapping_role_id}
        SetData={context?.handleMappingRole}
        OptionList={context?.optionRoles}
      />
      <Divider />
      <ButtonBack Title="Kembali" OnClick={context?.handleButtonBack} />
      <ButtonSave Title="Simpan" OnClick={context?.handleSubmit} />
    </Card>
  );
});

export default PenggunaForm;
