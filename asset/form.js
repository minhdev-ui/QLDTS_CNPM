const hssv = [
    {
        sbd: '001',
        name: 'Ngô Thị Hồng Nhung',
        date: '19/04/2002',
        sex: 'Nữ',
        folk: 'Kinh',
        aria: 'KV2',
        spacial_person: 'Không phải đối tượng ưu tiên',
        cmnd_cccd: '00458357236',
        address: 'TP Phủ Lý, Tỉnh Hà Nam',
        phone: '0984698729'
    },
    {
        sbd: '002',
        name: 'Đỗ Hồng Ngọc',
        date: '19/04/2002',
        sex: 'Nữ',
        folk: 'Kinh',
        aria: 'KV2NT',
        spacial_person: 'Không phải đối tượng ưu tiên',
        cmnd_cccd: '00458987236',
        address: 'Hải phòng',
        phone: '0984997729'
    },
    {
        sbd: '003',
        name: 'Hoàng Thị Minh Lan',
        date: '29/05/2001',
        sex: 'Nữ',
        folk: 'Kinh',
        aria: 'KV3',
        spacial_person: 'Đối tượng ưu tiên loại 1',
        cmnd_cccd: '00358657236',
        address: 'Nam Dinh',
        phone: '0984678727'
    },
    {
        sbd: '004',
        name: 'Đỗ Minh Hùng',
        date: '15/03/2002',
        sex: 'Nam',
        folk: 'Dao',
        aria: 'KV1',
        spacial_person: 'Đối tượng ưu tiên loại 1',
        cmnd_cccd: '01456357236',
        address: 'Thanh Hoa',
        phone: '0974698720'
    },
    {
        sbd: '005',
        name: 'Đỗ Ngọc Minh',
        date: '16/08/2002',
        sex: 'Nam',
        folk: 'Kinh',
        aria: 'KV2',
        spacial_person: 'Không phải đối tượng ưu tiên',
        cmnd_cccd: '01458857236',
        address: 'Bac Ninh',
        phone: '0974798729'
    },
    {
        sbd: '006',
        name: 'Hoàng Thị May',
        date: '23/01/2002',
        sex: 'Nữ',
        folk: 'Mường',
        aria: 'KV1',
        spacial_person: 'Đối tượng ưu tiên loại 1',
        cmnd_cccd: '01458387236',
        address: 'Thanh Hoa',
        phone: '0994698729'
    },
    {
        sbd: '007',
        name: 'Tòng Thị Hoàng',
        date: '24/03/2002',
        sex: 'Nữ',
        folk: 'HMong',
        aria: 'KV1',
        spacial_person: 'Đối tượng ưu tiên loại 2',
        cmnd_cccd: '04457357236',
        address: 'Thanh Hoa',
        phone: '0985698728'
    },
    {
        sbd: '008',
        name: 'Nguyễn Ánh Nguyệt',
        date: '17/02/2001',
        sex: 'Nữ',
        folk: 'Nùng',
        aria: 'KV1',
        spacial_person: 'Đối tượng ưu tiên loại 2',
        cmnd_cccd: '01358657236',
        address: 'Cao Bằng',
        phone: '0984678777'
    },
    {
        sbd: '009',
        name: 'Uông Văn Nam',
        date: '30/06/2002',
        sex: 'Nam',
        folk: 'Nùng',
        aria: 'KV2NT',
        spacial_person: 'Đối tượng ưu tiên loại 2',
        cmnd_cccd: '02348657236',
        address: 'Tuyên Quang',
        phone: '0994578729'
    },
    {
        sbd: '010',
        name: 'Nguyễn Khánh Linh',
        date: '11/07/2002',
        sex: 'Nữ',
        folk: 'Kinh',
        aria: 'KV3',
        spacial_person: 'Không phải đối tượng ưu tiên',
        cmnd_cccd: '03328657231',
        address: 'Ha Noi',
        phone: '0975671728'
    },
    {
        sbd: '011',
        name: 'Hoàng Hải Long',
        date: '21/08/2001',
        sex: 'Nam',
        folk: 'Gia-rai',
        aria: 'KV1',
        spacial_person: 'Đối tượng ưu tiên loại 2',
        cmnd_cccd: '01358637836',
        address: 'Yen Bai',
        phone: '0394668727'
    },
    {
        sbd: '012',
        name: 'Ngô Hải Minh',
        date: '13/05/2002',
        sex: 'Nam',
        folk: 'Kinh',
        aria: 'KV2',
        spacial_person: 'Không phải đối tượng ưu tiên',
        cmnd_cccd: '03358687233',
        address: 'Ninh Binh',
        phone: '0321678726'
    },
]


