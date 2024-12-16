maK = null;/*Dùng để biết mã khách đang chọn để sửa thông tin*/
let listusers = JSON.parse(localStorage.getItem('userList')); /*Load danh sách khách hàng*/

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
        
        cell1.textContent = item.userId;
        cell2.textContent = item.fullName;
        cell3.textContent = item.phoneNumber;
        cell4.textContent = item.email;
        cell5.textContent = item.address;
        cell6.textContent = item.role;
        cell7.textContent = item.status;
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Sửa';
        editButton.className = 'edit-btn'; // Thêm lớp CSS
        editButton.onclick = function() {
            openEditModal(this);
        };
        
        const lockButton = document.createElement('button'); 
        lockButton.textContent = item.status === "Active" ? 'Khóa' : 'Gỡ khóa'; 
        lockButton.onclick = function() { 
            toggleLockUser(item.userId, this); 
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
//     localStorage.setItem('listUsers', listusers.filter(khach => khach.userId != idkhach));
// }

// Mở form sửa thông tin người dùng và hiển thị thông tin hiện tại của người dùng đang sửa
function openEditModal(khach) {
    const tr = khach.closest('tr');
    const id = tr.getElementsByTagName('td')[0].textContent;
    const name = tr.getElementsByTagName('td')[1].textContent;
    const phone = tr.getElementsByTagName('td')[2].textContent;
    const email = tr.getElementsByTagName('td')[3].textContent;
    const address = tr.getElementsByTagName('td')[4].textContent;
    const chucvu = tr.getElementsByTagName('td')[5].textContent;

    const usr = listusers.find(user => parseInt(user.userId) === parseInt(id));
   
    const password = usr.Password;
    
    maK = id;
    document.getElementById('editName').value = name;
    document.getElementById('editSDT').value = phone;
    document.getElementById('editEmail').value = email;
    document.getElementById('editDiachi').value = address;
    document.getElementById('editRole').value = chucvu;
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
    let flag = true;
    const name = document.getElementById('editName').value;
    const sdt = document.getElementById('editSDT').value;
    const email = document.getElementById('editEmail').value;
    const diachi = document.getElementById('editDiachi').value;
    const chucvu = document.getElementById('editRole').value;
    const password = document.getElementById('editPassword').value;

    const email_regex = /^[^\s@]+@gmail\.com$/;
    const diachi_quan_regex = /^[a-zA-Z\s]+,\s[pP]\.[a-zA-Z0-9\s]+,\s[qQ]\.[a-zA-Z0-9\s]+,\s[tT][pP][a-zA-Z\s]+$/;
    const diachi_huyen_regex = /^[a-zA-Z\s]+,\s[xX]\.[a-zA-Z0-9\s]+,\s[hH]\.[a-zA-Z0-9\s]+,\s[tT][pP][a-zA-Z\s]+$/;

    if(name === null || name === '') {
        alert("Xin hãy nhập họ tên của người dùng");
        flag = false;
    }
    else if(!email_regex.test(String(email))) {
        alert("Xin hãy nhập đúng form của email. email phải là abc@gmail.com");
        flag = false;
    }
    else if(!isFinite(Number(sdt))) {
        alert("Xin hãy nhập số vào số điện thoại");
        flag = false;
    }
    else if(String(sdt).length != 10) {
        alert("Xin hãy nhập số điện thoại đủ 10 số ");
        flag = false;
    }
    else if(diachi === null || diachi === '') {
        alert("Xin hãy nhập địa chỉ");
        flag = false;
    }
    else if(!(diachi_quan_regex.test(String(diachi)) || diachi_huyen_regex.test(String(diachi)))) {
        alert("Xin hãy nhập đúng dạng địa chỉ. Địa chỉ có dạng: số nhà đường, xã/phường, huyện/quận, TP");
        flag = false;
    }
    else if(password === null || password === '') {
        alert("Xin hãy nhập mật khẩu");
        flag = false;
    }
    
    if(flag) {
        listusers = listusers.map(khach => {
            if (khach.userId == maK) {
                return { ...khach, fullName: name, phoneNumber: sdt, email: email, address: diachi, role: chucvu, Password: password };
            }
            return khach;
        });
        localStorage.setItem('listusers', JSON.stringify(listusers));
        displayusr();
        closeEditUserModal();
    }
}

// Thêm người dùng vào data
function addUser() {
    let flag = true;
    const id = document.getElementById('addId').value;
    const name = document.getElementById('addName').value;
    const email = document.getElementById('addEmail').value;
    const sdt = document.getElementById('addSDT').value;
    const diachi = document.getElementById('addDiachi').value;
    const chucvu = document.getElementById('addRole').value;
    const usrname = document.getElementById('addUsername').value;
    const password = document.getElementById('addPassword').value;


    const email_regex = /^[^\s@]+@gmail\.com$/;
    const diachi_quan_regex = /^[a-zA-Z\s]+,\s[pP]\.[a-zA-Z0-9\s]+,\s[qQ]\.[a-zA-Z0-9\s]+,\s[tT][pP][a-zA-Z\s]+$/;
    const diachi_huyen_regex = /^[a-zA-Z\s]+,\s[xX]\.[a-zA-Z0-9\s]+,\s[hH]\.[a-zA-Z0-9\s]+,\s[tT][pP][a-zA-Z\s]+$/;

    if(id === null || id === '') {
        alert("Xin nhập ID người dùng");
        flag = false;
    }
    else if(!isFinite(Number(id))) {
        alert('Xin hãy nhập số vào mã người dùng');
        flag = false;
    }
    else if(name === null || name === '') {
        alert("Xin hãy nhập họ tên của người dùng");
        flag = false;
    }
    else if(!email_regex.test(String(email))) {
        alert("Xin hãy nhập đúng form của email. email phải là abc@gmail.com");
        flag = false;
    }
    else if(!isFinite(Number(sdt))) {
        alert("Xin hãy nhập số vào số điện thoại");
        flag = false;
    }
    else if(String(sdt).length != 10) {
        alert("Xin hãy nhập số điện thoại đủ 10 số ");
        flag = false;
    }
    else if(diachi === null || diachi === '') {
        alert("Xin hãy nhập địa chỉ");
        flag = false;
    }
    else if(!(diachi_quan_regex.test(String(diachi)) || diachi_huyen_regex.test(String(diachi)))) {
        alert("Xin hãy nhập đúng dạng địa chỉ. Địa chỉ có dạng: số nhà đường, xã/phường, huyện/quận, TP");
        flag = false;
    }
    else if(usrname === null  || usrname === '') {
        alert("Xin hãy nhập username");
        flag = false;
    }
    else if(password === null || password === '') {
        alert("Xin hãy nhập mật khẩu");
        flag = false;
    }
    else {
        listusers.forEach(us => {
            if(String(us.userId) === String(id)) {
                alert("Mã người dùng đã tồn tại. Xin hãy nhập lại mã người dùng");
                flag = false;
            }
        });
    }

    if(flag) {
        const newKhach = {userId: id, fullName: name, phoneNumber: sdt, email: email, address: diachi, role: chucvu, status: "Active", Username: usrname, Password: password, role: "Nhân viên"};

        listusers.push(newKhach);
        localStorage.setItem('listusers', JSON.stringify(listusers));
        displayusr();
        closeAddUserModal();
    }
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
function toggleLockUser(userId, button) { 
    listusers = listusers.map(khach => { 
        if (khach.userId === userId) { 
            if (khach.status === "Active") { 
                button.textContent = 'Gỡ khóa'; 
                return { ...khach, status: "Locked" }; 
            } 
            else { 
                button.textContent = 'Khóa'; 
                return { ...khach, status: "Active" }; 
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
        kh.userId.toString().toLowerCase().includes(searchcustomerKey) || 
        kh.fullName.toString().toLowerCase().includes(searchcustomerKey));

    displayusr(customerList);
}


displayusr();