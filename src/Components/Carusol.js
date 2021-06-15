import React from 'react';

const Carousal = () => {
    return (
        <section>
            <div className="carousel-container">
                <div className="carousel-container-text">
                    <h2>Surface Pro 7</h2>
                    <p>Ultra-lite and versatile</p>
                    <button className="carousel-btn">
                        <a 
                            style={{"color": "#fff" }}
                            href="https://www.microsoft.com/en-in/surface/devices/surface-pro-7?icid=mscom_marcom_H2a_SurfacePro7" 
                        >
                            <span>Shop now </span> <i className="fa fa-angle-right"></i>
                        </a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Carousal;