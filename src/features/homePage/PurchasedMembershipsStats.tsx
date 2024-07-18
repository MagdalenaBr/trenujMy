import { Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { usePurchasedMembership } from "../gymMembership/usePurchasedMembership";
import { ARR_OF_GYM_MEMBERSHIP_ID } from "../../utils/constants";
import Heading from "../../ui/Heading";
import HomePageContainer from "../../ui/HomePageContainer";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

export default function PurchasedMembershipsStats() {
  const darkModeContext = useContext(DarkModeContext);
  const { purchasedMemberships } = usePurchasedMembership(false);

  const oneDay = purchasedMemberships?.filter(
    (membership) =>
      String(membership.gymMembershipId) === ARR_OF_GYM_MEMBERSHIP_ID[0] &&
      membership.isValid === true,
  ).length;
  const oneMonth = purchasedMemberships?.filter(
    (membership) =>
      String(membership.gymMembershipId) === ARR_OF_GYM_MEMBERSHIP_ID[1] &&
      membership.isValid === true,
  ).length;
  const sixMonths = purchasedMemberships?.filter(
    (membership) =>
      String(membership.gymMembershipId) === ARR_OF_GYM_MEMBERSHIP_ID[2] &&
      membership.isValid === true,
  ).length;
  const year = purchasedMemberships?.filter(
    (membership) =>
      String(membership.gymMembershipId) === ARR_OF_GYM_MEMBERSHIP_ID[3] &&
      membership.isValid === true,
  ).length;

  const data = [
    { name: "1 dzień", value: oneDay },
    { name: "1 miesiąc", value: oneMonth },
    { name: "6 miesięcy", value: sixMonths },
    { name: "rok", value: year },
  ];

  const colors = [
    "rgb(109, 107, 247)",
    "rgb(132, 204, 22)",
    "rgb(238, 73, 73)",
    "rgb(205, 68, 247)",
  ];

  return (
    <HomePageContainer colGrid="col-span-2" width="md:w-96">
      <Heading>Zakupione karnety</Heading>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          {purchasedMemberships?.length !== 0 ? (
            <>
              <Legend
                layout="vertical"
                align="left"
                verticalAlign="middle"
                iconType="circle"
                iconSize={8}
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
                innerRadius={60}
                outerRadius={70}
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
                data={[{ name: "brak danych", value: 100 }]}
                cx="40%"
                cy="50%"
                labelLine={false}
                innerRadius={60}
                outerRadius={70}
                fill={darkModeContext?.darkMode ? "#9ca3af" : "#475569"}
                nameKey="name"
                dataKey="value"
              >
                <Cell
                  key={`cell`}
                  fill={darkModeContext?.darkMode ? "#9ca3af" : "#475569"}
                />
              </Pie>
            </>
          )}
        </PieChart>
      </ResponsiveContainer>
    </HomePageContainer>
  );
}
