import { Decimal } from "decimal.js";

export type BankrollCreateInput = {
  capital?: Decimal | null;
  description?: string | null;
  devise?: string | null;
  name: string;
};
