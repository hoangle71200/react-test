const content = document.querySelector('.category-list');
const mathIcon = document.querySelector('.category__heading-btn-show .fas');
const buttonShowMore = document.querySelector('.category__heading-btn .show__more');
const buttonShowLess = document.querySelector('.category__heading-btn .show__less'
);
const button = document.querySelector('.category__heading-btn');

const buttonMore = document.querySelector('.category__heading-btn-show');
const namePlusIcon = document.querySelector('.category__heading-btn-show .show__more');
const nameMinusIcon = document.querySelector('.category__heading-btn-show .show__less');

const initial = {
  showAllContent: true,
  showUlAndButton: true,
};

const defaultValue = {
  element: mathIcon,
  currentIcon: 'fa-plus',
  newIcon: 'fa-minus',
};

button.addEventListener('click', () => {
  console.log('clicked');
  
  //show & hidden nav-button = arrow
  if (initial.showUlAndButton) {
    showArrow(buttonShowLess);
    showArrow(buttonShowMore, false);
    content.classList.add("d_none");
    buttonMore.classList.add("d_none");
  } else {
    showArrow(buttonShowLess, false);
    showArrow(buttonShowMore);
    content.classList.remove("d_none");
    buttonMore.classList.remove("d_none");
  }
  initial.showUlAndButton = !initial.showUlAndButton;
});

buttonMore.addEventListener('click', () => {
    // console.log('clicked');
    
  //show & hidden nav-button = arrow
  if (initial.showAllContent) {
    // showContent(minusIcon);
    // showContent(plusIcon, false);
    showContent(namePlusIcon, false);
    showContent(nameMinusIcon);
    defaultValue.currentIcon = 'fa-plus';
    defaultValue.newIcon = 'fa-minus';


    content.classList.remove("maxHeight");
  } else {
    // showContent(minusIcon, false);
    // showContent(plusIcon);
    showContent(namePlusIcon);
    showContent(nameMinusIcon, false);

    defaultValue.currentIcon = 'fa-minus';
    defaultValue.newIcon = 'fa-plus';

    content.classList.add("maxHeight");
  }

  changeIcon(defaultValue);
  initial.showAllContent = !initial.showAllContent;
});

function showArrow(button, visible = true) {
  !visible ? button.classList.add("d_none") : button.classList.remove("d_none");
}
function showContent(buttonMore, visible = true){
  !visible ? buttonMore.classList.add("d_none") : buttonMore.classList.remove("d_none");
}
function changeIcon(value){
  const { element, currentIcon, newIcon } = value;
    element.classList.remove(currentIcon);
    element.classList.add(newIcon);
}