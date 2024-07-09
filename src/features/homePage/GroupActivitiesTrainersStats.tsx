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
import { useBookingsAfterDate } from "./useBookingsAfterDate";
import Heading from "../../ui/Heading";
import HomePageContainer from "../../ui/HomePageContainer";
import NoDataContainer from "../../ui/NoDataContainer";

export function GroupActivitiesTrainersStats() {
  const { groupActivitiesBookings } = useBookingsAfterDate();

  const data = groupActivitiesBookings?.map((booking) => {
    return {
      name: booking.trainers.name,
      osoby: groupActivitiesBookings?.filter(
        (filterValue) => filterValue.trainers.id === booking.trainers.id,
      ).length,
    };
  });

  const uniqeData = data?.filter(
    (value, index, self) =>
      index ===
      self.findIndex((t) => t.name === value.name && t.osoby === value.osoby),
  );
  
  return (
    <HomePageContainer colGrid="col-span-1">
      <Heading>Liczba uczestników: zajęcia grupowe</Heading>
      {uniqeData && uniqeData?.length > 0 ? (
          <ResponsiveContainer width="100%" height="75%">
            <BarChart
              width={500}
              height={300}
              data={uniqeData}
              maxBarSize={60}
              margin={{
                top: 20,
                right: 30,
                left: -30,
                bottom: -10,
              }}
            >
              <CartesianGrid strokeDasharray="1 " />
              <XAxis dataKey="name" hide />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="osoby"
                fill="rgb(150 129 192)"
                activeBar={<Rectangle fill="rgb(114 80 182)" stroke="blue" />}
              />
            </BarChart>
          </ResponsiveContainer>
        
      ) : (
       <NoDataContainer/>
      )}
    </HomePageContainer>
  );
}
