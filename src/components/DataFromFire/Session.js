import { UserCard } from "components/UserCard/UserCard.jsx";
import React, { Component } from 'react'
import avatar from "assets/img/faces/face-1.jpg";

import Fire from 'firebase'

export class Session extends Component {


    constructor(props) {
        super()
        this.state = {
            session: []

        }
    }
    componentWillMount() {
        this.getSession()
    }

    getSession() {
        var session = [];
        Fire.database().ref("sessions/" + this.props.history.location.state.keySess).on('value', snapshot => {
            // session.push(snapshot.val().events)
            // console.log(snapshot.val().events)
            snapshot.forEach(snap => {
                session.push(snap.val())
                    // console.log(snap.val())
            })
            // console.log(session)

            this.setState({ session: session[2] });
            console.log(this.state.session)

        })
    }

    render() {
        return (
            <div>
                <div className='content'>
                    <UserCard
                        bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                        avatar={avatar}
                        name={this.props.history.location.state.name}
                        description={
                            <p>
                                Sesso ({this.props.history.location.state.gender})<br />
                                Eta'  {this.props.history.location.state.age}
                            </p>}
                    />
                </div>

                <div className='content'>
                    <h1>

Azzippa la tab
                    </h1>

                </div>
            </div>

        )
    }
}

export default Session
