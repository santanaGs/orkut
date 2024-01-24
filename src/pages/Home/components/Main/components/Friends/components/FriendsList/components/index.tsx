import { Friend, Image, Name } from "./styles";

interface ItemProps {
	image?: string,
	name?: string,
	communities?: boolean,
}

export default function Item({ image, name, communities }: ItemProps) {
	return (
		<Friend>
			<Image src={image} alt="imagem do amigo" communities={communities} />
			<Name>{name}</Name>
		</Friend>
	)
}	