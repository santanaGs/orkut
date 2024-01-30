import Banner from "./components/Banner";
import Header from "./components/Header";
import LoginS from "./components/Login";
import { Background, Container } from "./styles";

export default function Login() {
	return (
		<Background>
			<Header />
			<Container>
				<Banner />
				<LoginS />
			</Container>
		</Background>
	)
}