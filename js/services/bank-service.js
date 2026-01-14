app.service('bankService', function ($q) {
    this.getInterestRate = function () {
        var deferred = $q.defer();

        // Simulate API latency
        setTimeout(function () {
            // Random rate between 0.1% and 20%
            var rate = (Math.random() * 19.9 + 0.1).toFixed(2);
            deferred.resolve(Number(rate));
        }, 300);

        return deferred.promise;
    };
});
