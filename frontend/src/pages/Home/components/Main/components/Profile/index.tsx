import { Container, Edit, EditText, ProfileDivS, ProfileImage, ProfileImageBorder, ProfileImageDiv, UserDetails, UserName } from "./styles";

import borda from '../../assets/Borda.svg'
import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
	let userId: number = sessionStorage.getItem("userId");

	const [image, setImage] = useState('');
	const [name, setName] = useState('');

	async function getInfos() {
		try {
			const res = await axios.post(`http://localhost:3000/profile?id=${userId}`);
			console.log(res);
			setImage(res.data.image);
			setName(res.data.name)
			sessionStorage.setItem('name', res.data.name)
		} catch (error) {
			console.log('ERROS', error)
		}
	}


	useEffect(() => {
		getInfos();
	}, [])

	return (
		<ProfileDivS>
			<Container>
				<ProfileImageDiv>
					<ProfileImageBorder alt="borda da imagem" src={borda} />
					<ProfileImage src={`http://localhost:5173/public/upload/users/${image}`} />
				</ProfileImageDiv>
				<UserName>{name}</UserName>
				<UserDetails>São Paulo, Brasil</UserDetails>
			</Container>
			<Edit>
				<EditText>Editar meu perfil</EditText>
			</Edit>
		</ProfileDivS>
	)
}