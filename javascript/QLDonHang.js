let listSanpham = JSON.parse(localStorage.getItem('listSanPham')); 
let listKhach = JSON.parse(localStorage.getItem('KhachList'));
let listDonHang = JSON.parse(localStorage.getItem('listDonHang'));
let isFiltered = false;

// Sắp xếp theo quận
function sortOrdersByDistrict(orders) {
    orders.sort((a, b) => {
        const districtA = parseInt(a.Diachi.match(/q\.(\d+)/)[1], 10);
        const districtB = parseInt(b.Diachi.match(/q\.(\d+)/)[1], 10);
        return districtA - districtB;
    });
}

// Hiển thị danh sách hóa đơn và các chwucs năng của quản lí hóa đơn
function displayOrders(filteredOrders = listDonHang) {
    const adminTableBody = document.getElementById('ordertable').getElementsByTagName('tbody')[0];
    adminTableBody.innerHTML = ''; // Clear existing rows
    
    sortOrdersByDistrict(filteredOrders);

    filteredOrders.forEach(order => {
        const row = adminTableBody.insertRow();

        const customer = listKhach.find(c => c.Makhach === order.Makhach);
        const product = listSanpham.find(p => p.Masanpham === order.Masanpham);

        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        const cell3 = document.createElement('td');
        const cell4 = document.createElement('td');
        const cell5 = document.createElement('td');

        cell1.textContent = order.Madon;
        cell2.textContent = customer ? customer.Tenkhach : 'Unknown';
        cell3.textContent = order.Thoigian;
        cell4.textContent = order.Trangthai;

        const detailButton = document.createElement('button');
        detailButton.textContent = 'Xem';
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

        cell5.appendChild(detailButton);
        cell5.appendChild(statusSelect);

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        row.appendChild(cell5);
    });
}

// Cập nhật trạng thái của hóa đơn
function updateOrderStatus(Madon, newStatus) { 
    listDonHang.forEach(order => {
        if (order.Madon === Madon) {
            order.Trangthai = newStatus;
        }
    });
    document.addEventListener('DOMContentLoaded', function () {
        localStorage.setItem('listDonHang', JSON.stringify(listDonHang));
    }); // Save updated list to localStorage
    displayOrders();
}

// Xem chi tiết hóa đơn
function detailOrder(orderId) {
    const order = listDonHang.find(item => item.Madon === orderId);
    if (!order) return;

    const customer = listKhach.find(c => c.Makhach === order.Makhach);

    document.getElementById('Madon').textContent = order.Madon;
    document.getElementById('Tenkhach').textContent = customer ? customer.Tenkhach : 'Unknown';
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
                <p>Thành tiền: ${product.Gia * sp.SLmua} VND</p>
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
