import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const Loginform = () => {
  const [formvalues, setFormvalues] = useState({ email: '', password: '' })
  const [formerrors, setFormerrors] = useState({})
  const [issubmit, setIssubmit] = useState(false)
 
  const changehandler = (e) => {
    setFormvalues({ ...formvalues, [e.target.name]: e.target.value })
  }
  const submithandler = (e) => {
    e.preventDefault()
    console.log(formvalues)
    setFormerrors(validate(formvalues))
    setIssubmit(true)
  }
  useEffect(() => {
    if (Object.keys(formerrors).length === 0 && issubmit) {
      console.log(formerrors)
    }
  }, [formerrors, issubmit])
  const validate = (values) => {
    const errors = {}
    const isemail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,63})$/
    if (!values.email) {
      errors.email = '*This Field is Required'
    }
    else if (!values.email.match(isemail)) {
      errors.email = '*This is not Email Format'
    }
    if (!values.password) {
      errors.password = '*This Field is required'
    }
    else if (values.password.length < 5) {
      errors.password = 'Pasword must be more than 5 numbers'
    }
    else if (values.password.length > 8) {
      errors.password = 'Password cannot be exceed more than 8 numbers'
    }
    return errors
  }
  return (
    <div>
      <section className="vh-100 bg-image" style={{ backgroundColor: 'lightblue' }}>
        <div className="d-flex align-items-center h-100 ">
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRaduis: 20 }}>
                  <h1 className='text-uppercase text-center bg-secondary text-white md-3'>Login form</h1>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Login Account</h2>
                    <hr />
                    <form onSubmit={submithandler}>
                      <div className="form-outline mb-4">
                        <input type="text" className="form-control form-control-lg" name='email' value={formvalues.email} onChange={changehandler} />
                        <label className="form-label">Enter your Mail</label>
                        <p className='text-danger'>{formerrors.email}</p>
                      </div>
                      <div className="form-outline mb-4">
                        <input type="password" className="form-control form-control-lg" name='password' value={formvalues.password} onChange={changehandler} />
                        <label className="form-label">Enter Your Password</label>
                        <p className='text-danger'>{formerrors.password}</p>
                      </div>
                      <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label"> Remember me </label>
                          </div>
                        </div>
                        <div className="col">
                          <a href="#!">Forgot password?</a>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button type="submit"
                          className="btn btn-primary btn-block  btn-lg ">Login</button>
                      </div>

                      <div className="text-center">
                        <p>Not a member?  <Link to='/signup'>Register</Link></p>
                        <p>or sign up with:</p>
                        <button type="button" className="btn btn-link btn-floating mx-1">
                          <i className="fab fa-facebook-f"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                          <i className="fab fa-google"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                          <i className="fab fa-twitter"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                          <i className="fab fa-github"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Loginform