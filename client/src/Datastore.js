import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Datastore = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    getusers()
  }, [])
  const getusers = () => {
    axios.get('http://localhost:5000/task/getusers')
      .then(response => response.data)
      .then(data => setUsers(data))
      .catch(err => console.log(err))
  }
  const deletehandler = (id) => {
    axios.delete(`http://localhost:5000/task/user/${id}`)
      .then((res) => {
        getusers()

      }).catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col'>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Mobile Number</th>
                <th>State</th>
                <th>City</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((elem) => {
                  return (
                    <tr>
                      <td>{elem._id}</td>
                      <td>{elem.username}</td>
                      <td>{elem.email}</td>
                      <td>{elem.password}</td>
                      <td>{elem.number}</td>
                      <td>{elem.state}</td>
                      <td>{elem.city}</td>
                      <td>
                        <Link to={`/update/${elem._id}`}> <i className="fa-solid fa-pen-to-square mr-4"></i></Link>
                        <i className="fa-solid fa-trash" onClick={() => deletehandler(elem._id)}></i>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Datastore