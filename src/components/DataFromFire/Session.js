import { UserCard } from "components/UserCard/UserCard.jsx";
import React, { Component } from 'react'
import avatar from "assets/img/faces/face-1.jpg";
import MaterialTable from 'material-table';

// import DataTable, { createTheme } from 'react-data-table-component';
import Fire from 'firebase'
import Moment from 'react-moment'
import 'moment-timezone'




// createTheme('mioTema', {
//     text: {
//         primary: 'black',
//     },
//     background: {
//         default: 'white',
//     }
// });

// const nRows = 3
// const bool = true




export class Session extends Component {
    constructor(props) {
        super()
        this.state = {
            info: [],
            gsr: []

        }
    }

    componentDidMount() {

        var session = [];
        Fire.database().ref("sessions/" + this.props.history.location.state.keySess).once('value', snapshot => {
            session.push({

                tests: snapshot.child('tests').val(),
                start: snapshot.child('start_time/time').val(),
                end: snapshot.child('end_time/time').val(),
                events: snapshot.child('events').val()

            })

            this.setState({ info: session[0] })
            console.log(this.state.info)
        })
    }

    getEvents() {
        const gsr = [];

        for (let i in this.state.info.events) {
            // console.log(this.state.info.events[i]);

            if (this.state.info.events[i].code === 'GSR') {
                gsr.push({
                    millis: this.state.info.events[i].mills,
                    value: this.state.info.events[i].value,

                })

            }
        }
        this.setState({ gsr: gsr })
        // console.log(this.state.gsr)
    }


    render() {
        // const columns =
        //     [
        //         {
        //             name: 'Complete',
        //             selector: 'completed',
        //             cell: row => (row.completed === true ? <div>True</div> : <div>False</div>)

        //         },
        //         {
        //             name: 'Confirm',
        //             selector: 'confirm',
        //             sortable: true,
        //             cell: row => (row.confirm === true ? <div>True</div> : <div>False</div>)

        //         },
        //         {
        //             name: 'Fake',
        //             selector: 'fake',
        //             sortable: true,
        //             cell: row => (row.fake === true ? <div>True</div> : <div>False</div>)

        //         },
        //         {
        //             name: 'Feedback',
        //             selector: 'feedback',
        //             sortable: true,

        //         },
        //         {
        //             name: 'Start',
        //             selector: 'start',
        //             sortable: true,
        //             cell: row => (<Moment tz='Europe/Rome' format="hh:mm:ss">{row.start}</Moment>)
        //         },
        //         {
        //             name: 'Stop',
        //             selector: 'stop',
        //             sortable: true,
        //             cell: row => (<Moment tz='Europe/Rome' format="hh:mm:ss">{row.stop}</Moment>)
        //         },
        //         {
        //             name: 'Touch_event',
        //             selector: 'touche_event',
        //             sortable: true
        //         },
        //         {
        //             name: 'Type',
        //             selector: 'type',
        //             sortable: true
        //         },
        //         {
        //             name: 'Valid',
        //             selector: 'valid',
        //             sortable: true,
        //             cell: row => (row.valid === true ? <div>True</div> : <div>False</div>)

        //         },
        //     ]

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

                <div className='card' style={{ paddingLeft: 30, paddingRight: 30 }}>
                    <MaterialTable

                        className='cdescription text-center card'
                        columns={[
                            { title: 'Completed', field: 'completed', searchable: false, headerStyle:{
                                fontSize:25
                            }},
                            { title: 'confirm', field: 'confirm', searchable: false },
                            { title: 'Valid', field: 'valid', searchable: false },
                            { title: 'Type', field: 'type', type: 'int' },
                            { title: 'Touch_event', field: 'touche_event', searchable: false },
                            { title: 'Stop', field: 'stop', render: row => (<Moment tz='Europe/Rome' format="hh:mm:ss">{row.stop}</Moment>), searchable: false },
                            { title: 'Start', field: 'start', render: row => (<Moment tz='Europe/Rome' format="hh:mm:ss">{row.start}</Moment>), searchable: false }

                        ]}
                        data={this.state.info.tests}
                        title="Lista Tests"
                        options={{
                            
                            // headerStyle:{fontSize:24},
                            // searchFieldStyle:{fontSize:25},
                            exportCsv: true,
                            exportButton: true,
                            rowStyle: {
                                backgroundColor: '#EEE',
                            }
                        }}
                    />
                </div>


                <div className='cdescription text-center card'>
                    Pippo mioooo
            </div>

            </div >

        )
    }
}

export default Session






                // complete: snapshot.toJSON().complete,
                // end: snapshot.toJSON().end_time.time,
                // start: snapshot.toJSON().start_time.time,
                // events: Object.values(snapshot.toJSON().events),
                // tests: Object.values(snapshot.toJSON().tests)



                // <DataTable
                // paginationComponentOptions={{ noRowsPerPage: true }}
                // filter
                // title="Lista Tests"
                // pagination={bool}
                // paginationPerPage={nRows}
                // theme="mioTema"
                // columns={columns}
                // data={this.state.info.tests} />



            //     <Tabs >
            //     <TabList className='cdescription text-center card'>
            //         <Tab>Tab1</Tab>
            //         <Tab>Tab2</Tab>
            //     </TabList>
            //     <PanelList>
            //         <Panel>

            //         </Panel>

            //         <Panel>Content2</Panel>
            //     </PanelList>
            // </Tabs>