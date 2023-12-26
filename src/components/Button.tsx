import tw, { styled} from 'twin.macro';
import { ButtonProps } from '../types/Props.ts';

const Button = styled.button(({ variant, isSmall }: ButtonProps) => [
  tw`px-8 py-2 rounded-s transform duration-75 font-semibold`,
  variant === 'primary' && tw`bg-cyan-600 text-white`,
  variant === 'secondary' && tw`bg-white text-cyan-600 border`,
  isSmall ? tw`text-sm` : tw`text-lg`,
]);

export default Button;
