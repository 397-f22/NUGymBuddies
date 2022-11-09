import { signInWithGoogle, signOut, useAuthState } from '../utilities/firebase';
import '../styles/SignIn.css';

const SignInButton = () => (
  <button className="sign-button" onClick={signInWithGoogle}>Sign in</button>
);

const SignOutButton = () => (
  <button className="sign-button" onClick={signOut}>Sign out</button>
);

const AuthButton = () => {
  const [user] = useAuthState();
  return user ? <SignOutButton /> : <SignInButton />;
};

const activation = ({isActive}) => isActive ? 'active' : 'inactive';

const SignIn = () => (
  <div>
    <AuthButton />
  </div>
);

export default SignIn;
