export const EMAIL_PAYLOAD = (formData) => ({
  header: {
    "Content-Type": "application/json",
  },
  body: {
    to: "prathameshj0407@gmail.com",
    subject: "Enquiry",
    html: ` <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            #email-container {
                background-color: #fff;
                width: 80%;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
                margin-top: 20px;
            }
            h1 {
                text-align: center;
                color: #007BFF;
            }
            p {
                margin: 0 0 20px;
            }
    
        </style>
    
        <div id="email-container">
        
          <h1>Contact Us</h1>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Organization:</strong> ${formData.org}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Message:</strong> ${formData.message}</p>
          <p>${`Test`}</p>
        
        </div>`,
  },
});

export const CHATBOT_PAYLOAD = (formData) => ({
  header: {
    "Content-Type": "application/json",
  },
  body: {
    to: "prathameshj0407@gmail.com",
    subject: "Enquiry",
    html: `<style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
            }
            #email-container {
                background-color: #fff;
                width: 80%;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
                margin-top: 20px;
            }
            h1 {
                text-align: center;
                color: #007BFF;
            }
            p {
                margin: 0 0 20px;
            }
        </style>
    
        <body>
          <div id="email-container">
          <h1>Contact Us</h1>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Service:</strong> ${formData.service}</p>
          <p><strong>Message:</strong> ${formData.message}</p>
          </div>
        </body>
        `,
  },
});

export const baseEmailUrl = {
  production: false,
  url: this.production?"https://technowallet.io/sendEmail":"http://localhost:3003/sendEmail",
};
