const randomProducts = [
  {
    "Product ID": 1,
    "Product Name": "Product 1",
    "Product Title": "Title 1",
    "Product Description": "Description for Product 1",
    "Product Vendor": "Vendor 1",
    "In Stock": 63,
    "Buy Price": 754,
    "Sale Price": 829,
    "Purchase Quantity": 10,
    "Product Type": "Clothing",
    "Shipping Rates": "Standard Shipping",
    "Refill Limit": 20,
    "Product Location Address": "Address 49",
  },
  {
    "Product ID": 2,
    "Product Name": "Product 2",
    "Product Title": "Title 2",
    "Product Description": "Description for Product 2",
    "Product Vendor": "Vendor 2",
    "In Stock": 19,
    "Buy Price": 563,
    "Sale Price": 189,
    "Purchase Quantity": 8,
    "Product Type": "Toys",
    "Shipping Rates": "Standard Shipping",
    "Refill Limit": 4,
    "Product Location Address": "Address 58",
  },
  {
    "Product ID": 3,
    "Product Name": "Product 3",
    "Product Title": "Title 3",
    "Product Description": "Description for Product 3",
    "Product Vendor": "Vendor 3",
    "In Stock": 29,
    "Buy Price": 39,
    "Sale Price": 1001,
    "Purchase Quantity": 3,
    "Product Type": "Sports",
    "Shipping Rates": "Standard Shipping",
    "Refill Limit": 2,
    "Product Location Address": "Address 50",
  },
  {
    "Product ID": 4,
    "Product Name": "Product 4",
    "Product Title": "Title 4",
    "Product Description": "Description for Product 4",
    "Product Vendor": "Vendor 4",
    "In Stock": 52,
    "Buy Price": 504,
    "Sale Price": 791,
    "Purchase Quantity": 5,
    "Product Type": "Home & Kitchen",
    "Shipping Rates": "Free Shipping",
    "Refill Limit": 1,
    "Product Location Address": "Address 66",
  },
  {
    "Product ID": 5,
    "Product Name": "Product 5",
    "Product Title": "Title 5",
    "Product Description": "Description for Product 5",
    "Product Vendor": "Vendor 5",
    "In Stock": 51,
    "Buy Price": 308,
    "Sale Price": 756,
    "Purchase Quantity": 6,
    "Product Type": "Electronics",
    "Shipping Rates": "Free Shipping",
    "Refill Limit": 5,
    "Product Location Address": "Address 60",
  },
  {
    "Product ID": 6,
    "Product Name": "Product 6",
    "Product Title": "Title 6",
    "Product Description": "Description for Product 6",
    "Product Vendor": "Vendor 6",
    "In Stock": 51,
    "Buy Price": 308,
    "Sale Price": 756,
    "Purchase Quantity": 10,
    "Product Type": "Electronics",
    "Shipping Rates": "Free Shipping",
    "Refill Limit": 7,
    "Product Location Address": "Address 6",
  },
];

const tableBody = document.getElementById("table-body"); // Assuming "table-body" is the id of your table body element

for (let i = 0; i < randomProducts.length; i++) {
  const product = randomProducts[i];
  const tableRow = document.createElement("tr"); // Create a table row for each product
  tableBody.appendChild(tableRow);

  for (const key in product) {
    if (product.hasOwnProperty(key)) {
      const tableData = document.createElement("td"); // Create a table data cell
      tableData.name = key;
      tableData.textContent = product[key]; // Set the content of the cell
      tableRow.appendChild(tableData); // Append the cell to the row
    }
  }

  // Create the "Actions" column with buttons
  const actionsCell = document.createElement("td");
  const editButton = document.createElement("button");

  editButton.textContent = "Edit";

  editButton.addEventListener("click", function () {
    const row = this.parentNode.parentNode;

    const modal = document.getElementById("myModal");
    const formElement = document.getElementById("editForm");
    modal.style.display = "block";
    const rowToEdit = randomProducts[product["Product ID"] - 1];
    var span = document.getElementsByClassName("close")[0];
    const saveChangesButton = document.getElementById("save-button");

    for (const key in rowToEdit) {
      const labelElement = document.createElement("label");
      const inputElement = document.createElement("input");
      labelElement.textContent = key;
      inputElement.name = key;
      inputElement.value = rowToEdit[key];
      formElement.appendChild(labelElement);
      formElement.appendChild(inputElement);
    }

    saveChangesButton.onclick = function () {
      const formData = new FormData(editForm);
      const updatedData = {};

      for (const [key, value] of formData.entries()) {
        updatedData[key] = value;
      }
      const cells = row.querySelectorAll("td");


      for (const cell of cells) {
        const key = cell.name;

        if (updatedData.hasOwnProperty(key) && key!=undefined) {
          cell.textContent = updatedData[key];
        }
      }
      modal.style.display = "none";
    };

    span.onclick = function () {
      modal.style.display = "none";
    };
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    const rowToDelete = this.parentNode.parentNode;
    rowToDelete.parentNode.removeChild(rowToDelete);

    // Find the index of the product in the randomProducts array
    const index = randomProducts.findIndex(
      (item) => item["Product ID"] === product["Product ID"]
    );
    // Remove the product from the randomProducts array
    if (index !== -1) {
      randomProducts.splice(index, 1);
    }
  });

  const viewButton = document.createElement("button");
  viewButton.textContent = "View";
  viewButton.addEventListener("click", function () {
    // Add your view logic here
    console.log("View button clicked for product ID: ", product["Product ID"]);
  });

  // Append buttons to the "Actions" cell
  actionsCell.appendChild(editButton);
  actionsCell.appendChild(deleteButton);
  actionsCell.appendChild(viewButton);

  // Append the "Actions" cell to the row
  tableRow.appendChild(actionsCell);
}
