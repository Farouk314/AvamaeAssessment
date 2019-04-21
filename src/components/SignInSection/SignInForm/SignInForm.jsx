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
            <div className='form-container'>
                <div className="form-tabs">
                    <button onClick={() => this.onSetTab(0)} className="step-button" type="button">Step 1</button>
                    <button onClick={() => this.onSetTab(1)} className="step-button" type="button">Step 2</button>
                    <hr className="form-divider" />
                </div>

                {this.state.tab === 0 &&
                    <>
                        <h4>First name</h4>
                        <input type="text" />
                        <h4>Last name</h4>
                        <input type="text" />
                        <button type="submit" onClick={this.onNextTab}>Next</button>
                    </>
                }

                {this.state.tab === 1 &&
                    <>
                        <h4>Email</h4>
                        <input type="text" />
                        <h4>Phone number</h4>
                        <input type="text" />
                        <button type="submit" onClick={this.onSubmitForm}>Submit</button>
                    </>
                }

            </div>
        );
    }

};

export default SignInForm;