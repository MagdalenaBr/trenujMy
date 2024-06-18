import * as yup from "yup";
import { getMembers } from "../services/apiMembers";


async function memberNames() {
  const names = (await getMembers()).map((member) => member.name);
  return names
}

const names = await memberNames();
export const schema = yup.object().shape({
  startDay: yup.string().required("Wybierz datę rozpoczęcia karnetu."),
  endDay: yup.string().required(),
  memberId: yup
    .string()
    .test({
      message: () => "Wybierz klienta z dostępnych danych.",
      test(value) {
        console.log(typeof value);
        return names.includes(value?.slice(0, -10));
      },
    }),
  gymMembershipId: yup.string().required("Wybierz rodzaj karnetu."),
  price: yup.number().required("Podaj cenę."),
});
