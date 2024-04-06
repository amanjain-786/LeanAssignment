import React, { useEffect, useState } from 'react'

const Contact = ({ setOpen, setMsg }) => {
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
        setMsg("We will get back to you as soon as possible!")
    }
    return (
        <div className='inputBox'>
            <p className='heading'>Get in <b>Contact with us</b> for your Queries!</p>

            <label for="name">Your Name:</label>
            <input type="text" class="form-control" id="name" placeholder="your name" aria-label="your name" aria-describedby="addon-wrapping"></input>

            <label for="exampleFormControlTextarea1" className="label required">What Would Like To Ask:</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={(e) => { setText(e.target.value) }}></textarea>

            {
                satisfied ?
                    (<input type="submit" className='submitBtn' onClick={() => handleSubmit()} />) :
                    (<input type="submit" className='submitBtnDisabled' />)
            }
        </div>
    )
}

export default Contact
