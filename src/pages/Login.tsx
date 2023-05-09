import tw, { css } from 'twin.macro';
import LoginForm from '../sections/LoginForm.tsx';

const styles = {
  container: () => [tw`flex flex-col items-center justify-center h-screen`, tw`bg-space`],
  loginContainer: () => [
    css`
      max-width: 500px;
    `,
    tw`bg-white w-full h-auto p-5 rounded m-2`,
  ],
};

const Login = () => {
  return (
    <div css={styles.container()}>
      <div css={styles.loginContainer()}>
        <div tw="py-3">
          <p tw="text-2xl font-semibold">Student Portal</p>
        </div>
        <div tw="py-3">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
