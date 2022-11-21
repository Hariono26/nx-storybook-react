import styles from './greeter.module.css';

/* eslint-disable-next-line */
export interface GreeterProps {
  name: string
}

export function Greeter(props: GreeterProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Greeter! {props.name}</h1>
    </div>
  );
}

export default Greeter;
