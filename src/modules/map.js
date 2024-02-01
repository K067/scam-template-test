const map = () => {
    ymaps.ready(init);

    function init() {

        let myMap = new ymaps.Map('map', {

            center: [55.769925, 37.639743],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        }),

            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                iconLayout: 'default#image',
                iconImageHref: '../image/icon/ion_pin.svg',
                iconImageSize: [60, 42],
                iconImageOffset: [-5, -38]
            });

        myMap.geoObjects
            .add(myPlacemark)
    }
}

export default map;