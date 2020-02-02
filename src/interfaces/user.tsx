export interface ObjectOption {
  label: string;
  value: any;
}

export interface PayloadState {
  payload: [Istate];
}

export interface Istate {
  full_name: string;
  email: string;
  tlp_number: number;
  password: string;
  try_password?: string;
  mapping_role_id: any;
}

export interface UserContextInterface {
  data?: Istate;
  handleSubmit: any;
  handleName: any;
  handleEmail: any;
  handleTlpNumber: any;
  handlePassword: any;
  handleTryPassword: any;
  handleMappingRole: any;
  optionRoles?: Array<any>;
  handleButtonBack: any;
  listData: any;
}
