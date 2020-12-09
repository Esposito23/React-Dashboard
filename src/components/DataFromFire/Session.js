import { UserCard } from "components/UserCard/UserCard.jsx";
import React, { Component } from 'react'
import avatar from "assets/img/faces/face-1.jpg";
// import ChartistGraph from "react-chartist";
import Fire from 'firebase'

import Moment from 'react-moment'
import 'moment-timezone'

export class Session extends Component {
    constructor(props) {
        super()
        this.state = {
            info: []

        }
    }

    componentDidMount() {

        var session = [];
        Fire.database().ref("sessions/" + this.props.history.location.state.keySess).on('value', snapshot => {
            // console.log(snapshot.toJSON().events)
            session.push({
                complete: snapshot.toJSON().complete,
                end: snapshot.toJSON().end_time.time,
                start: snapshot.toJSON().start_time.time,
                events: snapshot.toJSON().events,
                tests: snapshot.toJSON().tests
            })

            // snapshot.forEach(snap => {
            //     // console.log(snap.toJSON())

            //     session.push(snap.toJSON());
            // })
            console.log(session[0].start)
            this.setState({ info: session[0] })
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

                <div>
                    <h1>
                        <p>{this.state.info.end}</p>
                    <Moment tz='Europe/Rome' format="DD/MM/YY hh:mm">{this.state.info.start}</Moment>

                    </h1>

                </div>
            </div >

        )
    }
}

export default Session




