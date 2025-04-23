import { serviceList } from "./database/services.js";

const serviceListContainer = document.querySelector('.service-list-displayer');


serviceList.forEach(service => {
  const serviceHtml = document.createElement('div');
  serviceHtml.innerHTML = `    
            <div class="services">
              <p class="service-name">
                <img class="service-images" src="${service.icon}" alt=".">
                ${service.name}
                <i class="fa-solid fa-circle"></i>
                <span>
                  <i class="fa-solid fa-indian-rupee-sign"></i>
                  ${service.price}
                </span>
              </p>
              <button id="${service.id}" class="add-items-button">
                Add Item
                <i class="fa-solid fa-circle-plus"></i>
              </button>
            </div>`;

  serviceListContainer.append(serviceHtml);
})
