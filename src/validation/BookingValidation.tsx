import * as yup from "yup";

export const schema = yup.object().shape({
	date: yup.string().required("Wybierz datę oraz godzinę"),
	status: yup.string().required("Wybierz status"),
	trainerId: yup.number().required("Wybierz trenera"),
	memberId: yup.number().required("Wybierz dane klienta"),
	
});
