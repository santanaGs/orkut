import { Container, Edit, EditText, ProfileDivS, ProfileImage, ProfileImageBorder, ProfileImageDiv, UserDetails, UserName } from "./styles";

import borda from '../../assets/Borda.svg'

export default function Profile() {
	return (
		<ProfileDivS>
			<Container>
				<ProfileImageDiv>
					<ProfileImageBorder alt="borda da imagem" src={borda} />
					<ProfileImage src="https://santanags.vercel.app/assets/1699491364289-zjy1wGYa.jpg" />
				</ProfileImageDiv>
				<UserName>Santana</UserName>
				<UserDetails>São Paulo, Brasil</UserDetails>
			</Container>
			<Edit>
				<EditText>Editar meu perfil</EditText>
			</Edit>
		</ProfileDivS>
	)
}