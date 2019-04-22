import React from 'react';
import './signInForm.css'

class SignInForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { tab: 0, activeTab: 0 };
    }

    onNextTab = () => {
        this.onSetTab(1);
    }

    onSubmitForm = () => {
        alert("Alerts are bad!");
    }

    onSetTab = (tab) => {
        this.setState({ tab });
    }

    render() {
        return (
            <div className="form-container">
                <div className="step-button-container">
                    <button onClick={() => this.onSetTab(0)} className="step-button" type="button">Step 1</button>
                    <button onClick={() => this.onSetTab(1)} className="step-button" type="button">Step 2</button>
                </div>
                <hr className="form-divider" />

                {this.state.tab === 0 &&
                    <div>
                        <h4 className="form-header">First name</h4>
                        <input type="text" className="input-box" />
                        <h4 className="form-header">Last name</h4>
                        <input type="text" className="input-box" />
                        <div className="form-button-container">
                            <button type="submit" onClick={this.onNextTab} className="form-button">Next</button>
                        </div>
                    </div>
                }

                {this.state.tab === 1 &&
                    <div>
                        <h4 className="form-header">Email</h4>
                        <input type="text" className="input-box" />
                        <h4 className="form-header">Phone number</h4>
                        <input type="text" className="input-box" />
                        <div className="form-button-container" >
                            <button type="submit" onClick={this.onSubmitForm} className="form-button">Submit</button>
                        </div>
                    </div>
                }

            </div>
        );
    }

};

export default SignInForm;