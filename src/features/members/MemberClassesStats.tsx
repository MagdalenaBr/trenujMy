import { useRef } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { DEVICE_WIDTH } from "../../utils/constants";

interface BookingTypes {
  created_at: string;
  date: string;
  id: string;
  memberId: string;
  members: {
    name: string;
    phone: string;
  };
  status: string;
  trainerId: string;
  trainers: {
    name: string;
    category: string;
  };
}

export default function MemberClassesStats({
  memberBookings,
}: {
  memberBookings: BookingTypes[];
}) {
 

  if (!memberBookings) return [];
  const unconfirmedClasses = memberBookings.filter(
    (el) => el.status === "niepotwierdzona",
  ).length;
  const complitedClasses = memberBookings.filter(
    (el) => el.status === "zrealizowana",
  ).length;
  const canceledClasses = memberBookings.filter(
    (el) => el.status === "anulowana",
  ).length;

  const data = [
    { name: "niepotwierdzona", value: unconfirmedClasses },
    { name: "zrealizowana", value: complitedClasses },
    { name: "anulowana", value: canceledClasses },
  ];

  const colors = [
    "rgb(129, 140, 248)",
    "rgb(132, 204, 22)",
    "rgb(239, 68, 68)",
  ];
  const checkIfDataExists = Boolean(
    unconfirmedClasses > 0 || complitedClasses > 0 || canceledClasses > 0,
  );

  return (
    <ResponsiveContainer
      width={DEVICE_WIDTH > 1023 ? "50%" : "100%"}
      height={300}
    >
      <PieChart>
        {checkIfDataExists ? (
          <>
            <Legend
              height={0}
              layout="vertical"
              align={DEVICE_WIDTH > 767 ? "right" : "center"}
              verticalAlign={DEVICE_WIDTH > 767 ? "middle" : "bottom"}
              iconType="circle"
            />
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              fill="#13c51c9d"
              nameKey="name"
              dataKey="value"
              label
              innerRadius={70}
              outerRadius={90}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]} />
              ))}
            </Pie>
          </>
        ) : (
          <>
            <Legend
              height={36}
              layout="vertical"
              align="right"
              verticalAlign="middle"
              iconType="circle"
            />
            <Pie
              data={[{ name: "brak rezerwacji", value: 100 }]}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#13c51c9d"
              nameKey="name"
              dataKey="value"
            >
              <Cell key={`cell`} fill="#b7cab99d" />
            </Pie>
          </>
        )}
      </PieChart>
    </ResponsiveContainer>
  );
}
