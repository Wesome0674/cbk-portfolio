interface EmailTemplateProps {
    firstName: string;
    email: string;
    business?: string;
    phone?: string;
    message: string;
  }
  
  export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    firstName,
    email,
    business,
    phone,
    message,
  }) => (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.5 }}>
      <h1>New Message from {firstName}</h1>
      <p><strong>Email:</strong> {email}</p>
      {business && <p><strong>Business:</strong> {business}</p>}
      {phone && <p><strong>Phone:</strong> {phone}</p>}
      <p><strong>Message:</strong></p>
      <p>{message}</p>
    </div>
  );
  