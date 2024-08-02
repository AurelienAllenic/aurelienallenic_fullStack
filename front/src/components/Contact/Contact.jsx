import React, { useEffect, useRef, useState } from 'react';
import './contact.scss';
import { FaArrowRight } from "react-icons/fa";
import { useLanguage } from '../Context/LanguageContext'

const Contact = () => {
  const languageToModify = useLanguage()
  const language = languageToModify.language
  const [isError, setIsError] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const form = useRef();

  useEffect(() => {

  }, [showConfirmation])

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
        name: form.current.name.value,
        email: form.current.email.value,
        message: form.current.message.value,
    };

    try {
        const response = await fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.success) {
            setIsError(false);
            setShowConfirmation(true);
            document.body.classList.add('overflow');
            setTimeout(() => {
                setShowConfirmation(false);
                document.body.classList.remove('overflow');
            }, 3000);
        } else {
            setIsError(true);
        }
    } catch (error) {
        console.error('Error sending email:', error);
        setIsError(true);
    }

    if (form.current && typeof form.current.reset === 'function') {
        form.current.reset();
    }
};


  return (
    <>
     {showConfirmation && (
        <div className='container_confirmation_language'>
          <p className='content_confirmation_language'>{isError ? language === 'FR' ? 'Message non envoyé !' : 'Message not sent !' : language === 'FR' ? 'Message envoyé !' : 'Message Sent !'}</p>
        </div>
      )}
      <a className='anchor' id='contact'></a>
      <section className='section-contact' id='no_border'>
        <form ref={form} onSubmit={sendEmail} className='form'>
          <h1 className='main-title-contact'>Contact</h1>
          <h2 className='sub-title-contact'>{language === 'FR' ? "N'hésitez pas à me contacter, je reviendrai vers vous dans les plus brefs délais" : "Feel free to contact me, I will come back to you shortly"}</h2>
          <div className='container_inputs'>
            <input id='name' type="text" name='name' placeholder={language === 'FR' ? 'Votre Nom': 'Your full Name'} required className='input' />
            <input id='email' type="email" name='email' placeholder={language === 'FR' ? 'Votre Email': 'Your Email'} required className='input' />
          </div>
          <textarea id='textarea' name="message" placeholder={language === 'FR' ? 'Votre message': 'Your message'} rows="7" required className='textarea' />
          <button type='submit' className='btn-submit'>{language === 'FR' ? 'Envoyer': 'Send'}<FaArrowRight /></button>
        </form>
      </section>
    </>
  );
};

export default Contact;
