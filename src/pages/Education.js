import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Bellon from '../assets/images/Bellon.jpg'
import Govindaraju from '../assets/images/Govindaraju.jpg'
import Karatzas from '../assets/images/Karatzas.jpg'
import Kuijper from '../assets/images/Kuijper.jpg'
import Llados from '../assets/images/Llados.jpg'
import Luengo from '../assets/images/Luengo.jpg'
import Placeholder from '../assets/images/Placeholder.png'

import Card from '../components/Card'

class AboutPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Technical Committee 3: Neural Networks and Computational Intelligence',
                    caption: 'Neural Networks and Computational Intelligence Tutorials',
                    link: 'http://iapr-tc3.diism.unisi.it/Tutorials.html',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Technical Committee 10: Graphics Recognition',
                    caption: 'Graphics Recognition Datasets/Software',
                    link: 'https://iapr-tc10.univ-lr.fr/?page_id=71',
                    caption1: 'Educational Materials',
                    link1: 'committee-link" href="https://iapr-tc10.univ-lr.fr/?page_id=75',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Technical Committee 12: Multimedia and Visual Information Systems',
                    caption: 'Multimedia and Visual Information Systems Education',
                    link: 'http://iapr-tc12.info/index.php/education/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Technical Committee 15: Graph Based Representations',
                    caption: 'Graph-based Representations Lectures',
                    link: 'committee-link" href="https://iapr-tc15.greyc.fr/lectures.php',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Technical Committee 18: Discrete Geometry and Mathematical Morphology',
                    caption: 'Discrete Geometry and Mathematical Morphology Educational',
                    link: 'http://tc18.org/educational.html#getting_started',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Technical Committee 19: Computer Vision for Cultural Heritage Applications',
                    caption: 'Computer Vision for Cultural Heritage Applications Tutorial',
                    link: 'https://www.cvl.iis.u-tokyo.ac.jp/IAPR-TC19/index.php?id=tutorial',
                    selected: false
                },
            ]
          }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-center">
                    {this.makeItems(this.state.items)}
                </Row>
            <style jsx>{`
                .cardImageContainer {
                    display: none;
                }
                .cardText {
                    display: none;
                }
            `}</style>   
            </Container>
     

        )
    }

}
export default AboutPage;