export default function (app) {
    app
        .service('loginServices', loginServices);

        function loginServices ($http) {
          'ngInject';
            return {
                getLogin: function(id) {
                 return [
                          {
                              "mail": "user@user.user",
                              "role": "user",
                              "pass": "3333",
                              "text": "user@user .useu ser@u er. us euse r@ u er. seu s r@u s er .use"
                          },
                          {
                              "mail": "admin@admin.admin",
                              "role": "admin",
                              "pass": "3333",
                              "text": "admin@admin.adm inadmin@admin.admin  dmin@admi n.adminadmin@admi n.admi admin admin. admin"
                          }
                      ];
                }
            };
        }
}

