import React from 'react'
import './LifeStyle.css'
import limage from '../assets/lifestyleImg.png'
import limage2 from '../assets/limg2.png'
const LifeStyle = () => {
  return (
    <div className="DontMiss-container">
      <div className="dms-navbar">
        <div className="dms-heading red">Life Style</div>
        <div className="dms-buttons" >
          <div className="dms-all btn redbg">All</div>
          <div className="dms-Lifestyle btn purplebg">Travel</div>
          <div className="dms-Vogue btn greenbg">Recipies</div>
          <div className="dms-Health&Fitness btn bluebg">Health & Fitness</div>
          <div className="dms-Travel btn goldbg">Music</div>
 
        </div>
      </div>
      <div style={{gap:"11vh"}} className="dms-content">
        <div className="dms-left">
          <img
            src={limage}
            alt="dmsl"
          />
          <div className="dmsl-head">
            Craig Bator <span className="lightText">- 27 Dec 2020</span>{" "}
          </div>
          <div className="dmsl-MainHead">
          ‘Institutional delivery vital for reducing maternal and neonatal deaths’        </div>
          <div className="dmsl-para lightText">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            perferendis temporibus doloribus exercitationem illo similique
            voluptatem voluptatibus voluptatum sequi, corrupti tempore ipsum,
            perspiciatis quo dignissimos? Quam excepturi id quod assumenda saepe
            voluptatibus!
          </div>
        </div>
        <div className="dms-left">
          <img
            src={limage2}
            alt="dmsl"
          />
          <div className="dmsl-head">
            Craig Bator <span className="lightText">- 27 Dec 2020</span>{" "}
          </div>
          <div className="dmsl-MainHead">
          Being self-controlled child may lead to healthier middle-age         </div>
          <div className="dmsl-para lightText">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            perferendis temporibus doloribus exercitationem illo similique
            voluptatem voluptatibus voluptatum sequi, corrupti tempore ipsum,
            perspiciatis quo dignissimos? Quam excepturi id quod assumenda saepe
            voluptatibus!
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default LifeStyle