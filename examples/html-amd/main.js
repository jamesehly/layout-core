define( function (require) {
    var _layout = require('dist/layout-core.min');

    var layout = new _layout.Api();
    layout.add("main-layout");
    layout.add("body-layout", "HorizontalLayout");
    layout.add("sidebar-layout");
    layout.start();

    window.po = {
        toggleDetails: function () {
            po.detailsIsOpen = !po.detailsIsOpen;
            if (po.detailsIsOpen) {
                po.openDetails();
            } else {
                po.closeDetails();
            }
        },
        openDetails: function () {
            layout.set("detail-content", "width", "600px");
            layout.animate(100);
        },
        closeDetails: function () {
            layout.close("detail-content", 100);
        }
    }

    // FOUC: set the visibility of the body to visbile
    document.body.style.visibility = 'visible';
});
