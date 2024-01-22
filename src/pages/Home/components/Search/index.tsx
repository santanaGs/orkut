import { Input, SearchDiv, SearchIcon } from "./styles";

import lupa from '../../assets/svgs/MagnifyingGlass.svg'

export default function Search() {
	return (
		<SearchDiv>
			<Input type="text" placeholder="Pesquisar no Orkut" />
			<SearchIcon alt="icone de lupa de busca" src={lupa} />
		</SearchDiv>
	)
}