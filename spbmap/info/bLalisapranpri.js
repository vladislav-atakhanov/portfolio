(document.querySelector("#bLalisapranpri .info__text") || document.getElementById("bLalisapranpri")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'bLalisapranpri')" data-id="bLalisapranpri" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">База Lalisapranpri</h2></div><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="blue">1500 20</span></p><p class="coords__paragraph">Обычный мир - <span class="gray">12000 68 170</span></p></div><p class="dot__description">Чиста чилл на зоне</p>`