const dan_toc = [
    {
        id: '01',
        name: 'Kinh',
        desc: 'Tên gọi khác: Việt'
    },
    {
        id: '02',
        name: 'Tày',
        desc: 'Tên gọi khác: Thổ, Ngạn, Phén, Thù Lao, Pa Dí'
    },
    {
        id: '03',
        name: 'Thái',
        desc: 'Tên gọi khác: Tày Đăm, Tày Mười, Tày Thanh, Mán Thanh'
    },
    {
        id: '04',
        name: 'Hoa',
        desc: 'Tên Gọi khác: Hán, Triều Châu, Phúc Kiến, Quảng Đông, Hải Nam'
    },
    {
        id: '05',
        name: 'Khơ-me',
        desc: 'Tên Gọi khác: Cur, Cul, Cu, Thổ, Việt gốc Miên, Krôm'
    },
    {
        id: '06',
        name: 'Mường',
        desc: 'Tên Gọi khác: Mol, Mual, Mọi, Mọi Bi, Ao Tá, Ậu Tá'
    },
    {
        id: '07',
        name: 'Nùng',
        desc: 'Tên Gọi khác: Xuồng, Giang, Nùng An, Phàn Sinh, Nùng Cháo'
    },
    {
        id: '08',
        name: 'HMong',
        desc: 'Tên Gọi khác: Mèo, Hoa, Mèo Xanh, Mèo Đỏ, Mèo Đen'
    },
    {
        id: '09',
        name: 'Dao',
        desc: 'Tên Gọi khác: Mán, Động, Trại, Xá, Dìu, Miên, Kiềm'
    },
    {
        id: '10',
        name: 'Gia-rai',
        desc: 'Tên Gọi khác: Giơ-rai, Tơ-buăn, Chơ-rai, Hơ-bau, Hđrung'
    },
    {
        id: '11',
        name: 'Ngái',
        desc: 'Tên Gọi khác: Xín, Lê, Đản, Khách Gia'
    },
    {
        id: '12',
        name: 'Ê-đê',
        desc: 'Tên Gọi khác: Ra-đê, Đê, Kpạ, A-đham, Krung, Ktul'
    },
    {
        id: '13',
        name: 'Ba na',
        desc: 'Tên Gọi khác: Giơ-lar. Tơ-lô, Giơ-lâng, Y-lăng, Rơ-ngao'
    },
    {
        id: '14',
        name: 'Xơ-Đăng',
        desc: 'Tên Gọi khác: Xơ-teng, Hđang, Tơ-đra, Mơ-nâm'
    },
    {
        id: '15',
        name: 'Sán chay',
        desc: 'Tên Gọi khác: Cao Lan, Sán Chỉ, Mán Cao Lan'
    },
    {
        id: '16',
        name: 'Cơ-ho',
        desc: 'Tên Gọi khác: Xrê, Nốp, Tu-lốp, Cơ-don, Chil'
    },
    {
        id: '17',
        name: 'Chăm',
        desc: 'Tên Gọi khác: Chàm, Chiêm Thành, Hroi'
    },
    {
        id: '18',
        name: 'Dán Diu',
        desc: 'Tên Gọi khác: Sán Dẻo, Trại, Trại Đất, Mán, Quần Cộc'
    },
    {
        id: '19',
        name: 'Hre',
        desc: 'Tên Gọi khác: Chăm Rê, Chom, Krẹ Luỹ'
    },
    {
        id: '20',
        name: 'Mnong',
        desc: 'Tên Gọi khác: Pnông, Nông, Pré, Bu-đâng, ĐiPri'
    },
];

const khoi = [
    {
        id: 'A00',
        mon_1: 'Toán',
        mon_2: 'Lý',
        mon_3: 'Hóa'
    },
    {
        id: 'A01',
        mon_1: 'Toán',
        mon_2: 'Lý',
        mon_3: 'Anh'
    },
    {
        id: 'D01',
        mon_1: 'Văn',
        mon_2: 'Toán',
        mon_3: 'Anh'
    },
    {
        id: 'D07',
        mon_1: 'Toán',
        mon_2: 'Hóa',
        mon_3: 'Anh'
    },
    {
        id: 'D08',
        mon_1: 'Toán',
        mon_2: 'Sinh',
        mon_3: 'Anh'
    },
    {
        id: 'B00',
        mon_1: 'Toán',
        mon_2: 'Sinh',
        mon_3: 'Hóa'
    },
];

const student = document.getElementById("student_list");
const student_list = hssv.map((item, index) => `
    <tr class="table_row">
        <th scope="row">${index}</th>
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
`).join()
student.innerHTML += student_list
const folk = document.getElementById("folk_list");
const unit = document.getElementById("unit_list");
const folk_list = dan_toc.map((item) => `
    <option value="${item.id}">${item.name}</option>
`).join()
folk.innerHTML += folk_list
const unit_list = khoi.map(item => `
    <option value="${item.id}">${item.id}</option>
`);
unit.innerHTML += unit_list