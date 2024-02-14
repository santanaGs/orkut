import Item from "./components";
import { Container, ListGrid, ListMore, ListName, ListNameDiv } from "./styles";

interface ListProps {
	title: string,
	list?: any & ListProps,
}

export default function FriendsList({ title, list }: ListProps) {
	return (
		<Container>
			<ListNameDiv>
				<ListName>{title}</ListName>
				<ListMore>Ver todos</ListMore>
			</ListNameDiv>
			<ListGrid>
				{list.map((item: any | string | null, index: number) => {
					return (
						<Item name={item?.name} image={item?.image} communities={item?.communities} key={index} />
					)
				})}
			</ListGrid>
		</Container>
	)
}