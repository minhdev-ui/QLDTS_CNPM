
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