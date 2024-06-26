import * as yup from "yup";

export const schema = yup.object().shape({
	date: yup.string().required('Wybierz datę.'),
	status: yup.string().required("Wybierz status."),
	trainerId: yup.string().required("Wybierz trenera."),	
});
