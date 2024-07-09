export interface CommonMemberDataTypes {
  city: string;
  email: string;
  gender: string;
  name: string;
  phone: string;
}

export interface ActiveMemberTypes extends CommonMemberDataTypes {
  id: string;
}

export interface MembersType extends ActiveMemberTypes {
  created_at: string;
}
