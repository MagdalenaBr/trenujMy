import * as yup from "yup";

export const schema = yup.object().shape({
    password: yup
    .string()
    .required('Hasło jest wymagane.')
    .min(8, 'Podane hasło jest zbyt krótkie.'),
    confirmPassword: yup
    .string()
    .required('Powtórz hasło.')
    .oneOf([yup.ref('password')], 'Podane hasło jest nieprawidłowe.')

});
