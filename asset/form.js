const dan_toc = [{
    id: "01",
    name: "Kinh",
    desc: "Tên gọi khác: Việt",
  },
  {
    id: "02",
    name: "Tày",
    desc: "Tên gọi khác: Thổ, Ngạn, Phén, Thù Lao, Pa Dí",
  },
  {
    id: "03",
    name: "Thái",
    desc: "Tên gọi khác: Tày Đăm, Tày Mười, Tày Thanh, Mán Thanh",
  },
  {
    id: "04",
    name: "Hoa",
    desc: "Tên Gọi khác: Hán, Triều Châu, Phúc Kiến, Quảng Đông, Hải Nam",
  },
  {
    id: "05",
    name: "Khơ-me",
    desc: "Tên Gọi khác: Cur, Cul, Cu, Thổ, Việt gốc Miên, Krôm",
  },
  {
    id: "06",
    name: "Mường",
    desc: "Tên Gọi khác: Mol, Mual, Mọi, Mọi Bi, Ao Tá, Ậu Tá",
  },
  {
    id: "07",
    name: "Nùng",
    desc: "Tên Gọi khác: Xuồng, Giang, Nùng An, Phàn Sinh, Nùng Cháo",
  },
  {
    id: "08",
    name: "HMong",
    desc: "Tên Gọi khác: Mèo, Hoa, Mèo Xanh, Mèo Đỏ, Mèo Đen",
  },
  {
    id: "09",
    name: "Dao",
    desc: "Tên Gọi khác: Mán, Động, Trại, Xá, Dìu, Miên, Kiềm",
  },
  {
    id: "10",
    name: "Gia-rai",
    desc: "Tên Gọi khác: Giơ-rai, Tơ-buăn, Chơ-rai, Hơ-bau, Hđrung",
  },
  {
    id: "11",
    name: "Ngái",
    desc: "Tên Gọi khác: Xín, Lê, Đản, Khách Gia",
  },
  {
    id: "12",
    name: "Ê-đê",
    desc: "Tên Gọi khác: Ra-đê, Đê, Kpạ, A-đham, Krung, Ktul",
  },
  {
    id: "13",
    name: "Ba na",
    desc: "Tên Gọi khác: Giơ-lar. Tơ-lô, Giơ-lâng, Y-lăng, Rơ-ngao",
  },
  {
    id: "14",
    name: "Xơ-Đăng",
    desc: "Tên Gọi khác: Xơ-teng, Hđang, Tơ-đra, Mơ-nâm",
  },
  {
    id: "15",
    name: "Sán chay",
    desc: "Tên Gọi khác: Cao Lan, Sán Chỉ, Mán Cao Lan",
  },
  {
    id: "16",
    name: "Cơ-ho",
    desc: "Tên Gọi khác: Xrê, Nốp, Tu-lốp, Cơ-don, Chil",
  },
  {
    id: "17",
    name: "Chăm",
    desc: "Tên Gọi khác: Chàm, Chiêm Thành, Hroi",
  },
  {
    id: "18",
    name: "Dán Diu",
    desc: "Tên Gọi khác: Sán Dẻo, Trại, Trại Đất, Mán, Quần Cộc",
  },
  {
    id: "19",
    name: "Hre",
    desc: "Tên Gọi khác: Chăm Rê, Chom, Krẹ Luỹ",
  },
  {
    id: "20",
    name: "Mnong",
    desc: "Tên Gọi khác: Pnông, Nông, Pré, Bu-đâng, ĐiPri",
  },
];

const khoi = [{
    id: "A00",
    mon_1: "Toán",
    mon_2: "Lý",
    mon_3: "Hóa",
  },
  {
    id: "A01",
    mon_1: "Toán",
    mon_2: "Lý",
    mon_3: "Anh",
  },
  {
    id: "D01",
    mon_1: "Văn",
    mon_2: "Toán",
    mon_3: "Anh",
  },
  {
    id: "D07",
    mon_1: "Toán",
    mon_2: "Hóa",
    mon_3: "Anh",
  },
  {
    id: "D08",
    mon_1: "Toán",
    mon_2: "Sinh",
    mon_3: "Anh",
  },
  {
    id: "B00",
    mon_1: "Toán",
    mon_2: "Sinh",
    mon_3: "Hóa",
  },
];

