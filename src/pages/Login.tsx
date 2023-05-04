import tw, { css } from 'twin.macro';
import LoginForm from '../sections/LoginForm.tsx';

const styles = {
  container: () => [tw`flex flex-col items-center justify-center h-screen`, tw`bg-space`],
  loginContainer: () => [
    css`
      width: 500px;
    `,
    tw`bg-white h-auto p-4 rounded`,
  ],
};

const Login = () => {
  return (
    <div css={styles.container()}>
      <div css={styles.loginContainer()}>
        <div>
          <p tw="text-lg">Welcome Student</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
