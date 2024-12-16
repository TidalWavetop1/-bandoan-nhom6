let listDonHang = JSON.parse(localStorage.getItem('listDonHang'));
let isFiltered = false;


// Hiển thị danh sách hóa đơn và các chwucs năng của quản lí hóa đơn
function displayOrders(filteredOrders = listDonHang) {
    let listSanpham = JSON.parse(localStorage.getItem('products')); 

    const adminTableBody = document.getElementById('ordertable').getElementsByTagName('tbody')[0];
    adminTableBody.innerHTML = ''; // Clear existing rows
    
    filteredOrders.forEach(order => {
        const row = adminTableBody.insertRow();

        // const staff = listnhanvien.find(c => c.userId === order.Manhanvien);
        const product = listSanpham.find(p => p.ID === order.ID);

        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        const cell3 = document.createElement('td');
        const cell4 = document.createElement('td');
        const cell5 = document.createElement('td');
        const cell6 = document.createElement('td');
        const cell7 = document.createElement('td');

        cell1.textContent = order.Madon;
        cell2.textContent = order.Makhach;
        cell3.textContent = order.Manhanvien;
        cell4.textContent = order.Thoigian;
        cell5.textContent = order.address;
        cell6.textContent = order.status;

        const detailButton = document.createElement('button');
        detailButton.textContent = 'Xem';
        detailButton.className = 'view-btn';
        detailButton.onclick = function() {
            detailOrder(order.Madon, filteredOrders);
        };

        const statusSelect = document.createElement('select'); 
        const statuses = ["Chưa xử lí", "Đã xác nhận", "Đã giao thành công", "Đã hủy"]; 
        statuses.forEach(status => { 
            const option = document.createElement('option'); 
            option.value = status; 
            option.textContent = status; 
            if (status === order.status) { 
                option.selected = true; 
            } 
            statusSelect.appendChild(option);
        }); 
        statusSelect.onchange = function() { 
            updateOrderStatus(order.Madon, this.value);
        };
        statusSelect.className = 'confirm-status';

        cell7.appendChild(detailButton);
        cell7.appendChild(statusSelect);

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        row.appendChild(cell5);
        row.appendChild(cell6);
        row.appendChild(cell7);
    });
}

// Cập nhật trạng thái của hóa đơn
function updateOrderStatus(Madon, newStatus) { 
    listDonHang.forEach(order => {
        if (order.Madon === Madon) {
            order.status = newStatus;
        }
    });
    localStorage.setItem('listDonHang', JSON.stringify(listDonHang));
    displayOrders();
}

// Xem chi tiết hóa đơn
function detailOrder(orderId, filteredOrders) {
    let listKhach = JSON.parse(localStorage.getItem('userList'));
    let listSanpham = JSON.parse(localStorage.getItem('products')); 

    const order = filteredOrders.find(item => item.Madon === orderId);
    if (!order) return;

    const customer = listKhach.find(c => c.userId === order.Makhach);

    document.getElementById('Madon').textContent = order.Madon;
    document.getElementById('Makhach').textContent = order.Makhach;
    document.getElementById('Manhanvien').textContent = order.Manhanvien;
    document.getElementById('Thoigian').textContent = order.Thoigian;
    document.getElementById('Thanhtien').textContent = order.Thanhtien;
    document.getElementById('PTTT').textContent = order.PTTT;
    document.getElementById('address').textContent = order.address;

    const sanPhamDiv = document.getElementById('sanPhamMua');
    sanPhamDiv.innerHTML = ''; // Clear previous content

    order.sanPhamMua.forEach(sp => {
        const product = listSanpham.find(p => p.ID === sp.ID);
        if (product) {
            const productInfo = document.createElement('div');
            productInfo.innerHTML = `
                <p>Tên sản phẩm: ${product.name}</p>
                <p>Số lượng mua: ${sp.SLmua}</p>
                <p>Tổng tiền: ${product.price * sp.SLmua} VND</p>
                <hr>
            `;
            sanPhamDiv.appendChild(productInfo);
        }
    });

    const modal = document.getElementById('detailOrderModal');
    modal.style.display = "block";
}

// Đóng form xem chi tiết hóa đơn
function closeOrderDetailModal() {
    const modal = document.getElementById('detailOrderModal');
    modal.style.display = "none";
}

// Lọc hóa đơn theo khoảng thời gian và tình trạng của hóa đơn
function applyFilters() {
    // Ngăn chặn hành vi mặc định nếu nút là một phần của form hoặc button submit
    if (event) event.preventDefault();
    document.getElementById('filterButton').className = 'filter-button';
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const statusFilter = document.getElementById('statusFilter').value;
    const districtFilter = document.getElementById('districtFilter').value;

    let filteredOrders = listDonHang;

    if (!isFiltered) {
        if (startDate !== '' && endDate !== '') {
            filteredOrders = filteredOrders.filter(item => {
                const orderDate = new Date(item.Thoigian);
                return orderDate >= new Date(startDate + "T00:00:00") && orderDate <= new Date(endDate + "T23:59:59");
            });
        }

        if (statusFilter !== '') {
            filteredOrders = filteredOrders.filter(item => item.status === statusFilter);
        }

        if(districtFilter !== '') {
            filteredOrders = filteredOrders.filter(item => {
                const matchA = item.address.match(/q\.(\d+|\w+)/);

                if (matchA) {
                    const districtA = matchA[1];
                    return districtA === districtFilter;
                }
                return 0;
            })
        }

        isFiltered = true;
        document.getElementById('filterButton').textContent = 'Bỏ Lọc';
    } else {
        isFiltered = false;
        document.getElementById('filterButton').textContent = 'Lọc';
    }

    displayOrders(filteredOrders);
}

// Tìm kiếm hóa đơn
function searchOrder() {
    const searchorderKey = document.getElementById('searchOrderKey').value;
    const orderList = listDonHang.filter(dh => 
        dh.Madon.toString().toLowerCase().includes(searchorderKey) ||
        dh.Makhach.toString().toLowerCase().includes(searchorderKey));

    displayOrders(orderList);
}

displayOrders();
