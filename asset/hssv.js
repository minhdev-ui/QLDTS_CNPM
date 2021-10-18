const hssv = [{
    sbd: "001",
    name: "Ngô Thị Hồng Nhung",
    date: "19/04/2002",
    sex: "Nữ",
    folk: "Kinh",
    aria: "KV2",
    spacial_person: "Không phải đối tượng ưu tiên",
    cmnd_cccd: "00458357236",
    address: "TP Phủ Lý, Tỉnh Hà Nam",
    phone: "0984698729",
  },
  {
    sbd: "002",
    name: "Đỗ Hồng Ngọc",
    date: "19/04/2002",
    sex: "Nữ",
    folk: "Kinh",
    aria: "KV2NT",
    spacial_person: "Không phải đối tượng ưu tiên",
    cmnd_cccd: "00458987236",
    address: "Hải phòng",
    phone: "0984997729",
  },
  {
    sbd: "003",
    name: "Hoàng Thị Minh Lan",
    date: "29/05/2001",
    sex: "Nữ",
    folk: "Kinh",
    aria: "KV3",
    spacial_person: "Đối tượng ưu tiên loại 1",
    cmnd_cccd: "00358657236",
    address: "Nam Dinh",
    phone: "0984678727",
  },
  {
    sbd: "004",
    name: "Đỗ Minh Hùng",
    date: "15/03/2002",
    sex: "Nam",
    folk: "Dao",
    aria: "KV1",
    spacial_person: "Đối tượng ưu tiên loại 1",
    cmnd_cccd: "01456357236",
    address: "Thanh Hoa",
    phone: "0974698720",
  },
  {
    sbd: "005",
    name: "Đỗ Ngọc Minh",
    date: "16/08/2002",
    sex: "Nam",
    folk: "Kinh",
    aria: "KV2",
    spacial_person: "Không phải đối tượng ưu tiên",
    cmnd_cccd: "01458857236",
    address: "Bac Ninh",
    phone: "0974798729",
  },
  {
    sbd: "006",
    name: "Hoàng Thị May",
    date: "23/01/2002",
    sex: "Nữ",
    folk: "Mường",
    aria: "KV1",
    spacial_person: "Đối tượng ưu tiên loại 1",
    cmnd_cccd: "01458387236",
    address: "Thanh Hoa",
    phone: "0994698729",
  },
  {
    sbd: "007",
    name: "Tòng Thị Hoàng",
    date: "24/03/2002",
    sex: "Nữ",
    folk: "HMong",
    aria: "KV1",
    spacial_person: "Đối tượng ưu tiên loại 2",
    cmnd_cccd: "04457357236",
    address: "Thanh Hoa",
    phone: "0985698728",
  },
  {
    sbd: "008",
    name: "Nguyễn Ánh Nguyệt",
    date: "17/02/2001",
    sex: "Nữ",
    folk: "Nùng",
    aria: "KV1",
    spacial_person: "Đối tượng ưu tiên loại 2",
    cmnd_cccd: "01358657236",
    address: "Cao Bằng",
    phone: "0984678777",
  },
  {
    sbd: "009",
    name: "Uông Văn Nam",
    date: "30/06/2002",
    sex: "Nam",
    folk: "Nùng",
    aria: "KV2NT",
    spacial_person: "Đối tượng ưu tiên loại 2",
    cmnd_cccd: "02348657236",
    address: "Tuyên Quang",
    phone: "0994578729",
  },
  {
    sbd: "010",
    name: "Nguyễn Khánh Linh",
    date: "11/07/2002",
    sex: "Nữ",
    folk: "Kinh",
    aria: "KV3",
    spacial_person: "Không phải đối tượng ưu tiên",
    cmnd_cccd: "03328657231",
    address: "Ha Noi",
    phone: "0975671728",
  },
  {
    sbd: "011",
    name: "Hoàng Hải Long",
    date: "21/08/2001",
    sex: "Nam",
    folk: "Gia-rai",
    aria: "KV1",
    spacial_person: "Đối tượng ưu tiên loại 2",
    cmnd_cccd: "01358637836",
    address: "Yen Bai",
    phone: "0394668727",
  },
  {
    sbd: "012",
    name: "Ngô Hải Minh",
    date: "13/05/2002",
    sex: "Nam",
    folk: "Kinh",
    aria: "KV2",
    spacial_person: "Không phải đối tượng ưu tiên",
    cmnd_cccd: "03358687233",
    address: "Ninh Binh",
    phone: "0321678726",
  },
];

