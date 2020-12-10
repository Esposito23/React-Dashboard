import { UserCard } from "components/UserCard/UserCard.jsx";
import React, { Component } from 'react'
import avatar from "assets/img/faces/face-1.jpg";
import DataTable, { createTheme } from 'react-data-table-component';
import Fire from 'firebase'

import Moment from 'react-moment'
import 'moment-timezone'


createTheme('mioTema', {
    text: {
        primary: 'black',
    },
    background: {
        default: 'white',
    }
});

const nRows = 3
const bool = true




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
                tests: Object.values(snapshot.toJSON().tests)
            })

            this.setState({ info: session[0] })
            console.log(this.state.info.tests)
        })
    }




    render() {
        const columns =
            [
                {
                    name: 'Complete',
                    selector: 'completed',
                    cell: row => (row.completed === true ? <div>True</div> : <div>False</div>)

                },
                {
                    name: 'Confirm',
                    selector: 'confirm',
                    sortable: true,
                    cell: row => (row.confirm === true ? <div>True</div> : <div>False</div>)

                },
                {
                    name: 'Fake',
                    selector: 'fake',
                    sortable: true,
                    cell: row => (row.fake === true ? <div>True</div> : <div>False</div>)

                },
                {
                    name: 'Feedback',
                    selector: 'feedback',
                    sortable: true,

                },
                {
                    name: 'Start',
                    selector: 'start',
                    sortable: true,
                    cell: row => (<Moment tz='Europe/Rome' format="hh:mm:ss">{row.start}</Moment>)
                },
                {
                    name: 'Stop',
                    selector: 'stop',
                    sortable: true,
                    cell: row => (<Moment tz='Europe/Rome' format="hh:mm:ss">{row.stop}</Moment>)
                },
                {
                    name: 'Touch_event',
                    selector: 'touche_event',
                    sortable: true
                },
                {
                    name: 'Type',
                    selector: 'type',
                    sortable: true
                },
                {
                    name: 'Valid',
                    selector: 'valid',
                    sortable: true,
                    cell: row => (row.valid === true ? <div>True</div> : <div>False</div>)

                },
            ]




        return (
            <div>
                <div className='card'>
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
                <div className='cdescription text-center card'>
                    <hr />
                    <h3 className='pe-7s-clock'> Inizio esame <Moment tz='Europe/Rome' format="DD/MM/YY hh:mm">{this.state.info.start}</Moment> </h3><br />
                    <h3 className='pe-7s-less'> Durata esame <Moment tz='Europe/Rome' format="hh:mm">{this.state.info.end - this.state.info.start}</Moment></h3><hr />
                </div>




                <div className='card'>
                    <DataTable
                        paginationComponentOptions={{ noRowsPerPage: true }}
                        title="Lista Tests"
                        pagination={bool}
                        paginationPerPage={nRows}
                        theme="mioTema"
                        columns={columns}
                        data={this.state.info.tests}
                    />
                </div>

            </div >

        )
    }
}

export default Session




