import * as yup from "yup";

export const schema = yup.object().shape({
	
	newUserName: yup.string().required("Podaj nazwę użytkownika."),
    newUserEamil: yup
    .string()
    .required("Podaj e-mail.")
    .matches(
        /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
        "Podany e-mail jest nieprawidłowy"
    ),
    newUserPassword: yup
    .string()
    .required('Podaj hasło.')
    .min(8, 'Podane hasło jest zbyt krótkie.'),
    confirmNewUserPassword: yup
    .string()
    .required('Powtórz hasło.')
    .oneOf([yup.ref('newUserPassword')], 'Podane hasło jest nieprawidłowe.')

});
