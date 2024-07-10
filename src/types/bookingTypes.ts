export interface NewBookingTypes {
  status: string;
  trainerId: string;
  memberId: string;
  date: string;
}
export interface BookingsDataType extends NewBookingTypes {
  id: string;
  created_at: string;
  trainers: {
    id: string;
    name: string;
    category: string;
  };
  members: {
    name: string;
    phone: string;
  };
}

export interface GetBookingType {
  data: BookingsDataType[];
  count: number | null;
}
export interface AddOrEditDataTypes extends NewBookingTypes {
  id: string;
}
