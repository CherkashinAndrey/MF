
export default function (app) {
    app
        .service('tab', tabServices);

        function tabServices ($http) {
          'ngInject';
            return {
                getIn: function(id) {
                 return [
                          {
                              "firstName": "111",
                              "lastName": "2222",
                              "company": "3333",
                              "employed": true
                          },
                          {
                              "firstName": "4Lorraine",
                              "lastName": "4Wise",
                              "company": "4Comveyer",
                              "employed": false
                          },
                          {
                              "firstName": "5Nancy",
                              "lastName": "5Waters",
                              "company": "5Fuelton",
                              "employed": false
                          }
                      ];
                },

                getOut: function(id) {
                 return [
                          {
                              "firstName": "getOut1",
                              "lastName": "getOut1",
                              "company": "getOut1",
                              "employed": true
                          },
                          {
                              "firstName": "getOut2",
                              "lastName": "getOut3",
                              "company": "4Comveyer4",
                              "employed": false
                          },
                          {
                              "firstName": "getOut6",
                              "lastName": "getOut7",
                              "company": "getOut8",
                              "employed": false
                          }
                      ];
                },

                getarhiv: function(id) {
                 return [
                          {
                              "firstName": "arhiv1",
                              "lastName": "arhiv",
                              "company": "arhiv",
                              "employed": true
                          },
                          {
                              "firstName": "arhiv2",
                              "lastName": "arhiv3",
                              "company": "arhiv",
                              "employed": false
                          },
                          {
                              "firstName": "getOut6",
                              "lastName": "getOut7",
                              "company": "getOut8",
                              "employed": false
                          }
                      ];
                }
            };
        }
}


// (function() {

//   angular
//     .module('app')
//     .service('tabServices', tabServices)
//     .constant('DATA', [
//             {
//                 "firstName": "111",
//                 "lastName": "2222",
//                 "company": "3333",
//                 "employed": true
//             },
//             {
//                 "firstName": "4Lorraine",
//                 "lastName": "4Wise",
//                 "company": "4Comveyer",
//                 "employed": false
//             },
//             {
//                 "firstName": "5Nancy",
//                 "lastName": "5Waters",
//                 "company": "5Fuelton",
//                 "employed": false
//             }
//         ]
//      );    

//   function tabServices($http, DATA) {
//     return {
//       getData: function(id) {
//        console.log(DATA[id]);
//        return DATA;
//       },

//       summerData: function(id) {
//        return [
//           {
//             id: 'id_1',
//             article: '343434',
//             available: true,
//             sale: 10,
//             sex: 'man',
//             category: 'skirt',
//             season: 'summer',
//             composition: 'Nike',
//             atribut: 'Catton',
//             color: 'black',
//             title: 'Майка шифон волан',
//             images: [{
//               mainImage: '2',
//               productGallery: ['2_1', '2_2']
//             }],
//             size: ['M','XL'],
//             price: 100,
//             description: 'Платье приталенного силуэта . Декорировано итальянским кружевом',
//             novelty: true
//           }
//           ]
//       },

//       winterData: function(id) {
//        return [
//           {
//             id: 'id_1',
//             article: '343434',
//             available: true,
//             sale: 10,
//             sex: 'man',
//             category: 'skirt',
//             season: 'summer',
//             composition: 'Nike',
//             atribut: 'Catton',
//             color: 'black',
//             title: 'Майка шифон волан',
//             images: [{
//               mainImage: '2',
//               productGallery: ['2_1', '2_2']
//             }],
//             size: ['M','XL'],
//             price: 100,
//             description: 'Платье приталенного силуэта . Декорировано итальянским кружевом',
//             novelty: true
//           },
//           {
//             id: 'id_2',
//             article: '343434',
//             available: true,
//             sale: 10,
//             sex: 'man',
//             category: 'skirt',
//             season: 'summer',
//             composition: 'Nike',
//             atribut: 'Catton',
//             color: 'black',
//             title: 'Майка шифон волан',
//             images: [{
//               mainImage: '2',
//               productGallery: ['2_1', '2_2']
//             }],
//             size: ['M','XL'],
//             price: 100,
//             description: 'Платье приталенного силуэта . Декорировано итальянским кружевом',
//             novelty: true
//           }
//           ]
//       }
//     }
//   }


// })();
