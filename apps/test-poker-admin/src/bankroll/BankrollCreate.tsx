import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const BankrollCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="capital" source="capital" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="devise" source="devise" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
