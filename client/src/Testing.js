import React, { useState, useEffect } from 'react'
import { Navigate, Link, useParams, json } from 'react-router-dom'
import axios from 'axios'
const Updatesignupform = () => {
  const userId = useParams().id
  const [formvalues, setFormvalues] = useState({ username: '', email: '', password: '', number: '', state: '', city: '', checkbox: '' })
  const [formerrors, setFormerrors] = useState({})
  const [issubmit, setIssubmit] = useState(false)
  //const [submitted,setSubmitted]=useState(false)
  const changehandler = (e) => {
    setFormvalues({ ...formvalues, [e.target.name]: e.target.value })
  }
  const submithandler = (e) => {
    e.preventDefault()
    console.log(formvalues)
    setFormerrors(validate(formvalues))
    setIssubmit(true)
    axios.put(`http://localhost:5000/task/user/${userId}`, formvalues)
  }
  useEffect(() => {
    if (Object.keys(formerrors).length === 0 && issubmit) {
      console.log(formerrors)
    }
    axios.get(`http://localhost:5000/task/user/${userId}`)
      .then(response => setFormvalues(response.data))
      .catch(err => console.log(err))

  }, [])
  const validate = (values) => {
    const errors = {}
    //const onlystrings=/^[a-zA-Z\s]*$/g
    //const onlyletters=/^[a-zA-Z]*$/ 
    const isemail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$/
    if (!values.username) {
      errors.username = '*This field  is Required'
    }
    /*  else if(!values.username.match(onlystrings)){
       errors.fname='Enter Only Alphabets'
     } */
    if (!values.email) {
      errors.email = '*This field  is Required'
    }
    else if (!values.email.match(isemail)) {
      errors.email = 'This is not Valid Email Format'
    }
    if (!values.number) {
      errors.number = 'This is Field is required'
    }
    else if (values.number.length < 10) {
      errors.number = 'Mobile number  must be 10 digit Number'
    }
    else if (values.number.length > 10) {
      errors.number = 'Mobile number  cannot be exceed more than 10 digit Number'
    }
    if (!values.password) {
      errors.password = '*This field  is Required'
    }
    else if (values.password.length < 6) {
      errors.password = 'Passsword must be Atleast 6 charcters'
    }
    else if (values.password.length > 8) {
      errors.password = 'Passsword  cannot be exceed more than 8 charcters'
    }
    if (!values.state) {
      errors.state = 'This is field is required'
    }
    if (!values.city) {
      errors.city = 'This is field is required'
    }
    if (!values.checkbox) {
      errors.checkbox = '*This field  is Required'
    }
    return errors
  }
  return (
    <div>


      <section className="h-100 h-custom gradient-custom-2" style={{ backgroundColor: 'skyblue' }}>
        <div className="container py-5 h-50">

          <pre>{JSON.stringify(formvalues)}</pre>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body p-0">
                  <form onSubmit={submithandler}>
                    <h1 className='text-uppercase text-center  text-white bg-secondary'> Update Signup form</h1>
                    <div className="row g-0">
                      <div className="col">
                        <div className="p-3">
                          <h2 className="text-uppercase text-center ">Update an account</h2><hr></hr>

                          <div className="row">
                            <div className="col-md-6 mb-1 pb-1">
                              <div className="form-group mb-4">
                                <input type="text" className=" form-control form-control-lg" name='username' value={formvalues.username} onChange={changehandler} />
                                <label className="form-label">Name</label>
                                <p className='text-danger'>{formerrors.username}</p>
                              </div>
                            </div>
                            <div className="col-md-6 mb-1 pb-1">
                              <div className="form-group mb-4">
                                <input type="text" className="form-control form-control-lg" name='email' value={formvalues.email} onChange={changehandler} />
                                <label className="form-label">Email</label>
                                <p className='text-danger'>{formerrors.email}</p>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-6 mb-1 pb-1">
                              <div className="form-group mb-4">
                                <input type="password" className=" form-control form-control-lg" name='password' value={formvalues.password} onChange={changehandler} />
                                <label className="form-label">Password</label>
                                <p className='text-danger'>{formerrors.password}</p>
                              </div>
                            </div>
                            <div className="col-md-6 mb-1 pb-1">
                              <div className="form-group mb-4">
                                <input type="text" className="form-control form-control-lg" name='number' value={formvalues.number} onChange={changehandler} />
                                <label className="form-label">Mobile Number</label>
                                <p className='text-danger'>{formerrors.number}</p>
                              </div>
                            </div>
                          </div>



                          <div className="row">
                            <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">

                              <div className="form-outline">
                                <input type="text" className="form-control form-control-lg" name='state' value={formvalues.state} onChange={changehandler} />
                                <label className="form-label">State</label>
                                <p className='text-danger'>{formerrors.state}</p>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-outline">
                                <input type="text" className="form-control form-control-lg" name='city' value={formvalues.city} onChange={changehandler} />
                                <label className="form-label"> City</label>
                                <p className='text-danger'>{formerrors.city}</p>
                              </div>
                            </div>
                          </div>
                          <div className="form-check d-flex justify-content-start  pb-2">
                            <input className="form-check-input me-5" type="checkbox" name='checkbox' value='checkbox' onChange={changehandler} />
                            <label className="form-check-label-black" >
                              I  Accept the <a href="#!" className="text-black"><u>Terms and Conditions</u></a> of your
                              site.
                            </label>
                            <p className='text-danger'>{formerrors.checkbox}</p>
                          </div>
                          <button type="submit" className="btn btn-success  btn-lg">Register</button>
                          <p className="text-center text-muted mb-0">Have already an account? <Link to='/login'
                            className="fw-bold text-body"><u>Login here</u></Link></p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Updatesignupform