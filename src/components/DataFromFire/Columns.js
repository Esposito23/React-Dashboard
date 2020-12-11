import Moment from 'react-moment'
import 'moment-timezone'
import React from 'react'

export const columns0 =
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
            name: 'Valid',
            selector: 'valid',
            sortable: true,
            cell: row => (row.valid === true ? <div>True</div> : <div>False</div>)

        },
    ];


export const columns1 =
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
            name: 'feedback_force',
            selector: 'feedback_force',
            sortable: true,

        },
        {
            name: 'limit',
            selector: 'limit',
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
            name: 'Valid',
            selector: 'valid',
            sortable: true,
            cell: row => (row.valid === true ? <div>True</div> : <div>False</div>)

        },
    ];


export const columns2 =
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
            name: 'feedback_temperature',
            selector: 'feedback_temperature',
            sortable: true,

        },
        {
            name: 'limit',
            selector: 'limit',
            sortable: true,

        },
        {
            name: 'setpoint',
            selector: 'setpoint',
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
            name: 'Valid',
            selector: 'valid',
            sortable: true,
            cell: row => (row.valid === true ? <div>True</div> : <div>False</div>)

        },
    ];


export const columns3 =
    [{
        name: 'amplitude',
        selector: 'amplitude',
        sortable: true,

    },
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
        name: 'feedback_amplitude',
        selector: 'feedback_amplitude',
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
        name: 'Valid',
        selector: 'valid',
        sortable: true,
        cell: row => (row.valid === true ? <div>True</div> : <div>False</div>)

    },
    ];


export const columns4 =
    [{
        name: 'amplitude',
        selector: 'amplitude',
        sortable: true,

    },
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
        name: 'feedback_amplitude',
        selector: 'feedback_amplitude',
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
        name: 'Valid',
        selector: 'valid',
        sortable: true,
        cell: row => (row.valid === true ? <div>True</div> : <div>False</div>)

    },
    ];

