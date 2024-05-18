
import './Holding.css'
import holding from '../assets/pkhabar-holding.png'
const Holding = () => {
  return (
    <div className='Recent-container'>
    <div className="dms-navbar  mb2vh opacity0">
     <div className="dms-heading red fontsize1o6vh">Stay Connected</div>
   </div>
    <div className="getLU-container ext-holding">
        <div className="holding-desc"></div>
        <div className="mainLocation">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15550.565193703294!2d80.22292516306138!3d12.994779347162005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526781f3ce0c6b%3A0x41368df84c6db350!2sIndian%20Institute%20Of%20Technology%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1716004860982!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      <img className='Holding-img' src={holding} alt="" />
      
    </div>  

       

 </div>
  )
}

export default Holding