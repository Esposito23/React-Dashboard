import { UserCard } from "components/UserCard/UserCard.jsx";
import React, { Component } from 'react'
import avatar from "assets/img/faces/face-1.jpg";
import DataTable, { createTheme } from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import Fire from 'firebase'
import Moment from 'react-moment'
import 'moment-timezone'
import { Tabs, TabList, Tab, PanelList, Panel } from 'react-tabtab';

import { columns0, columns1, columns2, columns3, columns4 } from './Columns'

createTheme('mioTema', {
    text: {
        primary: 'black',
    },
    background: {
        default: 'white',
    }
});

const nRows = 5
const bool = true


export class Session extends Component {
    constructor(props) {
        super()
        this.state = {
            type0: [],
            type1: [],
            type2: [],
            type3: [],
            type4: [],
            info: [],
            gsr: []

        }
    }

    componentDidMount() {
        var session = [];
        var type0 = [];
        var type1 = [];
        var type2 = [];
        var type3 = [];
        var type4 = [];
        Fire.database().ref("sessions/" + this.props.history.location.state.keySess).once('value', snapshot => {
            session.push({

                tests: snapshot.child('tests').val(),
                start: snapshot.child('start_time/time').val(),
                end: snapshot.child('end_time/time').val(),
                events: snapshot.child('events').val()

            })
            for (let i in session[0].tests) {
                if (session[0].tests[i].type === 0) {
                    type0.push(session[0].tests[i])
                }
                else if (session[0].tests[i].type === 1) {
                    type1.push(session[0].tests[i])
                }
                else if (session[0].tests[i].type === 2) {
                    type2.push(session[0].tests[i])
                }
                else if (session[0].tests[i].type === 3) {
                    type3.push(session[0].tests[i])
                }
                else {
                    type4.push(session[0].tests[i])
                }

            }

            this.setState({
                type0: type0, type1: type1,
                type2: type2, type3: type3, type4: type4, info: session[0]
            })
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


        const tableData = {
            tipo0: {
                columns: columns0,
                data: this.state.type0
            },
            tipo1: {
                columns: columns1,
                data: this.state.type1
            },
            tipo2: {
                columns: columns2,
                data: this.state.type2
            },
            tipo3: {
                columns: columns3,
                data: this.state.type3
            },
            tipo4: {
                columns: columns4,
                data: this.state.type4
            }

        };

        return (
            <div style={{ paddingLeft: 30, paddingRight: 30 }}>
                <div style={{ paddingTop: 20 }}>
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
                <div style={{ textAlign: 'center', background: 'white', boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(63, 63, 68, 0.1)' }} >
                    <h3 className='pe-7s-clock'> Inizio esame <Moment tz='Europe/Rome' format="DD/MM/YY hh:mm">{this.state.info.start}</Moment> </h3><br />
                    <h3 className='pe-7s-less'> Durata esame <Moment tz='Europe/Rome' format="hh:mm">{this.state.info.end - this.state.info.start}</Moment></h3><hr />
                </div>
                <div style={{ boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(63, 63, 68, 0.1)' }} >
                    <Tabs showModalButton={false}>
                        <TabList>
                            <Tab><h4>Type 0</h4></Tab>
                            <Tab><h4>Type 1</h4></Tab>
                            <Tab><h4>Type 2</h4></Tab>
                            <Tab><h4>Type 3</h4></Tab>
                            <Tab><h4>Type 4</h4></Tab>
                        </TabList>
                        <PanelList>
                            <Panel>
                                <DataTableExtensions {...tableData.tipo0}  >
                                    <DataTable
                                        paginationComponentOptions={{ noRowsPerPage: true }}
                                        filter
                                        title="Lista zero"
                                        pagination={bool}
                                        paginationPerPage={nRows}
                                        theme="mioTema"
                                    />
                                </DataTableExtensions></Panel>
                            <Panel>
                                <DataTableExtensions {...tableData.tipo1}  >
                                    <DataTable
                                        paginationComponentOptions={{ noRowsPerPage: true }}
                                        filter
                                        title="Lista uno"
                                        pagination={bool}
                                        paginationPerPage={nRows}
                                        theme="mioTema"
                                    />
                                </DataTableExtensions></Panel>
                            <Panel>
                                <DataTableExtensions {...tableData.tipo2}  >
                                    <DataTable
                                        paginationComponentOptions={{ noRowsPerPage: true }}
                                        filter
                                        title="Lista tre"
                                        pagination={bool}
                                        paginationPerPage={nRows}
                                        theme="mioTema"
                                    />
                                </DataTableExtensions>
                            </Panel>
                            <Panel>
                                <DataTableExtensions {...tableData.tipo3}  >
                                    <DataTable
                                        paginationComponentOptions={{ noRowsPerPage: true }}
                                        filter
                                        title="Lista tre"
                                        pagination={bool}
                                        paginationPerPage={nRows}
                                        theme="mioTema"
                                    />
                                </DataTableExtensions></Panel>
                            <Panel>
                                <DataTableExtensions {...tableData.tipo4}  >
                                    <DataTable
                                        paginationComponentOptions={{ noRowsPerPage: true }}
                                        filter
                                        title="Lista quattro"
                                        pagination={bool}
                                        paginationPerPage={nRows}
                                        theme="mioTema"
                                    />
                                </DataTableExtensions></Panel>
                        </PanelList>
                    </Tabs>




                </div>














                <div style={{ textAlign: 'center', background: 'white', boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(63, 63, 68, 0.1)' }} >
                    <h1> Ci son anche io</h1>
                </div>

            </div >

        )
    }
}

export default Session










