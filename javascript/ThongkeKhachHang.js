let listdh = JSON.parse(localStorage.getItem('listDonHang')) || [];

// Chọn các hóa đơn theo khoảng thời gian thống kê, tính tổng tiền của các hóa đơn liên quan đến khách hàng và lưu các hóa đơn đó, sắp xếp các khách hàng theo phát sinh doanh thu
function detailGenerateCustomerStatistics(filtered_list = listdh) {
    let customerRevenue = {};

    filtered_list.forEach(donhang => {
        if (donhang.status === "Đã xác nhận" || donhang.status === "Đã giao thành công") {
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

    console.log(customerRevenue);

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
    let listkh = JSON.parse(localStorage.getItem('userList')) || [];

    const statsDiv = document.getElementById('customer-stats'); 
    statsDiv.innerHTML = `<h2>Top khách hàng theo phát sinh doanh thu</h2>`; 
    let count = 0;

    topCustomers.forEach(customer => { 
        if (count < 5) {
            const customerDetails = listkh.find(c => c.userId == customer.Makhach); 
            if (customerDetails) { 
                statsDiv.innerHTML += ` 
                    <div> 
                        <h3>${customerDetails.fullName}</h3> 
                        <p>Phát sinh doanh thu: ${customer.revenue} VND</p> 
                        <button onclick="displayCustomerInvoices(${customer.Makhach})">Xem hóa đơn</button> 
                    </div> 
                    <hr> 
                `; 
                count++; // Tăng biến đếm lên sau khi hiển thị một khách hàng
            } 
        }
    }); 

}

// Hiển thị danh sách hóa đơn liên quan đến khách hàng
function displayCustomerInvoices(makhach) { 
    listdh = JSON.parse(localStorage.getItem('listDonHang')) || [];
    let listkh = JSON.parse(localStorage.getItem('userList')) || [];
    let listsp = JSON.parse(localStorage.getItem('products')) || [];

    const modal = document.getElementById('customer-invoices');
    const invoicesDiv = document.getElementById('cInvoices'); 

    const customerOrders = listdh.filter(order => {
        return order.Makhach == makhach && 
               (order.status === "Đã xác nhận" || order.status === "Đã giao thành công");
    });

    const customerDetails = listkh.find(c => c.userId == makhach); 
    invoicesDiv.innerHTML = `<h2>Danh sách hóa đơn liên quan đến khách hàng ${customerDetails.fullName}</h2>`; 
    if (customerOrders.length === 0) {
        invoicesDiv.innerHTML += `<p>Không có hóa đơn nào trong khoảng thời gian đã chọn.</p>`;
    } else {
        customerOrders.forEach(order => { 
            invoicesDiv.innerHTML += ` 
            <p>Mã hóa đơn: ${order.Madon}</p> 
            <p>Ngày: ${new Date(order.Thoigian).toLocaleDateString()}</p>
            ${order.sanPhamMua.map(sp => { 
                const product = listsp.find(p => p.ID === sp.ID); 
                return `<p>Sản phẩm: ${product.name} - Số lượng: ${sp.SLmua}</p>`; 
            }).join('')}
            <p>Thành tiền: ${order.Thanhtien} VND</p> <hr> `; 
        });
    }

    modal.style.display = "block";
}


// Lấy khoảng thời gian để bắt đầu thống kê
function generateCustomerStatistics() {
    listdh = JSON.parse(localStorage.getItem('listDonHang'));

    const customer_startDate = document.getElementById('customer_startDate').value;
    const customer_endDate = document.getElementById('customer_endDate').value;


    // Chuyển đổi sang đối tượng thời gian để so sánh
    const customer_startdate = new Date(customer_startDate + "T00:00:00");
    const customer_enddate = new Date(customer_endDate + "T23:59:59");

    let filtered_customers = listdh.filter(item => {
        const orderdate = new Date(item.Thoigian);
        return customer_startdate <= orderdate && orderdate <= customer_enddate;
    })

    // Kiểm tra thời gian chọn có hợp lí không (thời hian bắt đầu nhỏ hơn thời gian kết thúc)
    if (filtered_customers) {
        detailGenerateCustomerStatistics(filtered_customers);
    } else {
        alert('Hãy chọn lại khoảng thời gian. Thời gian bắt đầu nhỏ hơn thời gian kết thúc!');
    }
}

// Đóng form hiển thị danh sách hóa đơn liên quan đến khách hàng
function closeCustomerInvoicesModal() {
    const modal = document.getElementById('customer-invoices');
    modal.style.display = "none";
}
detailGenerateCustomerStatistics()