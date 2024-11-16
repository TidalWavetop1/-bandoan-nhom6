let listdh = JSON.parse(localStorage.getItem('listDonHang')) || [];
let listkh = JSON.parse(localStorage.getItem('KhachList')) || [];
let listsp = JSON.parse(localStorage.getItem('listSanPham')) || [];

// Chọn các hóa đơn theo khoảng thời gian thống kê, tính tổng tiền của các hóa đơn liên quan đến khách hàng và lưu các hóa đơn đó, sắp xếp các khách hàng theo phát sinh doanh thu
function detailGenerateCustomerStatistics(customer_startDate, customer_endDate) {
    let customerRevenue = {};

    // Đảm bảo các đối tượng là type date
    const customer_startdate = new Date(customer_startDate);
    const customer_enddate = new Date(customer_endDate);

    listdh.forEach(donhang => {
        const customerOrderDate = new Date(donhang.Thoigian);
        if (customerOrderDate >= customer_startdate && customerOrderDate <= customer_enddate) {
            if (!customerRevenue[donhang.Makhach]) {
                customerRevenue[donhang.Makhach] = {
                    revenue: 0,
                    orders: []
                };
            }
            customerRevenue[donhang.Makhach].revenue += donhang.Thanhtien;
            customerRevenue[donhang.Makhach].orders.push(donhang);
        }
    });

    // Chuyển đổi sang mảng và sắp xếp theo phát sinh doanh thu
    let sortedCustomers = Object.keys(customerRevenue)
        .map(makhach => ({
            Makhach: makhach,
            revenue: customerRevenue[makhach].revenue,
            orders: customerRevenue[makhach].orders
        }))
        .sort((a, b) => b.revenue - a.revenue);

    // Gắn và truyền vào hàm displayCustomerStatistics() để hiển thị
    let topCustomers = sortedCustomers;
    displayCustomerStatistics(topCustomers);
}

// Hiển thị top khách hàng phát sinh doanh thu nhiều nhất
function displayCustomerStatistics(topCustomers) { 
    const statsDiv = document.getElementById('customer-stats'); 
    statsDiv.innerHTML = `<h2>Top khách hàng theo phát sinh doanh thu</h2>`; 
    topCustomers.forEach(customer => { 
        const customerDetails = listkh.find(c => c.Makhach == customer.Makhach); 
        if (customerDetails) { 
            statsDiv.innerHTML += ` 
                <div> 
                    <h3>${customerDetails.Tenkhach}</h3> 
                    <p>Phát sinh doanh thu: ${customer.revenue} VND</p> 
                    <button onclick="displayCustomerInvoices(${customer.Makhach})">Xem hóa đơn</button> 
                </div> <hr> `; 
        } }); 
}

// Hiển thị danh sách hóa đơn liên quan đến khách hàng
function displayCustomerInvoices(makhach) { 
    const modal = document.getElementById('customer-invoices');
    const invoicesDiv = document.getElementById('cInvoices'); 

    const customerOrders = listdh.filter(order => order.Makhach == makhach); 
    const customerDetails = listkh.find(c => c.Makhach == makhach); 
    invoicesDiv.innerHTML = `<h2>Danh sách hóa đơn liên quan đến khách hàng ${customerDetails.Tenkhach}</h2>`; 
    customerOrders.forEach(order => { 
        invoicesDiv.innerHTML += ` 
        <p>Mã hóa đơn: ${order.Madon}</p> 
        <p>Ngày: ${order.Thoigian}</p> 
        ${order.sanPhamMua.map(sp => { 
            const product = listsp.find(p => p.Masanpham === sp.Masanpham); 
            return `<p>Sản phẩm: ${product.Ten} - Số lượng: ${sp.SLmua}</p>`; 
        }).join('')} 
        <p>Thành tiền: ${order.Thanhtien} VND</p> <hr> `; 
    }); 

    modal.style.display = "block";
}

// Lấy khoảng thời gian để bắt đầu thống kê
function generateCustomerStatistics() {
    const customer_startDate = document.getElementById('customer_startDate').value;
    const customer_endDate = document.getElementById('customer_endDate').value;


    // Chuyển đổi sang đối tượng thời gian để so sánh
    const customer_startdate = new Date(customer_startDate + "T00:00:00");
    const customer_enddate = new Date(customer_endDate + "T23:59:59");


    // Kiểm tra thời gian chọn có hợp lí không (thời hian bắt đầu nhỏ hơn thời gian kết thúc)
    if (!isNaN(customer_startdate.getTime()) && !isNaN(customer_enddate.getTime()) && customer_startdate <= customer_enddate) {
        detailGenerateCustomerStatistics(customer_startdate, customer_enddate);
    } else {
        alert('Hãy chọn lại khoảng thời gian. Thời gian bắt đầu nhỏ hơn thời gian kết thúc!');
    }
}

// Đóng form hiển thị danh sách hóa đơn liên quan đến khách hàng
function closeCustomerInvoicesModal() {
    const modal = document.getElementById('customer-invoices');
    modal.style.display = "none";
}