import FriendsList from "./components/FriendsList";
import { Container } from "./styles";

const frieds = [
	{
		image: 'https://santanags.vercel.app/assets/1699491364289-zjy1wGYa.jpg',
		name: 'Gabriel'
	},
	{
		image: 'https://santanags.vercel.app/assets/1699491364289-zjy1wGYa.jpg',
		name: 'Gabriel'
	},
	{
		image: 'https://santanags.vercel.app/assets/1699491364289-zjy1wGYa.jpg',
		name: 'Gabriel'
	},
	{
		image: 'https://santanags.vercel.app/assets/1699491364289-zjy1wGYa.jpg',
		name: 'Gabriel'
	},
	{
		image: 'https://santanags.vercel.app/assets/1699491364289-zjy1wGYa.jpg',
		name: 'Gabriel'
	},
	{
		image: 'https://santanags.vercel.app/assets/1699491364289-zjy1wGYa.jpg',
		name: 'Gabriel'
	},
	{
		image: 'https://santanags.vercel.app/assets/1699491364289-zjy1wGYa.jpg',
		name: 'Gabriel'
	},
	{
		image: 'https://santanags.vercel.app/assets/1699491364289-zjy1wGYa.jpg',
		name: 'Gabriel'
	},
	{
		image: 'https://santanags.vercel.app/assets/1699491364289-zjy1wGYa.jpg',
		name: 'Gabriel'
	},
]

const communities = [
	{
		image: 'https://imgur.com/tNjRLNj.jpg',
		name: 'Carros',
		communities: true,
	},
	{
		image: 'https://imgur.com/2PV9sy2.jpg',
		name: 'Crazy',
		communities: true,
	},
	{
		image: 'https://imgur.com/9dOakba.jpg',
		name: 'Desenhos',
		communities: true,
	},
	{
		image: 'https://imgur.com/RBlPCq4.jpg',
		name: 'Fotos',
		communities: true,
	},
	{
		image: 'https://imgur.com/dmPT6Ll.jpg',
		name: 'Leitura',
		communities: true,
	},
	{
		image: 'https://imgur.com/9swxOtM.jpg',
		name: 'Animes',
		communities: true,
	},
	{
		image: 'https://imgur.com/57u13dZ.jpg',
		name: 'Meu ovo',
		communities: true,
	},
	{
		image: 'https://imgur.com/qKIGZaR.jpg',
		name: 'Cafeee',
		communities: true,
	},
	{
		image: 'https://imgur.com/dmPT6Ll.jpg',
		name: 'My books',
		communities: true,
	},
]

export default function Friends() {
	return (
		<Container>
			<FriendsList title={`Amigos (${frieds.length})`} list={frieds} />
			<FriendsList title="Comunidades (42)" list={communities} />
		</Container>
	)
}