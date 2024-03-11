import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const BankrollEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="capital" source="capital" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="devise" source="devise" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
