var cars = [
    {
      make: "Toyota",
      model: "Corolla",
      year: 2021,
      price: 40,
      image: "https://www.toyota.com/imgix/content/dam/toyota/one-toyota/global/vehicle-pages/corolla/2021/1x/2021-Toyota-Corolla-LE-0084-01.jpg?w=960",
    },
    {
      make: "Honda",
      model: "Accord",
      year: 2022,
      price: 50,
      image: "https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2022/Accord-Sedan/Feature-Section/2022-honda-accord-feature-section-01.jpg",
    },
    {
      make: "Ford",
      model: "Mustang",
      year: 2023,
      price: 60,
      image: "https://www.ford.com/cmslibs/content/dam/brand_ford/en_us/brand/cars/mustang/2021/collections/3-2-mustang-gt-black-appearance-package-dt.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg",
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
    pElement.innerText = "Price: $" + car.price + " per day";
    var buttonElement = document.createElement("button");
    buttonElement.innerText = "Book Now";
    carElement.appendChild(imgElement);
    carElement.appendChild(h3Element);
    carElement.appendChild(pElement);
    carElement.appendChild(buttonElement);
    carListContainer.appendChild(carElement);
  }