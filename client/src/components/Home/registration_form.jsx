import React, { Component } from 'react'
import '../../componentCSS/registrationForm.css'
 class RegistrationForm extends Component {
  render() {
    return (
      <section className="container">
        <div className="about">
            <h1>About</h1>
            <textarea className="text-area"></textarea>
           </div>
      </section>
    )
  }
}
export default RegistrationForm
