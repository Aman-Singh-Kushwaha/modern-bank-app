import {clients} from "../constants";
import styles from "../style";

const Client = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client)=>(
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[120px] sm:mx-6 xs:mx-3 mx-1 ss:my-2`}>
          <img src={client.logo} alt="logo" className="sm:w-[192px] w-[100px] object-contain"/>
        </div>
      ))}
    </div>
  </section>
)

export default Client