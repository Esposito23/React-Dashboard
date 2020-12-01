import React, { Component } from 'react'
import DataTable, { createTheme } from 'react-data-table-component';
import Fire from 'firebase'

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


class App extends Component {
  constructor(props) {
    super()
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    this.getUsers()
  }

  getUsers() {
    let data = []
    Fire.database().ref(`sessionsBySubjects/-MN3CsUJiQPLnlg4-TWs/-MN3ExQaawrSGAY2OfKZ/`).once('value', snapshot => {
      snapshot.forEach(snap => {
        data.push(snap.val())
      })
      this.setState({
        data
      })
    })
  }
  render() {
    const columns =
      [
        {
          name: 'date',
          selector: 'date',
          sortable: true
        },
        {
          name: 'day',
          selector: 'day',
          sortable: true
        } 
      ]

    return (
      <div>
        <div>

          <DataTable
            paginationComponentOptions={{ noRowsPerPage: true }}
            title="List Subjects"
            pagination={bool}
            paginationPerPage={nRows}
            theme="mioTema"
            data={this.state.data}
            columns={columns}
          />
        </div>
      </div>
    )
  }
}

export default App