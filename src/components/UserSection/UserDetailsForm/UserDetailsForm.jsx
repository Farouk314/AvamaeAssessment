import React from 'react';
import { BoundInput } from "../BoundInput";
import './userDetailsForm.css';

class UserDetailsForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { activeTab: 0, formDetails: { firstName: "", lastName: "", email: "", phoneNumber: "" } };
    }

    onNextTab = () => {
        this.onSetActiveTab(1);
    }

    onSubmitForm = () => {
        alert("firstName: " + this.state.formDetails.firstName + "\n" +
            "lastName: " + this.state.formDetails.lastName + "\n" +
            "email: " + this.state.formDetails.email + "\n" + 
            "phoneNumber: " + this.state.formDetails.phoneNumber + "\n");
    }

    onSetActiveTab = (activeTab) => {
        this.setState({ activeTab });
    }

    render() {
        return (
            <div className="form-container">
                <div className="step-button-container">
                    <button
                        onClick={() => this.onSetActiveTab(0)}
                        className={`step-button ${this.state.activeTab === 0 && "step-button-active"}`}
                        type="button"
                    >
                        Step 1
                    </button>
                    <button
                        onClick={() => this.onSetActiveTab(1)}
                        className={`step-button ${this.state.activeTab === 1 && "step-button-active"}`}
                        type="button"
                    >
                        Step 2
                    </button>
                </div>
                <hr className="form-divider" />

                {this.state.activeTab === 0 &&
                    <div>
                        <h4 className="form-header">First name</h4>
                        <BoundInput id="firstName" onInputChange={this.onInputChange} />
                        <h4 className="form-header">Last name</h4>
                        <BoundInput id="lastName" onInputChange={this.onInputChange} />
                        <div className="form-button-container">
                            <button type="submit" onClick={this.onNextTab} className="form-button">Next</button>
                        </div>
                    </div>
                }

                {this.state.activeTab === 1 &&
                    <div>
                        <h4 className="form-header">Email</h4>
                        <BoundInput id="email" onInputChange={this.onInputChange} />
                        <h4 className="form-header">Phone number</h4>
                        <BoundInput id="phoneNumber" onInputChange={this.onInputChange} />
                        <div className="form-button-container" >
                            <button type="submit" onClick={this.onSubmitForm} className="form-button">Next</button>
                        </div>
                    </div>
                }

            </div>
        );
    }

    onInputChange = e => {
        e.persist();
        this.setState((prevState) => ({
            formDetails: { ...prevState.formDetails, [e.target.id]: e.target.value } 
         }));
    }

};

export default UserDetailsForm;