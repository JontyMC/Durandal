define(function () {
    function TestModel() { }

    TestModel.prototype.findById = function (id) {
        return this.$.find('[data-test="'+ id + '"]');
    };

    TestModel.prototype.setupById = function () {
        var that = this;

        $.each(arguments, function (index, value) {
            that[value] = function () {
                return that.findById(value);
            };
        });
    };

    return TestModel;
});