var overlay = document.getElementById("overlay");
var add_hssv = document.getElementById("add_hssv");
add_hssv.onclick = () => {
  var ps = `
  <div class="container">
  <form id="myform" role="form" autocomplete="off">
    <h3 class="personal_info">Thông Tin Cá Nhân</h3>
    <div class="form_input">
      <div class="name_input">
        <label for="name">Họ Tên</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Eg: Nguyễn Văn A"
          value=""
        />
      </div>
      <div class="gender">
        <label for="">Giới Tính</label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="gender"
            id="exampleRadios2"
            value="Nữ"
          />
          <label class="form-check-label" for="exampleRadios2">
            Nữ
          </label>
          <input
            class="form-check-input"
            type="radio"
            name="gender"
            id="exampleRadios1"
            value="Nam"
            checked
          />
          <label class="form-check-label" for="exampleRadios1">
            Nam
          </label>
        </div>
      </div>
    </div>
    <div class="form_input">
      <div class="sbd_input">
        <label for="sbd">SBD</label>
        <input type="text" id="sbd" value="" />
      </div>
      <div class="folk">
        <label for="folk">Dân Tộc</label>
        <select class="custom-select" id="folk_list">
          <option selected>--Chọn Dân Tộc--</option>
        </select>
      </div>
      <div class="birthday">
        <label for="">Ngày Sinh</label>
        <input
          type="datepicker"
          id="date"
          class="birthday_input"
          style="padding: 0"
        />
      </div>
    </div>
    <div class="email">
      <label for="email">Email (Nếu có)</label>
      <input
        type="email"
        class="email_input"
        id="email"
        placeholder="Eg: example@gmail.com"
      />
    </div>
    <div class="form_input">
      <div class="cmnd">
        <label for="cmnd">CMND/CCCD</label>
        <input type="text" class="cmnd-input" id="cmnd" />
      </div>
      <div class="phone_number">
        <label for="phone">SĐT</label>
        <input type="text" id="phone" class="phone-input" />
      </div>
    </div>
    <div class="form_input">
      <div class="unit">
        <label for="">Khối Thi</label>
        <select class="custom-select" id="unit_list">
          <option selected>--Chọn Khối Thi--</option>
        </select>
      </div>
      <div class="department">
        <label for="">Ngành</label>
        <select class="custom-select" id="nganh_list">
          <option selected>--Chọn Ngành--</option>
        </select>
      </div>
      <div class="aria">
        <label for="">Khu Vực</label>
        <select class="custom-select">
          <option selected>--Chọn Khu Vực--</option>
          <option value="kv1">KV1</option>
          <option value="kv2">KV2</option>
          <option value="kv3">KV3</option>
          <option value="kv2nt">KV2NT</option>
        </select>
      </div>
    </div>
    <div class="address">
      <label for="address">Địa Chỉ</label>
      <input type="text" class="address_input" id="address" />
    </div>
    <div class="btn_block">
      <button class="btn btn-primary add">Xác nhận</button>
      <button class="btn btn-warning reset">Đặt lại</button>
      <button class="btn btn-danger exit">Thoát</button>
    </div>
  </form>
</div>
  `
  overlay.innerHTML = ps
  const folk = document.getElementById("folk_list");
  const unit = document.getElementById("unit_list");
  const ngah = document.getElementById("nganh_list");
  const folk_list = dan_toc
    .map(
      (item) => `
    <option value="${item.id}" class="folk_item">${item.name}</option>
`
    )
    .join();
  folk.innerHTML += folk_list;
  const unit_list = khoi.map(
    (item) => `
    <option value="${item.id}">${item.id}</option>
`
  );
  unit.innerHTML += unit_list;
  const ngah_list = nganh.map((item) => `
    <option value="${item.id}">${item.name}</option>
  `).join('');
  ngah.innerHTML += ngah_list;
  on_form();
  $(".add").click(function (event) {
    event.preventDefault();
    submitForm();
    hssv.push(form);
    alert_success("Thêm Hồ Sơ Thành Công");
    render_student_list();
    reset();
    off_form();
  });
  $(".reset").click(function (event) {
    event.preventDefault();
    reset();
  });
  $(".exit").click(function (event) {
    event.preventDefault();
    off_form();
  });
}

