import { Icon, Label, Container, IconDiv } from "./styles";

interface ItemProps {
	label: string;
	icon: string;
}

// images
import star from './assets/Star.svg';
import smiley from './assets/Smiley.svg';
import like from './assets/ThumbsUp.svg';
import heart from './assets/Heart.svg';

export default function Item({ label, icon }: ItemProps) {
	return (
		<Container>
			<Label>{label}</Label>
			{icon === 'star' ? (
				<Icon src={star} />
			) : icon === 'smile' ? (
				<IconDiv>
					<Icon src={smiley} />
					<Icon src={smiley} />
				</IconDiv>
			) : icon === 'like' ? (
				<IconDiv>
					<Icon src={like} />
					<Icon src={like} />
					<Icon src={like} />
				</IconDiv>

			) : icon === 'heart' ? (
				<IconDiv>
					<Icon src={heart} />
					<Icon src={heart} />
				</IconDiv>
			) : <></>}
		</Container>
	)
}