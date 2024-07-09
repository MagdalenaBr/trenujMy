export interface TrainersDataTypes {
  id: string;
  image: string;
  name: string;
  phone: string;
  price?: number | null;
  category: string;
  created_at: string;
}
export interface NewTrainerDataTypes {
  image?: string | FileList;
  name: string;
  phone: string;
  price?: number | null;
  category: string;
}
