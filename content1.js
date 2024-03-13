(function() {
    // Your modification logic here
    // Example: Change background color
    document.body.style.backgroundColor = 'lightblue';
  
    // Example: Add a button
    const button = document.createElement('button');
    button.textContent = 'Click me (injected)';
    button.addEventListener('click', () => {
      alert('Button clicked from injected script');
    });
    document.body.appendChild(button);
  })();
  