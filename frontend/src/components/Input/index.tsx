import { Input } from "./styles";

interface InputProps {
	label?: string;
	type: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	value?: string
	placeholder?: string;
}

const InputS = ({ type, onChange, value, placeholder }: InputProps) => {
	return (
		<Input type={type} onChange={onChange} placeholder={placeholder} value={value} />
	);
};

export default InputS;