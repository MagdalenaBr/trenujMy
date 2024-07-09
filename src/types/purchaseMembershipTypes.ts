export interface PurchasedMemberschipTypes {
  created_at: string;
  endDay: string;
  startDay: string;
  price: number;
  isValid: boolean;
  gymMembership: {
    price: number;
    gymMembershipName: string;
  };
  gymMembershipId: string;
  id: string;
  memberId: string;
  members: {
    name: string;
    phone: string;
    startDay: string;
  };
}
