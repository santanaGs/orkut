import { Container, Data, Label } from "./styles";

interface InfosProps {
	label: string;
	data: any;

}

export default function Infos({ label, data }: InfosProps) {
	return (
		<Container>
			<Label>{label}:  </Label>
			{typeof (data) === 'object' ? (
				data.map((item: string, index: number) => {
					return (
						<Data key={index} more={label === 'Músicas' || label === 'Filmes'}>{item.name}</Data>
					)
				})

			) : (
				<Data>{data}</Data>
			)}
		</Container >
	)
}