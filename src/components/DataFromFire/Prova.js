import React, { Component } from 'react'
import Fire from 'firebase'
import Moment from 'react-moment'
import 'moment-timezone'




export class Prova extends Component {
    constructor(props) {
        super()
        this.state = {
            session: []

        }
    }
    componentWillMount() {
        this.getUsers()
    }

    getUsers() {
        var session = [];
        Fire.database().ref("sessionsBySubjects/" + this.props.data.key).once('value', snapshot => {
            snapshot.forEach(snap => {
                session.push({
                    key: snap.key,
                    data: snap.val().start_time.time
                });
            })
            this.setState({ session: session });
        })
    }

    render() {

        if (this.state.session.length > 0) {
            return (
                <div>
                    <ul>
                        <hr />
                        {this.state.session.map(k =>
                            <li key={k.key}>
                                <Moment tz='Europe/Rome'  format="DD/MM/YY hh:mm">{k.data}</Moment>
                            </li>
                        )}
                    </ul>
                </div>
            )
        }
        else {
            return (
                <div><hr />Nessun esame<hr /></div>
            )
        }
    }
}


export default Prova


