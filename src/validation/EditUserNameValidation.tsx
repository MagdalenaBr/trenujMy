import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Nazwa jest wymagana."),
  email: yup
    .string()
    .matches(
      /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
      "Podany e-mail jest nieprawidłowy",
    ),
});
