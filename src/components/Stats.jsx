import styles from '../style.js';
import { stats } from '../constants';

const Stats = () => (
  <section className={`${styles.flexCenter} flex flex-row flex-wrap ss:mb-20 mb-6`}>
    {stats.map((stat)=>(
      <div key={stat.id} className=" flex flex-row flex-1 justify-start items-center m-3 ">
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] leading-[43px] xs:leading-[53px] text-white">{stat.value}</h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] leading-[21px] xs:leading-[26px] text-white">{stat.title}</p>
      </div>
    ))}
  </section>
)

export default Stats