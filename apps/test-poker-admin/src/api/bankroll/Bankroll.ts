import { Decimal } from "decimal.js";

export type Bankroll = {
  capital: Decimal | null;
  createdAt: Date;
  description: string | null;
  devise: string | null;
  id: string;
  name: string;
  updatedAt: Date;
};
