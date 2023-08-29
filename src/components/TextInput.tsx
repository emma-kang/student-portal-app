import { TextInputProps } from './types/Props.ts';
import tw, { css } from 'twin.macro';

const styles = {
  input: (hasError?: boolean) => [tw`p-2 border rounded-md w-full`, hasError ? tw`border-buff` : tw`border-gray-400`],
};

const TextInput = ({ name, type, label, placeholder, hasError }: TextInputProps) => {
  return (
    <>
      {!!label && <label htmlFor={name}>{label}</label>}
      <input css={styles.input(hasError)} type={type ? type : 'text'} name={name} placeholder={placeholder} />
    </>
  );
};

export default TextInput;
