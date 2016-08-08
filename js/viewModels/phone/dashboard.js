/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
define(['knockout', 'ojs/ojcore', 'data/data', 'ojs/ojknockout', 'ojs/ojmasonrylayout', 'ojs/ojchart', 'ojs/ojgauge'],
        function (ko, oj, data)
        {
            /* 
             * Your application specific code will go here
             */
            
         
            function DashboardViewModel() {
                var self = this;
                
                self.indicadores = ko.observableArray([]);
                self.indicadores().alertas = 20;
                self.puertaAbierta = ko.observable();

               window.setInterval(checkIndicadores, 5000);
                

                self.personProfile = ko.observableArray([]);
                self.ready = ko.observable(false);
                self.stackValue = ko.observable('off');
                self.orientationValue = ko.observable('horizontal');
                self.barSeriesValue = ko.observableArray();
                self.barGroupsValue = ko.observableArray();
                self.averagePerformance = ko.observable();
                self.averagePotential = ko.observable();
                var barGroups = ["2000", "2001", "2002", "2003", "2004"];
                self.barSeriesValue(
                        [{name: "Finance", items: [80, 60, 50, 30, 20]}]
                        );
                self.barGroupsValue(barGroups);
 
                self.router = oj.Router.rootInstance;
                var converterFactory = oj.Validation.converterFactory('number');
                self.percentConverter = converterFactory.createConverter({style: 'decimal', maximumFractionDigits: 0});
                

                self.formatAverages = function () {
                    self.averagePerformance(self.personProfile().groupAvgRating.toPrecision(2));
                    self.averagePotential(self.personProfile().groupAvgPotential.toPrecision(2));
                };

                self.dashboardItems = ko.observableArray([
                    {"name": "Item1", "title": "Mi Familia", "target": "me", "sizeClass": "oj-masonrylayout-tile-2x1"},
                    {"name": "Item2", "title": "Mis Actividades", "target": "me", "sizeClass": "oj-masonrylayout-tile-1x1"},
                    {"name": "Item3", "title": "Heladera", "target": "me", "sizeClass": "oj-masonrylayout-tile-1x1"},
                    {"name": "Item4", "title": "Notas", "target": "me", "sizeClass": "oj-masonrylayout-tile-1x2"},
                    {"name": "Item5", "title": "Receta del dia", "target": "me", "sizeClass": "oj-masonrylayout-tile-1x1"},
                    {"name": "Item6", "title": "Modo", "target": "me", "sizeClass": "oj-masonrylayout-tile-1x1"},
                ]);

                self.compratio = ko.observableArray([
                    {"faderatio": "1", "name": "ACME", "value": "$150k", "rate": "100"},
                    {"faderatio": "0.8", "name": "Demo S.A.", "value": "$125k", "rate": "70"},
                    {"faderatio": "0.8", "name": "Service S.A.", "value": "$90k", "rate": "50"},
                    {"faderatio": "0.6", "name": "Demo 2", "value": "$60k", "rate": "40"},
                    {"faderatio": "0.6", "name": "Demo 3", "value": "$50k", "rate": "30"}
                ]);


                 //valores de rating
                 self.ratingValue1 = ko.observable(3);
                    self.ratingValue2 = ko.observable(3);
                    self.ratingValue3 = ko.observable(4);
                    self.ratingValue4 = ko.observable(3);
                    self.ratingValue5 = ko.observable(3);

                    self.thresholdValues = [{max: 1, shortDesc: 'Poor', color: '#ed6647'},
                        {max: 2, shortDesc: 'Needs Improvement', color: '#ed6647'},
                        {max: 3, shortDesc: 'Satisfactory', color: '#fad55c'},
                        {max: 4, shortDesc: 'Exceeds Expectations', color: '#68c182'},
                        {max: 5, shortDesc: 'Outstanding', color: '#68c182'}];
                    self.optionChangeAction = function (e, data) {
                        if (data.option == "value") {
                            var avg = (self.ratingValue1() + self.ratingValue2() + self.ratingValue3() + self.ratingValue4()) / 4;
                            self.ratingValue5(avg);
                        }
                    }
 
            }
		self.modoRadios = [
      			  {id: 'normal', label: 'Normal'},
       			  {id: 'compras',    label: 'Compras'},
       			  {id: 'vacaciones',   label: 'Vacaciones'},
   			 ];


             function createRequest() {
		  var result = null;
		  if (window.XMLHttpRequest) {
		    // FireFox, Safari, etc.
		    result = new XMLHttpRequest();
		    if (typeof result.overrideMimeType != 'undefined') {
		      result.overrideMimeType('text/xml'); // Or anything else
		    }
		  }
		  else if (window.ActiveXObject) {
		    // MSIE
		    result = new ActiveXObject("Microsoft.XMLHTTP");
		  } 
		  else {
		    // No known mechanism -- consider aborting the application
		  }
		  return result;
		}
               
		var req = createRequest(); // defined above
		
               
                 // Create the callback:
		req.onreadystatechange = function() {
 		 if (req.readyState != 4) return; // Not there yet
 		 if (req.status != 200) {
 		   // Handle request failure here...
 		   return;
	         }
		  // Request successful, read the response
		 //var resp = req.responseText.replace(/\\"/g, '"');
                 // resp = resp.replace(/"{/g, "{");
                 // resp = resp.replace(/}"/g, "}");
                  
                 // var valores = JSON.parse(resp);
		// alert(req.responseText);
                 if (req.responseText.includes("true")) {
                      self.puertaAbierta = "La puerta esta abierta";
                      self.imagen = "abierta"; }
                 else { self.puertaAbierta = "La puerta esta cerrada";
                        self.imagen = "cerrada";}
 		 document.getElementById('puertatexto').innerHTML = self.puertaAbierta;
                 document.getElementById('puerta').src = "css/images/heladeras/" + self.imagen + ".png";
                }  

                
                function checkIndicadores() {
                  
                 req.open("GET", "http://localhost:3000/smart_fridge", true);
                 req.overrideMimeType("application/json");
		 req.send();
                 }
	   return DashboardViewModel;

        });