var edit_btns = document.querySelectorAll(".edit_btn");
for (var i = 0; i < edit_btns.length; i++) {
  edit_btns[i].onclick = (e) => {
    var ps = `
    <div class="container">
    <form id="myform" role="form" autocomplete="off">
      <h3 class="personal_info">Thông Tin Cá Nhân</h3>
      <div class="form_input">
        <div class="name_input">
          <label for="name">Họ Tên</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Eg: Nguyễn Văn A"
            value="${hssv[e.target.getAttribute('data-index')].name}"
          />
        </div>
        <div class="gender">
          <label for="">Giới Tính</label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="exampleRadios2"
              value="Nữ"
              ${hssv[e.target.getAttribute('data-index')].sex == 'Nữ' ? 'checked' : ''}
            />
            <label class="form-check-label" for="exampleRadios2">
              Nữ
            </label>
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="exampleRadios1"
              value="Nam"
              ${hssv[e.target.getAttribute('data-index')].sex == 'Nam' ? 'checked' : ''}
            />
            <label class="form-check-label" for="exampleRadios1">
              Nam
            </label>
          </div>
        </div>
      </div>
      <div class="form_input">
        <div class="sbd_input">
          <label for="sbd">SBD</label>
          <input type="text" id="sbd" value="${hssv[e.target.getAttribute('data-index')].sbd}" />
        </div>
        <div class="folk">
          <label for="folk">Dân Tộc</label>
          <select class="custom-select" id="folk_list">
            <option selected>${hssv[e.target.getAttribute('data-index')].folk}</option>
          </select>
        </div>
        <div class="birthday">
          <label for="">Ngày Sinh</label>
          <input
            type="datepicker"
            id="date"
            class="birthday_input"
            style="padding: 0"
            value = "${hssv[e.target.getAttribute('data-index')].date}"
          />
        </div>
      </div>
      <div class="email">
        <label for="email">Email (Nếu có)</label>
        <input
          type="email"
          class="email_input"
          id="email"
          placeholder="Eg: example@gmail.com"
        />
      </div>
      <div class="form_input">
        <div class="cmnd">
          <label for="cmnd">CMND/CCCD</label>
          <input type="text" class="cmnd-input" id="cmnd" value = "${hssv[e.target.getAttribute('data-index')].cmnd_cccd}"/>
        </div>
        <div class="phone_number">
          <label for="phone">SĐT</label>
          <input type="text" id="phone" class="phone-input" value = "${hssv[e.target.getAttribute('data-index')].phone}"/>
        </div>
      </div>
        <div class="aria">
          <label for="">Khu Vực</label>
          <select class="custom-select">
            <option selected>${hssv[e.target.getAttribute('data-index')].aria}</option>
            <option value="a01">Khu Vực 1</option>
            <option value="a00">Khu Vực 2</option>
            <option value="d00">Khu Vực 3</option>
          </select>
        </div>
        <div class="address">
          <label for="address">Địa Chỉ</label>
          <input type="text" class="address_input" id="address" value = "${hssv[e.target.getAttribute('data-index')].address}"/>
        </div>
        <div class="btn_block">
          <button class="btn btn-primary update">Cập Nhật</button>
          <button class="btn btn-warning reset">Đặt lại</button>
          <button class="btn btn-danger exit">Thoát</button>
        </div>
      </form>
      </div>
    `
    overlay.innerHTML = ps
    const folk = document.getElementById("folk_list");
    const folk_list = dan_toc
      .map(
        (item) => `
    <option value="${item.id}" class="folk_item">${item.name}</option>
`
      )
      .join();
    folk.innerHTML += folk_list;
    on_form();
    $(".update").click(function (event) {
      event.preventDefault();
      confirm("Bạn chắc chắn muốn cập nhật hồ sơ !");
      reset();
      off_form();
    });
    $(".reset").click(function (event) {
      event.preventDefault();
      reset();
    });
    $(".exit").click(function (event) {
      event.preventDefault();
      reset();
      off_form();
    });
  }
}

var detail_btn = document.querySelectorAll(".detail_btn");
for (var i = 0; i < detail_btn.length; i++) {
  detail_btn[i].onclick = (e) => {
    var ps = `
    <div class="container detail">
        <form>
            <div class="heading_detail">
                <h2 class="heading_detail_title">
                    THÔNG TIN SINH VIÊN
                </h2>
            </div>
            <div class="detail_group">
                <label class="detail_heading">Họ Tên: </label>
                <span class="detail_content">${hssv[e.target.getAttribute('data-index')].name}</span>
            </div>
            <div class="detail_group">
                <label class="detail_heading">Giới tính: </label>
                <span class="detail_content">${hssv[e.target.getAttribute('data-index')].sex}</span>
            </div>
            <div class="detail_group">
                <label class="detail_heading">SBD: </label>
                <span class="detail_content">${hssv[e.target.getAttribute('data-index')].sbd}</span>
            </div>
            <div class="detail_group">
                <label class="detail_heading">Dân Tộc: </label>
                <span class="detail_content">${hssv[e.target.getAttribute('data-index')].folk}</span>
            </div>
            <div class="detail_group">
                <label class="detail_heading">Ngày Sinh: </label>
                <span class="detail_content">${hssv[e.target.getAttribute('data-index')].date}</span>
            </div>
            <div class="detail_group">
                <label class="detail_heading">CCCD/CMND: </label>
                <span class="detail_content">${hssv[e.target.getAttribute('data-index')].cmnd_cccd}</span>
            </div>
            <div class="detail_group">
                <label class="detail_heading">SĐT: </label>
                <span class="detail_content">${hssv[e.target.getAttribute('data-index')].phone}</span>
            </div>
            <div class="detail_group">
                <label class="detail_heading">Khu Vực: </label>
                <span class="detail_content">${hssv[e.target.getAttribute('data-index')].aria}</span>
            </div>
            <div class="detail_group">
                <label class="detail_heading">Đối Tượng Ưu Tiên: </label>
                <span class="detail_content">${hssv[e.target.getAttribute('data-index')].spacial_person}</span>
            </div>
            <div class="detail_group">
                <label class="detail_heading">Địa Chỉ: </label>
                <span class="detail_content">${hssv[e.target.getAttribute('data-index')].address}</span>
            </div>
            <div class="btn_block">
                <button class="btn btn-danger exit">Thoát</button>
            </div>
        </form>
    </div>
    `
    overlay.innerHTML = ps
    on_form();
    $(".exit").click(function (event) {
      event.preventDefault();
      off_form();
    });
  }
}


// add controller