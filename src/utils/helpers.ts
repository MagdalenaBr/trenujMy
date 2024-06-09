import { ARR_OF_GYM_MEMBERSHIP_ID } from "./constants";

export function PRICE_TO_PAY(amount: number, membershipTypeId: string) {
    let price;
    if (String(membershipTypeId) === ARR_OF_GYM_MEMBERSHIP_ID[0].toString()) price = amount;
    if (String(membershipTypeId) === ARR_OF_GYM_MEMBERSHIP_ID[1].toString()) price = amount;
    if (String(membershipTypeId) === ARR_OF_GYM_MEMBERSHIP_ID[2].toString()) price = amount * 6;
    if (String(membershipTypeId) === ARR_OF_GYM_MEMBERSHIP_ID[3].toString()) price = amount * 12;

    return price;
  }