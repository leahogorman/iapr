import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

function CardInfo(props){

    return(
        <div className="cardInfo">
            <div className="cardImageContainer">
                <img className="cardImage" src={props.imgSrc} alt={props.imgSrc} />
            </div>
            <div className="cardText">
                <h2 className="cardSubTitle">{props.subTitle}</h2>
                <p className="cardText">{props.text}</p>
                <div className="emailContainer">
                    <a className="emailBtn" type="button" href={props.email} target="_blank" rel="noopener noreferrer"><FaEnvelope size={50}/></a>
                </div>
            </div>
            <div className="cardInfoAlt">
                <a className="link" href={props.link} target="_blank" rel="noopener noreferrer">{props.caption}</a>
                <a className="link" href={props.link1} target="_blank" rel="noopener noreferrer">{props.caption1}</a>
            </div>
                <style jsx>{`
                    .cardInfo {
                        background-color: rgb(201, 196, 216);
                        width: 100%;
                        padding: 2rem;
                        display: grid;
                        grid-template-column: 1fr 1fr;
                    }
                    .cardImageContainer {
                        grid-column: 1;
                        width: 20rem;
                        padding: 1rem;
                        background-color: rgb(94, 79, 136);
                        border-radius: 10px;
                        overflow: hidden;
                    }
                    .cardImage {
                        width: 100%;
                        border-radius: 10px;
                    }
                    .cardText {
                        grid-column: 2;
                        position: relative;
                    }
                    .emailContainer {
                        position: absolute;
                        bottom: 20px;
                        right: 50px;
                    }
                    .emailBtn {
                        color: rgb(94, 79, 136);
                    }
                    .emailBtn:hover {
                        transform: scale(1.5);
                        color: rgb(94, 79, 136);
                    }
                    .link {
                        font-size: 1.25rem;
                        display: block;
                        text-align: center;
                        padding-bottom: 10px;
                    }
                    @media only screen and (max-width: 1000px) {
                        .cardInfo {
                            display: block;
                        }
                        .cardImageContainer {
                            margin-left: auto;
                            margin-right: auto;
                            margin-bottom: 3rem;
                        }
                    }
            `}</style>
        </div>

    )

}
export default CardInfo