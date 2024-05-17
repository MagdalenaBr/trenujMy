import * as yup from "yup";

export const schema = yup.object().shape({
  1: yup.number().required("Wprowadź kwotę."),
  2: yup.number().required("Wprowadź kwotę."),
  3: yup.number().required("Wprowadź kwotę."),
  4: yup.number().required("Wprowadź kwotę."),
});
