import * as yup from "yup";

export const schema = yup.object().shape({
	name: yup.string().required("Wybierz rodzaj zajęć."),
	numOfPlaces: yup
		.number()
		.transform((currVal, orgVal) => (orgVal === "" ? undefined : currVal))
		.required("Podaj ilość dostępnych miejsc na zajęciach."),
	trainerId: yup
		.string()
		.transform((currVal, orgVal) => (orgVal === "" ? undefined : currVal))
		.required("Wybierz trenera."),
	date: yup.string().required("Wybierz datę zajęć."),
});
