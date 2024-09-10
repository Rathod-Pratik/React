import React, { useEffect } from "react";
import Button from '../Button'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import { RiEarthLine } from "react-icons/ri";
import styled from "styled-components";
import Aos from 'aos'
import 'aos/dist/aos.css'
const contect = () => {
    useEffect(()=>{
        Aos.init();
        })
    return (
        <Contects>
            <div className="contect-title" data-aos='fade-down'>
                <p>Get in Touch</p>
                <h1>Any Questions? Feel Free to Contact</h1>
            </div>
            <div className="contect-info">
                <div className="info" data-aos='fade-right'>
                    <p>
                        <FaLocationDot className="info-logo" />
                        <span>200 Harshidhi city veraval, 362265</span>
                    </p>
                    <p>
                        <IoCall className="info-logo" />
                        <span>+91 9016561625</span>
                    </p>
                    <p>
                        <SiMinutemailer className="info-logo"/>
                        <span>rathodpratik1928@gmail.com</span>
                    </p>
                    <p>
                        <RiEarthLine  className="info-logo" />
                        <span>pending</span>
                    </p>
                </div>
                <div className="form" data-aos='fade-left'>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="E-mail" />
                <input type="tel" placeholder="Moblie No."/>
                <textarea name="text" rows={8} placeholder="Message" id=""></textarea>
                <div className="submit-btn">
                    <Button text={"Submit"}/>
                </div>
                </div>
            </div>
        </Contects>
    );
};

export default contect;

const Contects=styled.div`

    background-color: #f3f3f3;
    padding: 17px 12px;

.contect-title{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 21px;
}
.contect-title p{
    color: #6f34fe;
    font-size: 1.5rem;
    font-weight: 600;
}
.contect-title h1{
    margin-top: 0.5rem;
    color: #3f396d;
    font-size: 2.5rem;
    font-weight: 700;
}

.contect-info{
    display: flex;
    flex-direction: row;
    width: 80%;
    margin:25px auto;

}
.info{
    width: 50%;
}
.info p{
    display: flex;
    flex-direction: row;
    gap: 25px;
    font-size: 1.2rem;
    margin: 14px 0px;
    align-items: center;
}
.info-logo{
    font-size: 30px;
    color: orange;
}
.form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    gap: 25px;
}
.form input,textarea{
    padding: 10px 10px !important;
    width: 80%;
    outline-color: orange;
    background-color: transparent;
    border: 0.5px solid #ced4da;
    border-radius: 5px;
}
.form textarea{
    resize: none;
}

.submit-btn{
    width: 80%;
}
.submit-btn button{
    padding: 1rem 40px;
    font-size: 1.2rem;
}
@media only screen and (max-width: 850px){
    .contect-info{
flex-direction: column;
    }
    .info{
        display: none;
    }
    .form{
        width: 100%;
    }
    .contect-title h1{
        text-align: center;
    }
}
`