import * as yup from "yup";

export const schema = yup.object().shape({
	id: yup.number(),
	date: yup.string().required("Data i godzina jest wymagana"),
	status: yup.string().required("Status jest wymagany"),
	trainerId: yup.string().required("Trener jest wymagany"),
	memberId: yup.string().required("Imie i nazwisko jest wymagane"),
	
});
