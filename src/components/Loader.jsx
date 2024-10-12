import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress;
  const displayProgress = progress ? progress.toFixed(2) : '';
  return (
    <Html center>
      <div style={styles.container}>
        <div style={{ ...styles.bar, width: `${progress}%` }}></div>
        <p style={styles.text}>Loading...{displayProgress}</p>
      </div>
    </Html>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '200px',
    height: '30px',
    backgroundColor: '#',
    borderRadius: '15px',
    overflow: 'hidden',
    border: '1px solid #ccc',
  },
  bar: {
    height: '100%',
    backgroundColor: '#1D1D1D',
  },
  text: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: 0,
    fontSize: '12px',

    color: '#ffffff',
  },
};

export default Loader;
