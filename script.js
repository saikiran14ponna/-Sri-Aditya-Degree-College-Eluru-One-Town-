document.getElementById('enquiryForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const group = document.getElementById('group').value;
  const referredBy = document.getElementById('referredBy').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !phone || !group) {
    alert('Please fill in all required fields.');
    return;
  }

  // Compose the WhatsApp message
  let whatsappMessage = `Admission Enquiry - Sri Aditya Degree College\n\n`;
  whatsappMessage += `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nGroup/Course: ${group}\n`;
  if (referredBy) {
    whatsappMessage += `Referred By: ${referredBy}\n`;
  }
  if (message) {
    whatsappMessage += `Query: ${message}\n`;
  }

  // Encode the message and open WhatsApp with it (using a test phone number, replace with actual)
  const whatsappNumber = '919949329687'; // Replace with college WhatsApp number
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(url, '_blank');

  // Show success message
  document.getElementById('successMsg').style.display = 'block';

  // Optionally reset form
  this.reset();
});
