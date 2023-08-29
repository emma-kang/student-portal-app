import {} from 'twin.macro';
import { Button, TextInput } from '../components';
import { LockClosedIcon, UserIcon } from '@heroicons/react/24/solid';

const LoginForm = () => {
  return (
    <form>
      <p tw="text-2xl font-semibold">Student Portal</p>
      <div tw="flex items-center mb-3">
        <div tw="pr-2">
          <UserIcon tw="w-6 h-6 text-gray-600" />
        </div>
        <div tw="flex-1">
          <TextInput name="email" placeholder="Email" />
        </div>
      </div>
      <div tw="flex items-center mb-3">
        <div tw="pr-2">
          <LockClosedIcon tw="w-6 h-6 text-gray-600" />
        </div>
        <div tw="flex-1">
          <TextInput name="password" type="password" placeholder="password" />
        </div>
      </div>
      <div tw="text-right underline my-3">
        <a href="#">Forgot Password?</a>
      </div>
      <div tw="flex flex-col justify-center gap-y-3">
        <Button variant="primary">Login</Button>
        <div tw="flex items-center text-center">
          <hr tw="grow h-1 mx-2 border-dotted" />
          <span tw="text-gray-400 text-sm">OR</span>
          <hr tw="grow h-1 mx-2 border-dotted" />
        </div>
        <Button variant="secondary">Register with student email</Button>
      </div>
    </form>
  );
};

export default LoginForm;
