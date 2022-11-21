// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import Greeter from './greeter/greeter';
// import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      {/* <NxWelcome title="app-1" /> */}
      <Greeter name='Hariono' />
    </>
  );
}

export default App;
