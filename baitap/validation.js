function Validation() {
  this.kiemTraRong = function (value, tbID, mess) {
    if (value === "") {
      getEle(tbID).innerHTML = mess;
      getEle(tbID).style.display = "inline-block";
      return false;
    }
    getEle(tbID).innerHTML = "";
    getEle(tbID).style.display = "none";
    return true;
  };

  this.kiemTraSo = function (value, tbID, mess) {
    const checkSo = /^[0-9]+$/;
    if (value.match(checkSo)) {
      getEle(tbID).innerHTML = "";
      getEle(tbID).style.display = "none";
      return true;
    }
    getEle(tbID).innerHTML = mess;
    getEle(tbID).style.display = "inline-block";
    return false;
  };

  this.kiemTraDoDaiKyTu = function (value, tbID, mess, min, max) {
    if (value.trim().length >= min && value.trim().length <= max) {
      getEle(tbID).innerHTML = "";
      getEle(tbID).style.display = "none";
      return true;
    }
    getEle(tbID).innerHTML = mess;
    getEle(tbID).style.display = "inline-block";
    return false;
  };

  this.kiemTraChu = function (value, tbID, mess) {
    const chu =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(chu)) {
      getEle(tbID).innerHTML = "";
      getEle(tbID).style.display = "none";
      return true;
    }
    getEle(tbID).innerHTML = mess;
    getEle(tbID).style.display = "inline-block";
    return false;
  };

  this.kiemTraEmail = function (value, tbID, mess) {
    const checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(checkEmail)) {
      getEle(tbID).innerHTML = "";
      getEle(tbID).style.display = "none";
      return true;
    }
    getEle(tbID).innerHTML = mess;
    getEle(tbID).style.display = "inline-block";
    return false;
  };

  this.kiemTraPass = function (value, tbID, mess) {
    const checkPass =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (value.match(checkPass)) {
      getEle(tbID).innerHTML = "";
      getEle(tbID).style.display = "none";
      return true;
    }
    getEle(tbID).innerHTML = mess;
    getEle(tbID).style.display = "inline-block";
    return false;
  };

  this.kiemTraNgay = function (value, tbID, mess) {
    const checkNgay = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    if (value.match(checkNgay)) {
      getEle(tbID).innerHTML = "";
      getEle(tbID).style.display = "none";
      return true;
    }
    getEle(tbID).innerHTML = mess;
    getEle(tbID).style.display = "inline-block";
    return false;
  };

  this.kiemTraLuongCB = function (value, tbID, mess) {
    if (value >= 1000000 && value <= 20000000) {
      getEle(tbID).innerHTML = "";
      getEle(tbID).style.display = "none";
      return true;
    }
    getEle(tbID).innerHTML = mess;
    getEle(tbID).style.display = "inline-block";
    return false;
  };

  this.kiemTraChucVu = function (tbID, mess) {
    if (getEle("chucvu").selectedIndex === 0) {
      getEle(tbID).innerHTML = mess;
      getEle(tbID).style.display = "inline-block";
      return false;
    }
    getEle(tbID).innerHTML = "";
    getEle(tbID).style.display = "none";
    return true;
  };

  this.kiemTraGioLam = function (value, tbID, mess) {
    if (value >= 80 && value <= 200) {
      getEle(tbID).innerHTML = "";
      getEle(tbID).style.display = "none";
      return true;
    }
    getEle(tbID).innerHTML = mess;
    getEle(tbID).style.display = "inline-block";
    return false;
  };
}
