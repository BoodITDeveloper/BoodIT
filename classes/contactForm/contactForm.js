class ContactForm {
    constructor(formContainerId) {
      this.formContainer = document.getElementById(formContainerId); // Vind de container waar je de form wilt plaatsen
      this.init(); // Initialiseer alles
    }
  
    // De HTML voor het formulier toevoegen aan de container
    init() {
      this.formContainer.innerHTML = `
        <div class="contact-form">
          <h3>Stuur ons een bericht</h3>
          <form id="contactForm" action="#" method="post">
            <label for="name">Naam</label>
            <input type="text" id="name" name="name" placeholder="Uw naam" required>
  
            <label for="email">E-mail</label>
            <input type="email" id="email" name="email" placeholder="Uw e-mailadres" required>
  
            <label for="message">Bericht</label>
            <textarea id="message" name="message" placeholder="Uw bericht..." rows="6" required></textarea>
  
            <button type="submit">Verstuur</button>
          </form>
        </div>
      `;
  
      // EmailJS initialiseren
      emailjs.init("ndjw8-YyvFpxc32V0"); 
      
      // Voeg eventlistener toe voor het formulier
      const form = document.getElementById("contactForm");
      form.addEventListener("submit", (e) => {
        e.preventDefault(); // 
        this.sendForm(); // Verstuur het formulier via EmailJS
      });
    }
  
    // Verstuur het formulier via EmailJS
    sendForm() {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      // Stuur de gegevens naar EmailJS via de opgegeven service en template
      emailjs.send("service_p3d04kr", "template_turd568", {
        from_name: name,
        from_email: email,
        message: message
      })
      .then((response) => {
        console.log("Bericht succesvol verzonden:", response);
        alert("Bericht verzonden! We nemen snel contact met je op.");
        document.getElementById("contactForm").reset(); // Reset het formulier na succesvolle verzending
      })
      .catch((error) => {
        console.log("Er is een fout opgetreden:", error);
        alert("Er is een fout opgetreden bij het verzenden van je bericht.");
      });
    }
  }
  
  // Maak een nieuwe instantie van de ContactForm class voor je formulier
  const contactForm = new ContactForm("contactFormContainer"); // 'contactFormContainer' is het ID van het div-element waar je het formulier wilt plaatsen
  