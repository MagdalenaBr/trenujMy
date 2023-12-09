import trainer from "../../data/trainers/trainer-one.jpg";
import Container from '../../ui/Container'
function Trainer() {
	return (
		<Container>
			<img src={trainer} alt='' />
			<h2>Jan Kowalski</h2>
			<div>
				<h3>Kategoria:</h3>
				<span>siłownia</span>
			</div>
            <div>
                <h3>Terminarz:</h3>
                <p>kalendarz</p>
                <p>tabela</p>
            </div>
		</Container>
	);
}

export default Trainer;
