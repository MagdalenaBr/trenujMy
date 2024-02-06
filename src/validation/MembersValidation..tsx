import * as yup from "yup";

export const schema = yup.object().shape({
	id: yup.number(),
	name: yup.string().required("Imie i nazwisko jest wymagane"),
	email: yup
		.string()
		.required("E-mail jest wymagany")
		.matches(
			/^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
			"Podany e-mail jest nieprawidłowy"
		),
	phone: yup
		.string()
		.required("Numer telefonu jest wymagany")
		.matches(/^(?:[0+]48)?\d{9}$/, "Podany numer telefonu jest nieprawidłowy"),
	gender: yup.string().required("Płeć jest wymagana"),
	city: yup.string().required("Miasto jest wymagane"),
	startGymMembership: yup.string().nullable(),
	endGymMembership: yup.string().nullable(),
	gymMembershipType: yup.string(),
});
