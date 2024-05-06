import * as yup from "yup";

export const schema = yup.object().shape({
  id: yup.string(),
  name: yup.string().required("Podaj imię i nzawisko trenera."),
  category: yup.string().required("Podaj kkategorię."),
  price: yup.number().nullable().transform((_, val) => val ? Number(val) : null),
  phone: yup
    .string()
    .required("Wprowadź numer telefonu.")
    .matches(/^(?:[0+]48)?\d{9}$/, "Podany numer telefonu jest nieprawidłowy."),
  image: yup.mixed<FileList | string>(),
});
