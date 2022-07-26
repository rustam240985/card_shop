if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


const sidebarTogleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

const btnShowMoreCards = document.querySelector('.main-btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');

const widget = document.querySelectorAll('.widget');

sidebarTogleBtn.onclick = function () {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--active')
}


btnShowMoreCards.addEventListener('click', function () {
    hiddenCards.forEach(function (card) {
        card.classList.remove('card-link--hidden');
    })
})

widget.forEach(function (widget) {
    widget.addEventListener('click', function (e) {
        if (e.target.classList.contains('widget-title')) {
            e.target.classList.toggle('widget-title--active');
            e.target.nextElementSibling.classList.toggle('widget-body--hidden');
        }

    });
});

const checkBoxAny = document.querySelector('#distance-5');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');

checkBoxAny.addEventListener('change', function () {
    if (checkBoxAny.checked) {
        topLocationCheckboxes.forEach(function (item) {
            item.checked = false;
        });

    }

})

topLocationCheckboxes.forEach(function (item) {
    item.addEventListener('change', function () {
        if (checkBoxAny.checked) {
            checkBoxAny.checked = false;
        }
    })
})

//Показать еще 3 доп. опции с чекбоксами в фильтрами

const showMoreOptions = document.querySelector('.option-more-link');
const hiddenCheckBoxes = document.querySelectorAll('.hidden-option');

showMoreOptions.onclick = function (e) {
    e.preventDefault();

    // Если блоки были скрыты - значит показываем
    if (showMoreOptions.dataset.options == 'hidden') {
        hiddenCheckBoxes.forEach(function (item) {
            item.style.display = 'block';
        });
        showMoreOptions.innerText = 'Скрыть дополнительные опции';
        showMoreOptions.dataset.options = 'visible';
    }
    // Если блоки были видны - значит скрываем
    else if (showMoreOptions.dataset.options == 'visible') {
        hiddenCheckBoxes.forEach(function (item) {
            item.style.display = 'none';
        });
        showMoreOptions.innerText = 'Показать ещё';
        showMoreOptions.dataset.options = 'hidden';
    }

}


