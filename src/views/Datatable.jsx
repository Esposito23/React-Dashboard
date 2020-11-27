import React, { Component } from "react";
import DataTable, { createTheme } from 'react-data-table-component';

createTheme('mioTema', {
    text: {
        primary: 'black',
    },
    background: {
        default: 'white',
    }
});


const data = [
    { id: 1, title: 'Revenant', commento: 'MINCHIA !!', year: '2015' },
    { id: 2, title: 'The Wolf', commento: 'Spettacolore', year: '2013' },
    { id: 3, title: 'Django', commento: 'Carino', year: '2012' },
    { id: 4, title: 'Ganhs Of NewYork', commento: 'Favoloso', year: '2002' }
];

const columns = [
    {
        name: 'Title',
        selector: 'title',
        sortable: true,
    },
    {
        name: 'Commento',
        selector: 'commento'
    },
    {
        name: 'Year',
        selector: 'year',
        sortable: true
    },
];



class TableList extends Component {


    constructor(props) {
        super()
        this.state = {
            id: '9999',
            title: 'sadsa',
            commento: 'asdasd',
            year: '232',
        }
    }


    Stampa = (state) =>{
        console.log(state)
    }

    render() {
        return (
            <div>
                <DataTable
                    title="Film di Leonardo Di Caprio"
                    columns={columns}
                    data={data}
                    theme="mioTema"
                    onRowClicked={this.Stampa}
                />
            </div>
        );
    }
}

export default TableList;



