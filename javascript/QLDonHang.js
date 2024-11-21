let listDonHang = JSON.parse(localStorage.getItem('listDonHang'));
let isFiltered = false;

// Sắp xếp theo quận
function sortOrdersByDistrictName(orders) {
    orders.sort((a, b) => {
        const matchA = a.Diachi.match(/q\.(\d+|\w+)/);
        const matchB = b.Diachi.match(/q\.(\d+|\w+)/);

        if (matchA && matchB) {
            const districtA = matchA[1];
            const districtB = matchB[1];

            if (!isNaN(districtA) && !isNaN(districtB)) {
                // Nếu cả hai đều là số, so sánh số
                return parseInt(districtA, 10) - parseInt(districtB, 10);
            } else {
                // Nếu một trong hai hoặc cả hai là chữ, so sánh chuỗi
                return districtA.localeCompare(districtB);
            }
        }
        return 0;
    });
}


// Hiển thị danh sách hóa đơn và các chwucs năng của quản lí hóa đơn
function displayOrders(filteredOrders = listDonHang) {
    // let listnhanvien = JSON.parse(localStorage.getItem('listUsers'));
    let listSanpham = JSON.parse(localStorage.getItem('listSanPham')); 

    const adminTableBody = document.getElementById('ordertable').getElementsByTagName('tbody')[0];
    adminTableBody.innerHTML = ''; // Clear existing rows
    
    sortOrdersByDistrictName(filteredOrders);

    filteredOrders.forEach(order => {
        const row = adminTableBody.insertRow();

        // const staff = listnhanvien.find(c => c.Manguoidung === order.Manhanvien);
        const product = listSanpham.find(p => p.Masanpham === order.Masanpham);

        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        const cell3 = document.createElement('td');
        const cell4 = document.createElement('td');
        const cell5 = document.createElement('td');
        const cell6 = document.createElement('td');

        cell1.textContent = order.Madon;
        cell2.textContent = order.Makhach;
        cell3.textContent = order.Manhanvien;
        cell4.textContent = order.Thoigian;
        cell5.textContent = order.Trangthai;

        const detailButton = document.createElement('button');
        detailButton.textContent = 'Xem';
        detailButton.className = 'view-btn';
        detailButton.onclick = function() {
            detailOrder(order.Madon);
        };

        const statusSelect = document.createElement('select'); 
        const statuses = ["Chưa xử lí", "Đã xác nhận", "Đã giao thành công", "Đã hủy"]; 
        statuses.forEach(status => { 
            const option = document.createElement('option'); 
            option.value = status; 
            option.textContent = status; 
            if (status === order.Trangthai) { 
                option.selected = true; 
            } 
            statusSelect.appendChild(option);
        }); 
        statusSelect.onchange = function() { 
            updateOrderStatus(order.Madon, this.value);
        };
        statusSelect.className = 'confirm-status';

        cell6.appendChild(detailButton);
        cell6.appendChild(statusSelect);

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        row.appendChild(cell5);
        row.appendChild(cell6);
    });
}

// Cập nhật trạng thái của hóa đơn
function updateOrderStatus(Madon, newStatus) { 
    listDonHang.forEach(order => {
        if (order.Madon === Madon) {
            order.Trangthai = newStatus;
        }
    });
    localStorage.setItem('listDonHang', JSON.stringify(listDonHang));
    displayOrders();
}

// Xem chi tiết hóa đơn
function detailOrder(orderId) {
    let listKhach = JSON.parse(localStorage.getItem('listUsers'));
    let listSanpham = JSON.parse(localStorage.getItem('listSanPham')); 

    const order = listDonHang.find(item => item.Madon === orderId);
    if (!order) return;

    const customer = listKhach.find(c => c.Manguoidung === order.Makhach);

    document.getElementById('Madon').textContent = order.Madon;
    document.getElementById('Makhach').textContent = order.Makhach;
    document.getElementById('Manhanvien').textContent = order.Manhanvien;
    document.getElementById('Thoigian').textContent = order.Thoigian;
    document.getElementById('Thanhtien').textContent = order.Thanhtien;
    document.getElementById('PTTT').textContent = order.PTTT;
    document.getElementById('Diachi').textContent = order.Diachi;

    const sanPhamDiv = document.getElementById('sanPhamMua');
    sanPhamDiv.innerHTML = ''; // Clear previous content

    order.sanPhamMua.forEach(sp => {
        const product = listSanpham.find(p => p.Masanpham === sp.Masanpham);
        if (product) {
            const productInfo = document.createElement('div');
            productInfo.innerHTML = `
                <p>Tên sản phẩm: ${product.Ten}</p>
                <p>Số lượng mua: ${sp.SLmua}</p>
                <p>Tổng tiền: ${product.Gia * sp.SLmua} VND</p>
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

    let filteredOrders = listDonHang;

    if (!isFiltered) {
        if (startDate !== '' && endDate !== '') {
            filteredOrders = filteredOrders.filter(item => {
                const orderDate = new Date(item.Thoigian);
                return orderDate >= new Date(startDate) && orderDate <= new Date(endDate);
            });
        }

        if (statusFilter !== '') {
            filteredOrders = filteredOrders.filter(item => item.Trangthai === statusFilter);
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
