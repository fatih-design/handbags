import './App.css'
import HandbagCard from './components/handBagCard/HandbagCard';
import Button from "./components/button/Button.jsx";
function App() {
  return (
      <>
          <nav>
              <Button buttonText="to the collection" isDisabled={false} onClick={()=> console.log('to the collection')}/>
              <Button buttonText="shop all bags" isDisabled={false} onClick={()=> console.log('shop all bags')}>shop all bags</Button>
              <Button buttonText="pre-orders" isDisabled={true} onClick={()=> console.log('pre-orders')}>pre-orders</Button>
          </nav>
      <h1><HandbagCard/></h1>
        <p><HandbagCard/></p>
      </>
  )
}

export default App
