const CORRECT_ACC = ['dongocminh@gmail.com', 'khanhlinh@gmail.com', 'khanhtoan@gmail.com', 'nhung190402@gmail.com', 'quocanh@gmail.com', 'vuhailong@gmail.com']
const CORRECT_PASS = ['minh0802', 'linh2002', 'toan2002', 'nhung190402', 'quocanh2002', 'hailong2002']

// const account = document.getElementById("username_input");
// const pass = document.getElementById("password_input");


function onFormSubmit(e) {
    var account_value = document.forms['login_form']['username'].value;
    var pass_value = document.forms['login_form']['password'].value;
    if (CORRECT_ACC.includes(account_value) && CORRECT_PASS.includes(pass_value) && CORRECT_ACC.indexOf(account_value) == CORRECT_PASS.indexOf(pass_value)) {
        document.getElementById("myForm").action = "./view/admin.html";
    } else {
        alert('Tài khoản bị sai');
    }
}

function submit(e) {
    e.preventDefault()
}
