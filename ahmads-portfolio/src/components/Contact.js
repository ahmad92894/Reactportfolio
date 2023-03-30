import React from 'react';

function Contact() {
    return (
        <div> 
            <form action="/action_page.php">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name:</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="please enter your name"></input>
                <label htmlFor="exampleFormControlInput2" className="form-label">Email address:</label>
                <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com"></input>
            </form>
            <form action="/action_page.php">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Please leave your message here...</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
};

export default Contact;