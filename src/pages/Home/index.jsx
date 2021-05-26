import React from 'react';
import "./Home.css";
import Product from "../../components/Product"

function Home() {
    return (
        <div className="home">
            <div className="home__container">

                <div className="home__row">
                    <Product 
                    id="12323452"
                    title="Mouse Gaming Logitech G 103" price={400000} 
                    displayPrice="400,000"
                    image="https://ecs7.tokopedia.net/img/cache/700/product-1/2018/11/3/4461925/4461925_c87e31df-851d-47fb-9fca-41d1586461bf_554_554.jpg" 
                    rating={5} />
                    <Product 
                    id="12782710"
                    title="
                    Blendtec Total Classic Original Blender - WildSide+ Jar (90 oz) - Professional-Grade Power - 6 Pre-programmed Cycles - 10-speeds - Black (Renewed)" 
                    price={4126800}
                    displayPrice="4,126,800" 
                    image="https://images-na.ssl-images-amazon.com/images/I/71zrQU%2ByLvL._AC_SL1500_.jpghttps://www.powerplanetonline.com/cdnassets/soyto_luminous_7_1_pc_sy830mv_blanco_auriculares_gaming_01_l.jpg" 
                    rating={3} />
                    
                </div>

                <div className="home__row">
                <Product  
                    id="12782736"
                    title="Headphone / Headset GAMING GAMERS SY830MV" 
                    price={142000}
                    displayPrice="142,000"
                    image="https://www.powerplanetonline.com/cdnassets/soyto_luminous_7_1_pc_sy830mv_blanco_auriculares_gaming_01_l.jpg" 
                    rating={4} />
                <Product 
                    id="12782735"
                    title="LED TV Samsung 43TU8000 Crystal UHD Smart                    " 
                    price={5000000}
                    displayPrice="5,000,000"
                    image="https://ecs7.tokopedia.net/img/cache/700/product-1/2020/3/26/11518803/11518803_61f6c45d-5f0a-410b-b721-48a4bae920c1_800_800" 
                    rating={5} />
                          <Product 
                    id="12782734"
                    title="The Resistance: Avalon Social Deduction Game" 
                    price={256000} 
                    displayPrice="256,000"
                    image="https://images-na.ssl-images-amazon.com/images/I/91JhcC33dTL._AC_SL1500_.jpg" 
                    rating={4} />
                    
                </div>

                <div className="home__row">
                      <Product 
                    id="12782737"
                    title="Minecraft - PlayStation 4"
                    price={657350} 
                    displayPrice="637,350"
                    image="https://images-na.ssl-images-amazon.com/images/I/710OMyE1oXL._SL1500_.jpg" 
                    rating={5} />
                      <Product 
                    id="12782711"
                    title="AmazonBasics Hardside Spinner, Carry-On, Expandable Suitcase Luggage with Wheels, 21 Inch, Black" 
                    price={857700} 
                    displayPrice="857,700"
                    image="https://images-na.ssl-images-amazon.com/images/I/71s7HbyqzEL._AC_SL1500_.jpg" 
                    rating={4} />
                </div>
            </div>
        </div>
    )
}

export default Home;
