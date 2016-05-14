var app;
(function (app) {
    var common;
    (function (common) {
        var DataAccessService = (function () {
            function DataAccessService($resource) {
                this.$resource = $resource;
            }
            DataAccessService.prototype.getProductResource = function () {
                return this.$resource("/api/products/:productId");
            };
            return DataAccessService;
        }());
        common.DataAccessService = DataAccessService;
        angular
            .module("common.service")
            .service("dataAccessService", DataAccessService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
