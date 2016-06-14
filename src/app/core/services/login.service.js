export default function (app) {
    app
        .service('loginServices', loginServices);

        function loginServices ($http) {
          'ngInject';
            return {
                getLogin: function(id) {
                 return [
                          {
                              "email": "user@user.user",
                              "role": "user",
                              "password": "111",
                              "text": "user@user .useu ser@u er. us euse r@ u er. seu s r@u s er .use"
                          },
                          {
                              "email": "admin@admin.admin",
                              "role": "admin",
                              "password": "111",
                              "text": "admin@admin.adm inadmin@admin.admin  dmin@admi n.adminadmin@admi n.admi admin admin. admin"
                          }
                      ];
                },

                signin: function({email, password}) {
                  console.log(email, "->>" , password);
                  var o = this.getLogin();
                  var logUser = o.filter(el => el.email == email && el.password == password);
                   if (logUser.length) return Promise.resolve(logUser); else return Promise.reject("error");
                }

            };
        }
}

