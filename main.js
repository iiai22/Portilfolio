document.addEventListener('DOMContentLoaded', function () {
  const emailElement = document.querySelector('.email');

  emailElement.addEventListener('click', function () {
    const emailText = emailElement.textContent;

    navigator.clipboard
      .writeText(emailText)
      .then(function () {
        console.log('Email copied to clipboard: ' + emailText);
        alert('Email copied to clipboard: ' + emailText);
      })
      .catch(function (error) {
        console.error('Failed to copy email to clipboard: ', error);
        alert('Failed to copy email to clipboard. Please try again.');
      });
  });
});
