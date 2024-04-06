import React, { useEffect, useState } from 'react'

const Feedback = ({ setOpen, setMsg }) => {
    const [satisfied, setSatisfied] = useState(false)
    const [text, setText] = useState("")

    useEffect(() => {
        if (text.length > 0) {
            setSatisfied(true)
            console.log('satisfied')
        }
    }, [text]);
    const handleSubmit = () => {
        setOpen(false);
        setMsg("Thanks for your valuable feedback!")
    }
    return (
        <div className='inputBox'>
            <p className='heading'>Let us know your <b>Feedback</b> about us</p>
            <label for="exampleFormControlTextarea1" className="label required">Feedback:</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={(e) => { setText(e.target.value) }}></textarea>
            <label className="form-check-label" for="flexCheckDefault">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                send feedback anonymously
            </label>
            {
                satisfied ?
                    (<input type="submit" className='submitBtn' onClick={() => handleSubmit()} />) :
                    (<input type="submit" className='submitBtnDisabled' />)
            }
        </div>
    )
}

export default Feedback
