function addAProduct() {
  //local storage
  let modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  let saveButton = document.getElementById("save-button");
  modal.style.display = "block";
  saveButton.onclick = function (event) {
    event.preventDefault();
    let productTable = JSON.parse(localStorage.getItem("productTable")) || [];
    let addForm = document.getElementById("addForm");
    const addFormData = new FormData(addForm);

    const product = {
      name: addFormData.get("productName"),
      description: addFormData.get("productDescription"),
      price: addFormData.get("price"),
    };

    productTable.push(product);
    localStorage.setItem("productTable", JSON.stringify(productTable));

    modal.style.display = "none";
    location.reload();
  };
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function logout() {
  window.location.href = "index.html";
}

function fillTableDate() {
  let productTable = JSON.parse(localStorage.getItem("productTable"));
  console.log(productTable);
  let tableBody = document.getElementById("table-body");

  if (productTable && Object.keys(productTable).length > 0) {
    // Iterate through the productTable
    for (let productId in productTable) {
      const newRow = document.createElement("tr");
      tableBody.append(newRow);
      if (productTable.hasOwnProperty(productId)) {
        let product = productTable[productId];
        // Do something with each product
        newRow.innerHTML = `
                <td>${productId}</td>
                <td>${product.name}</td>
                <td>${product.description}</td>
                <td>${product.price}</td>
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

let tableBody = document.getElementById("table-body");
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
    editModal.style.display = "block";

    updateButton.onclick = function (event) {
      event.preventDefault();
      const updatedEditForm = document.getElementById("editForm");
      const editFormDate = new FormData(updatedEditForm);
      console.log(editFormDate.get("productName"));

      let productTable = JSON.parse(localStorage.getItem("productTable")) || [];
      let productToUpdate = productTable[productId];

      productToUpdate.name = editFormDate.get("productName");
      productToUpdate.description = editFormDate.get("productDescription");
      productToUpdate.price = editFormDate.get("price");

      localStorage.setItem("productTable", JSON.stringify(productTable));
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
    let productTable = JSON.parse(localStorage.getItem("productTable")) || [];
    let deletedProduct = productTable.splice(productId, 1);
    localStorage.setItem("productTable", JSON.stringify(productTable));
    location.reload();
  }
});
