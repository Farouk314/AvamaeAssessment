import React from 'react';
import { BoundInput } from "../BoundInput";
import './userDetailsForm.css';

interface State {
    activeTab: number;
    formDetails: { firstName: string, lastName: string, email: string, phoneNumber: string };
}

class UserDetailsForm extends React.Component<object, State> {

    public state = { activeTab: 0, formDetails: { firstName: "", lastName: "", email: "", phoneNumber: "" } };

    private onNextTab = () => {
        this.onSetActiveTab(1);
    }

    private onSubmitForm = () => {
        alert("First Name: " + this.state.formDetails.firstName + "\n" +
            "Last Name: " + this.state.formDetails.lastName + "\n" +
            "Email: " + this.state.formDetails.email + "\n" + 
            "Phone Number: " + this.state.formDetails.phoneNumber + "\n");
    }

    private onSetActiveTab = (activeTab: number) => {
        this.setState({ activeTab });
    }

    public render() {
        return (
            <div className="form-container">
                <div>
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

    onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const currentTargetId = e.currentTarget.id;
        const currentTargetValue = e.currentTarget.value;
        this.setState((prevState) => ({
            formDetails: { ...prevState.formDetails, [currentTargetId]: currentTargetValue } 
         }));
    }

};

export default UserDetailsForm;
