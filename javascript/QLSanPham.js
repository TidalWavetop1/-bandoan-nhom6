let MaSP = null; // Để xác định sản phẩm đang sửa
let products = JSON.parse(localStorage.getItem('products')); //Load data của danh sách sản phẩm


let filtered_products = products; //Sử dụng để số trang không bị restart khi tìm kiếm

let currentPage = 1; // Trang hiện tại
const productsPerPage = 6; // Số sản phẩm mỗi trang
const productsPerRow = 3; // Số sản phẩm mỗi hàng

// Hàm phân trang sản phẩm
function paginateProducts(products, page) {
    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return products.slice(startIndex, endIndex);
}

// Hiển thị danh sách sản phẩm cùng với các chức năng quản lí sản phẩm
function displayProducts(Products = products, page = currentPage) {
    const productSection = document.getElementById('product-menu');
    productSection.innerHTML = '';

    // Chia danh sách sản phẩm thành các trang
    const paginatedProducts = paginateProducts(Products, page);
    // Hiển thị sản phẩm theo layout 3 sản phẩm mỗi hàng
    paginatedProducts.forEach((item, index) => {
        if (index % productsPerRow === 0) {

            const productRow = document.createElement('div');
            productRow.classList.add('product-row');
            productRow.style.display = 'flex'; // Apply flexbox

            productSection.appendChild(productRow);
        }

        const productRow = productSection.lastElementChild;
        productRow.innerHTML +=  ` 
        <div class="product"> 
            <img onclick="detailProduct(${item.ID})" src="${item.img}" alt="${item.name} Image" style="cursor: pointer;"> 
            <h3 onclick="detailProduct(${item.ID})" style="cursor: pointer;">${item.name}</h3> 
            <p onclick="detailProduct(${item.ID})" style="cursor: pointer;">Price: ${item.price}</p> 
            <p onclick="detailProduct(${item.ID})" style="cursor: pointer;">${item.description}</p> 
            <button onclick="openEditProductModal(${item.ID})" style="cursor: pointer;">Sửa</button>
            <button onclick="deleteProduct(${item.ID})" style="cursor: pointer;">Xóa</button>
        </div>`;
    });
    // Cập nhật các nút phân trang
    updatePaginationButtons(Products.length);
}

// Hiển thị thông tin chi tiết của sản phẩm
function detailProduct(idproduct) { 
    const product = products.find(item => item.ID === parseInt(idproduct, 10)); 
    if (!product) 
        return; 
    console.log(idproduct); 
    
    document.getElementById('ID').textContent = product.ID; 
    document.getElementById('Tensanpham').textContent = product.name; 
    document.getElementById('Giasanpham').textContent = product.price; 
    document.getElementById('Soluongsanpham').textContent = product.quantity; 
    document.getElementById('Loaisanpham').textContent = product.category; 
    document.getElementById('Motasanpham').textContent = product.description; 
    
    const modal = document.getElementById('detailProductModal'); 
    modal.style.display = "block"; 
}

// Đóng form hiển thị thông tin chi tiết của sản phẩm
function closeDetailProduct() {
    const modal = document.getElementById('detailProductModal');
    modal.style.display = "none";
}

// Mở form điền thông tin để thêm sản phẩm
function openAddProductModal() {
    const modal = document.getElementById('addProductModal');
    modal.style.display = "block";
}

// Đóng form điền thông tin để thêm sản phẩm
function closeAddProductModal() {
    const modal = document.getElementById('addProductModal');
    modal.style.display = "none";
}

// Mở form để sửa thông tin của sản phẩm cần sửa
function openEditProductModal(idproduct) {
    const modal = document.getElementById('editProductModal');
    MaSP = parseInt(idproduct, 10);

    const product = products.find(sp => sp.ID === MaSP);
    if (product) {
        document.getElementById('editProductName').value = product.name;
        document.getElementById('editProductPrice').value = product.price;
        document.getElementById('editProductQuantity').value = product.quantity;
        document.getElementById('editProductType').value = product.category;
        document.getElementById('editProductNote').value = product.description;

        const imagePreview = document.getElementById('imageEditPreview');
        imagePreview.innerHTML = ''; // Clear any existing content
        if (product.img && product.img !== 'image/no product.png') {
            const img = document.createElement('img');
            img.src = product.img;
            imagePreview.appendChild(img);
            imagePreview.appendChild(createRemoveButton());
        } else {
            const img = document.createElement('img');
            img.src = 'image/no product.png';
            imagePreview.appendChild(img);
            imagePreview.appendChild(createRemoveButton());
        }
    }

    modal.style.display = "block";
}

