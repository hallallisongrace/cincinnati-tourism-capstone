
import React, { Component } from 'react';
import axios from 'axios';
import {BACKEND_URL} from './config'


export default class SingleAttraction extends Component {
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
        axios.get(BACKEND_URL + 'attractions/' + this.props.match.params.id)
        .then((response) => {
            this.setState({
                name: response.data.name,
                description: response.data.description,
                website: response.data.website,
                imageURL: response.data.imageURL,
                location: {
                    address: response.data.location.address,
                    city: response.data.location.city,
                    state: response.data.location.state,
                    zipcode: response.data.location.zipcode
                },
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
                                <div className='singleAddress'>
                                <div className='text-single-address'>
                                    {this.state.location.address}
                                    <br />
                                    {this.state.location.city}, {this.state.location.state}
                                </div>
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
                                    <div id="singleFamily"><span>Family Friendly?</span> <br/> {this.state.childFriendly}</div>
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