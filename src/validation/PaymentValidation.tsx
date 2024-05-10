import * as yup from "yup";

export const schema = yup.object().shape({
	startDay: yup.string().required('Wybierz datę rozpoczęcia karnetu.'),
	endDay: yup.string().required(),
	memberId: yup.string().required('Wybierz imię i nazwisko klienta.'),
    gymMembershipId: yup.string().required('Wybierz rodzaj karnetu.')
	
});
