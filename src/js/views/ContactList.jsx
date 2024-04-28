import React from 'react';
import { Link } from 'react-router-dom';

const ContactList = ({ contacts }) => {
    const handleDelete = (index) => {
        // Delete logic here
    };

    return (
        <div className="container mt-5">
             <div className="d-flex justify-content-between mb-3">
                <h1>Contact List</h1>
                <Link to="/add" className="btn btn-success m-2">Add New Contact</Link>
            </div>
        </div>
    );
};

export default ContactList;
