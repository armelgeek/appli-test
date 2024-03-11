import { BankrollWhereInput } from "./BankrollWhereInput";
import { BankrollOrderByInput } from "./BankrollOrderByInput";

export type BankrollFindManyArgs = {
  where?: BankrollWhereInput;
  orderBy?: Array<BankrollOrderByInput>;
  skip?: number;
  take?: number;
};
