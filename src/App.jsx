import './App.css'
import HandbagCard from './components/handBagCard/HandbagCard';
import Button from "./components/button/Button.jsx";
import bag_1 from "./assets/bag_1.png";
import bag_2 from "./assets/bag_2.png";
import bag_3 from "./assets/bag_2.png";
import bag_4 from "./assets/bag_2.png";
import Tile from "./components/tile/Tile";
import brand from "./assets/brand.png";
import our_story from "./assets/our_story.png";



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
          <footer>
              <section>
                  <Tile title="The Brand"/>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi dignissimos ea earum esse odio
                      quis, quod vero? Consequatur corporis cupiditate ducimus, ex molestias sequi? Deleniti expedita
                      omnis quasi reprehenderit unde.</p>
              </section>
              <section>
                  <Tile image={brand}/>


              </section>
              <section>
                  <Tile image={our_story}/>
              </section>
              <section>
                  <Tile title="our_story"/>

                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eos illo in minus natus numquam
                      quas quos! Delectus, minima quibusdam?</p>
              </section>

          </footer>

      </>
  )
}

export default App
