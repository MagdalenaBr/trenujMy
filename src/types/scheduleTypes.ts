export interface NewClassesTypes {
  date: string;
  name: string;
  numOfPlaces: number;
  trainerId: string;
}
export interface NewScheduleTypes extends NewClassesTypes {
  created_at: string;
  id: string;
}

export interface ScheduleDataTypes extends NewScheduleTypes {
  trainers: {
    name: string;
    category: string;
  };
}
