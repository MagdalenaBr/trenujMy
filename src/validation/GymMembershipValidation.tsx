import * as yup from "yup";

export const schema = yup.object().shape({
  1: yup.number().required("Wprowadź kwotę.").max(99999, 'Maksymalna kwota pięciocyfrowa.'),
  2: yup.number().required("Wprowadź kwotę.").max(99999, 'Maksymalna kwota pięciocyfrowa.'),
  3: yup.number().required("Wprowadź kwotę.").max(99999, 'Maksymalna kwota pięciocyfrowa.'),
  4: yup.number().required("Wprowadź kwotę.").max(99999, 'Maksymalna kwota pięciocyfrowa.'),
});
