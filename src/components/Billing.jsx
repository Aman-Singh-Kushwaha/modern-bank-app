import {apple, bill, google} from '../assets';
import styles, {layout} from '../style';

const Billing = () => (
  <section id="product" className={`${layout.sectionReverse}`}>
    {/* Card Image - should be brought down in mobile devices */}
    <div className={`${layout.sectionImgReverse}`}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
      <div className="absolute z-[3] -left-1/2 bottom-0 w-[50%] white__gradient"/>
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    {/* Card Info */}
    <div className={`${layout.sectionInfo} `}>
      <h2 className={styles.heading2}>Easily control your<br className="sm:block hidden"/> billing & invoicing.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quibusdam odit quam eius quo possimus voluptate blanditiis et totam itaque.
      </p>
      
      {/* Call to Actions-CTA Buttons*/}
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <a href="https://www.apple.com/in/app-store/">
          <img src={apple} alt="app-store" className="w-[120px] h-[42px] object-contain mr-5 cursor-pointer"/>
        </a>

        <a href="https://play.google.com/">
          <img src={google} alt="google-play" className="w-[120px] h-[42px] object-contain cursor-pointer" />
        </a>
      </div>
    </div>
  </section>
)

export default Billing