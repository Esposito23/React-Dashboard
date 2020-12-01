import React, { Component } from 'react'
import DataFromFire from '../components/DataFromFire/Subjects'
// import SessionBySub from '../components/DataFromFire/SessionBySub'
export class FireBaseData extends Component {



    render() {
        return (
            <div>
                <DataFromFire />
                <hr />
            </div>
        )
    }
}

export default FireBaseData



