const dsnv = new DSNV();
const validation = new Validation();

getLocalStorage();

function getEle(id) {
  return document.getElementById(id);
}

//lấy thống tin nhân viên
function layThongTinNhanVien() {
  const _tknv = getEle("tknv").value;
  const _name = getEle("name").value;
  const _email = getEle("email").value;
  const _password = getEle("password").value;
  const _datepicker = getEle("datepicker").value;
  const _luongCB = getEle("luongCB").value;
  const _chucvu = getEle("chucvu").value;
  const _gioLam = getEle("gioLam").value;

  //flag: boolean
  var isValid = true;
  //Validation tknv
  isValid &=
    validation.kiemTraRong(_tknv, "tbTKNV", "Vui lòng nhập số tài khoản") &&
    validation.kiemTraDoDaiKyTu(
      _tknv,
      "tbTKNV",
      "Vui lòng nhập từ 4 đến 6 ký tự",
      4,
      6
    ) &&
    validation.kiemTraSo(_tknv, "tbTKNV", "Vui lòng chỉ nhập ký tự số");

  //Validation name
  isValid &=
    validation.kiemTraRong(_name, "tbTen", "Vui lòng nhập họ và tên") &&
    validation.kiemTraChu(_name, "tbTen", "Vui lòng chỉ nhập chữ");

  //Validation email
  isValid &=
    validation.kiemTraRong(_email, "tbEmail", "Vui lòng nhập Email") &&
    validation.kiemTraEmail(_email, "tbEmail", "Vui lòng nhập đúng Email");

  //Validation password
  isValid &=
    validation.kiemTraRong(_password, "tbMatKhau", "Vui lòng nhập Mật Khẩu") &&
    validation.kiemTraDoDaiKyTu(
      _password,
      "tbMatKhau",
      "Vui lòng nhập từ 6 đến 10 ký tự",
      6,
      10
    ) &&
    validation.kiemTraPass(
      _password,
      "tbMatKhau",
      "Vui lòng nhập mật khẩu có 1 ký tự in hoa, có 1 ký tự đặc biệt, có ít nhất 1 ký tự số"
    );

  //Validation datepicker
  isValid &=
    validation.kiemTraRong(_datepicker, "tbNgay", "Vui lòng nhập ngày") &&
    validation.kiemTraNgay(
      _datepicker,
      "tbNgay",
      "Vui lòng nhập đúng định dạng ngày mm/dd/yyyy"
    );
  //Validation luongCB
  isValid &=
    validation.kiemTraRong(
      _luongCB,
      "tbLuongCB",
      "Vui lòng nhập Lương Cơ Bản"
    ) &&
    validation.kiemTraLuongCB(
      _luongCB,
      "tbLuongCB",
      "Vui lòng nhập Lương Cơ Bản  1 000 000 - 20 000 000"
    );

  //Validation chucvu
  isValid &= validation.kiemTraChucVu("tbChucVu", "Vui lòng chọn Chức Vụ");

  //Validation gioLam
  isValid &=
    validation.kiemTraRong(_gioLam, "tbGiolam", "Vui lòng nhập giờ làm") &&
    validation.kiemTraGioLam(
      _gioLam,
      "tbGiolam",
      "Vui lòng nhập giờ làm trong tháng 80 - 200 giờ"
    );

  //nếu isValid là false thì function sẽ dừng lại
  if (!isValid) return;
  const nv = new NhanVien(
    _tknv,
    _name,
    _email,
    _password,
    _datepicker,
    _luongCB,
    _chucvu,
    _gioLam
  );
  nv.tinhTongLuong();
  nv.xepLoaiNhanVien();
  return nv;
}

//render UI

function renderUI(data) {
  var content = "";
  for (var i = 0; i < data.length; i++) {
    const nv = data[i];

    content += `
        <tr>
            <td>${nv.tknv}</td>
            <td>${nv.name}</td>
            <td>${nv.email}</td>
            <td>${nv.datepicker}</td>
            <td>${nv.chucvu}</td>
            <td>${nv.tongLuong}</td>
            <td>${nv.loaiNhanVien}</td>
            <td>
              <button class="btn btn-success" onclick = "handleDelete('${nv.tknv}')">Delete</button>
              <button class="btn btn-danger" onclick = "handleEdit('${nv.tknv}')">Edit</button>
            </td>
        </tr>
    `;
  }
  getEle("tableDanhSach").innerHTML = content;
}

//button thêm nhân viên
getEle("btnThemNV").onclick = function handleThemNV() {
  const nv = layThongTinNhanVien();

  if (!nv) return;

  dsnv.themNV(nv);

  renderUI(dsnv.arr);

  setLocalStorage();
};
// xóa nhân viên
function handleDelete(id) {
  dsnv.xoaNV(id);
  console.log(dsnv.arr);

  renderUI(dsnv.arr);

  setLocalStorage();
}
//xuất thông tin nhân viên lên lại UI
function handleEdit(id) {
  //ấn nút edit auto mở cửa sổ
  var autoClick = getEle("btnThem");
  autoClick.click();
  const nv = dsnv.layThongTinTuEdit(id);

  if (nv !== null) {
    getEle("tknv").value = nv.tknv;
    getEle("tknv").disabled = true;
    getEle("name").value = nv.name;
    getEle("email").value = nv.email;
    getEle("password").value = nv.password;
    getEle("datepicker").value = nv.datepicker;
    getEle("luongCB").value = nv.luongCB;
    getEle("chucvu").value = nv.chucvu;
    getEle("gioLam").value = nv.gioLam;
  }

  getEle("btnThemNV").style.display = "none";
}

//Cập nhật thông tin chỉnh nhân viên
function handleCapNhatNV() {
  const nv = layThongTinNhanVien();

  dsnv.editNV(nv);

  renderUI(dsnv.arr);

  setLocalStorage();
}

//tìm kiếm nhân viên
getEle("searchName").addEventListener("keyup", function () {
  const keyword = getEle("searchName").value;

  const mangTimKiem = dsnv.timNV(keyword);

  renderUI(mangTimKiem);
});

//lưu dữ liệu thêm nhân viên xuống localStorage của brower
function setLocalStorage() {
  //chuyển dataJson sang string
  const dataString = JSON.stringify(dsnv.arr);
  //lưu xuống localStorage
  localStorage.setItem("DSNV", dataString);
}

function getLocalStorage() {
  const dataString = localStorage.getItem("DSNV");
  //chuyển string sang json
  if (dataString) {
    const dataJson = JSON.parse(dataString);
    //phục hồi data cho dsnv.arr
    dsnv.arr = dataJson;
    //render UI
    renderUI(dsnv.arr);
  }
}
