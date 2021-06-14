
import React, { Component } from 'react';
import axios from 'axios';
import {BACKEND_URL} from './config'


export default class singleAttraction extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            website: '',
            imageURL: '',
            location: {
                address: '',
                city: '',
                state: '',
                zipcode: '',
            },
            indoors: false,
            childFriendly: false,
            loading: true
        }
    }
    componentDidMount() {
        axios.post(BACKEND_URL + 'attractions/' + this.props.match.params.id)
        .then((response) => {
            this.setState({
                name: response.data.name,
                description: response.data.description,
                website: response.data.website,
                imageURL: response.data.imageURL,
                indoors: response.data.indoors.toString(),
                childFriendly: response.data.childFriendly.toString(),
                loading: false
            })
        })
        .catch((error) => {
            console.log(error)
        })
        console.log(this.state.name)
    }
    render() {
        return (
            this.state.loading === false ? (
                <div>
                    <div className='singleContainer'>
                        <div className="singleHeaderContainer">
                            <div className="singleHeaderInfo">
                                <div className='singleName'>
                                    {this.state.name}
                                </div>
                            
                            </div>
                            <div className="singleHeaderImage">
                                <img className='singleImage' src={this.state.imageURL} alt='' />
                            </div>
                            <div className="singleDescriptionContainer">
                                <div className='singleDescription'>
                                    {this.state.description}
                                </div>
                                <div className="singleBooleans">
                                    <div id="singleIndoors"><span>Indoors?</span> <br/> {this.state.indoors}</div>
                                    <div id="singleFamily"><span>Child Friendly?</span> <br/> {this.state.childFriendly}</div>
                                </div>
                                <div>
                                <a href={this.state.website} className='attractionLink' target="_blank" rel="noreferrer">Visit Website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <h1 className="loading-spinner">Loading...</h1>
                </div>
            )
        )
    }
}