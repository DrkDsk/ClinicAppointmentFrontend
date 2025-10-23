export interface AuthenticationResponseModel {
  data: Data | null | undefined;
  message: string | null | undefined;
}

export interface Data {
  id:     number;
  person: Person;
  roles:  Role[];
}

export interface Person {
  id:       number;
  name:     string;
  email:    string;
  birthday: Date;
  phone:    string;
}

export interface Role {
  id:         number;
  name:       string;
  guardName: string;
}
