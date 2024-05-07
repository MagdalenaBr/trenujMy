import * as yup from "yup";

export const schema = yup.object().shape({
  password: yup
    .string()
    .required("Podaj nowe hasło.")
    .min(8, "Podane hasło jest zbyt krótkie.").notOneOf([yup.ref("currentPassword")], "Hasło musi się różnić od aktualnego."),
  confirmPassword: yup
    .string()
    .required("Powtórz hasło.")
    .oneOf([yup.ref("password")], "Podane hasło jest nieprawidłowe."),
});
