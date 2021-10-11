const hssv = [
  {
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

const diem_sv = [
  {
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
  },
];

const student_table = document.getElementById("student_table");

const student = hssv
  .map(
    (item, index) => `
<tr class="table_row">
<th scope="row">${index + 1}</th>
        <td>${item.sbd}</td>
        <td>${item.name}</td>
        <td>${item.sex}</td>
        <td>${item.date}</td>
        <td>${item.phone}</td>
        <td>
        <button class="btn btn-warning px-4">Chi Tiết</button>
        <button class="btn btn-primary px-4">Sửa</button>
        <button class="btn btn-danger px-4">Xóa</button>
        </td>
    </tr>
    `
  )
  .join();

const student_list = `
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
    </tr>
`
  )
  .join();

const mark_list = `
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
    ${mark}
</tbody>
</table>
`;
function on_mark_list() {
    student_table.innerHTML = mark_list
}

function on_student_list() {
    student_table.innerHTML = student_list;
}
student_table.innerHTML = student_list;

