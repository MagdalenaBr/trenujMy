import * as yup from "yup";

export const schema = yup.object().shape({
	status: yup.string().required("Wybierz status."),
	trainerId: yup.string().required("Wybierz trenera."),
});
