(document.querySelector("#era .info__text") || document.getElementById("era")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'era')" data-id="era" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">Издательство «Эра»</h2><p class="dot__title_paragraph">Владелец <b>Genuine Paragon</b></p></div><ul class="marks dot__marks"><li class="marks__item">издательство</li></ul><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="red">15 70</span></p></div><p class="dot__description">В данном филиале издательства вы сможете с легкостью найти себе чтиво по вкусу. Изучайте помещение и читайте пробники. Если что-то заинтересует, за покупкой полной версии обращайтесь к работникам филиала.</p>`