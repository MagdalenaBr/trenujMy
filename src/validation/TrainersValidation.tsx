import * as yup from "yup";

export const schema = yup.object().shape({
	id: yup.number(),
	name: yup.string().required("Imie i nazwisko jest wymagane"),
	category: yup.string().required("Kategoria jest wymagana"),
	price: yup.number().required("Cena jest wymagana"),
	phone: yup
		.string()
		.required("Numer telefonu jest wymagany")
		.matches(/^(?:[0+]48)?\d{9}$/, "Podany numer telefonu jest nieprawidłowy"),
	image: yup.mixed().required("Zdjęcie jest wymagane"),
});