const diem_sv = [{
    id: "MVC106",
    sbd: "001",
    name: "Ngô Thị Hồng Nhung",
    Khoi_thi: "D01",
    Mon_1: "Văn",
    Mon_2: "Toán",
    Mon_3: "Anh",
    Diem_1: 9,
    Diem_2: 8.8,
    Diem_3: 7,
    ex_mark: 0.25,
  },
  {
    id: "MVC401",
    sbd: "001",
    name: "Ngô Thị Hồng Nhung",
    Khoi_thi: "D01",
    Mon_1: "Văn",
    Mon_2: "Toán",
    Mon_3: "Anh",
    Diem_1: 9,
    Diem_2: 8.8,
    Diem_3: 7,
    ex_mark: 0.25,
  },
  {
    id: "MVC119",
    sbd: "002",
    name: "Đỗ Hồng Ngọc",
    Khoi_thi: "B00",
    Mon_1: "Toán",
    Mon_2: "Sinh",
    Mon_3: "Hóa",
    Diem_1: 3,
    Diem_2: 3.5,
    ex_mark: 0.5,
    Diem_3: 3,
  },
  {
    id: "MVC118",
    sbd: "002",
    name: "Đỗ Hồng Ngọc",
    Khoi_thi: "A00",
    Mon_1: "Toán",
    Mon_2: "Lý",
    Mon_3: "Hóa",
    Diem_1: 3,
    Diem_2: 3.5,
    ex_mark: 0.5,
    Diem_3: 3.2,
  },
  {
    id: "MVC110",
    sbd: "003",
    name: "Hoàng Thị Minh Lan",
    Khoi_thi: "A01",
    Mon_1: "Toán",
    Mon_2: "Lý",
    Mon_3: "Anh",
    Diem_1: 7,
    Diem_2: 8.5,
    ex_mark: 2,
    Diem_3: 6.4,
  },
  {
    id: "MVC107",
    sbd: "003",
    name: "Hoàng Thị Minh Lan",
    Khoi_thi: "A00",
    Mon_1: "Toán",
    Mon_2: "Lý",
    Mon_3: "Hóa",
    Diem_1: 7,
    Diem_2: 9,
    ex_mark: 2,
    Diem_3: 8.5,
  },
  {
    id: "MVC105",
    sbd: "004",
    name: "Đỗ Minh Hùng",
    Khoi_thi: "D07",
    Mon_1: "Toán",
    Mon_2: "Hóa",
    Mon_3: "Anh",
    Diem_1: 8.4,
    Diem_2: 7,
    ex_mark: 2.75,
    Diem_3: 6,
  },
  {
    id: "MVC106",
    sbd: "005",
    name: "Đỗ Ngọc Minh",
    Khoi_thi: "A00",
    Mon_1: "Toán",
    Mon_2: "Lý",
    Mon_3: "Hóa",
    Diem_1: 7.2,
    Diem_2: 8,
    ex_mark: 0.25,
    Diem_3: 7,
  },
  {
    id: "MVC121",
    sbd: "006",
    name: "Hoàng Thị May",
    Khoi_thi: "D01",
    Mon_1: "Văn",
    Mon_2: "Toán",
    Mon_3: "Anh",
    Diem_1: 7,
    Diem_2: 6,
    ex_mark: 2.75,
    Diem_3: 9,
  },
  {
    id: "MVC401",
    sbd: "007",
    name: "Tòng Thị Hoàng",
    Khoi_thi: "D01",
    Mon_1: "Văn",
    Mon_2: "Toán",
    Mon_3: "Anh",
    Diem_1: 2.5,
    Diem_2: 3.4,
    ex_mark: 1.75,
    Diem_3: 4,
  },
  {
    id: "MVC114",
    sbd: "007",
    name: "Tòng Thị Hoàng",
    Khoi_thi: "D01",
    Mon_1: "Văn",
    Mon_2: "Toán",
    Mon_3: "Anh",
    Diem_1: 2.5,
    Diem_2: 3.4,
    ex_mark: 1.75,
    Diem_3: 4,
  },
  {
    id: "MVC120",
    sbd: "008",
    name: "Nguyễn Ánh Nguyệt",
    Khoi_thi: "A00",
    Mon_1: "Toán",
    Mon_2: "Lý",
    Mon_3: "Hóa",
    Diem_1: 9.2,
    Diem_2: 8,
    Diem_3: 8.2,
    ex_mark: 1.75,
  },
  {
    id: "MVC402",
    sbd: "009",
    name: "Uông Văn Nam",
    Khoi_thi: "A01",
    Mon_1: "Toán",
    Mon_2: "Lý",
    Mon_3: "Anh",
    Diem_1: 7,
    Diem_2: 6,
    ex_mark: 1.5,
    Diem_3: 9,
  },
  {
    id: "MVC112",
    sbd: "009",
    name: "Uông Văn Nam",
    Khoi_thi: "A00",
    Mon_1: "Toán",
    Mon_2: "Lý",
    Mon_3: "Hóa",
    Diem_1: 7,
    Diem_2: 6,
    ex_mark: 1.5,
    Diem_3: 7,
  },
  {
    id: "MVC123",
    sbd: "010",
    name: "Nguyễn Khánh Linh",
    Khoi_thi: "D07",
    Mon_1: "Toán",
    Mon_2: "Hóa",
    Mon_3: "Anh",
    Diem_1: 8.4,
    Diem_2: 6.5,
    ex_mark: 0,
    Diem_3: 7,
  },
  {
    id: "MVC105",
    sbd: "011",
    name: "Hoàng Hải Long",
    Khoi_thi: "A00",
    Mon_1: "Toán",
    Mon_2: "Lý",
    Mon_3: "Hóa",
    Diem_1: 7,
    Diem_2: 6,
    ex_mark: 1.75,
    Diem_3: 8,
  },
  {
    id: "MVC401",
    sbd: "012",
    name: "Ngô Hải Minh",
    Khoi_thi: "D01",
    Mon_1: "Văn",
    Mon_2: "Toán",
    Mon_3: "Anh",
    Diem_1: 5,
    Diem_2: 7,
    ex_mark: 0.25,
    Diem_3: 5,
  },
  {
    id: "MVC118",
    sbd: "012",
    name: "Ngô Hải Minh",
    Khoi_thi: "D08",
    Mon_1: "Toán",
    Mon_2: "Sinh",
    Mon_3: "Anh",
    Diem_1: 7,
    Diem_2: 3.5,
    ex_mark: 0.25,
    Diem_3: 5,
  },
];

