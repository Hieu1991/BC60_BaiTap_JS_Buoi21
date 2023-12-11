function NhanVien(
  _tknv,
  _name,
  _email,
  _password,
  _datepicker,
  _luongCB,
  _chucvu,
  _gioLam
) {
  this.tknv = _tknv;
  this.name = _name;
  this.email = _email;
  this.password = _password;
  this.datepicker = _datepicker;
  this.luongCB = _luongCB;
  this.chucvu = _chucvu;
  this.gioLam = _gioLam;
  this.tongLuong = 0;
  this.loaiNhanVien = "";

  this.tinhTongLuong = function () {
    if (this.chucvu === "Sếp") {
      this.tongLuong = Number(this.luongCB) * 3;
    } else if (this.chucvu === "Trưởng phòng") {
      this.tongLuong = Number(this.luongCB) * 2;
    } else if (this.chucvu === "Nhân viên") {
      this.tongLuong = Number(this.luongCB);
    }
    return this.tongLuong;
  };

  this.xepLoaiNhanVien = function () {
    if (this.gioLam >= 192) {
      this.loaiNhanVien = "nhân viên xuất sắc";
    } else if (this.gioLam < 192 && this.gioLam >= 176) {
      this.loaiNhanVien = "nhân viên giỏi";
    } else if (this.gioLam < 176 && this.gioLam >= 160) {
      this.loaiNhanVien = "nhân viên khá";
    } else if (this.gioLam < 160 && this.gioLam > 0) {
      this.loaiNhanVien = "nhân viên trung bình";
    }
    return this.loaiNhanVien;
  };
}
