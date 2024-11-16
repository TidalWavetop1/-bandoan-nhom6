maK = null;/*Dùng để biết mã khách đang chọn để sửa thông tin*/
let KhachList = JSON.parse(localStorage.getItem('KhachList')); /*Load danh sách khách hàng*/

// form hiển thị khách hàng cùng với các chức năng quản lí khách hàng
function displayusr(customers = KhachList) {
    const adminTableBody = document.getElementById('usertable').getElementsByTagName('tbody')[0];
    adminTableBody.innerHTML = ''; // Clear existing rows

    customers.forEach(item => {
        const row = adminTableBody.insertRow();

        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        const cell3 = document.createElement('td');
        const cell4 = document.createElement('td');
        const cell5 = document.createElement('td');
        const cell6 = document.createElement('td');
        const cell7 = document.createElement('td');
        
        cell1.textContent = item.Makhach;
        cell2.textContent = item.Tenkhach;
        cell3.textContent = item.SDT;
        cell4.textContent = item.Email;
        cell5.textContent = item.Diachi;
        cell6.textContent = item.Trangthai;
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Sửa';
        editButton.onclick = function() {
            openEditModal(this);
        };
        
        const lockButton = document.createElement('button'); 
        lockButton.textContent = item.Trangthai === "Hoạt động" ? 'Khóa' : 'Gỡ khóa'; 
        lockButton.onclick = function() { 
            toggleLockUser(item.Makhach, this); 
        };
        lockButton.className = 'lock-btn';

        cell7.appendChild(editButton);
        cell7.appendChild(lockButton);

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        row.appendChild(cell5);
        row.appendChild(cell6);
        row.appendChild(cell7);
    });
}

// Xóa khách hàng khỏi data theo mã khách hàng
function removeKhach(idkhach) {
    KhachList.filter(khach => khach.Makhach != idkhach);
}

// Tìm khách theo mã khách hàng
function findKhach(idkhach) {
    KhachList.find(khach => khach.Makhach == idkhach);
}

// Mở form sửa thông tin khách hàng và hiển thị thông tin hiện tại của khách đang sửa
function openEditModal(khach) {
    const tr = khach.closest('tr');
    const id = tr.getElementsByTagName('td')[0].textContent;
    const name = tr.getElementsByTagName('td')[1].textContent;
    const email = tr.getElementsByTagName('td')[2].textContent;
    const phone = tr.getElementsByTagName('td')[3].textContent;
    const address = tr.getElementsByTagName('td')[4].textContent;

    maK = id;
    document.getElementById('editName').value = name;
    document.getElementById('editSDT').value = phone;
    document.getElementById('editEmail').value = email;
    document.getElementById('editDiachi').value = address;
    
    const modal = document.getElementById('editUserModal');
    modal.style.display = "block";
}

// Đóng form sửa thông tin
function closeEditUserModal() {
    const modal = document.getElementById('editUserModal');
    modal.style.display = "none";
}

// Dùng để lưu thông tin đã được sửa
function saveKhach() {
    const name = document.getElementById('editName').value;
    const sdt = document.getElementById('editSDT').value;
    const email = document.getElementById('editEmail').value;
    const diachi = document.getElementById('editDiachi').value;
    
    KhachList = KhachList.map(khach => {
        if (khach.Makhach == maK) {
            return { ...khach, Tenkhach: name, SDT: sdt, Email: email, Diachi: diachi };
        }
        return khach;
    });
    displayusr();
    closeEditUserModal();
}

// Thêm khách hàng vào data
function addKhach() {
    const id = document.getElementById('addId').value;
    const name = document.getElementById('addName').value;
    const email = document.getElementById('addEmail').value;
    const sdt = document.getElementById('addSDT').value;
    const diachi = document.getElementById('addDiachi').value;

    const newKhach = {Makhach: id, Tenkhach: name, SDT: sdt, Email: email, Diachi: diachi, Trangthai: "Hoạt động"};

    KhachList.push(newKhach);
    displayusr();
    closeAddUserModal();
}

// Mở form điền thông tin khách hàng cần thêm
function openAddUserModal() {
    const modal = document.getElementById('addUserModal');
    modal.style.display = "block";
}

// Đóng form điền thông tin khách hàng cần thêm
function closeAddUserModal() {
    const modal = document.getElementById('addUserModal')
    modal.style.display = "none"
}

// Khóa, gỡ khóa khách hàng và thay đổi trạng thái của nút theo tình trạng của khách
function toggleLockUser(Makhach, button) { 
    KhachList = KhachList.map(khach => { 
        if (khach.Makhach === Makhach) { 
            if (khach.Trangthai === "Hoạt động") { 
                button.textContent = 'Gỡ khóa'; 
                return { ...khach, Trangthai: "Đã khóa" }; 
            } 
            else { 
                button.textContent = 'Khóa'; 
                return { ...khach, Trangthai: "Hoạt động" }; 
            } 
        } 
        return khach; 
    }); 
    displayusr()
}

// Tìm kiếm khách hàng
function searchCustomer() {
    const searchcustomerKey = document.getElementById('searchCustomerKey').value.trim().toLowerCase();
    const customerList = KhachList.filter(kh => 
        kh.Makhach.toString().toLowerCase().includes(searchcustomerKey) || 
        kh.Tenkhach.toString().toLowerCase().includes(searchcustomerKey));

    displayusr(customerList);
}


displayusr();