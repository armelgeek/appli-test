import { Decimal } from "decimal.js";

export type BankrollUpdateInput = {
  capital?: Decimal | null;
  description?: string | null;
  devise?: string | null;
  name?: string;
};
