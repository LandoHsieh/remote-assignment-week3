
import { Container } from './components/styles/Container.styled'
import Button from './components/Button'
import GetPostData from './components/getPostData';

function App() {
  return (
    <>
      <Container>
        <h1>This is a sample post.</h1>
        <GetPostData />
        <Button />
      </Container>
    </>

  );
}

export default App;
