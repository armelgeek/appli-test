import { Bankroll as TBankroll } from "../api/bankroll/Bankroll";

export const BANKROLL_TITLE_FIELD = "name";

export const BankrollTitle = (record: TBankroll): string => {
  return record.name?.toString() || String(record.id);
};
