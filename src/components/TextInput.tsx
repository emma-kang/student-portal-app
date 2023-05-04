import { TextInputProps } from './types/Props.ts';
import Input from './Input.tsx';

export const TextInput = ({ name, type, label, placeholder, hasError }: TextInputProps) => {
  return (
    <>
      {!!label && <label htmlFor={name}>{label}</label>}
      <Input hasError={hasError} type={type ? type : 'text'} name={name} placeholder={placeholder} />
    </>
  );
};
