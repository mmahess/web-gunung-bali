AFRAME.registerComponent('tombol-link', {
  init: function () {

    this.el.addEventListener('click', (e) => {

      console.log("Tombol virtual diklik!");

      window.location.href = '../detail.html?id=mt03st1';
    });
  }
});