import Header from "../Login/components/Header";
import Forms from "./components/Forms";
import { Background, Container } from "./styles";

export default function Register() {
	return (
		<Background>
			<Header />
			<Container>
				<Forms />
			</Container>
		</Background>
	)
}