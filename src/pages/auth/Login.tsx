import tw, { css } from 'twin.macro';
import LoginForm from '../../sections/LoginForm.tsx';

const styles = {
  container: () => [
    css`
      display: flex;
      flex-direction: row;
      min-height: 100vh;
    `,
    tw`w-full`,
  ],
  bgContainer: () => [
    css`
      background-image: url('/assets/bg.jpg');
      @media screen and (max-width: 900px) {
        display: none;
      }
    `,
    tw`bg-cover bg-center bg-no-repeat w-1/2`,
  ],
  loginContainer: () => [
    css`
      max-width: 500px;
      padding: 150px 24px;
    `,
  ],
};

const Login = () => {
  return (
    <div tw="h-screen bg-white">
      <div css={styles.container()}>
        <div css={styles.bgContainer()}></div>
        <div css={styles.loginContainer()} tw="flex-1">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
