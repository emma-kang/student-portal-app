export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  isSmall?: boolean;
}

export interface TextInputProps {
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
  hasError?: boolean;
}
