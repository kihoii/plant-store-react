import './GetInTouchForm.scss'

export const GetInTouchForm = () => {
    return (
        <div className="get-in-touch-form">
            <h4>Drop us a line or two</h4>
            <form name="contact-form" className="contact-form">
                <div className="form-input contact-form-input">
                    <label>Name <span>*</span></label>
                    <input type="text" id="name" placeholder="Full name" required />
                </div>
                <div className="form-input contact-form-input">
                    <label>Email <span>*</span></label>
                    <input type="text" id="email" placeholder="Email address" required />
                </div>
                <div className="form-input contact-form-input">
                    <label>Comment or Message <span>*</span></label>
                    <input type="text" id="comment" placeholder="Your message" required />
                </div>
                <button type="submit" className="button green wide-footer">Submit</button>
            </form>
        </div>
    )
}
