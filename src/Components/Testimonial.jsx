import React from 'react'
import a_img from "../images/clients/a.jpg"
import b_img from "../images/clients/b.jpg"
import c_img from "../images/clients/c.jpg"
import d_img from "../images/clients/d.jpg"
import e_img from "../images/clients/e.jpg"
import f_img from "../images/clients/f.jpg"
import g_img from "../images/clients/g.jpg"
import h_img from "../images/clients/h.jpg"

const Testimonial = () => {
    const SwiperSlide = ({pText,img_link,clientName,clientOccupation}) => {
        return(
            
          <div className="swiper-slide">
          <div className="swiper-client-msg">
              <p>{pText}</p>
          </div>
          <div className="swiper-client-data grid grid-two-column">
              <figure>
                  <img src={img_link} alt="clients review"/>
              </figure>
              <div className="client-data-details">
                  <p>{clientName}</p>
                  <p>{clientOccupation}</p>
              </div>
          </div>
        </div>
        )
    }
  return (
    <>
      <section className="section section-testimonial">
    <div className="container">
        <h2 className="common-heading">Happy Client Works</h2>
    </div>
   
 {/* <!-- Swiper --> */}
    <div className="swiper mySwiper container">
        <div className="swiper-wrapper">
          {/* <!-- section start --> */}
          {/* <div className="swiper-slide">
            <div className="swiper-client-msg">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore amet provident laudantium eum a aut molestias nulla maiores neque minima,</p>
            </div>
            <div className="swiper-client-data grid grid-two-column">
                <figure>
                    <img src={a_img} alt="clients review"/>
                </figure>
                <div className="client-data-details">
                    <p>Subham Saini</p>
                    <p>Entrepreneur</p>
                </div>
            </div>
          </div> */}
          <SwiperSlide pText="Lorem ipsum dolor sit amet consectetur" img_link={a_img} clientName="Subham Saini" clientOccupation="Entrepreneur" />
          {/* <!-- section end --> */}
          {/* <div className="swiper-slide">
            <div className="swiper-client-msg">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore amet provident laudantium eum a aut molestias nulla maiores neque minima,</p>
            </div>
            <div className="swiper-client-data grid grid-two-column">
                <figure>
                    <img src={b_img} alt="clients review"/>
                </figure>
                <div className="client-data-details">
                    <p>Subham Saini</p>
                    <p>Entrepreneur</p>
                </div>
            </div>
          </div>
          {/* <!-- section end --> */}
          {/* <div className="swiper-slide">
            <div className="swiper-client-msg">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore amet provident laudantium eum a aut molestias nulla maiores neque minima,</p>
            </div>
            <div className="swiper-client-data grid grid-two-column">
                <figure>
                    <img src={c_img} alt="clients review"/>
                </figure>
                <div className="client-data-details">
                    <p>Subham Saini</p>
                    <p>Entrepreneur</p>
                </div>
            </div>
          </div> */}
          {/* <!-- section end --> */}
          {/* <div className="swiper-slide">
            <div className="swiper-client-msg">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore amet provident laudantium eum a aut molestias nulla maiores neque minima,</p>
            </div>
            <div className="swiper-client-data grid grid-two-column">
                <figure>
                    <img src={d_img} alt="clients review"/>
                </figure>
                <div className="client-data-details">
                    <p>Subham Saini</p>
                    <p>Entrepreneur</p>
                </div>
            </div>
          </div> */}
          {/* <!-- section end --> */}
          {/* <div className="swiper-slide">
            <div className="swiper-client-msg">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore amet provident laudantium eum a aut molestias nulla maiores neque minima,</p>
            </div>
            <div className="swiper-client-data grid grid-two-column">
                <figure>
                    <img src={e_img} alt="clients review"/>
                </figure>
                <div className="client-data-details">
                    <p>Subham Saini</p>
                    <p>Entrepreneur</p>
                </div>
            </div>
          </div> */}
          {/* <!-- section end --> */}
          {/* <div className="swiper-slide">
            <div className="swiper-client-msg">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore amet provident laudantium eum a aut molestias nulla maiores neque minima,</p>
            </div>
            <div className="swiper-client-data grid grid-two-column">
                <figure>
                    <img src={f_img} alt="clients review"/>
                </figure>
                <div className="client-data-details">
                    <p>Subham Saini</p>
                    <p>Entrepreneur</p>
                </div>
            </div>
          </div> */}
          {/* <!-- section end --> */}
          {/* <div className="swiper-slide">
            <div className="swiper-client-msg">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore amet provident laudantium eum a aut molestias nulla maiores neque minima,</p>
            </div>
            <div className="swiper-client-data grid grid-two-column">
                <figure>
                    <img src={g_img} alt="clients review"/>
                </figure>
                <div className="client-data-details">
                    <p>Subham Saini</p>
                    <p>Entrepreneur</p>
                </div>
            </div>
          </div> */}
          {/* <!-- section end --> */}
          {/* <div className="swiper-slide">
            <div className="swiper-client-msg">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore amet provident laudantium eum a aut molestias nulla maiores neque minima,</p>
            </div>
            <div className="swiper-client-data grid grid-two-column">
                <figure>
                    <img src={h_img} alt="clients review"/>
                </figure>
                <div className="client-data-details">
                    <p>Subham Saini</p>
                    <p>Entrepreneur</p>
                </div>
            </div> 
          </div> */}
          {/* <!-- section end --> */}
          {/* <div className="swiper-slide">
            <div className="swiper-client-msg">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore amet provident laudantium eum a aut molestias nulla maiores neque minima,</p>
            </div>
            <div className="swiper-client-data grid grid-two-column">
                <figure>
                    <img src={d_img} alt="clients review"/>
                </figure>
                <div className="client-data-details">
                    <p>Subham Saini</p>
                    <p>Entrepreneur</p>
                </div>
            </div>
          </div>  */}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section> 
    </>
  )
}

export default Testimonial
