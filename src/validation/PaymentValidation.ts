import * as yup from "yup";

export const schema = yup.object().shape({
  amount: yup.number().typeError("Podaj kwotę.").positive('Wartość powinna być dodatnia.').min(1, 'Wartość powinna być większa niż 1!').required("Podaj kwotę."),
  purchasedMembershipId: yup.string().required("Wybierz zakupiony karnet."),
});
