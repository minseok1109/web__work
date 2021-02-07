const mobileBtn = document.querySelector('.mobile_header_btn');
const dropdownParent = document.querySelector('.dropdown-parent');

const init = () => {
  mobileBtn.addEventListener('click', () => {
    dropdownParent.classList.toggle('show');
    console.log('click');
  });
};

if (mobileBtn) {
  init();
}
