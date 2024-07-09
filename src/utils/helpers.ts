import { ARR_OF_GYM_MEMBERSHIP_ID, TODAY_DAY } from "./constants";

export function PRICE_TO_PAY(amount: number, membershipTypeId: string) {
  let price;
  if (String(membershipTypeId) === ARR_OF_GYM_MEMBERSHIP_ID[0].toString())
    price = amount;
  if (String(membershipTypeId) === ARR_OF_GYM_MEMBERSHIP_ID[1].toString())
    price = amount;
  if (String(membershipTypeId) === ARR_OF_GYM_MEMBERSHIP_ID[2].toString())
    price = amount * 6;
  if (String(membershipTypeId) === ARR_OF_GYM_MEMBERSHIP_ID[3].toString())
    price = amount * 12;

  return price;
}

export function START_DAY(selectedTimeRange: string | null) {
  let startDay;
  if (selectedTimeRange === "7") startDay = TODAY_DAY.minus({ day: 7 });
  if (selectedTimeRange === "30") startDay = TODAY_DAY.minus({ day: 30 });
  if (selectedTimeRange === "90") startDay = TODAY_DAY.minus({ day: 90 });
  if (selectedTimeRange === "rok") startDay = TODAY_DAY.minus({ year: 1 });

  return startDay?.set({ hour: 0, minute: 0, second: 0 }).toString();
}