const student_pass = [{
    id: "MVC106",
    sbd: "001",
    name: "Ngô Thị Hồng Nhung",
    Khoi_thi: "D01",
    Mon_1: "Văn",
    Mon_2: "Toán",
    Mon_3: "Anh",
    Diem_1: 9,
    Diem_2: 8.8,
    Diem_3: 7,
  },
  {
    id: "MVC110",
    sbd: "003",
    name: "Hoàng Thị Minh Lan",
    Khoi_thi: "A01",
    Mon_1: "Toán",
    Mon_2: "Lý",
    Mon_3: "Anh",
    Diem_1: 7,
    Diem_2: 8.5,
    Diem_3: 6.4,
  },
  {
    id: "MVC105",
    sbd: "004",
    name: "Đỗ Minh Hùng",
    Khoi_thi: "D07",
    Mon_1: "Toán",
    Mon_2: "Hóa",
    Mon_3: "Anh",
    Diem_1: 8.4,
    Diem_2: 7,
    Diem_3: 6,
  },
  {
    id: "MVC121",
    sbd: "006",
    name: "Hoàng Thị May",
    Khoi_thi: "D01",
    Mon_1: "Văn",
    Mon_2: "Toán",
    Mon_3: "Anh",
    Diem_1: 7,
    Diem_2: 6,
    Diem_3: 9,
  },
  {
    id: "MVC120",
    sbd: "008",
    name: "Nguyễn Ánh Nguyệt",
    Khoi_thi: "A00",
    Mon_1: "Toán",
    Mon_2: "Lý",
    Mon_3: "Hóa",
    Diem_1: 9.2,
    Diem_2: 8,
    Diem_3: 8.2,
  },
  {
    id: "MVC402",
    sbd: "009",
    name: "Uông Văn Nam",
    Khoi_thi: "A01",
    Mon_1: "Toán",
    Mon_2: "Lý",
    Mon_3: "Anh",
    Diem_1: 7,
    Diem_2: 6,
    Diem_3: 9,
  },
  {
    id: "MVC112",
    sbd: "009",
    name: "Uông Văn Nam",
    Khoi_thi: "A00",
    Mon_1: "Toán",
    Mon_2: "Lý",
    Mon_3: "Hóa",
    Diem_1: 7,
    Diem_2: 6,
    Diem_3: 7,
  },
  {
    id: "MVC123",
    sbd: "010",
    name: "Nguyễn Khánh Linh",
    Khoi_thi: "D07",
    Mon_1: "Toán",
    Mon_2: "Hóa",
    Mon_3: "Anh",
    Diem_1: 8.4,
    Diem_2: 6.5,
    Diem_3: 7,
  },
  {
    id: "MVC105",
    sbd: "011",
    name: "Hoàng Hải Long",
    Khoi_thi: "A00",
    Mon_1: "Toán",
    Mon_2: "Lý",
    Mon_3: "Hóa",
    Diem_1: 7,
    Diem_2: 6,
    Diem_3: 8,
  },
];

