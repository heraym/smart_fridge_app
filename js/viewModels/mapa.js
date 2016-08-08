define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'promise'],
        function(oj, ko)
        {
            function mapaViewModel() {
                
	       var self = this;     
               self.latitudes = ko.observableArray([]);
               self.titulos = ko.observableArray([]);    
 	       self.mapa = ko.observable(false);
               
            }
            window.setInterval(crearMapa, 2000);
               function crearMapa() {
                    if (self.mapa == false) { self.mapa = true;
                                              self.initMap();
                                            }
		 }  
          
            self.initMap = function() {
             
 
   	   var map = new google.maps.Map(document.getElementById('map'), {
	    	center: self.latitudes[0],
    		scrollwheel: false,
    		zoom: 12
  		});
              
		var contentString = '<div id="content">'+
      		'<div id="siteNotice")}>'+
     		 '</div>'+
     		 '<h1 id="firstHeading" class="firstHeading">Av. Avellaneda 164 - Heladera Neo Frost Combi 320 L</h1>'+
     		 '<div id="bodyContent">'+
     		 '<p><b>Heladera Neo Frost Combi 320L</b> vendida en <b>Garbarino - Suc Flores </b> el dia 20 de marzo de 2016 e instalada el dia 22 de marzo de 2016 en <b>Av Avellaneda 164 3 C</b> a nombre de' +
    		  ' Hernan Aymard DNI 21873318. <br><hr/>'+
  		   'Problemas de Consumo de Energia excesiva</p>' +
                   '<a href="/?root=medicion">Detalle</a>' +                 
     		 '</div>'+
     		 '</div>';
		
		var infowindow = new google.maps.InfoWindow({
		    content: contentString,
		    maxWidth: 200
		  });

                var marker = [];
                  
	        for (i=0;i<self.latitudes.length;i++) {    
        	     if (i > 0) {
                       marker[i] = new google.maps.Marker({
	    	     	position: self.latitudes[i],
        	     	map: map,
             	     	title: self.titulos[i],
                     	icon: 'css/images/map1.png'
	            	});
                      }
		  if (i==0) {
		      marker[0] = new google.maps.Marker({
	    	       position: self.latitudes[0],
        	       map: map,
             	       title: self.titulos[0]
	             });
                     
                    marker[0].addListener('click', function() {
		       infowindow.open(map, marker[0]);
	  	     });
                   }

	         }           
         
       }
         self.latitudes = [{lat : -34.615794, lng : -58.421569},{lat: -34.609060, lng: -58.363088},{lat: -34.606850, lng: -58.375186},{lat: -34.618279, lng: -58.427106},{lat: -34.615091, lng:-58.458381},{lat:-34.632043 , lng:-58.418727} ];
         self.titulos = ['SR-404053 - Alerta','SR-393939 - Normal','SR-384879 - Normal','SR-393939 - Normal','SR-384879 - Normal','SR-393939 - Normal'];
         self.mapa = false;
                     
        
         return mapaViewModel;
 }
	        
);