import './App.css'
import HandbagCard from './components/handBagCard/HandbagCard';
import Button from "./components/button/Button.jsx";
import bag_1 from "./assets/bag_1.png";
import bag_2 from "./assets/bag_2.png";
import bag_3 from "./assets/bag_2.png";
import bag_4 from "./assets/bag_2.png";

function App() {
  return (
      <>
          <nav>
              <Button buttonText="to the collection" isDisabled={false} onClick={()=> console.log('to the collection')}/>
              <Button buttonText="shop all bags" isDisabled={false} onClick={()=> console.log('shop all bags')}>shop all bags</Button>
              <Button buttonText="pre-orders" isDisabled={true} onClick={()=> console.log('pre-orders')}>pre-orders</Button>
          </nav>
          <main>
              <HandbagCard handBagLabel="Best seller" image={bag_1} name="The handy bag" price="€400,-"/>
              <HandbagCard handBagLabel="Best seller" image={bag_2} name="The stylish bag" price="€250,-"/>
              <HandbagCard handBagLabel="New collection" image={bag_3} name="The simple bag" price="€300,-"/>
              <HandbagCard handBagLabel="New collection" image={bag_4} name="The trendy bag" price="€150,-"/>



          </main>

      </>
  )
}

export default App
