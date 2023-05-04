import tw, { theme } from 'twin.macro';
import { TextInput } from '../components/TextInput.tsx';
import { Button } from '../components';
import { LockClosedIcon, UserIcon } from '@heroicons/react/24/solid';

const LoginForm = () => {
  return (
    <form>
      <div tw="flex items-center mb-3">
        <div tw="m-2">
          <UserIcon tw="w-6 h-6" />
        </div>
        <div tw="flex-1">
          <TextInput name="email" placeholder="Email" />
        </div>
      </div>
      <div tw="flex items-center mb-3">
        <div tw="m-2">
          <LockClosedIcon tw="w-6 h-6" />
        </div>
        <div tw="flex-1">
          <TextInput name="password" type="password" placeholder="password" />
        </div>
      </div>
      <div tw="flex flex-col justify-center gap-y-5">
        <Button variant="primary">Login</Button>
        <div>
          <span>OR</span>
        </div>
        <Button variant="secondary">Register with student email</Button>
      </div>
    </form>
  );
};

export default LoginForm;
