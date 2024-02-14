import Infos from "./components/Infos";
import Skills from "./components/Skills";
import { Arrow, Container, DataContainer, Hello, StatusDiv, StatusText } from "./styled";

// fake data
interface DataProps {
	label: string;
	data: any[];
}

const data: DataProps[] = [
	{
		label: 'Relacionamente',
		data: 'Solteiro'
	},
	{
		label: 'Aniversário',
		data: '10/01/2003'
	},
	{
		label: 'Idade',
		data: '21'
	},
	{
		label: 'Interesses no Orkut',
		data: 'Solteiro'
	},
	{
		label: 'Quem sou eu',
		data: 'Programador'
	},
	{
		label: 'Filhos',
		data: 'Não'
	},
	{
		label: 'Sexo',
		data: 'Masculino'
	},
	{
		label: 'Fumo',
		data: 'Não'
	},
	{
		label: 'Bebo',
		data: 'Não'
	},
	{
		label: 'Moro',
		data: 'São Caetano do Sul'
	},
	{
		label: 'País',
		data: 'Brasil'
	},
	{
		label: 'Cidade natal',
		data: 'São Paulo'
	},
	{
		label: 'Músicas',
		data: [{ name: 'Trap' }, { name: 'Rap' }, { name: 'Indie' }],
	},
	{
		label: 'Filmes',
		data: [{ name: 'Eu e o meu guarda-chuva' }, { name: 'Kung-Fu Panda' }],
	},
]

export default function Posts() {
	let name: string = sessionStorage.getItem("name");
	return (
		<Container>
			<Hello>Boa tarde, {name}</Hello>
			<StatusDiv>
				<Arrow></Arrow>
				<StatusText>Programar sem café é igual porta sem poesia.</StatusText>
			</StatusDiv>
			<Skills />
			<DataContainer>
				{
					data.map((item, index) => {
						return (
							<Infos label={item.label} data={item.data} key={index} />
						)
					})
				}
			</DataContainer>
		</Container>
	)
}