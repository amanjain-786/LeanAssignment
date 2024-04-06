import React, { useEffect, useState } from 'react'
import FeedbackMenu from './FeedbackMenu.js'

const FeedbackPage = () => {

    const [open, setOpen] = useState(false)
    const [msg, setMsg] = useState("")

    useEffect(() => {
        setTimeout(() => {
            setMsg("");
        }, 2500);
    }, [msg]);

    return (
        <>
            <div className='feedbackDiv'>
                {msg.length > 0 &&
                    <div className="messageDiv">
                        {msg}
                    </div>
                }
                {
                    open == false ? (
                        <button className="openerBtn btn" onClick={(e) => setOpen(true)}>
                            <span className="material-symbols-outlined">
                                rate_review
                            </span>
                        </button>
                    ) :
                        (
                            <FeedbackMenu setOpen={setOpen} setMsg={setMsg}></FeedbackMenu>
                        )
                }

            </div>
        </>
    )
}

export default FeedbackPage