// Tạo nút xóa ảnh
function createRemoveButton() { 
    const removeButton = document.createElement('button'); 
    removeButton.textContent = 'X'; 
    removeButton.className = 'remove-image'; 
    removeButton.onclick = removeCurrentImage; 
    return removeButton; 
} 

// Xóa ảnh khỏi của sản phẩm đang chọn hiện tại
function removeCurrentImage() {
    const imagePreview = document.getElementById('imageEditPreview');
    imagePreview.innerHTML = ''; // Xóa nội dung hiện tại
    imagePreview.innerHTML = '<span>Không có ảnh</span>'; // Thêm thông báo không có ảnh

    // Tìm sản phẩm hiện tại và cập nhật đường dẫn ảnh của nó
    const product = products.find(sp => parseInt(sp.ID, 10) === parseInt(MaSP, 10));
    if (product) {
        product.img = 'image/no product.png'; // Đánh dấu ảnh đã bị xóa
        console.log(product.img);
        // Cập nhật danh sách sản phẩm
        products = products.map(item => {
            if (parseInt(item.ID, 10) === parseInt(MaSP, 10)) {
                return { ...item, ...product };
            }
            return item;
        });

        // Lưu danh sách sản phẩm đã cập nhật vào localStorage
        localStorage.setItem('products', JSON.stringify(products));
    }
}


// Đóng form sửa thông tin sản phẩm
function closeEditProductModal() {
    const modal = document.getElementById('editProductModal');
    modal.style.display = "none";
}

// Thêm sản phẩm vào data
function addProduct() {
    let flag = true;

    const id = parseInt(document.getElementById('addProductId').value, 10);
    const name = document.getElementById('addProductName').value;
    const price = document.getElementById('addProductPrice').value;
    const quantity = document.getElementById('addProductQuantity').value;
    const type = document.getElementById('addProductType').value;
    const description = document.getElementById('addProductNote').value;

    const imgElement = document.getElementById('imagePreview').querySelector('img');
    let img = imgElement ? imgElement.src : '';

    // Use default image path if no image is selected
    if (!img || img.includes('no_image.jpg')) {
        img = "image/no product.png";
    }

    if(id === null || id === '') {
        alert("Xin hãy nhập mã sản phẩm");
        flag = false;
    }
    else if(!isFinite(Number(id))) {
        alert("Xin hãy nhập số vào mã sản phẩm");
        flag = false;
    }
    else if(flag === true) {
        filtered_products.forEach(item => {
            if(String(item.ID) === String(id)) {
                alert("Mã sản phẩm đã tồn tại!");
                flag =false
            }
        });
    }
    else if(name === null || name === '') {
        alert("Xin hãy nhập tên sản phẩm");
        flag = false;
    }
    else if(price <= 0) {
        alert("Xin hãy nhập giá sản phẩm lớn hơn 0 đồng");
        flag = false;
    }
    else if(quantity <= 0) {
        alert("Xin hãy nhập số lượng sản phẩm lớn hơn 0");
        flag = false;
    }
    else if(type < 1 || type > 4) {
        alert("Xin hãy nhập mã loại sản phẩm nằm trong khoảng từ 1 đến 4");
        flag = false;
    }
    else {
        products.forEach(sp => {
            if(String(sp.ID) === String(id)) {
                alert("Mã sản phẩm đã tồn tại. Xin hãy nhập lại mã sản phẩm");
                flag = false;
            }
        })
    }

    if(flag) {
        const newProduct = {
            ID: id,
            name: name,
            price: price,
            quantity: quantity,
            category: type,
            description: description,
            img: img
        };
        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));
    
        searchProduct(); //Để làm mới lại số trang để hiển thị sản phẩm mới
        displayProducts(filtered_products);
        closeAddProductModal();
    }
}

// Lấy thông tin từ form cập nhật sản phẩm
function updateProduct() {
    let flag = true;

    const name = document.getElementById('editProductName').value;
    const price = document.getElementById('editProductPrice').value;
    const quantity = document.getElementById('editProductQuantity').value;
    const type = document.getElementById('editProductType').value;
    const description = document.getElementById('editProductNote').value;
    const imgElement = document.getElementById('editProductImg').files[0];

    if(name === null || name === '') {
        alert("Xin hãy nhập tên sản phẩm");
        flag = false;
    }
    else if(price < 0) {
        alert("Xin hãy nhập giá sản phẩm từ 0 đồng trở lên");
        flag = false;
    }
    else if(quantity < 0) {
        alert("Xin hãy nhập số lượng sản phẩm lớn hơn 0");
        flag = false;
    }
    else if(type <= 1 || type >= 4) {
        alert("Xin hãy nhập mã loại sản phẩm nằm trong khoảng từ 1 đến 4");
        flag = false;
    }

    if(flag) {
        if (imgElement) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = e.target.result;
                updateProductData(name, price, quantity, type, description, img);
                document.getElementById('editProductImg').value = '';
            };
            reader.readAsDataURL(imgElement);
        } else {
            const existingProduct = products.find(item => item.ID === MaSP);
            const img = existingProduct.img ? existingProduct.img : 'image/no product.png';
            updateProductData(name, price, quantity, type, description, img);
        }
    }
}

