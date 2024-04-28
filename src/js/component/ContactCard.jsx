import React, { useContext } from "react";
import { Contact, Context } from "../store/appContext";

export const ContactCard = () => {
    const { store } = useContext(Context)
    return (
        <div>
            <div className="container d-flex flex-column">
                <div className="btn">Add new contact</div>
                <div className="">

                    <div>
                        <div>
                            <ul>
                                {store.contacts.map((item => {
                                    return (
                                        <div key={Contact}>
                                            <li>
                                                <p>Name:</p>
                                                <img src={rigoImage}></img>
                                                <p>Phone:</p>
                                                <p>Email:</p>
                                                <p>Address:</p>
                                                <p>Id:</p>
                                            </li>
                                        </div>
                                    )
                                }
                                ))}
                            </ul>
                        </div>
                        <div>Buttons</div>
                    </div>

                </div>
            </div>
        </div>
    )
}