import * as yup from "yup";

export const schema = yup.object().shape({
	
	name: yup.string().required("Nazwa jest wymagana."),
    email: yup
    .string()
    .required("E-mail jest wymagany.")
    .matches(
        /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
        "Podany e-mail jest nieprawidłowy"
    ),
    password: yup
    .string()
    .required('Hasło jest wymagane.')
    .min(8, 'Podane hasło jest zbyt krótkie.'),
    confirmPassword: yup
    .string()
    .required('Powtórz hasło.')
    .oneOf([yup.ref('password')], 'Podane hasło jest nieprawidłowe.')

});
