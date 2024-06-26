import { Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { usePurchasedMembership } from "../gymMembership/usePurchasedMembership";
import { ARR_OF_GYM_MEMBERSHIP_ID } from "../../utils/constants";
import Heading from "../../ui/Heading";
import HomePageContainer from "../../ui/HomePageContainer";

export default function PurchasedMembershipsStats() {
  const { purchasedMemberships } = usePurchasedMembership();

  const oneDay = purchasedMemberships?.filter(
    (membership) =>
      membership.gymMembershipId === ARR_OF_GYM_MEMBERSHIP_ID[0] &&
      membership.isValid === true,
  ).length;
  const oneMonth = purchasedMemberships?.filter(
    (membership) =>
      membership.gymMembershipId === ARR_OF_GYM_MEMBERSHIP_ID[1] &&
      membership.isValid === true,
  ).length;
  const sixMonths = purchasedMemberships?.filter(
    (membership) =>
      membership.gymMembershipId === ARR_OF_GYM_MEMBERSHIP_ID[2] &&
      membership.isValid === true,
  ).length;
  const year = purchasedMemberships?.filter(
    (membership) =>
      membership.gymMembershipId === ARR_OF_GYM_MEMBERSHIP_ID[3] &&
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
    <HomePageContainer colGrid="col-span-2">
      <Heading>Zakupione karnety</Heading>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          {purchasedMemberships?.length !== 0 ? (
            <>
              <Legend
                height={70}
                layout="vertical"
                align="right"
                verticalAlign="middle"
                iconType="circle"
              />
              <Pie
                data={data}
                cx="40%"
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
                data={[{ name: "brak zakupionych karnetów", value: 100 }]}
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
    </HomePageContainer>
  );
}
