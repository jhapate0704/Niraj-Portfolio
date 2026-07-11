import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Make sure you replace these variables with actual keys in your .env file
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS credentials are missing. Please check your .env file.");
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: `${formData.first_name} ${formData.last_name}`,
          to_name: "Niraj", // Assuming you are receiving it
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setSubmitStatus('success');
          setFormData({ first_name: '', last_name: '', email: '', message: '' });
          setIsSubmitting(false);
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          console.error('FAILED...', error);
          setSubmitStatus('error');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto bg-theme-1/60 p-10 md:p-16 rounded-[3rem] border border-theme-5/10 shadow-2xl backdrop-blur-md">
        <h2 className="text-5xl font-bold text-center uppercase tracking-widest text-theme-5 mb-12">
          <span className="text-theme-2">C</span>ontact
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <input 
                type="text" 
                name="first_name" 
                value={formData.first_name}
                onChange={handleChange}
                placeholder="First name" 
                required
                className="w-full bg-theme-4/50 border-b-2 border-theme-3 px-4 py-3 text-theme-5 placeholder-transparent focus:outline-none focus:border-theme-2 transition-colors peer rounded-t-lg"
              />
              <label className="absolute left-4 -top-6 text-sm text-theme-2 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-theme-5/60 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-theme-2">
                First name
              </label>
            </div>
            
            <div className="relative group">
              <input 
                type="text" 
                name="last_name" 
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Last name" 
                required
                className="w-full bg-theme-4/50 border-b-2 border-theme-3 px-4 py-3 text-theme-5 placeholder-transparent focus:outline-none focus:border-theme-2 transition-colors peer rounded-t-lg"
              />
              <label className="absolute left-4 -top-6 text-sm text-theme-2 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-theme-5/60 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-theme-2">
                Last name
              </label>
            </div>
          </div>

          <div className="relative group">
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              placeholder="Email" 
              required
              className="w-full bg-theme-4/50 border-b-2 border-theme-3 px-4 py-3 text-theme-5 placeholder-transparent focus:outline-none focus:border-theme-2 transition-colors peer rounded-t-lg"
            />
            <label className="absolute left-4 -top-6 text-sm text-theme-2 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-theme-5/60 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-theme-2">
              Email
            </label>
          </div>

          <div className="relative group">
            <textarea 
              name="message" 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              placeholder="Message" 
              required
              className="w-full bg-theme-4/50 border-b-2 border-theme-3 px-4 py-3 text-theme-5 placeholder-transparent focus:outline-none focus:border-theme-2 transition-colors peer rounded-t-lg resize-none"
            ></textarea>
            <label className="absolute left-4 -top-6 text-sm text-theme-2 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-theme-5/60 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-theme-2">
              Message
            </label>
          </div>

          <div className="text-center mt-10 flex flex-col items-center">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`px-12 py-4 font-bold rounded-full transition-all shadow-lg shadow-theme-2/30 ${
                isSubmitting 
                  ? 'bg-theme-3/50 text-theme-5/50 cursor-not-allowed' 
                  : 'bg-theme-2 text-theme-1 hover:scale-105'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {/* Status messages */}
            {submitStatus === 'success' && (
              <p className="mt-4 text-green-500 font-medium">Your message has been sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-4 text-red-500 font-medium">Failed to send the message. Please try again.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
