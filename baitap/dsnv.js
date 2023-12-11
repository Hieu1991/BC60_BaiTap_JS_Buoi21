function DSNV() {
  this.arr = [];

  //thêm NV
  this.themNV = function (nv) {
    this.arr.push(nv);
  };

  //tìm ví trí
  this.timViTri = function (id) {
    var index = -1;
    for (var i = 0; i < this.arr.length; i++) {
      const nv = this.arr[i];
      if (nv.tknv === id) {
        index = i;
        break;
      }
    }
    return index;
  };

  //xóa nhân viên
  this.xoaNV = function (id) {
    const index = this.timViTri(id);
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  };
  //lấy thông tin nhân viên từ Edit
  this.layThongTinTuEdit = function (id) {
    const index = this.timViTri(id);
    if (index !== -1) {
      return this.arr[index];
    }
    return null;
  };
  //chỉnh sửa nhân viên
  this.editNV = function (nv) {
    const index = this.timViTri(nv.tknv);
    if (index !== -1) {
      this.arr[index] = nv;
    }
  };

  //tìm kiếm nhân viên

  this.timNV = function (keyword) {
    var mangTimKiem = [];
    for (var i = 0; i < this.arr.length; i++) {
      const nv = this.arr[i];

      const keywordLower = keyword.toLowerCase();

      const tenNVLower = nv.loaiNhanVien.toLowerCase();

      const indexLower = tenNVLower.indexOf(keywordLower);
      if (indexLower !== -1) {
        mangTimKiem.push(nv);
      }
    }
    return mangTimKiem;
  };
}
