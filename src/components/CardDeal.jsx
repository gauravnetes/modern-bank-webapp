import { card } from "../assets"
import styles, {layout} from "../style"
import Button from "./Button"

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> Find a better card deal <br className="sm:block hidden"/> in few easy steps </h2>
        <p className={`${styles.paragraph} maz-w-[470px] mt-5`}>From cashback to travel rewards, we make it easy to find the card that matches your spending habits. Let us help you make smarter financial choices with confidence and ease.</p>
        <Button styles="mt-10"/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]"/>
      </div>
    </section>
  )
}

export default CardDeal
