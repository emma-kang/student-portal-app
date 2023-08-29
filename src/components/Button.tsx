import tw, { css, styled, theme } from 'twin.macro';
import { ButtonProps } from './types/Props.ts';

const Button = styled.button(({ variant, isSmall }: ButtonProps) => [
  tw`px-8 py-2 rounded-full transform duration-75 font-semibold`,
  // tw`hocus:(bg-violet-400)`,

  variant === 'primary' && tw`bg-space text-white`,

  variant === 'secondary' && tw`bg-ultra`,

  isSmall ? tw`text-sm` : tw`text-lg`,
  css`
    color: ${theme`colors.white`};
  `,
]);

export default Button;
