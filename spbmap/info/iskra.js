(document.querySelector("#iskra .info__text") || document.getElementById("iskra")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'iskra')" data-id="iskra" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">Искра</h2><p class="dot__title_paragraph">Мэр: <b>MrDragosSQ</b></p></div><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="red">500 1287</span></p><p class="coords__paragraph">Обычный мир - <span class="gray">4000 68 10300</span></p></div><div class="api__item spoiler"><button class="spoiler__btn" onclick="updateSpoiler(this)">Описание</button><main class="spoiler__content"><p class="dot__description">Город «Искра» город со стоит из кристаллов (стекло и бетон)<br>У каждого Кристала есть свои свойства Кристал полёта магнита и т.д.</p></main></div><div class="residents dot__residents"><h3>Жители</h3><ul class="residents__list"><li class="residents__item">MrDragosSQ</li><li class="residents__item">Venerume</li><li class="residents__item">ShyKeyboard4036</li><li class="residents__item">PurplePigeon581</li><li class="residents__item">SEMkA767</li><li class="residents__item">HoZDer</li><li class="residents__item">JIYHTUKBOUH</li></ul></div>`