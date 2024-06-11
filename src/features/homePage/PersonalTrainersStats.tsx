import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  YAxis,
  Bar,
  Rectangle,
} from "recharts";
import Heading from "../../ui/Heading";
import HomePageContainer from "../../ui/HomePageContainer";
import { useBookingsAfterDate } from "./useBookingsAfterDate";

export default function PersonalTrainersStats() {
  const { personalTrainerBookings } = useBookingsAfterDate();

  const data = personalTrainerBookings?.map((booking) => {
    return {
      name: booking.trainers.name,
      treningi: personalTrainerBookings?.filter(
        (filterValue) => filterValue.trainers.id === booking.trainers.id,
      ).length,
    };
  });

  const uniqeData = data?.filter((value, index, self)=> index === self.findIndex((t)=> t.name === value.name && t.treningi === value.treningi)) 


  return (
    <HomePageContainer colGrid="col-span-1">
      <Heading>Liczba zajęć: trener personalny</Heading>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          width={500}
          height={300}
          data={uniqeData}
          margin={{
            top: 5,
            right: 30,
            left: -30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 " />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="treningi"
            fill="rgb(150 129 192)"
            activeBar={<Rectangle fill="rgb(114 80 182)" stroke="blue" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </HomePageContainer>
  );
}
