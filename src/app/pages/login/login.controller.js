function LoginController ($log, $state, $scope, loginServices,  states/*,toastr, sailsAuthService, sailsService*/) {
  'ngInject';
  console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDD");
  $scope.sending = false;
  $scope.signin = signin;
  $scope.loginServices = loginServices;
  $scope.states = states;
  //$scope.passwordPattern = '.{1,}';
  //$scope.resetPassword = resetPassword;
  //$scope.changePassword = changePassword;

  function signin () {
    // inspection on validation
    if($scope.authForm.$invalid) {
      toastr.warning('Fieldes hasn\'t be empty!');
      return
    }
    //slise
    $scope.sending = true;


    $scope.loginServices.signin({
      email: $scope.email,
      password: $scope.passw || $scope.newPassword
    }).then( (r) => {
      console.log(r);
      $state.go('main');
    }).catch( err => {
     // toastr.error(err.error.data.message, 'Error');
     console.log("Error", err);
      $log.error(err);
      $scope.sending = false;
    });


    // sailsAuthService.signInUserByEmail({
    //   email: $scope.email,
    //   password: $scope.passw || $scope.newPassword
    // }).then( (r) => {
    //   console.log(r);
    //   $state.go(states.HOME);
    // }).catch( err => {
    //   toastr.error(err.error.data.message, 'Error');
    //   $log.error(err);
    //   $scope.sending = false;
    // });

  }

/*  function resetPassword () {
    if($scope.resetPasswordForm.$invalid) {
      toastr.warning('Fieldes hasn\'t be empty!');
      return
    }
    $scope.sending = true;
    sailsAuthService.resetPassword($scope.email)
    .then( () => {
      toastr.success('Check your email!');
      $state.go(states.LOGIN);
    }).catch( err => {
      debugger;
      toastr.error(err.error.message, err.error.code);
      $log.error(err);
      $scope.sending = false;
    });
  }*/



  /*

   function changePassword () {
    if ($scope.newPassword !== $scope.newPassword2) {
      toastr.error('Entered passwords are different!', 'Error');
      return
    }
    if ($scope.authForm.$valid) {
      $scope.sending = true;
      sailsAuthService.changePassword($scope.email, $scope.oldPassword, $scope.newPassword)
        .then(
          () => { 
            toastr.success('Password changed success!', 'Success');
            signin();
          }          
        )
        .catch(
        error => {
            $scope.sending = false;
            toastr.error(error.data.data.raw.message, 'Error changing password!');
          });
      } else {
      toastr.error('Not all fields are filled', 'Error');
    }
  }  */

}

export default LoginController;