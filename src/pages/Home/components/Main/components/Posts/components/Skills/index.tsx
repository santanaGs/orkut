import Item from "./Item";
import { Container } from "./styles";

export default function Skills() {
	return (
		<Container>
			<Item label="Fã" icon="star" />
			<Item label="Confiável" icon="smile" />
			<Item label="Legal" icon="like" />
			<Item label="Sexy" icon="heart" />
		</Container>
	)
}