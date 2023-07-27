import React from 'react';
import styles from './style.js'
import {Navbar,Hero,Billing,Business,Button,CardDeal,Client,CTA,FeedbackCard,Footer,GetStarted,Stats,Testimonial} from './components';


const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <Business/>
        <Billing/> 
        <CardDeal/> 
        <Testimonial/> 
        <CTA/> 
        <Footer/>
      </div>
    </div>
    Hello World
  </div>

);

export default App