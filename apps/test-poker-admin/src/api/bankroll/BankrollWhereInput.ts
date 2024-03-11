import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BankrollWhereInput = {
  capital?: DecimalNullableFilter;
  description?: StringNullableFilter;
  devise?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
};
