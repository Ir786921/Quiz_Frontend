import React from 'react'


const Contact = () => {
  return (
   <>
     <div>
      {/* Header Section */}
      <div>
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Whether you have questions, feedback, or a project inquiry, feel free to reach out.</p>
      </div>

      {/* Contact Info Section */}
      <div>
        <h2>Our Contact Information</h2>
        <p>Email: contact@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Main St, City, Country</p>
      </div>

      {/* Social Media Links */}
      <div>
        <h2>Connect with Us</h2>
        <p>Follow us on social media for the latest updates:</p>
        <ul>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
          <li><a href="https://linkedin.com">LinkedIn</a></li>
        </ul>
      </div>

      {/* Image Section */}
      <div>
        <img
          src="https://via.placeholder.com/800"
          alt="Contact Background"
        />
      </div>

      {/* Contact Form */}
      <div>
        <h2>Send Us a Message</h2>
        <form>
          {/* Personal Details */}
          <div>
            <input type="text" placeholder="Full Name" />
          </div>
          <div>
            <input type="email" placeholder="Email Address" />
          </div>
          <div>
            <input type="tel" placeholder="Phone Number" />
          </div>

          {/* Inquiry Details */}
          <div>
            <select>
              <option value="">Select a Topic</option>
              <option value="general">General Inquiry</option>
              <option value="support">Customer Support</option>
              <option value="business">Business Proposal</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>
          <div>
            <textarea placeholder="Your Message"></textarea>
          </div>

          {/* Additional Information */}
          <div>
            <label>
              <input type="checkbox" />
              Subscribe to our newsletter
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              I agree to the terms and conditions
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
   </>
  )
}

export default Contact;