const student_nopass = [{
    id: "MVC119",
    sbd: "002",
    name: "Đỗ Hồng Ngọc",
    Khoi_thi: "B00",
    Mon_1: "Toán",
    Mon_2: "Sinh",
    Mon_3: "Hóa",
    Diem_1: 3,
    Diem_2: 3.5,
    Diem_3: 3,
  },
  {
    id: "MVC118",
    sbd: "002",
    name: "Đỗ Hồng Ngọc",
    Khoi_thi: "A00",
    Mon_1: "Toán",
    Mon_2: "Lý",
    Mon_3: "Hóa",
    Diem_1: 3,
    Diem_2: 3.5,
    Diem_3: 3.2,
  },
  {
    id: "MVC106",
    sbd: "005",
    name: "Đỗ Ngọc Minh",
    Khoi_thi: "A00",
    Mon_1: "Toán",
    Mon_2: "Lý",
    Mon_3: "Hóa",
    Diem_1: 7.2,
    Diem_2: 8,
    Diem_3: 7,
  },
  {
    id: "MVC401",
    sbd: "007",
    name: "Tòng Thị Hoàng",
    Khoi_thi: "D01",
    Mon_1: "Văn",
    Mon_2: "Toán",
    Mon_3: "Anh",
    Diem_1: 2.5,
    Diem_2: 3.4,
    Diem_3: 4,
  },
  {
    id: "MVC114",
    sbd: "007",
    name: "Tòng Thị Hoàng",
    Khoi_thi: "D01",
    Mon_1: "Văn",
    Mon_2: "Toán",
    Mon_3: "Anh",
    Diem_1: 2.5,
    Diem_2: 3.4,
    Diem_3: 4,
  },
  {
    id: "MVC401",
    sbd: "012",
    name: "Ngô Hải Minh",
    Khoi_thi: "D01",
    Mon_1: "Văn",
    Mon_2: "Toán",
    Mon_3: "Anh",
    Diem_1: 5,
    Diem_2: 7,
    Diem_3: 5,
  },
  {
    id: "MVC118",
    sbd: "012",
    name: "Ngô Hải Minh",
    Khoi_thi: "D08",
    Mon_1: "Toán",
    Mon_2: "Sinh",
    Mon_3: "Anh",
    Diem_1: 7,
    Diem_2: 3.5,
    Diem_3: 5,
  },
];

const nganh = [{
    id: "MVC101",
    name: "Kỹ thuật xây dựng CT thủy",
    target: 100,
    benchmark: 15,
  },
  {
    id: "MVC102",
    name: "Kỹ thuật tài nguyên nước",
    target: 60,
    benchmark: 15.45,
  },
  {
    id: "MVC103",
    name: "Thuỷ văn học",
    target: 40,
    benchmark: 16.1,
  },
  {
    id: "MVC104",
    name: "Kỹ thuật xây dựng",
    target: 140,
    benchmark: 15,
  },
  {
    id: "MVC105",
    name: "Nhóm ngành kỹ thuật cơ khí",
    target: 210,
    benchmark: 16.25,
  },
  {
    id: "MVC106",
    name: "Nhóm ngành CNTT",
    target: 500,
    benchmark: 22.75,
  },
  {
    id: "MVC107",
    name: "Kỹ thuật cấp thoát nước",
    target: 50,
    benchmark: 15.1,
  },
  {
    id: "MVC109",
    name: "Kỹ thuật môi trường",
    target: 60,
    benchmark: 15.1,
  },
  {
    id: "MVC110",
    name: "Kỹ thuật cơ sở hạ tầng",
    target: 50,
    benchmark: 15.1,
  },
  {
    id: "MVC111",
    name: "Công nghệ kỹ thuật xây dựng",
    target: 70,
    benchmark: 15.15,
  },
  {
    id: "MVC112",
    name: "Kỹ thuận điện",
    target: 140,
    benchmark: 16,
  },
  {
    id: "MVC113",
    name: "Kỹ thuật XDCT giao thông",
    target: 60,
    benchmark: 15.25,
  },
  {
    id: "MVC114",
    name: "Quản lý xây dựng",
    target: 110,
    benchmark: 16.05,
  },
  {
    id: "MVC118",
    name: "Kỹ thuật hoá học",
    target: 50,
    benchmark: 16,
  },
  {
    id: "MVC119",
    name: "Công nghệ sinh học",
    target: 50,
    benchmark: 18.5,
  },
  {
    id: "MVC120",
    name: "Kỹ thuật cơ điện tử",
    target: 180,
    benchmark: 18.5,
  },
  {
    id: "MVC121",
    name: "Kỹ thuật điều khiển và TĐH",
    target: 200,
    benchmark: 20.1,
  },
  {
    id: "MVC123",
    name: "Kỹ thật ô tô",
    target: 210,
    benchmark: 21.15,
  },
  {
    id: "MVC201",
    name: "CTTT Kỹ thuật xây dựng",
    target: 30,
    benchmark: 15.5,
  },
  {
    id: "MVC202",
    name: "CTTT Kỹ thuật tài nguyên nước",
    target: 30,
    benchmark: 18.5,
  },
  {
    id: "MVC401",
    name: "Kinh tế",
    target: 180,
    benchmark: 21.05,
  },
  {
    id: "MVC402",
    name: "Quản trị kinh doanh",
    target: 210,
    benchmark: 22.05,
  },
  {
    id: "MVC403",
    name: "Kế toán",
    target: 270,
    benchmark: 21.7,
  },
];

