import React, { Component } from 'react';

class FetchAPIClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    getData = () => {
        fetch("https://jsonplaceholder.typicode.com/users").then((jsonData) => {
            console.log(jsonData)
            if (jsonData.status === 200)
                return jsonData.json()
        }).then((objectData) => {
            this.setState({ data: [...objectData] })
            console.log(objectData)
            return objectData
        }).catch((err) => {
            console.log(err);
        })
    }

    componentDidMount() {
        this.getData();
    }
    render() {
        return (<>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>company</th>
                    <th>Phone no</th>
                    <th>Website</th>


                </tr>
            </table>
            {this.state.data?.map((user, index) => {
                return (<tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address.street}</td>
                    <td>{user.company.name}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                </tr>)
            })}
        </>);
    }
}

export default FetchAPIClass;