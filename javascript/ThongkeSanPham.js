// Thống kê tổng số lượng bán được, doanh thu và các hóa đơn liên quan đến từng sản phẩm
function detailGenerateProductStatistics(product_startDate, product_endDate) {
    let statistics = {};
    let totalRevenue = 0;
    let listdonhang = JSON.parse(localStorage.getItem('listDonHang')) || []; 
    let listsanpham = JSON.parse(localStorage.getItem('listSanPham')) || [];

    const product_startdate = new Date(product_startDate);
    const product_enddate = new Date(product_endDate);

    listdonhang.forEach(order => {
        const productOrderDate = new Date(order.Thoigian);

        if (product_startdate <= productOrderDate && productOrderDate <= product_enddate && (order.Trangthai === "Đã xác nhận" || order.Trangthai === "Đã giao thành công")) {
            order.sanPhamMua.forEach(sp => {
                const product = listsanpham.find(p => p.Masanpham === sp.Masanpham);
                if (product) {
                    if (!statistics[product.Masanpham]) {
                        statistics[product.Masanpham] = {
                            name: product.Ten,
                            sold: 0,
                            revenue: 0,
                            orders: []
                        };
                    }
                    statistics[product.Masanpham].sold += sp.SLmua;
                    statistics[product.Masanpham].revenue += (sp.SLmua * product.Gia);
                    statistics[product.Masanpham].orders.push(order);
                    totalRevenue += (sp.SLmua * product.Gia);
                }
            });
        }
    });

    displayStatistics(statistics, totalRevenue);
}

//Hiển thị các sản phẩm được thống kê
function displayStatistics(statistics, totalRevenue) {
    const statsDiv = document.getElementById('product-stats');
    statsDiv.innerHTML = `<h2>Total Revenue: ${totalRevenue} VND</h2>`;

    let bestSellingProduct = null;
    let leastSellingProduct = null;

    for (let productId in statistics) {
        let productStats = statistics[productId];
        statsDiv.innerHTML += `
            <h3>${productStats.name}</h3>
            <p>Bán được: ${productStats.sold}</p>
            <p>Doanh thu: ${productStats.revenue} VND</p>
            <button onclick="displayInvoices(${productId})">Xem hóa đơn</button>
            <hr>
        `;

        if (!bestSellingProduct || productStats.sold > statistics[bestSellingProduct].sold) {
            bestSellingProduct = productId;
        }
        if (!leastSellingProduct || productStats.sold < statistics[leastSellingProduct].sold) {
            leastSellingProduct = productId;
        }
    }

    statsDiv.innerHTML += `
        <h3>Best-Selling: ${statistics[bestSellingProduct].name}</h3>
        <h3>Least-Selling: ${statistics[leastSellingProduct].name}</h3>
    `;
}

// Hiển thị danh sách hóa đơn liên quan đến sản phẩm
function displayInvoices(productId) {
    let listdonhang = JSON.parse(localStorage.getItem('listDonHang')) || []; 
    let listsanpham = JSON.parse(localStorage.getItem('listSanPham')) || [];

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
            (order.Trangthai === "Đã xác nhận" || order.Trangthai === "Đã giao thành công")) {
            order.sanPhamMua.forEach(sp => {
                if (sp.Masanpham === productId) {
                    productOrders.push(order);
                }
            });
        }
    });

    const product = listsanpham.find(p => p.Masanpham === productId);

    if (product) {
        productInvoices.innerHTML = `<h2>Danh sách hóa đơn liên quan đến ${product.Ten}</h2>`;
        if (productOrders.length === 0) {
            productInvoices.innerHTML += `<p>Không có hóa đơn nào trong khoảng thời gian đã chọn.</p>`;
        } else {
            productOrders.forEach(order => {
                productInvoices.innerHTML += `
                    <p>Mã hóa đơn: ${order.Madon}</p>
                    <p>Mã khách hàng: ${order.Makhach}</p>
                    <p>Ngày: ${new Date(order.Thoigian).toLocaleDateString()}</p>
                    <p>Thành tiền: ${order.Thanhtien} VND</p>
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
    const product_startDate = document.getElementById('product_startDate').value;
    const product_endDate = document.getElementById('product_endDate').value;

    const product_startdate = new Date(product_startDate + "T00:00:00");
    const product_enddate = new Date(product_endDate + "T23:59:59");


    if (!isNaN(product_startdate.getTime()) && !isNaN(product_enddate.getTime()) && product_startdate <= product_enddate) {
        detailGenerateProductStatistics(product_startdate, product_enddate);
    } else {
        alert('Hãy chọn khoảng thời gian phù hợp. Ngày bắt đầu nhỏ hơn ngày kết thúc!');
    }
}

// Đóng form hiển thị danh sách hóa đơn liên quan đênns khách hàng
function closeProductInvoicesModal() {
    const modal = document.getElementById('product-invoices');
    modal.style.display = "none";
}