function on_form() {
  document.getElementById("overlay").style.display = "block";
}

function off_form() {
  document.getElementById("overlay").style.display = "none";
}

const add_button = `
<div style="display: flex; justify-content: space-between; width: 100%">
<button class="btn btn-primary" onclick="on_form()" id="add_hssv">
  <i class="fas fa-plus-circle"></i> Thêm Hồ Sơ
</button>
<div class="input-group" style="width: 300px;" id="nav">
      <input type="text" class="form-control" id="search_student_sbd" placeholder="Nhập SBD tìm kiếm..." aria-describedby="basic-addon1">
      <button class="btn btn-primary" onclick = "search_student_list();">Tra Cứu</button>
</div>
</div>
`;

const student_table = document.getElementById("content");

function render_student_list() {
  const student = hssv
    .map(
      (item, index) => `
  <tr class="table_row table_data">
  <th scope="row">${index + 1}</th>
          <td>${item.sbd}</td>
          <td>${item.name}</td>
          <td>${item.sex}</td>
          <td>${item.date}</td>
          <td>${item.phone}</td>
          <td>
          <button class="btn btn-warning detail_btn px-4" data-index = ${index}>Chi Tiết</button>
          <button class="btn btn-primary edit_btn px-4" data-index = ${index}>Sửa</button>
          <button class="btn btn-danger delete_btn px-4" data-index = ${index}>Xóa</button>
          </td>
      </tr>
      `
    )
    .join("");

  const student_list = `
      ${add_button}
      <table class="student_table table table-bordered" id="student_table">
      <thead>
        <tr class="table_row">
          <th scope="col" class="table_title">STT</th>
          <th scope="col" class="table_title">SBD</th>
          <th scope="col" class="table_title">Họ Tên</th>
          <th scope="col" class="table_title">Giới Tính</th>
          <th scope="col" class="table_title">Ngày Sinh</th>
          <th scope="col" class="table_title">SĐT</th>
          <th scope="col" class="table_title">Công cụ</th>
        </tr>
      </thead>
      <tbody  id="student_list">
          ${student}
      </tbody>
      </table>
  `;
  student_table.innerHTML = student_list;
}
function render_mark_list() {

  const mark = diem_sv
    .map(
      (diem) => `
      <tr class="table_row">
          <td>${diem.sbd}</td>
          <td>${diem.name}</td>
          <td>${diem.id}</td>
          <td>${diem.Khoi_thi}</td>
          <td>${diem.Diem_1}</td>
          <td>${diem.Diem_2}</td>
          <td>${diem.Diem_3}</td>
          <td>${diem.ex_mark}</td>
          <td>${diem.Diem_1 + diem.Diem_2 + diem.Diem_3 + diem.ex_mark}</td>
      </tr>
  `
    )
    .join("");

  const mark_list = `
  <div style="display: flex; justify-content: space-between; width: 100%" id="nav">
    <div class="input-group mb-3" style="width: 300px;">
    <input type="text" class="form-control" id="search_sbd" placeholder="Nhập SBD tìm kiếm" aria-describedby="basic-addon1">
    <button class="btn btn-primary" onclick = search_mark_list();>Tra Cứu</button>
    </div>
    <button class="btn" onclick="window.print()" style="height: 38px">
      <i class="fas fa-print"></i>
      In Bảng Điểm
    </button>
  </div>
  <table class="table mt-6" id="nofication">
  <thead>
  <tr>
      <th scope="col">SBD</th>
      <th scope="col">Họ Tên</th>
      <th scope="col">Ngành</th>
      <th scope="col">Khối</th>
      <th scope="col">Điểm Môn 1</th>
      <th scope="col">Điểm Môn 2</th>
      <th scope="col">Điểm Môn 3</th>
      <th scope="col">Điểm ưu tiên</th>
      <th scope="col">Tổng Điểm</th>
  </tr>
  </thead>
  <tbody>
      ${mark}
  </tbody>
  </table>
  `;
  student_table.innerHTML = mark_list;
}

