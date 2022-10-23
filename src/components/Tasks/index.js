import { Component } from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'


class Tasks extends Component {
    state = { item: '', description: ''}


    onChangeItem = event => {
        this.setState({ item: event.target.value })
    }

    onChangeDescription = event => {
        this.setState({ description: event.target.value })
    }

 


render(){
    return (
        <div className="task-container">
            <div className="form-container">
                <h1>Add New Item</h1>
                <form className="form" onSubmit={this.onSubmitForm}>
                    <div className="input-section-container">
                        <label className="label">Item Name</label>
                        <input type="text"  onChange={this.onChangeItem} />
                    </div>
                    <div className="input-section-container">
                        <label className="label">Attachment</label>
                        <input type="file" />

                    </div>
                    <div className="input-section-container">
                        <label className="label">Description</label>
                        <input type="text"  onChange={this.onChangeDescription} />
                    </div>

                    <h1>Default Section</h1>
                    <div className="input-section-container">
                        <label className="label">Assign Users</label>
                        <input type="contact" />
                    </div>
                    <div className="input-section-container">
                        <label className="label">Status</label>
                        <select className="language-dropdown" onChange={this.dropDown}>
                            <option value="To do">To do</option>
                            <option value="plannning">plannning</option>
                            <option value="QA Raised Bugs">QA Raised Bugs</option>
                            <option value="Re open">Re open</option>
                            <option value="In progress">In progress</option>
                            <option value="Ready to Test">Ready to Test</option>
                            <option value="Done">Done</option>
                        </select>
                    </div>

                    <div className="input-section-container">
                        <label className="label">Epic</label>
                        <select className="language-dropdown" >
                            <option value="None">None</option>
                            <option value="vendor Onboarding">vendor Onboarding (Market Place)</option>
                            <option value="Platform Release">Platform Release</option>
                            <option value="Marketing">Marketing</option>
                        </select>
                    </div>

                    <div className="input-section-container">
                        <label className="label">Item Type</label>
                        <select className="language-dropdown" >
                            <option value="Story">Story </option>
                            <option value="Task">Task</option>
                            <option value="Bug">Bug</option>

                        </select>
                    </div>

                    <div className="input-section-container">
                        <label className="label">Start Date</label>
                        <input type="date" />
                    </div>
                    <div className="input-section-container">
                        <label className="label">End Date</label>
                        <input type="date" />
                    </div>
                    <div className="input-section-container">
                        <label className="label">Duration</label>
                        <input type="time" />
                    </div>
                    <div className="input-section-container">
                        <label className="label">Estimation Points</label>
                        <input type="number" />
                    </div>
                    <div className="input-section-container">
                        <label className="label">Release</label>
                        <input type="text" />
                    </div>
                    <div className="button-container">
                        <Button variant="success" type="sumbit">Create</Button>
                        <Button className="btn">Add More</Button>
                        <Button className="btn">Cancel</Button>
                    </div>
                </form>
            </div>
            <div className="desc-container">
            <div className="todo-container">
                <h1 className="heading">To do</h1>
            </div>
            <div className="todo-container">
                <h1 className="heading">planning</h1>
            </div>
            <div className="todo-container">
                <h1 className="heading">QA Raised Bugs</h1>
            </div>
            <div className="todo-container">
                <h1 className="heading">Re open</h1>
            </div>
            <div className="todo-container">
                <h1 className="heading">In progress</h1>
            </div>
            <div className="todo-container">
                <h1 className="heading">Ready to Test</h1>
            </div>
            <div className="todo-container">
                <h1 className="heading">Done</h1>
            </div>
            </div>
        </div>
    )
}
}

export default Tasks