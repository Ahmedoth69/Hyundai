const searchBtn = document.querySelector('.search-btn');
const searchPanel = document.getElementById('searchPanel');
const searchClose = document.querySelector('.search-close');
const searchInput = document.getElementById('searchInput');
const heroButtons = document.querySelectorAll('.hero-button');
const serviceLinks = document.querySelectorAll('.nav-icon');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function toggleSearchPanel(open) {
  if (!searchPanel) return;
  searchPanel.classList.toggle('open', open);
  searchPanel.setAttribute('aria-hidden', String(!open));
  if (open) {
    searchInput.focus();
  }
}

if (searchBtn && searchPanel && searchClose && searchInput) {
  searchBtn.addEventListener('click', () => toggleSearchPanel(true));
  searchClose.addEventListener('click', () => toggleSearchPanel(false));
  searchPanel.addEventListener('click', (event) => {
    if (event.target === searchPanel) toggleSearchPanel(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && searchPanel.classList.contains('open')) {
      toggleSearchPanel(false);
    }
  });
}

function smoothScrollTo(target) {
  if (!target) return;
  const rect = target.getBoundingClientRect();
  const offset = window.scrollY + rect.top - 90;
  window.scrollTo({ top: offset, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
}

heroButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = button.getAttribute('href')?.substring(1);
    const target = targetId ? document.getElementById(targetId) : null;
    smoothScrollTo(target);
  });
});

serviceLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      event.preventDefault();
      const targetId = href.substring(1);
      const target = document.getElementById(targetId);
      smoothScrollTo(target);
    }
  });
});

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach((card, index) => {
    const visible = query.length === 0 || String(index + 1).includes(query);
    card.style.opacity = visible ? '1' : '0.18';
    card.style.transform = visible ? 'translateY(0)' : 'translateY(10px)';
  });
});

const reservationForm = document.querySelector('.reservation-form');
const EMAILJS_SERVICE_ID = 'service_gmifssz';
const EMAILJS_TEMPLATE_ID = 'template_dvmzhi4';

if (reservationForm) {
  reservationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const userName = document.getElementById('Uname');
    const userEmail = document.getElementById('UserMail');
    const selectedService = document.querySelector('input[name="service"]:checked');
    const reservationDate = document.getElementById('reservationDate');
    const reservationTime = document.getElementById('reservationTime');

    if (!userName?.value.trim() || !userEmail?.value.trim() || !selectedService || !reservationDate?.value || !reservationTime?.value) {
      alert('Veuillez remplir tous les champs du formulaire de réservation.');
      return;
    }

    const serviceName = selectedService.value === 'vidange' ? 'Vidange' : 'Visite technique';
    const templateParams = {
      from_name: userName.value.trim(),
      from_email: userEmail.value.trim(),
      service_type: serviceName,
      reservation_date: reservationDate.value,
      reservation_time: reservationTime.value,
      message: `Bonjour,\nJe souhaite réserver un rendez-vous pour le service suivant :\n- Service : ${serviceName}\n- Date : ${reservationDate.value}\n- Heure : ${reservationTime.value}\n\nNom : ${userName.value.trim()}\nEmail : ${userEmail.value.trim()}`
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
      .then(() => {
        alert('Votre réservation a été envoyée avec succès. Nous vous contacterons bientôt.');
        reservationForm.reset();
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        alert('Une erreur est survenue lors de l’envoi. Veuillez réessayer plus tard.');
      });
  });
}

// Reservation email sender
/*
function sendEmail(){
  const msg = "Je souhaite réserver un service à la date et à l'heure indiquées."
  const data = {
    to_email : "ahmedoth012345@gmail.com",
    from_name : document.getElementById("Uname").value,
    from_email : "ahmedoth012345@gmail.com",
    subject : document.getElementsByName('service').value,
    message : `
    name : ${document.getElementById("Uname").value}
    email : ${document.getElementById('UserEmail').value}
    service : ${document.getElementsByName('service').value}
    Date : ${document.getElementById('reservationDate').value}
    Hour : ${document.getElementById('reservationTime').value}
    message : "Je souhaite réserver un ${document.getElementsByName('service').value} à la date ${document.getElementById('reservationDate').value} et à l'heure ${document.getElementById('reservationTime').value}."
    `,
  };
  emailjs.send("service_gmifssz","template_dvmzhi4",data).then((response) => {
    alert("votre reservation est ajouter avec succes")
  })
  .catch((error)=>{
    alert("erruer de reserver"+error)
  });
}

document.getElementById('send-btn').addEventListener('click', () =>{
  sendEmail();
});
*/