function render_student_pass() {
  const pass = student_pass
    .map(
      (diem) => `
      <tr class="table_row">
          <td>${diem.sbd}</td>
          <td>${diem.name}</td>
          <td>${diem.id}</td>
          <td>${diem.Khoi_thi}</td>
          <td>${diem.Diem_1}</td>
          <td>${diem.Diem_2}</td>
          <td>${diem.Diem_3}</td>
      </tr>
  `
    )
    .join("");

  const pass_list = `
  <div style="display: flex; justify-content: space-between; width: 100%" id="nav">
    <div class="input-group mb-3" style="width: 300px;">
    <input type="text" class="form-control" id="search_nganh" placeholder="Nhập mã ngành" aria-label="Nhập mã ngành" aria-describedby="basic-addon1">
    <button class="btn btn-primary" onclick = search_student_pass();>Tra Cứu</button>
    </div>
    <button class="btn" onclick="window.print()" style="height: 38px">
      <i class="fas fa-print"></i>
      In Bảng Điểm
    </button>
  </div>
  <table class="table mt-6" id="nofication">
  <thead>
  <tr>
      <th scope="col">SBD</th>
      <th scope="col">Họ Tên</th>
      <th scope="col">Ngành</th>
      <th scope="col">Khối</th>
      <th scope="col">Điểm Môn 1</th>
      <th scope="col">Điểm Môn 2</th>
      <th scope="col">Điểm Môn 3</th>
  </tr>
  </thead>
  <tbody>
      ${pass}
  </tbody>
  </table>
  `;
  student_table.innerHTML = pass_list;
}

function render_student_nopass() {
  const nopass = student_nopass
    .map(
      (diem) => `
      <tr class="table_row">
          <td>${diem.sbd}</td>
          <td>${diem.name}</td>
          <td>${diem.id}</td>
          <td>${diem.Khoi_thi}</td>
          <td>${diem.Diem_1}</td>
          <td>${diem.Diem_2}</td>
          <td>${diem.Diem_3}</td>
      </tr>
  `
    )
    .join("");

  const nopass_list = `
  <div style="display: flex; justify-content: space-between; width: 100%" id="nav">
    <div class="input-group mb-3" style="width: 300px;">
    <input type="text" class="form-control" id="search_nganh" placeholder="Nhập mã ngành" aria-label="Nhập mã ngành" aria-describedby="basic-addon1">
    <button class="btn btn-primary" onclick = "search_nopass_list();">Tra Cứu</button>
    </div>
    <button class="btn" onclick="window.print()" style="height: 38px">
      <i class="fas fa-print"></i>
      In Bảng Điểm
    </button>
  </div>
  <table class="table mt-6" id="nofication">
  <thead>
  <tr>
      <th scope="col">SBD</th>
      <th scope="col">Họ Tên</th>
      <th scope="col">Ngành</th>
      <th scope="col">Khối</th>
      <th scope="col">Điểm Môn 1</th>
      <th scope="col">Điểm Môn 2</th>
      <th scope="col">Điểm Môn 3</th>
  </tr>
  </thead>
  <tbody>
      ${nopass}
  </tbody>
  </table>
  `;
  student_table.innerHTML = nopass_list;
}

function on_mark_list() {
  render_mark_list();
}

function search_mark_list() {
  var sbd_input = document.getElementById("search_sbd");
    var ps = diem_sv.map((diem) => {
      if (sbd_input.value == diem.sbd) {
        return `
        <tr class="table_row">
          <td>${diem.sbd}</td>
          <td>${diem.name}</td>
          <td>${diem.id}</td>
          <td>${diem.Khoi_thi}</td>
          <td>${diem.Diem_1}</td>
          <td>${diem.Diem_2}</td>
          <td>${diem.Diem_3}</td>
          <td>${diem.ex_mark}</td>
          <td>${diem.Diem_1 + diem.Diem_2 + diem.Diem_3 + diem.ex_mark}</td>
        </tr>
        `
      }
    }).join('');
    const mark_list_search = `
<div style="display: flex; justify-content: space-between; width: 100%" id="nav">
  <div class="input-group mb-3" style="width: 300px;">
  <input type="text" class="form-control" id="search_sbd" placeholder="Nhập SBD tìm kiếm" aria-describedby="basic-addon1">
  <button class="btn btn-primary" onclick = search_mark_list();>Tra Cứu</button>
  </div>
  <button class="btn" onclick="window.print()" style="height: 38px">
    <i class="fas fa-print"></i>
    In Bảng Điểm
  </button>
</div>
<table class="table mt-6" id="nofication">
<thead>
<tr>
    <th scope="col">SBD</th>
    <th scope="col">Họ Tên</th>
    <th scope="col">Ngành</th>
    <th scope="col">Khối</th>
    <th scope="col">Điểm Môn 1</th>
    <th scope="col">Điểm Môn 2</th>
    <th scope="col">Điểm Môn 3</th>
    <th scope="col">Điểm ưu tiên</th>
    <th scope="col">Tổng Điểm</th>
</tr>
</thead>
<tbody>
    ${ps}
</tbody>
</table>
`;
    student_table.innerHTML = mark_list_search;
}

