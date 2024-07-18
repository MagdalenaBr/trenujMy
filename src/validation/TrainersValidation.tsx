import * as yup from "yup";

export const schema = yup.object().shape({

  name: yup.string().required("Podaj imię i nzawisko trenera."),
  category: yup.string().required("Podaj kategorię."),
  price: yup.number().nullable().transform((_, val) => val ? Number(val) : null).max(99999, 'Maksymalna kwota pięciocyfrowa.'),
  phone: yup
    .string()
    .required("Wprowadź numer telefonu.")
    .matches(/^(?:[0+]48)?\d{9}$/, "Podany numer telefonu jest nieprawidłowy."),
  image: yup.mixed<FileList | string>(),
});
