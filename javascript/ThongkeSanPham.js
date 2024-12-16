let listdonhang = JSON.parse(localStorage.getItem('listDonHang')) || []; 

// Thống kê tổng số lượng bán được, doanh thu và các hóa đơn liên quan đến từng sản phẩm
function detailGenerateProductStatistics(filtered_list = listdonhang) {
    let statistics = {};
    let totalRevenue = 0;
    let listsanpham = JSON.parse(localStorage.getItem('products')) || [];

    filtered_list.forEach(order => {
        if (order.status === "Đã xác nhận" || order.status === "Đã giao thành công") {
            order.sanPhamMua.forEach(sp => {
                const product = listsanpham.find(p => p.ID === sp.ID);
                if (product) {
                    if (!statistics[product.ID]) {
                        statistics[product.ID] = {
                            name: product.name,
                            sold: 0,
                            revenue: 0,
                            orders: []
                        };
                    }
                    statistics[product.ID].sold += sp.SLmua;
                    console.log(product.price);
                    statistics[product.ID].revenue += (sp.SLmua * product.price);
                    statistics[product.ID].orders.push(order);
                    totalRevenue += (sp.SLmua * product.price);
                }
            });
        }
    });

    displayStatistics(statistics, totalRevenue);
}

//Hiển thị các sản phẩm được thống kê
function displayStatistics(statistics, totalRevenue) {
    const sellingDiv = document.getElementById('selling-stats');
    const statsDiv = document.getElementById('product-stats').getElementsByTagName('tbody')[0];

    let bestSellingProductIndex = null;
    let leastSellingProductIndex = null;

    let bestSellingProduct = null;
    let leastSellingProduct = null;

    statsDiv.innerHTML = ``;

    for (let productId in statistics) {
        let productStats = statistics[productId];
        statsDiv.innerHTML += `
            <td>${productId}</td>
            <td>${productStats.name}</td>
            <td>${productStats.sold}</td>
            <td>${productStats.revenue}</td>
            <td><button onclick="displayInvoices(${productId})">Xem các hóa đơn</button></td>
        `;


        if (!bestSellingProductIndex || productStats.sold > statistics[bestSellingProductIndex].sold) {
            bestSellingProductIndex = productId;
            bestSellingProduct = productStats.name;
        }
        if (!leastSellingProductIndex || productStats.sold < statistics[leastSellingProductIndex].sold) {
            leastSellingProductIndex = productId;
            leastSellingProduct = productStats.name;
        }

        
    }

    document.getElementById('totalrevenue').textContent = totalRevenue;
    document.getElementById('bestselling').textContent = bestSellingProduct;
    document.getElementById('leastselling').textContent = leastSellingProduct;
}

// Hiển thị danh sách hóa đơn liên quan đến sản phẩm
function displayInvoices(productId) {
    let listdonhang = JSON.parse(localStorage.getItem('listDonHang')) || []; 
    let listsanpham = JSON.parse(localStorage.getItem('products')) || [];

    const modal = document.getElementById('product-invoices');
    const productInvoices = document.getElementById('pInvoices');

    let startdate = document.getElementById('product_startDate').value;
    let enddate = document.getElementById('product_endDate').value;

    const product_startdate = new Date(startdate + "T00:00:00");
    const product_enddate = new Date(enddate + "T23:59:59");

    let productOrders = [];

    listdonhang.forEach(order => {
        const orderDate = new Date(order.Thoigian);
        if (product_startdate <= orderDate && orderDate <= product_enddate && 
            (order.status === "Đã xác nhận" || order.status === "Đã giao thành công")) {
            order.sanPhamMua.forEach(sp => {
                if (sp.ID === productId) {
                    productOrders.push(order);
                }
            });
        }
    });

    const product = listsanpham.find(p => p.ID === productId);

    if (product) {
        productInvoices.innerHTML = `<h2>Danh sách hóa đơn liên quan đến ${product.name}</h2>`;
        if (productOrders.length === 0) {
            productInvoices.innerHTML += `<p>Không có hóa đơn nào trong khoảng thời gian đã chọn.</p>`;
        } else {
            productOrders.forEach(order => {
                productInvoices.innerHTML += `
                    <p>Mã hóa đơn: ${order.Madon}</p>
                    <p>Mã khách hàng: ${order.Makhach}</p>
                    <p>Mã nhân viên: ${order.Manhanvien}</p>
                    <p>Ngày: ${new Date(order.Thoigian).toLocaleDateString()}</p>
                    <p>Sản phẩm đã mua: </p>
                    <ul>
                    `;
                    order.sanPhamMua.forEach(item => {
                        let sp = listsanpham.find(sp => sp.ID === item.ID);
                        productInvoices.innerHTML += `
                            <li>Tên sản phẩm: ${sp.name}</li>
                            <li>Số lượng mua: ${item.SLmua}</li>
                            <li>Tổng tiền: ${item.SLmua * sp.price} VND</li>
                            <li></li>
                        `;
                    });
                productInvoices.innerHTML += `
                    </ul>
                    <p>Thành tiền: ${order.Thanhtien} VND</p>
                    <p>Phương thức thanh toán: ${order.PTTT}</p>
                    <p>Địa chỉ: ${order.address}</p>
                    <hr>
                `;
            });
        }
        modal.style.display = "block";
    } else {
        productInvoices.innerHTML = `<h2>Sản phẩm không tồn tại.</h2>`;
        modal.style.display = "block";
    }
}


// Kiểm tra ngày có phù hợp không rồi truyền vào hàm khác để thống kê
function generateProductStatistics() {
    listdonhang = JSON.parse(localStorage.getItem('listDonHang')) || [];

    const product_startDate = document.getElementById('product_startDate').value;
    const product_endDate = document.getElementById('product_endDate').value;

    const product_startdate = new Date(product_startDate + "T00:00:00");
    const product_enddate = new Date(product_endDate + "T23:59:59");

    let filtered_list = listdonhang.filter(item => {
        let orderdate = new Date(item.Thoigian);
        return product_startdate <= orderdate && orderdate <= product_enddate;
    });

    filtered_list.forEach(item => console.log(item));

    if(filtered_list) {
        detailGenerateProductStatistics(filtered_list);
    } else {
        alert('Hãy chọn khoảng thời gian phù hợp. Ngày bắt đầu nhỏ hơn ngày kết thúc!');
    }
}

// Đóng form hiển thị danh sách hóa đơn liên quan đênns khách hàng
function closeProductInvoicesModal() {
    const modal = document.getElementById('product-invoices');
    modal.style.display = "none";
}

detailGenerateProductStatistics();