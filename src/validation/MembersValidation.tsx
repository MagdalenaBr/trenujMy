import * as yup from "yup";

export const schema = yup.object().shape({
	name: yup.string().required("Podaj imię i nazwisko klienta."),
	email: yup
		.string()
		.required("Podaj e-mail.")
		.matches(
			/^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
			"Podany e-mail jest nieprawidłowy"
		),
	phone: yup
		.string()
		.required("Podaj numer telefonu.")
		.matches(/^(?:[0+]48)?\d{9}$/, "Podany numer telefonu jest nieprawidłowy."),
	gender: yup.string().required("Wybierz płeć."),
	city: yup.string().required("Podaj miejsce zamieszkania."),
	startGymMembership: yup.string().nullable(),
	endGymMembership: yup.string().nullable(),
	gymMembershipType: yup.string().nullable(),
});
