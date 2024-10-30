import React from 'react'
import styles from './style'
import { Navbar, Hero, StatsComponent, Billing, Business, CardDeal, Testimonials, Client, CTA, Footer, Button, FeedbackCard, GetStarted } from './components'

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* navbar div */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Hero div */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero  />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* components */}
          <StatsComponent /> 
          <Business /> 
          <Billing /> 
          <CardDeal /> 
          <Testimonials /> 
          <Client /> 
          <CTA /> 
          <Footer /> 
        </div>
      </div>
    </div >
  )
}

export default App

