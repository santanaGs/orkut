import Friends from "./components/Friends";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import { Background, Container } from "./styles";

export default function Main() {
	return (
		<Background>
			<Container>
				<Profile />
				<Posts />
				<Friends />
			</Container>
		</Background>
	)
}