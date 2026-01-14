app.controller('MainCtrl', function ($scope, bankService) {

    // Initialize default values
    $scope.interest_rate = 0;
    $scope.principal = "";
    $scope.loan_term = "48";
    $scope.monthly_payment = "0.00";
    $scope.loading = true;

    // Get initial interest rate
    bankService.getInterestRate().then(function (rate) {
        $scope.interest_rate = rate;
        $scope.loading = false;
    });

    $scope.calculatePayment = function () {
        if (!$scope.principal || $scope.principal <= 0) {
            return;
        }

        var P = Number($scope.principal);
        var r = $scope.interest_rate / 100;
        var months = Number($scope.loan_term);
        var t = months / 12; // Convert months to years

        // Formula: A = P(1 + rt)
        // This seems to be the formula requested in the original README: A = P + (P*r*t)
        // And then monthly payment = A / months

        // Let's stick to the README formula for "Total Amount" then divide by months.
        // A = P + (P * r * t)

        var A = P + (P * r * t);

        $scope.monthly_payment = (A / months).toFixed(2);
    };
});
