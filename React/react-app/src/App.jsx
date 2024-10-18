import Card from './Card';
import Button from './Button/Button';

// component is a section of reusable jsx code
// html like code that can contain js code

function App() {
  // <></> fragments to put many components
    return(
      <> 
        <Card />
        <br/>
        <Card />
        <Button />
      </>
    )
}

export default App