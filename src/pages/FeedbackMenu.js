import React, { useState } from 'react'
import Issue from '../components/Issue.js'
import Feedback from '../components/Feedback.js'
import Suggestions from './../components/Suggestions.js';
import Contact from './../components/Contact.js';

const FeedbackMenu = ({ setOpen, setMsg }) => {

    const [issue, setIssue] = useState(false)
    const [feedback, setFeedback] = useState(false)
    const [suggestion, setSuggestion] = useState(false)
    const [contact, setContact] = useState(false)
    const [choosen, setChoosen] = useState(false)

    const handleFormType = (t) => {
        if (t == "issue") {
            setIssue(true);
            setFeedback(false);
            setSuggestion(false);
            setContact(false);
            setChoosen(true);
        }
        else if (t == "feedback") {
            setIssue(false);
            setFeedback(true);
            setSuggestion(false);
            setContact(false);
            setChoosen(true);
        }
        else if (t == "suggestion") {
            setIssue(false);
            setFeedback(false);
            setSuggestion(true);
            setContact(false);
            setChoosen(true);
        }
        else if (t == "contact") {
            setIssue(false);
            setFeedback(false);
            setSuggestion(false);
            setContact(true);
            setChoosen(true);
        }

        // console.log(t)
    }

    return (
        <>
            <div className="formDiv">
                {issue &&
                    <Issue setOpen={setOpen} setMsg={setMsg} />
                }
                {feedback &&
                    <Feedback setOpen={setOpen} setMsg={setMsg} />
                }
                {suggestion &&
                    <Suggestions setOpen={setOpen} setMsg={setMsg} />
                }
                {contact &&
                    <Contact setOpen={setOpen} setMsg={setMsg} />
                }
            </div>
            <div className={choosen == false ? 'feedbackMenuColumn' : 'feedbackMenuRow'}>
                <div className="option" onClick={() => handleFormType("issue")}>
                    <button className={choosen == false ? "optionBtnOn" : "optionBtnOff"}>Report An Issue</button>
                    <span className={issue ? "material-symbols-outlined currSelected" : "material-symbols-outlined"}>
                        flag
                    </span>
                </div>
                <div className="option" onClick={() => handleFormType("feedback")}>
                    <button className={choosen == false ? "optionBtnOn" : "optionBtnOff"}>Share Feedback</button>
                    <span className={feedback ? "material-symbols-outlined currSelected" : "material-symbols-outlined"}>
                        thumbs_up_down
                    </span>
                </div>
                <div className="option" onClick={() => handleFormType("suggestion")}>
                    <button className={choosen == false ? "optionBtnOn" : "optionBtnOff"}>Give Suggestion</button>
                    <span className={suggestion ? "material-symbols-outlined currSelected" : "material-symbols-outlined"}>
                        edit_note
                    </span>
                </div>
                <div className="option" onClick={() => handleFormType("contact")}>
                    <button className={choosen == false ? "optionBtnOn" : "optionBtnOff"}>Contact Us</button>
                    <span className={contact ? "material-symbols-outlined currSelected" : "material-symbols-outlined"}>
                        chat
                    </span>
                </div>
                <div className="option">
                    <span className="material-symbols-outlined cursorPointer" onClick={() => setOpen(false)}>
                        close
                    </span>
                </div>
            </div>
        </>
    )
}

export default FeedbackMenu
