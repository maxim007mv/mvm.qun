import { Component, OnInit } from '@angular/core';
declare const ymaps: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  map: any;
  // Начальные координаты центра карты
  latitude = 55.751947;
  longitude = 37.620409;

  ngOnInit(): void {
    // Инициализировать карту
    ymaps.ready().done(() => this.createMap());
  }

  private createMap(): void {
      // Создать объект карты
      this.map = new ymaps.Map('map', {
        center: [this.latitude, this.longitude],
        zoom: 10
      });

      // Геобъект
      var myGeoObject = new ymaps.GeoObject({
        // Описание геометрии.
          geometry: {
            type: "Point",
            coordinates: [55.8, 37.8]
          },
          // Свойства.
          properties: {
            // Контент метки.
            iconContent: 'краткий',
            hintContent: 'общирный'
          }
      },
      {
          // Опции.
          // Иконка метки будет растягиваться под размер ее содержимого.
          preset: 'islands#blackStretchyIcon',
          // Метку можно перемещать.
          draggable: false
      });



      // Массив точек
      var placemarks = [
          new ymaps.Placemark([56.2295596,37.4906222], {
              balloonContent: '<strong><button routerlink="home">читать</button></strong>',
              iconCaption: 'Горнолыжный клуб Леонида Тягачёва'
            }, {
              preset: 'islands#redDotIconWithCaption',
              iconColor: 'black'
          }),

          new ymaps.Placemark([55.677164, 37.613548], {
              balloonContent: '<a href="home" <button>читать</button></a>',
              iconCaption: 'Кант'
            }, {
              preset: 'islands#redDotIconWithCaption',
              iconColor: 'black'
          }),

          new ymaps.Placemark([55.7859311, 37.9496145], {
              balloonContent: '<strong><button class="btn default">Читать</button></strong>',
              iconCaption: 'Лисья Гора'
            }, {
              preset: 'islands#blueDotIconWithCaption',
              iconColor: 'black'
          }),

          new ymaps.Placemark([56.2309295, 37.4635082], {
              balloonContent: 'цвет <strong><button class="btn default">Читать</button></strong>',
              iconCaption: 'Горнолыжный Клуб Целеево '
            }, {
              preset: 'islands#blackDotIconWithCaption',
              iconColor: 'black'
          }),

          new ymaps.Placemark([56.275454, 37.475333], {
              balloonContent: 'цвет <strong>детской неожиданности</strong>',
              iconCaption: 'спортивный курорт волен'
            }, {
              preset: 'islands#blackDotIconWithCaption',
              iconColor: 'black'
          }),

          new ymaps.Placemark([56.2768673, 37.5642502], {
              balloonContent: '<strong></strong>',
              iconCaption: 'Горнолыжный курорт «Сорочаны» '
            }, {
              preset: 'islands#blackDotIconWithCaption',
              iconColor: 'black',

          }),

          new ymaps.Placemark([56.2681403,37.4765285], {
              balloonContent: 'цвет <strong>фэйсбука</strong>',
              iconCaption: 'Парк «Яхрома»'
            }, {
              preset: 'islands#blackDotIconWithCaption',
              iconColor: 'black'
          }),

          new ymaps.Placemark([56.1416327, 37.4675124], {
              balloonContent:  '<strong></strong>',
              iconCaption: 'Горнолыжный курорт «Спас-Каменка»'
            }, {
                preset: 'islands#blackDotIconWithCaption',
                iconColor: 'black'
          }),

          new ymaps.Placemark([55.341560, 36.735168], {
              balloonContent: '<strong></strong>',
              iconCaption: 'Тюбинг-парк «Елагино»'
          }, {
              preset: 'islands#blackDotIconWithCaption',
              iconColor: 'black'
          }),

          new ymaps.Placemark([54.836570, 37.570896], {
                balloonContent: 'цвет <strong></strong>',
                iconCaption: 'Горнолыжный курорт «Царьград»'
          }, {
              preset: 'islands#blackDotIconWithCaption',
              iconColor: 'black'

          }),

          new ymaps.Placemark([55.032532, 38.541034], {
              balloonContent: '<strong>  <a href="4index.html"> <button class="button" ">Больше</button></strong>',
              iconCaption: 'Горнолыжный комплекс «Олимп»'
            }, {
               preset:'islands#blackDotIconWithCaption',
               iconColor: 'black'
           }),

           new ymaps.Placemark([55.634192, 37.853332], {
            balloonContent: 'цвет <strong></strong>',
            iconCaption: 'Экстрим-парк «Фристайл»'
      }, {
          preset: 'islands#blackDotIconWithCaption',
          iconColor: 'black'

      }),
      new ymaps.Placemark([56.050594, 37.221787], {
        balloonContent: 'цвет <strong></strong>',
        iconCaption: 'Горнолыжный склон в парк-отеле «Морозовка»'
  }, {
      preset: 'islands#blackDotIconWithCaption',
      iconColor: 'black'

  }),
  new ymaps.Placemark([55.838725, 37.291896], {
    balloonContent: 'цвет <strong></strong>',
    iconCaption: 'Горнолыжный комплекс MoonVillage'
}, {
  preset: 'islands#blackDotIconWithCaption',
  iconColor: 'black'

}),
new ymaps.Placemark([55.556180, 38.027403], {
  balloonContent: '<a href="maps" <button>читать</button></a>',
  iconCaption: 'Гай Северина'
}, {
preset: 'islands#blackDotIconWithCaption',
iconColor: 'black'

}),
      ];


      // Добавить все точки на карту
      for( var p of placemarks ) this.map.geoObjects.add( p );
    }

}
