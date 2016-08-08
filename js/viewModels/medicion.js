define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojgauge', 'ojs/ojchart'],
          function(oj, ko, $)
          {
            function medicionViewModel() {
               
              window.setInterval(checkIndicadores, 2000);
               function checkIndicadores() {
                    var diferencia1 = Math.floor((Math.random() * 10) + 1); 
                    var diferencia2 = Math.floor((Math.random() * 10) + 1); 
                    this.valorConsumo(this.valorConsumo() + diferencia1 - diferencia2);
                    this.sparkValues.push(this.valorConsumo());
		 }
 
              this.value1 = ko.observable(24);
              this.value2 = ko.observable(10);
              this.value3 = ko.observable(11);
              this.value4 = ko.observable(80);
              this.value5 = ko.observable(80);
              this.value6 = ko.observable(80);
              this.value7 = ko.observable(80);
              this.value8 = ko.observable(80);
              this.value9 = ko.observable(80);
              this.value10 = ko.observable(80);
              this.thresholdValues = [{max: 33}, {max: 67}, {}];
              var converterFactory = oj.Validation.converterFactory('number');
              var currencyConverter = converterFactory.createConverter({style: 'currency', currency: 'USD'});
              this.valueConverter = ko.observable(currencyConverter);
              this.gaugeOptionChange = function(e, data) {
                if (data.option == "value") {
                  $("#gauge").attr('title', "Value: " + Math.round(data['value']) + "<br>Reference Lines: Low 33, Medium 67, High 100");
                  $("#gauge").ojStatusMeterGauge('refresh');
                }
              }
            }
            
           
	        this.valorConsumo = ko.observable(63);
		this.updateTitle = function(e, data) {
			if(data.option == "value") {
				$("#gauge1").attr('title', "Value: " + Math.round(data['value'])+"<br>Max: 100");
				$("#gauge1").ojDialGauge('refresh');
			}
		}

	/* chart data */
        var colorHandler = new oj.ColorAttributeGroupHandler();
        this.barColor = colorHandler.getValue('barColor');
        this.rangeBarColor = colorHandler.getValue('rangeBarColor');
        this.lineColor = colorHandler.getValue('lineColor');
        this.lineWithAreaColor = colorHandler.getValue('lineWithAreaColor');
        this.areaColor = colorHandler.getValue('areaColor');
        this.rangeAreaColor = colorHandler.getValue('rangeAreaColor');
        var values = [0];
        
        this.sparkValues = ko.observableArray(values);
        
        //var rangeValues = [{low: 5, high: 9}];
        
        //  this.sparkRangeValues = ko.observableArray(rangeValues);

          return medicionViewModel;
   
          }
);
