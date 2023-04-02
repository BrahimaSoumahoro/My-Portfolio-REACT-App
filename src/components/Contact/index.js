import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef
    
    useEffect(() => {
    return setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000);
}, [])

const sendEmail = (e) => {
    e.preventDefault()

    Emailjs 
        .sendForm(
            'gmail',
            'template_qc9ew3x',
            refForm.current,
            
        )
}

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                     strArray={['C', 'o', 'n', 't', 
                      'a', 'c', 't', '', 'm', 'e']}
                      idx={15}  />
                </h1>
                <p> Jesus is my Lord and my Savior
                    Me me me me me me me
                    Me me me me me me me
                    Me me me me me me me
                    Me me me me me me me
                    Me me me me me me me
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                    
                        <ul>
                            <li className='half'>
                                <input type="text" name="name" 
                                 placeholder='Name' required />
                            </li>

                            <li className='half'>
                                <input type="email" name="email" 
                                 placeholder='Email' required />
                            </li>
                        <li>
                            <input  placeholder='Subject'   type="text" 
                             name="subject" required />
                        </li>
                        <li>
                        <textarea placeholder="Message" name="message" 
                         required>
                         </textarea>
                        </li>
                        <li>
                            <input type="submit" className='flat- 
                             button' value="SEND"
                        </li>
                        </ul>
                    </form>

                </div>

            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}



export default Contact;