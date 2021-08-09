import firebase from 'firebase/app'
import withFirebaseAuth from 'react-with-firebase-auth'
import firebaseApp from './firebase'
import logo from './logo.svg';
import './App.css';

const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

function App(props) {

  const {
    user,
    signOut,
    signInWithGoogle,
  } = props;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          user 
            ? <p>Hello, {user.displayName}</p>
            : <p>Sign in</p>
        }
        {
          user
            ? <button className="custom-btn" onClick={signOut}>Sign out</button>
            : <button className="custom-btn" onClick={signInWithGoogle}>Sign in with Google</button>
        }
      </header>
    </div>
  );
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
