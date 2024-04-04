let productTable = JSON.parse(localStorage.getItem("productTable")) || [];
const tableBody = document.getElementById("table-body");

function addProduct() {
  const addModel = document.getElementById("myModal");
  const closespan = document.getElementsByClassName("close")[0];
  let saveButton = document.getElementById("save-button");
  addModel.style.display = "block";

  saveButton.onclick = function (event) {
    event.preventDefault();
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let addForm = document.getElementById("addForm");
    const addFormData = new FormData(addForm);

    const product = {
      name: addFormData.get("productName"),
      description: addFormData.get("productDescription"),
      price: addFormData.get("price"),
      quantity: addFormData.get("quantity"),
      shippingCharges: addFormData.get("shippingCharges")
    };

    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    addModel.style.display = "none";
    location.reload();
  };

  closespan.onclick = function () {
  addModel.style.display = "none";
  };
  
  window.onclick = function (event) {
    if (event.target == addModel) {
      addModel.style.display = "none";
    }
  };
}


function fillTableDate() {
  let products = JSON.parse(localStorage.getItem("products"));
  console.log(products);
  let tableBody = document.getElementById("table-body");

  if (products && Object.keys(products).length > 0) {
    // Iterate through the productTable
    for (let productId in products) {
      const newRow = document.createElement("tr");
      tableBody.append(newRow);
      if (products.hasOwnProperty(productId)) {
        let product = products[productId];
        // Do something with each product
        newRow.innerHTML = `
                <td>${productId}</td>
                <td>${product.name}</td>
                <td>${product.description}</td>
                <td>${product.price}</td>
                <td>${product.quantity}</td>
                <td>${product.shippingCharges}</td>
                <td>
                            <div class="button-container">
                                <button class="edit-btn">Edit</button>
                                <button class="delete-btn">Delete</button>
                            </div>
                </td>

            `;
        tableBody.appendChild(newRow);
      }
    }
  }
}
tableBody.addEventListener("click", function (event) {
  let target = event.target;
  if (target.classList.contains("edit-btn")) {
    const editModal = document.getElementById("editModal"); //edit modal
    const editForm = document.getElementById("editForm");
    var span = document.getElementsByClassName("closeEditModal")[0];
    const updateButton = document.getElementById("update-button");

    let row = target.closest("tr");

    const productId = row.cells[0].textContent;
    editForm.elements["productName"].value = row.cells[1].textContent;
    editForm.elements["productDescription"].value = row.cells[2].textContent;
    editForm.elements["price"].value = row.cells[3].textContent;
    editForm.elements['quantity'].value = row.cells[4].textContent;
    editModal.style.display = "block";

    updateButton.onclick = function (event) {
      event.preventDefault();
      const updatedEditForm = document.getElementById("editForm");
      const editFormDate = new FormData(updatedEditForm);


      let products = JSON.parse(localStorage.getItem("products")) || [];
      let productToUpdate = products[productId];

      productToUpdate.name = editFormDate.get("productName");
      productToUpdate.description = editFormDate.get("productDescription");
      productToUpdate.price = editFormDate.get("price");
      productToUpdate.quantity = editFormDate.get("quantity");

      localStorage.setItem("products", JSON.stringify(products));
      location.reload();
    };
    span.onclick = function () {
      editModal.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target == editModal) {
        editModal.style.display = "none";
      }
    };


  
  } else if (target.classList.contains("delete-btn")) {
    let row = target.closest("tr");
    let productId = row.cells[0].textContent;
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let deletedProduct = products.splice(productId, 1);
    localStorage.setItem("products", JSON.stringify(products));
    location.reload();
  }
});



document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput");
  const tableBody = document.querySelector("table-body");

  searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();
    const rows = document.querySelectorAll(".data-table tbody tr");

    for (const row of rows) {
      const rowData = row.textContent.toLowerCase();
      if (rowData.includes(searchTerm)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    }
  });
});