function on_student_list() {
  render_student_list();
}

function on_pass_list() {
  render_student_pass();
}
function search_student_pass() {
  const nganhInput = document.getElementById("search_nganh");
    if (nganhInput.value == "") {
      render_student_pass();
    } else {
      var ps = student_pass
        .map((item) => {
          if (item.id == nganhInput.value) {
            return `
          <tr class="table_row">
          <td>${item.sbd}</td>
          <td>${item.name}</td>
          <td>${item.id}</td>
          <td>${item.Khoi_thi}</td>
          <td>${item.Diem_1}</td>
          <td>${item.Diem_2}</td>
          <td>${item.Diem_3}</td>
          </tr>
          `;
          }
        })
        .join("");
      const pass_list_search = `
      <div class="input-group mb-3" style="width: 300px;" id="nav">
        <input type="text" class="form-control" id="search_nganh" placeholder="Nhập mã ngành" aria-label="Nhập mã ngành" aria-describedby="basic-addon1">
        <button class="btn btn-primary" onclick = search_student_pass();>Tra Cứu</button>
      </div>
      <table class="table mt-6" id="nofication">
      <thead>
      <tr>
          <th scope="col">SBD</th>
          <th scope="col">Họ Tên</th>
          <th scope="col">Ngành</th>
          <th scope="col">Khối</th>
          <th scope="col">Điểm Môn 1</th>
          <th scope="col">Điểm Môn 2</th>
          <th scope="col">Điểm Môn 3</th>
      </tr>
      </thead>
      <tbody>
          ${ps}
      </tbody>
      </table>
      `;
      student_table.innerHTML = pass_list_search;
    };
}

function on_nopass_list() {
  render_student_nopass();
}

function search_nopass_list() {
  const nganhInput = document.getElementById("search_nganh");
    if (nganhInput.value == "") {
      return;
    } else {
      var ps = student_nopass
        .map((item) => {
          if (item.id == nganhInput.value) {
            return `
          <tr class="table_row">
          <td>${item.sbd}</td>
          <td>${item.name}</td>
          <td>${item.id}</td>
          <td>${item.Khoi_thi}</td>
          <td>${item.Diem_1}</td>
          <td>${item.Diem_2}</td>
          <td>${item.Diem_3}</td>
          </tr>
          `;
          }
        })
        .join("");
      const nopass_list_search = `
  <div class="input-group mb-3" style="width: 300px;" id="nav">
  <input type="text" class="form-control" id="search_nganh" placeholder="Nhập mã ngành" aria-label="Nhập mã ngành" aria-describedby="basic-addon1">
  <button class="btn btn-primary" onclick = search_nopass_list();>Tra Cứu</button>
  </div>
  <table class="table mt-6" id="nofication">
  <thead>
  <tr>
    <th scope="col">SBD</th>
    <th scope="col">Họ Tên</th>
    <th scope="col">Ngành</th>
    <th scope="col">Khối</th>
    <th scope="col">Điểm Môn 1</th>
    <th scope="col">Điểm Môn 2</th>
    <th scope="col">Điểm Môn 3</th>
  </tr>
  </thead>
  <tbody>
    ${ps}
  </tbody>
  </table>
  `;
      student_table.innerHTML = nopass_list_search;
  }
}
function render_benchmark_list() {
  var nganh_list = nganh
    .map(
      (item) => `
    <tr class="table_row">
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.target}</td>
    <td>${item.benchmark}</td>
    </tr>
  `
    )
    .join("");
  const benchmark_list = `
  <div class="input-group mb-3" style="width: 300px;" id="nav">
  <input type="text" class="form-control" id="search_nganh" placeholder="Nhập mã ngành" aria-label="Nhập mã ngành" aria-describedby="basic-addon1">
  <button class="btn btn-primary" onclick="search_benchmark_list();">Tra Cứu</button>
  </div>
  <table class="table mt-6" id="nofication">
  <thead>
  <tr>
      <th scope="col">Mã Ngành</th>
      <th scope="col">Tên Ngành</th>
      <th scope="col">Chỉ tiêu</th>
      <th scope="col">Điểm chuẩn</th>
  </tr>
  </thead>
  <tbody>
      ${nganh_list}
  </tbody>
  </table>
  `;
  student_table.innerHTML = benchmark_list;
}

