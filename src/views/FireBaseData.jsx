import React, { Component } from 'react'
import DataFromFire from '../components/DataFromFire/Subjects'

export class FireBaseData extends Component {



    render() {
        return (
            <div>
                <DataFromFire />
                <hr />
                {/* <DataFromFire /> */}

            </div>
        )
    }
}

export default FireBaseData



