import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, ListGroup, ListGroupItem, Container, Row, Col } from 'reactstrap'
import './ThingList.css'
import {fetchAsyncThings} from '../../actions'
import { bindActionCreators } from 'redux'


class ThingList extends Component {

    // For components with data from redux we need to do
    // this arg handling with props. We also need to link
    // the render method with this instance on construction
    constructor(props) {
        super(props);
        this.render.bind(this);
    }

    // Redux values can be accessed as this.props.XYZ
    render() {
        let itemList = this.props.things.map(item => {
            return (<ListGroupItem key={item.id}>{item.name}</ListGroupItem>);
        })
        return (
            <Container className='blue'>
                <Row><Col>All The Things</Col></Row>
                <Row>
                    <Col>
                        <ListGroup>{itemList}</ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Container>
                            <Row>
                                <Col>
                                    <Button color="primary" onClick={this.props.fetchAsyncThings}>Get Things</Button>
                                    <Button color="primary">Add Thing</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}

// React Redux Prop/dispatch  mapping
const mapStateToProps = state => {
    return {
        things: state.things
    }
}

// Link any async method calls
const mapDispatchToProps = (dispatch) => {
    return {
        fetchAsyncThings: bindActionCreators(fetchAsyncThings, dispatch),
        };
};
    

export default connect(mapStateToProps, mapDispatchToProps)(ThingList);  // withRouter(App)
