   // Get the modal
   var modal = document.getElementById('id01');
   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
   if (event.target == modal) {
   modal.style.display = "none";
   }
   }

   //------------------------------//

var cars = [
    {
      make: "Nissan",
      model: "Silvia S15",
      year: 2015,
      price: 50000,
      rent: 150,
      image: "car7.jpg",
    },
    {
      make: "AC Cobra",
      model: "Shelby",
      year: 1967,
      price: 150000,
      rent: 250,
      image: "car2.jpg",
    },
    {
      make: "Ford",
      model: "Mustang",
      year: 2020,
      price: 100000,
      rent: 250,
      image: "car9.jpg",
    },
    {
        make: "Dodge",
        model: "Hellcat",
        year: 2020,
        price: 75000,
        rent: 200,
        image: "car4.jpg",
      },
   
  ]
  var carListContainer = document.getElementById("car-list-container");
  for (var i = 0; i < cars.length; i++) {
    var car = cars[i];
    var carElement = document.createElement("div");
    carElement.className = "car";
    var imgElement = document.createElement("img");
    imgElement.src = car.image;
    imgElement.alt = car.make + " " + car.model;
    var h3Element = document.createElement("h3");
    h3Element.innerText = car.make + " " + car.model;
    var pElement = document.createElement("p");
    pElement.innerText = "Price: $" + car.price + " | " + "$" + car.rent +  "/month";
    var buttonElement = document.createElement("button");
    buttonElement.innerText = "Book Now";
    var buttonEl = document.createElement("button")
    buttonEl.innerText = "About!";
    carElement.appendChild(imgElement);
    carElement.appendChild(h3Element);
    carElement.appendChild(pElement);
    carElement.appendChild(buttonElement);
    carElement.appendChild(buttonEl)
    carListContainer.appendChild(carElement);
  }

  //------------------------------------------//

  var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });