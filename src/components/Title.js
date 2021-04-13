import React from 'react';

function Title(props) {

    return(
        <div className="homePageContainer">
            <div className="titleContainer">
                { props.title && <h1 className="title justify-content-start">{props.title}</h1> }
                { props.subTitle && <h2 className="subTitle">{props.subTitle}</h2> }
            </div>
            <style jsx>{`
                .homePageContainer {
                    height: 80vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .logoImageHome {
                    width: 50vw;
                    margin-left: 10%;
                }
                .subTitle {
                    margin-top: -5%;
                    margin-left: 13%;
                }
                @media only screen and (max-width: 1400px) {
                    .logoImageHome {
                        margin-top: -10%;
                    }
                    .subTitle {
                        font-size: 1.5rem;
                    }
                }
                @media only screen and (max-width: 1000px) {
                    .subTitle {
                        font-size: 1rem;
                    }
                }
                @media only screen and (max-width: 700px) {
                    .subTitle {
                        font-size: .75rem;
                    }
                }

            `}</style>
        </div>

    )

}
export default Title;