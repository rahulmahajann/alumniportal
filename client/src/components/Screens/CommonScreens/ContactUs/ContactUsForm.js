import React, {useState} from 'react';

const initialValue = {
    userName: '',
    userEmail: '',
    userPhoneNo: '',
    subject: '',
    message: ''
}

function ContactUsForm(){

    const [formData, setFormData] = useState(initialValue);

    const updateValue = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    
    const submitFormValue = (e) => {
        // console.log('submit button clicked FROM contactUs');
        console.log('formData', formData);
    }

    return(
        <div>
            <h4>Please use the form below to contact us</h4>
            <div>
                <div>
                    <div className = 'group' >
                        <label>Name</label>
                        <input type = 'text' onChange = { (e) => updateValue(e)} name = 'userName' placeholder = 'Name' />
                    </div>

                    <div className = 'group'>
                        <label>Personal Email ID</label>
                        <input type = 'email' onChange = { (e) => updateValue(e)} name = 'userEmail' placeholder = 'EmailId' />
                    </div>

                    <div className = 'group'>
                        <label>Contact No.*</label>
                        <input type = 'number' onChange = { (e) => updateValue(e)} name = 'userPhoneNo' placeholder = 'Phone Number' />
                    </div>

                    <div className = 'group'>
                        <label>Subject*</label>
                        <input type = 'text' onChange = { (e) => updateValue(e)} name = 'subject' placeholder = 'Subject' />
                    </div>

                    <div className = 'group'>
                        <label>Message*</label>
                        <textarea rows = '4' cols = '50' onChange = { (e) => updateValue(e)} name = "message" placeholder = 'Message' />
                    </div>     
                </div>
            </div>
            <div>
                CAPTCHA
            </div>
            <button onClick = { (e) => submitFormValue(e) } >SUBMIT</button>
        </div>

    )
}

export default ContactUsForm;