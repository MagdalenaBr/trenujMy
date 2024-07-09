export interface PaymentsType {
    id: string;
    created_at: string;
    memberId: string;
    purchasedMembershipId: string;
    amount: number;
    isValid: boolean;
    purchasedMemberships: {
      created_at: string;
      price: number;
      gymMembership: {
        price: number;
        gymMembershipName: string;
        id: string;
      };
    };
    members: {
      name: string;
      phone: string;
    };
  }