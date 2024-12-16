// Mở chức năng quản lí người dùng
function userOn() {
    const dashboard_modal = document.getElementById('dashboard');
    const user_modal = document.getElementById('users');
    const product_modal = document.getElementById('products');
    const order_modal = document.getElementById('orders');
    const products_stat_modal = document.getElementById('product-statistics');
    const customers_stat_modal = document.getElementById('customer-statistics');

    dashboard_modal.style.display = "none";
    product_modal.style.display = "none";
    order_modal.style.display = "none";
    products_stat_modal.style.display = "none";
    customers_stat_modal.style.display = "none";
    user_modal.style.display = "block";
}

// Mở chức năng quản lí sản phẩm
function productOn() {
    const dashboard_modal = document.getElementById('dashboard');
    const user_modal = document.getElementById('users');
    const product_modal = document.getElementById('products');
    const order_modal = document.getElementById('orders');
    const products_stat_modal = document.getElementById('product-statistics');
    const customers_stat_modal = document.getElementById('customer-statistics');

    dashboard_modal.style.display = "none";
    product_modal.style.display = "block";
    order_modal.style.display = "none";
    products_stat_modal.style.display = "none";
    customers_stat_modal.style.display = "none";
    user_modal.style.display = "none";
}

// Mở chức năng quản lí hóa đơn
function orderOn() {
    const dashboard_modal = document.getElementById('dashboard');
    const user_modal = document.getElementById('users');
    const product_modal = document.getElementById('products');
    const order_modal = document.getElementById('orders');
    const products_stat_modal = document.getElementById('product-statistics');
    const customers_stat_modal = document.getElementById('customer-statistics');

    dashboard_modal.style.display = "none";
    product_modal.style.display = "none";
    order_modal.style.display = "block";
    products_stat_modal.style.display = "none";
    customers_stat_modal.style.display = "none";
    user_modal.style.display = "none";
}

// Mở chức năng thống kê sản phẩm
function productStatsOn() { 
    const dashboard_modal = document.getElementById('dashboard');
    const user_modal = document.getElementById('users');
    const product_modal = document.getElementById('products');
    const order_modal = document.getElementById('orders');
    const products_stat_modal = document.getElementById('product-statistics');
    const customers_stat_modal = document.getElementById('customer-statistics');

    dashboard_modal.style.display = "none";
    product_modal.style.display = "none";
    order_modal.style.display = "none";
    products_stat_modal.style.display = "block";
    customers_stat_modal.style.display = "none";
    user_modal.style.display = "none";
} 

// Mở chức năng thống kê khách hàng
function customerStatsOn() { 
    const dashboard_modal = document.getElementById('dashboard');
    const user_modal = document.getElementById('users');
    const product_modal = document.getElementById('products');
    const order_modal = document.getElementById('orders');
    const products_stat_modal = document.getElementById('product-statistics');
    const customers_stat_modal = document.getElementById('customer-statistics');
    
    dashboard_modal.style.display = "none";
    product_modal.style.display = "none";
    order_modal.style.display = "none";
    products_stat_modal.style.display = "none";
    customers_stat_modal.style.display = "block";
    user_modal.style.display = "none"; 
}