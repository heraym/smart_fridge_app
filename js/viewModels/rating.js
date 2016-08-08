define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout','ojs/ojgauge', 'ojs/ojchart'], function(oj, ko, $) {
    function RatingViewModel() {
        var self = this;
        self.thresholdValues = [{max: 300000}, {max: 700000}, {}];  

        var colorHandler = new oj.ColorAttributeGroupHandler();

        self.color = ko.observable(colorHandler.getValue('color'));
        self.firstColor = ko.observable(colorHandler.getValue('firstcolor'));
        self.highColor = ko.observable(colorHandler.getValue('highcolor'));
        self.lastColor = ko.observable(colorHandler.getValue('lastcolor'));
        self.lowColor = ko.observable(colorHandler.getValue('lowcolor'));            

     }


        /* chart data */
        var values = [5, 8, 2, 7, 0, 9, 2, 3, 4, 2];
        self.sparkValues = ko.observableArray(values);
        self.sparkValues = values;

        var rangeValues = [{low: 5, high: 9},
                           {low: 3, high: 7},
                           {low: 3, high: 8},
                           {low: 5, high: 10},
                           {low: 7, high: 14},
                           {low: 8, high: 13},
                           {low: 6, high: 11},
                           {low: 4, high: 9},
                           {low: 1, high: 5},
                           {low: 2, high: 8}];

	self.sparkRangeValues = ko.observableArray(rangeValues);
        self.sparkRangeValues = rangeValues;

	self.modoRadios = [
        {id: 'normal', label: 'Normal'},
        {id: 'compras',    label: 'Compras'},
        {id: 'vacaciones',   label: 'Vacaciones'},
    ];

     

       return RatingViewModel;
});