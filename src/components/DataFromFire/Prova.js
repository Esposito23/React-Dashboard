import React, { Component } from 'react'
import Fire from 'firebase'



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
                    data: snap.val().start_time.date,
                    mese: snap.val().start_time.month,
                    anno: snap.val().start_time.year
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
                                Esame eseguito il {k.data} / {k.mese} / {k.anno} , La chiave esame {k.key}
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