// Cập nhật sản phẩm trong data
function updateProductData(name, price, quantity, type, description, img) {
    products = products.map(item => {
        if (item.ID === MaSP) {
            return { ...item, name: name, price: price, quantity: quantity, category: type, description: description, img: img };
        }
        return item;
    });

    localStorage.setItem('products', JSON.stringify(products));
    searchProduct();
    displayProducts(filtered_products);
    closeEditProductModal();
}

// Xóa sản phẩm khỏi data
function deleteProduct(ID) { 
    const confirmation = confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?');
    if (confirmation) {
        products = products.filter(item => item.ID !== ID); 
        localStorage.setItem('products', JSON.stringify(products));
        searchProduct(); //Để làm mới lại số trang để hiển thị sau khi xóa trrong lúc tìm kiếm và chưa tìm kiếm
        displayProducts(filtered_products);
    }
}

// Hàm cập nhật các nút phân trang
function updatePaginationButtons(totalProducts) {
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const paginationSection = document.getElementById('pagination');

    paginationSection.innerHTML = ''; // Xóa các nút cũ

    // Thêm nút "Trang trước"
    if (currentPage > 1) {
        paginationSection.innerHTML += `
        <button onclick="changePage('prev')" class="${currentPage === 1 ? 'disabled' : ''}">
            Trang trước
        </button>`;
    }

    // Thêm các nút trang
    for (let i = 1; i <= totalPages; i++) {
        paginationSection.innerHTML += `
            <button onclick="changePage(${i})" class="${currentPage === i ? 'active' : ''}">
                ${i}
            </button>
        `;
    }

    // Thêm nút "Trang sau"
    if (currentPage < totalPages) {
        paginationSection.innerHTML += `
        <button onclick="changePage('next')" class="${currentPage === totalPages ? 'disabled' : ''}">
            Trang sau
        </button>`;
    }
}



// Hàm thay đổi trang
function changePage(page) {
    const totalPages = Math.ceil(products.length / productsPerPage);

    // Nếu là nút "Trang trước"
    if (page === 'prev' && currentPage > 1) {
        currentPage--;
    } 
    
    // Nếu là nút "Trang sau"
    else if (page === 'next' && currentPage < totalPages) {
        currentPage++;
    } 
    
    // Nếu là trang cụ thể
    else if (typeof page === 'number' && page >= 1 && page <= totalPages) {
        currentPage = page;
    }

    displayProducts(filtered_products); // Cập nhật lại danh sách sản phẩm sau khi thay đổi trang
}

// Tìm kiếm sản phẩm
function searchProduct() {
    const searchproductKey = document.getElementById('searchProductKey').value.trim().toLowerCase();
    const productList = products.filter(sp => 
        sp.ID.toString().toLowerCase().includes(searchproductKey) ||
        sp.name.toString().toLowerCase().includes(searchproductKey));
    if(searchproductKey) {
        filtered_products = productList;
    }
    else {
        filtered_products = products;
    }
    currentPage = 1; // Đặt lại về trang đầu khi tìm kiếm
    displayProducts(productList);
}

// Hiển thị ảnh chọn từ file trong form thêm sản phẩm 
function previewImage() {
    const file = document.getElementById('addProductImg').files[0];
    const preview = document.getElementById('imagePreview');
    const previewImage = preview.querySelector('img');
    const previewText = preview.querySelector('span');

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            if (previewImage) {
                previewImage.src = e.target.result;
            } else {
                const img = document.createElement('img');
                img.src = e.target.result;
                preview.innerHTML = ''; // Clear existing content
                preview.appendChild(img);
            }
        };

        reader.readAsDataURL(file);
    } else {
        preview.innerHTML = '<span>No image selected</span>';
    }
}

// Hienr thị ảnh chọn từ file trong form chỉnh sửa sản phẩm
function previewEditImage() {
    const file = document.getElementById('editProductImg').files[0];
    const preview = document.getElementById('imageEditPreview');
    const previewImage = preview.querySelector('img');
    const previewText = preview.querySelector('span');

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            if (previewImage) {
                previewImage.src = e.target.result;
            } else {
                const img = document.createElement('img');
                img.src = e.target.result;
                preview.innerHTML = ''; // Clear existing content
                preview.appendChild(img);
            }
        };

        reader.readAsDataURL(file);
    } else {
        preview.innerHTML = '<span>No image selected</span>';
    }
}

displayProducts();
