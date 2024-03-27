const SERVICE = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/services"

let result = document.querySelector(".result")

async function getService() {
    try{
        const res = await fetch(API)

        const data = await res.json()
        showService(data)

        console.log(data);

    }catch(error) {
        console.log(error);
    }
}
getService()

function showService(data) {
    result.innerHTML = data.map((item) => {
        return `
          <div class="service">
              <img src="${item.image}" alt="image" />
              <h1>${item.name}</h1>
              <h1>${item.category}</h1>
          </div>
          `;
      })
      .join("");
}