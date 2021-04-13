import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Bellon from '../assets/images/Bellon.jpg'
import Govindaraju from '../assets/images/Govindaraju.jpg'
import Karatzas from '../assets/images/Karatzas.jpg'
import Kuijper from '../assets/images/Kuijper.jpg'
import Llados from '../assets/images/Llados.jpg'
import Luengo from '../assets/images/Luengo.jpg'
import Placeholder from '../assets/images/Placeholder.png'

import Card from '../components/Card'

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Josep Llados',
                    subTitle: 'Committee Chair',
                    text: 'Bio to Come',
                    imgSrc: Llados,
                    email: 'mailto: Josep.Llados@uab.es',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Arjan Kuijper',
                    subTitle: 'Committee Liason',
                    text: 'Bio to Come',
                    imgSrc: Kuijper,
                    email: 'mailto: arjan.kuijper@igd.fraunhofer.de',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Olga Regina Pereira Bellon',
                    subTitle: 'Committee Member',
                    text: 'Bio to Come',
                    imgSrc: Bellon,
                    email: 'mailto: Olga Regina Pereira Bellon',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Veronique Eglin',
                    subTitle: 'Committee Member',
                    text: 'Bio to Come',
                    imgSrc: Placeholder,
                    email: 'mailto: veronique.eglin@liris.cnrs.fr',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Venu Govindaraju',
                    subTitle: 'Committee Member',
                    text: 'Bio to Come',
                    imgSrc: Govindaraju,
                    email: 'mailto: venu.govindaraju@gmail.com',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Dimosthenis Karatzas',
                    subTitle: 'Committee Member',
                    text: 'Bio to Come',
                    imgSrc: Karatzas,
                    email: 'mailto: karatzas@liv.ac.uk',
                    selected: false
                },
                {
                    id: 6,
                    title: 'Cris Luengo',
                    subTitle: 'Committee Member',
                    text: 'Bio to Come',
                    imgSrc: Luengo,
                    email: 'mailto: cris.l.luengo@gmail.com',
                    selected: false
                },
                {
                    id: 7,
                    title: 'Richa Singh',
                    subTitle: 'Committee Member',
                    text: 'Bio to Come',
                    imgSrc: Placeholder,
                    email: 'mailto: rsingh@iiitd.ac.in',
                    selected: false
                },
                {
                    id: 8,
                    title: 'Vera Yashina',
                    subTitle: 'Committee Member',
                    text: 'Bio to Come',
                    imgSrc: Placeholder,
                    email: 'mailto: werayashina@gmail.com',
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
            </Container>
                        

        )
    }

}
export default Carousel;