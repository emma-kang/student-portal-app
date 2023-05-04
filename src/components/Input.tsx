import tw, { styled } from 'twin.macro';

const Input = styled.input(({ hasError }: { hasError: boolean }) => [
  tw`p-2 border rounded w-full`,
  hasError ? tw`border-rose` : tw`border-gray-600`,
]);

export default Input;
