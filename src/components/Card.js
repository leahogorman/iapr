import React from 'react';
import CardInfo from '../components/CardInfo'

function Card(props) {
    return(
        <div className="cardContainer" onClick={(e) => props.click(props.item)}>
            <h1 className="cardTitle">{props.item.title}</h1>
            {props.item.selected && <CardInfo subTitle={props.item.subTitle} imgSrc={props.item.imgSrc} email={props.item.email} text={props.item.text} caption={props.item.caption} caption1={props.item.caption1} link={props.item.link} link1={props.item.link1}/>}
            <style jsx>{`
                .cardContainer {
                    width: 60vw;
                    margin-bottom: 2rem;
                }
                .cardTitle {
                    margin: 0;
                    font-size: 1.5rem;
                    display: block;
                    text-align: center;
                    padding: 1rem;
                    color: white;
                    background-color: rgb(94, 79, 136);
                }
                .member-name:hover {
                    cursor: pointer;
                }
                @media only screen and (max-width: 1000px) {
                    .cardContainer {
                        width: 100vw;
                        margin-left: none;
                        padding-left: none;
                    }
                }
            `}</style>
        </div>
    )
}

export default Card;