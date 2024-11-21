maK = null;/*Dùng để biết mã khách đang chọn để sửa thông tin*/
let listusers = JSON.parse(localStorage.getItem('listUsers')); /*Load danh sách khách hàng*/

// form hiển thị người dùng cùng với các chức năng quản lí người dùng
function displayusr(users = listusers) {
    const adminTableBody = document.getElementById('usertable').getElementsByTagName('tbody')[0];
    adminTableBody.innerHTML = ''; // Clear existing rows

    users.forEach(item => {
        const row = adminTableBody.insertRow();

        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        const cell3 = document.createElement('td');
        const cell4 = document.createElement('td');
        const cell5 = document.createElement('td');
        const cell6 = document.createElement('td');
        const cell7 = document.createElement('td');
        const cell8 = document.createElement('td');
        
        cell1.textContent = item.Manguoidung;
        cell2.textContent = item.Tennguoidung;
        cell3.textContent = item.SDT;
        cell4.textContent = item.Email;
        cell5.textContent = item.Diachi;
        cell6.textContent = item.Chucvu;
        cell7.textContent = item.Trangthai;
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Sửa';
        editButton.className = 'edit-btn'; // Thêm lớp CSS
        editButton.onclick = function() {
            openEditModal(this);
        };
        
        const lockButton = document.createElement('button'); 
        lockButton.textContent = item.Trangthai === "Hoạt động" ? 'Khóa' : 'Gỡ khóa'; 
        lockButton.className = 'lock-btn'; // Thêm lớp CSS
        lockButton.onclick = function() { 
            toggleLockUser(item.Manguoidung, this); 
        };
        lockButton.className = 'lock-btn';

        cell8.appendChild(editButton);
        cell8.appendChild(lockButton);

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        row.appendChild(cell5);
        row.appendChild(cell6);
        row.appendChild(cell7);
        row.appendChild(cell8);
    });
}

// Xóa người dùng khỏi data theo mã người dùng
// function removeKhach(idkhach) {
//     localStorage.setItem('listUsers', listusers.filter(khach => khach.Manguoidung != idkhach));
// }

// Mở form sửa thông tin người dùng và hiển thị thông tin hiện tại của người dùng đang sửa
function openEditModal(khach) {
    const tr = khach.closest('tr');
    const id = tr.getElementsByTagName('td')[0].textContent;
    const name = tr.getElementsByTagName('td')[1].textContent;
    const phone = tr.getElementsByTagName('td')[2].textContent;
    const email = tr.getElementsByTagName('td')[3].textContent;
    const address = tr.getElementsByTagName('td')[4].textContent;

    const usr = listusers.find(user => parseInt(user.Manguoidung) === parseInt(id));
   
    const password = usr.Password;
    
    maK = id;
    document.getElementById('editName').value = name;
    document.getElementById('editSDT').value = phone;
    document.getElementById('editEmail').value = email;
    document.getElementById('editDiachi').value = address;
    document.getElementById('editPassword').value = password;
    
    const modal = document.getElementById('editUserModal');
    modal.style.display = "block";
}

// Đóng form sửa thông tin
function closeEditUserModal() {
    const modal = document.getElementById('editUserModal');
    modal.style.display = "none";
}

// Dùng để lưu thông tin đã được sửa
function saveUser() {
    const name = document.getElementById('editName').value;
    const sdt = document.getElementById('editSDT').value;
    const email = document.getElementById('editEmail').value;
    const diachi = document.getElementById('editDiachi').value;
    const password = document.getElementById('editPassword').value;
    
    listusers = listusers.map(khach => {
        if (khach.Manguoidung == maK) {
            return { ...khach, Tennguoidung: name, SDT: sdt, Email: email, Diachi: diachi, Password: password };
        }
        return khach;
    });
    localStorage.setItem('listusers', JSON.stringify(listusers));
    displayusr();
    closeEditUserModal();
}

// Thêm người dùng vào data
function addUser() {
    const id = document.getElementById('addId').value;
    const name = document.getElementById('addName').value;
    const email = document.getElementById('addEmail').value;
    const sdt = document.getElementById('addSDT').value;
    const diachi = document.getElementById('addDiachi').value;
    const usrname = document.getElementById('addUsername').value;
    const password = document.getElementById('addPassword').value;

    const newKhach = {Manguoidung: id, Tennguoidung: name, SDT: sdt, Email: email, Diachi: diachi, Trangthai: "Hoạt động", Username: usrname, Password: password, Chucvu: "Nhân viên"};

    listusers.push(newKhach);
    localStorage.setItem('listusers', JSON.stringify(listusers));
    displayusr();
    closeAddUserModal();
}

// Mở form điền thông tin người dùng cần thêm
function openAddUserModal() {
    const modal = document.getElementById('addUserModal');
    modal.style.display = "block";
}

// Đóng form điền thông tin người dùng cần thêm
function closeAddUserModal() {
    const modal = document.getElementById('addUserModal')
    modal.style.display = "none"
}

// Khóa, gỡ khóa người dùng và thay đổi trạng thái của nút theo tình trạng của người dùng
function toggleLockUser(Manguoidung, button) { 
    listusers = listusers.map(khach => { 
        if (khach.Manguoidung === Manguoidung) { 
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
    localStorage.setItem('listusers', JSON.stringify(listusers));
    displayusr()
}

// Tìm kiếm người dùng
function searchUser() {
    const searchcustomerKey = document.getElementById('searchCustomerKey').value.trim().toLowerCase();
    const customerList = listusers.filter(kh => 
        kh.Manguoidung.toString().toLowerCase().includes(searchcustomerKey) || 
        kh.Tennguoidung.toString().toLowerCase().includes(searchcustomerKey));

    displayusr(customerList);
}


displayusr();