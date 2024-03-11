import { SortOrder } from "../../util/SortOrder";

export type BankrollOrderByInput = {
  capital?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  devise?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
