import React from "react";
import jsonp from "jsonp";
import toQueryString from "to-querystring";

export default class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = { statusMessage: '', NAME: '', EMAIL: '', PHONE: '', MESSAGE: '', group: {961: {}}}
    }

    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    toggleCheckbox = value => {
        if (this.state.group[961][value]) {
            this.state.group[961][value] = null;
        } else {
            this.state.group[961][value] = value;
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        for (const checkbox of this.selectedCheckboxes) {
            this.state.group[961][checkbox] = checkbox
        }
        const params = toQueryString(this.state);
        const url = 'https://gmail.us20.list-manage.com/subscribe/post-json?u=e23d6c4c939fe3d0277691daa&amp;id=b1b8cbfe93' + "&" + params;

        jsonp(
            url,
            {
                param: "c"
            },
            (err, data) => {
                if (err) {
                    // this.setState({
                    //     status: "error",
                    //     statusMessage: err
                    // });
                } else if (data.result !== "success") {
                    this.setState({
                        status: "error",
                        statusMessage: data.msg
                    });
                } else {
                    this.setState({
                        status: "success",
                        statusMessage: "Sent!"
                    });
                }
            }
        )
    }

    render() {
        return (
            <div id="contactSection" className="section">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div className="statusMessageDiv">
                            Use the form below to drop us a message or simply call us at 9699638333
                        </div>
                        <div className="border">
                            <input placeholder="Name (optional)" type="text" value={this.state.NAME} name="NAME" className="textInput" onChange={this.handleInputChange}></input>
                        </div>
                        <div className="border">
                            <input placeholder="Email Address *" type="email" value={this.state.EMAIL} name="EMAIL" className="textInput" onChange={this.handleInputChange}></input>
                        </div>
                        <div className="border">
                            <input placeholder="Phone Number (optional)" type="text" value={this.state.PHONE} name="PHONE" className="textInput" onChange={this.handleInputChange}></input>
                        </div>
                        <div className="border">
                            <input placeholder="Message (optional)" type="text" value={this.state.MESSAGE} name="MESSAGE" className="textInput" onChange={this.handleInputChange}></input>
                        </div>
                        <div className="servicesInputDiv">
                            <p>Services interested in (optional)</p>
                            <ul className="servicesInputList">
                                <li><input type="checkbox" value="2" defaultChecked={this.state.group[961][2] === 2} onClick={() => this.toggleCheckbox(2)}></input><label>Video Production</label></li>
                                <li><input type="checkbox" value="4" defaultChecked={this.state.group[961][4] === 4} onChange={() => this.toggleCheckbox(4)}></input><label>Music Production</label></li>
                                <li><input type="checkbox" value="8" defaultChecked={this.state.group[961][8] === 8} onChange={() => this.toggleCheckbox(8)}></input><label>Event Coverage</label></li>
                                <li><input type="checkbox" value="16" defaultChecked={this.state.group[961][16] === 16} onChange={() => this.toggleCheckbox(16)}></input><label>Tech Communication</label></li>
                            </ul>
                        </div>

                        <div className="clear"><input type="submit" value="Send" name="subscribe" className="submitButton"></input></div>
                        {this.state.statusMessage}
                    </div>
                </form >
            </div >
        )
    }
}