function on_benchmark_list() {
  render_benchmark_list();
}

function search_benchmark_list() {
  const nganhInput = document.getElementById("search_nganh");
    if (nganhInput.value == "") {
      render_benchmark_list();
    } else {
      var ps = nganh.map((item) => {
        if (item.id == nganhInput.value) {
          return `
            <tr class="table_row">
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.target}</td>
            <td>${item.benchmark}</td>
            </tr>`;
        }
      }).join('');
      const benchmark_list = `
<div class="input-group mb-3" style="width: 300px;" id="nav">
<input type="text" class="form-control" id="search_nganh" placeholder="Nhập mã ngành" aria-label="Nhập mã ngành" aria-describedby="basic-addon1">
<button class="btn btn-primary" onclick = "search_benchmark_list();">Tra Cứu</button>
</div>
  <table class="table mt-6" id="nofication">
  <thead>
  <tr>
      <th scope="col">Mã Ngành</th>
      <th scope="col">Tên Ngành</th>
      <th scope="col">Chỉ tiêu</th>
      <th scope="col">Điểm chuẩn</th>
  </tr>
  </thead>
  <tbody>
      ${ps}
  </tbody>
  </table>
  `;
      student_table.innerHTML = benchmark_list;
  }
}

render_student_list();

var form = {};

function findSelection() {
  var radio = $('input[name="gender"]');
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked == true) {
      return radio[i].value;
    }
  }
}

function findcheck() {
  var folk_option = document.getElementsByClassName("folk_item");
  for (var i = 0; i < folk_option.length; i++) {
    if (folk_option[i].selected) {
      return folk_option[i].value;
    }
  }
}

function reset() {
  var input = document.querySelectorAll("input");
  for (var i = 0; i < input.length; i++) {
    input[i].value = "";
  }
}

var name_input = document.getElementById("name");
name_input.onchange = () => {
  form["name"] = name_input.value;
};

var sbd_input = document.getElementById("sbd");
sbd_input.onchange = () => {
  form["sbd"] = sbd_input.value;
};

var date_input = document.getElementById("date");
date_input.onchange = () => {
  form["date"] = date_input.value;
};

var phone_input = document.getElementById("phone");
phone_input.onchange = () => {
  form["phone"] = phone_input.value;
};

function submitForm() {
  form["sex"] = findSelection();
  form["folk"] = findcheck();
}

function alert_success(message) {
  alert(message);

}

var table_row = document.getElementsByClassName("table_data");
var detele_btns = document.querySelectorAll(".delete_btn");
for (var i = 0; i < detele_btns.length; i++) {
  detele_btns[i].onclick = (e) => {
    if(confirm("Bạn có muốn xóa hồ sơ có số báo danh là " + hssv[e.target.getAttribute("data-index")].sbd)){
      table_row[e.target.getAttribute("data-index")].style.display = "none";
    }
  };
}

var student_id = [...hssv.map(item => item.sbd)]
function search_student_list(){
  var sbdInput = document.getElementById("search_student_sbd");
    if (student_id.includes(sbdInput.value) == true) {
      var ps = hssv
        .map((item, index) => {
          if (sbdInput.value == item.sbd) {
            return `
          <tr class="table_row table_data">
          <th scope="row">${index + 1}</th>
                  <td>${item.sbd}</td>
                  <td>${item.name}</td>
                  <td>${item.sex}</td>
                  <td>${item.date}</td>
                  <td>${item.phone}</td>
                  <td>
                  <button class="btn btn-warning detail_btn px-4" data-index = ${index}>Chi Tiết</button>
                  <button class="btn btn-primary edit_btn px-4" data-index = ${index}>Sửa</button>
                  <button class="btn btn-danger delete_btn px-4" data-index = ${index}>Xóa</button>
                  </td>
              </tr>
          `;
          }
        })
        .join("");
      const student_list = `
    ${add_button}
    <table class="student_table table table-bordered" id="student_table">
    <thead>
      <tr class="table_row">
        <th scope="col" class="table_title">STT</th>
        <th scope="col" class="table_title">SBD</th>
        <th scope="col" class="table_title">Họ Tên</th>
        <th scope="col" class="table_title">Giới Tính</th>
        <th scope="col" class="table_title">Ngày Sinh</th>
        <th scope="col" class="table_title">SĐT</th>
        <th scope="col" class="table_title">Công cụ</th>
      </tr>
    </thead>
    <tbody  id="student_list">
        ${ps}
    </tbody>
    </table>
`;
      student_table.innerHTML = student_list;
    } else {
      alert("Không tìm thấy sbd");
    }
};