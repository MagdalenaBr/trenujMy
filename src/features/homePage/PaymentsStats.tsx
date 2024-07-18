import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import HomePageContainer from "../../ui/HomePageContainer";
import { usePaymensAfterDate } from "../payments/usePaymentsAfterDate";
import { DateInput, DateTime, Interval } from "luxon";
import { TODAY_DAY } from "../../utils/constants";
import { START_DAY } from "../../utils/helpers";
import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";

export default function PaymentsStats() {
  const { paymentsAfterDate, isLoading } = usePaymensAfterDate();

  const [searchParams] = useSearchParams();
  const selectedTimeRange = !searchParams.get("zakres")
    ? "7"
    : searchParams.get("zakres");

  const interval = Interval.fromDateTimes(
    START_DAY(selectedTimeRange) as DateInput,
    TODAY_DAY,
  )
    .splitBy({ days: 1 })
    .map((d) => d.end)
    .toLocaleString()
    .split(",");

  const uniqueDays = [...new Set(interval)];

  const data = uniqueDays.map((day) => {
    return {
      dzien: day,
      kwota: paymentsAfterDate
        ?.filter(
          (payment) =>
            DateTime.fromISO(payment.created_at).toLocaleString() === day,
        )
        .reduce((acc, cur) => acc + cur.amount, 0),
    };
  });

  if (isLoading)
    return (
      <HomePageContainer>
        <Spinner />
      </HomePageContainer>
    );

  return (
    <HomePageContainer>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dzien" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="kwota"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </HomePageContainer>
  );
}
