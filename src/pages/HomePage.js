import React from "react";

import Title from '../components/Title'

function HomePage(props) {
    return (
        <div className="homePage">
            <Title title={props.title} subTitle={props.subTitle}/>
            <style jsx>{`
                .homePage {
                    height: 82vh;
                }
                .brand {
                    display: none
                }
            `}</style>
        </div>
        );
}
export default HomePage;