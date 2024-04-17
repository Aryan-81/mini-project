function toggleImgInfo(button) {
    const card = button.closest('.eq-card');
    const imgInfo = card.querySelector('.img-info');
    const icon = card.querySelector('.info-icon');
    const arrow1 = card.querySelector('.arrow')
    imgInfo.classList.toggle('active');
    icon.classList.toggle('active');
    arrow1.classList.toggle('active');
}