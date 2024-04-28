import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {
    const [contactData, setContactData] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        address: ''
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContactData({ ...contactData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contactData);
        navigate("/"); 
    };

    return (
        <div className="container mt-5">
            <h2>Add New Contact</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter name" onChange={handleInputChange} value={contactData.name} />
                </div>

                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Enter last name" onChange={handleInputChange} value={contactData.lastName} />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" onChange={handleInputChange} value={contactData.email} />
                </div>

                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" id="phone" name="phone" placeholder="Enter phone number" onChange={handleInputChange} value={contactData.phone} />
                </div>

                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" name="address" placeholder="Enter address" onChange={handleInputChange} value={contactData.address} />
                </div>

                <button type="submit" className="btn btn-primary">Save Contact</button>
                <p><a href="/" class="link-primary">Or go back to the contact list</a></p>

            </form>
        </div>
    );
};

export default AddContact;
