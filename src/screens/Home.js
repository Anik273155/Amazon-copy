import React from 'react';
import './css/Home.css';
import Product from "../components/Product";
function Home(){
    return (
      <div className="home" >
        <div className="home_container">
        <img className="home_image"src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB28684220_.jpg"
                    alt="Banner"/> 
        
      
        <div className="home_row">

           <Product
             id="1"
             title="Apple iPhone 14 Pro Max 1TB Gold.."
            
             price={80000}
             image="https://m.media-amazon.com/images/I/71T5NVOgbpL._AC_UY218_.jpg"
           rating={4}
           />
           <Product
           id='2'
           title='Dell Allienware6GB Geforce core i7'
           price={100000}
           image="https://m.media-amazon.com/images/I/610sreKWXlL._AC_UY218_.jpg"
           
                        rating={5}
                        />
                        <Product 
                        id='3'
                        title="boAt, Ear Bluetooth Headphones Upto 24 Hours"
                        price={900}
                        image="https://m.media-amazon.com/images/I/61kWB+uzR2L._AC_UY218_.jpg"
                      rating={4}
                      />
                  </div>
                     <div className="home_row">
          
                      
                     <Product 
                        id='4'
                        title="Fire-Boltt Visionary 1.78 AMOLED Bluetooth Calling Smartwatch.. "
                        price={999}
                        image="https://m.media-amazon.com/images/I/61Fj5wTOQiL._AC_UL320_.jpg" 
                        rating={5}
                    />
                     <Product 
                        id='5'
                        title="Philips Multi Grooming Kit MG3760/33, 11-in-1 (New Model), Face,..."
                        price={1500}
                        image="https://m.media-amazon.com/images/I/71Ac6lcrSFL._AC_UL320_.jpg" 
                        rating={3}
                    />

                        <Product 
                        id='6'
                        title="Prestige 1.5 Litre Kettle 1500-watts, Red."
                        price={700}
                        image="https://m.media-amazon.com/images/I/511wIb+y8BL._AC_UL320_.jpg" 
                        rating={3}
                    />
                    </div>

                    <div className="home_row">
          
                      
          <Product 
             id='4'
             title="Kuvings B1700 Dark Silver Professional Cold Press Whole Slow Juicer."
             price={7000}
             image="https://m.media-amazon.com/images/I/71EqgKLhTtL._AC_UL320_.jpg" 
             rating={5}
         />
          <Product 
             id='5'
             title="Milton Thermosteel Flip Lid Flask, 500 milliliters, Silver"
             price={650}
             image="https://m.media-amazon.com/images/I/715LxClXMLL._AC_UL320_.jpg" 
             rating={3}
         />
         </div>
                        
                    <div className="home_row">
                    <Product 
                        id='6'
                        title="Samsung Ls24R356Fhwxxl 24 Inch (60.4 Cm) IPS, 3 Side Bezel Less Flat Led 1920 X 1080 Pixels Monitor."
                        price={16000}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L.AC_SX355.jpg" 
                        rating={4}
                    />
                    </div>
          

                       
     </div>
      </div>
     

    );
}

export default Home;
