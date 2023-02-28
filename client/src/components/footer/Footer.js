import React from 'react'
import styled from 'styled-components'
import Copyright from './Copyright';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <Section>
                <div className='container'>
                    <div className="sort_disc footer_box">
                        <img className='nav_logo' src={logo} alt="" />
                        <p>
                            Jagto Bharat यह भारत का राष्ट्रीय पोर्टल है जिसका विकास भारत सरकार के विभिन्‍न संगठनों द्वारा दी जा रही सेवाओं और सूचनाओं की जानकारी एक ही स्‍थान पर उपलब्‍ध कराने के उद्देश्‍य से किया गया है।। यह पोर्टल राष्ट्रीय ई-शासन योजना के अंतर्गत एक मिशन मोड परियोजना है जिसका निर्माण एवं परिकल्पना राष्ट्रीय सूचना विज्ञान केन्द्र (एनआईसी), इलेक्‍ट्रॉनिकी और सूचना प्रौद्योगिकी मंत्रालय , भारत सरकार द्वारा किया गया है।
                        </p>
                    </div>
                    <div className="sort_headline footer_box">
                        <h3>अधिक समाचार</h3>
                        <span><A>जोशीमठ: 723 घरो को भारी नुक्सान, पड़ चुकी है दरारे</A></span>
                        <span><A>दिल्ली हादसा में आरोपियों को पता था Anjali फंसी है, 'डर' के मारे</A></span>
                        <span><A>दिल्ली: 3 डिग्री तापमान पहुंचने के बाद जल्द कुछ राहत मिलने की सम</A></span>
                        <span><A>Noida: कार की चपेट में आयी B-Tech की छात्र को सर्जरी की ज़रूरत, ऐ</A></span>
                        <span><A>कंझावला : कार में सवार 5 में से 2 को मालुम था की उन्होंने स्कूटी</A></span>

                    </div>
                    <div className="cate_link footer_box">
                        <h3>समाचार प्रकार</h3>
                        <div className="nav_list">

                            <ul>
                                <li><A to="/politics">राजनीति</A></li>
                                <li><A to="/business">बिजनेस</A></li>
                                <li><A to="/tech">टेक्नोलॉजी</A></li>
                                <li><A to="sport">खेल</A></li>
                                <li><A to="entertainment" >मनोरंजन</A></li>

                            </ul>
                            <ul>
                                <li><A to="education">शिक्षा</A></li>
                                <li><A to="delhi/ncr">Delhi/NCR</A></li>
                                <li><A to="/crime">Crime</A></li>
                                <li><A to="/world"> International</A></li>

                            </ul>

                        </div>
                    </div>
                </div>

            </Section>
            <Copyright />
        </>

    )
}

const A = styled(Link)`

font-size: .9rem;
color: black;
&:hover{
    text-decoration: underline;
}

`

const Section = styled.section`
max-width: 100%;
margin-top: 5rem;
background-color: white;
padding: 3rem 1rem;


.container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
}
.nav_logo{
    display: inline-block;
    width: 70%;
    text-align: center;
    margin: auto;
}
.footer_box{
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: .5rem;
}

.sort_headline span{
    font-size: 12px;
    padding: .5rem 0rem;
    border-bottom: 1px dashed green;
}

.nav_list{
    display: flex;
    justify-content: space-between;
}


//Media Queries

@media (max-width:900px) {
    .sort_disc{
        grid-column: 1/-1;
        flex-direction: row;
    }
    .container{
        grid-template-columns: 1fr 1fr;
    }
    
}
@media (max-width:650px) {
    .nav_logo{
 
    width: 50%;

}
    .sort_disc{
        flex-direction: column;
    }
    .container{
        padding: 1rem;
        grid-template-columns: 1fr ;
    }
    
}

`

export default Footer