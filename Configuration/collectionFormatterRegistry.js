﻿var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Humanizer;
(function (Humanizer) {
    (function (Configuration) {
        var CollectionFormatterRegistry = (function (_super) {
            __extends(CollectionFormatterRegistry, _super);
            function CollectionFormatterRegistry() {
                _super.call(this, new Humanizer.Localisation.CollectionFormatters.DefaultCollectionFormatter());
                this.register("en", new Humanizer.Localisation.CollectionFormatters.EnglishCollectionFormatter());
                this.register("en-US", new Humanizer.Localisation.CollectionFormatters.EnglishCollectionFormatter());
            }
            return CollectionFormatterRegistry;
        })(Configuration.LocaliserRegistry);
        Configuration.CollectionFormatterRegistry = CollectionFormatterRegistry;
    })(Humanizer.Configuration || (Humanizer.Configuration = {}));
    var Configuration = Humanizer.Configuration;
})(Humanizer || (Humanizer = {}));
//# sourceMappingURL=collectionFormatterRegistry.js.map
