// NAVBAR FUNCTIONALITY
function toggleMenu() {
      const navLinks = document.getElementById('navLinks');
      const menuIcon = document.getElementById('menuIcon');
      const backdrop = document.getElementById('backdrop');

      navLinks.classList.toggle('active');
      backdrop.classList.toggle('active');
      menuIcon.classList.toggle('fa-bars');
      menuIcon.classList.toggle('fa-times');

      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }

    // SLIDER FUNCTIONALITY
    let slideIndex = 0;
    const slides = document.getElementById('slideContainer');
    const totalSlides = slides.children.length;

    function showSlide(index) {
      slideIndex = (index + totalSlides) % totalSlides;
      slides.style.transform = `translateX(-${slideIndex * 100}vw)`;
    }

    function changeSlide(step) {
      showSlide(slideIndex + step);
    }

    setInterval(() => changeSlide(1), 5000);

// VISION AND MISSION ANIMATION

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('.vm-container').forEach(el => observer.observe(el));




    //Cards animation
   
    function revealCardsOnScroll() {
        const cards = document.querySelectorAll('.card');
        const triggerBottom = window.innerHeight * 0.85;

        cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
            card.classList.add('reveal');
        }
        });
    }

        window.addEventListener('scroll', revealCardsOnScroll);
        window.addEventListener('load', revealCardsOnScroll);

 //LOGO TRACK
    const slider = document.querySelector('.client-slider');
    const items = document.querySelectorAll('.logo-item');
    let currentIndex = 0;

    function slideLogos() {
        const visibleCount = window.innerWidth <= 768 ? 2 : 5; // show 2 logos on mobile
        const total = items.length;

        currentIndex = (currentIndex + 1) % (total - visibleCount + 1);
        const offset = items[0].offsetWidth * currentIndex;
        slider.style.transform = `translateX(-${offset}px)`;
    }

    setInterval(slideLogos, 3000);

 // Back to Top Button
    const scrollBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
        scrollBtn.style.display = "block";
        } else {
        scrollBtn.style.display = "none";
        }
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    });

    //========================ABOUT US JS=========================
    
 // Profile Modal Functionality
function openModal(member) {
  const modal = document.getElementById('teamModal');
  const modalDetails = document.getElementById('modalDetails');

  let content = '';
  if (member === 'robert') {
    content = `<h3>Robert</h3><p>Robert has vast knowledge and experience in land and engineering survey, topographic survey and GIS.
        Major projects include:
        Consultancy for Marsh construction- Diversion of River Kisamis, Kajiado-L. Magadi.
        Consultancy for Barrack holdings- Protection works for Mombasa- Mariakani (A109) highway. Lot 1
        Consultancy for Barrack holdings – Remote heighting for Kitengela EPZ 66 and 33kva power lines and cartographic design for various new and maximization transformers.
        Consultancy for The Geomatician- Topographic survey for radiant energy(plateau), Ziwa TTI, Kipkaren resort, and land survey of various large farms
        Countries of experience
        Kenya
        South Sudan
        Robert K. Rotich
        BSc. Geomatic Engineering and Geospatial Information systems. Hons (JKUAT)
        MA. Planning –Enrolled (UoN).
        Graduate Member ISK- Engineering surveyors Chapter..</p>`;
  } else if (member === 'edwin') {
    content = `<h3>Edwin</h3><p>
    Edwin has great knowhow in various fields and technology including; GIS, Remote sensing, Statistics and programming and survey.
    He is currently involved in major projects as Junior Spatial data analyst consultant at the UN-HABITAT since June- 2019 to date
    Carrying out Topo-Bathymetric surveys for construction of oil pipeline in Bosaso-Somalia
    Consultant engineering surveyor for Kinetic engineering construction Co - Hydrographic survey for construction of steel jetty at Maydh town-Somalia.
    Consultant engineering surveyor for Ewaso Nyiro South development Authority route survey-Olo-Ishobor in Kajiado county
    GIS assistant at National construction authority
    Countries of experience
    Kenya
    Somalia
    Edwin Pkorir Kochulem
    BSc. Geomatic Engineering and Geospatial Information systems-Hons. (JKUAT)
    MSc. GIS and Remote sensing –Enrolled (JKUAT).
    </p>`;
  } else if (member === 'allan') {
    content = `<h3>Allan</h3><p>
    Allan has great knowledge in GIS, Remote sensing, survey. <br>
    Some of the works he has undertaken include:<br>
    Geospatial Engineering consultant for mapping and design of sewer lines for Eldowas within Eldoret municipality and environs. <br>
    Junior Geospatial engineer for extension of sewer stabilization ponds in Moi University for Jomaki enterprises. <br>
    Boundary re-establishment and subdivision of Lr.No 772/10 Kipkenyo Uasin Gishu-Approximately 250Acres <br>
    Boundary re-establishment and subdivision of part of Lr. 8306.Approximately 465Acres.<br>
    Allan Ng’etich <br>
    BSc. Geomatic Engineering and Geospatial Information systems-Hons. (DeKUT)
    </p>`;
  }

  modalDetails.innerHTML = content;
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('teamModal').style.display = 'none';
}




