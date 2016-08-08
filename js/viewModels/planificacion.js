define(['ojs/ojcore', 'knockout', 'ojs/ojtimeline'],  
  function(oj, ko)
  {
    function PlanificacionViewModel() 
    {	
     var self = this;	  
      self.series = ko.observableArray([]);
      self.series = [{"id":"e1","title":"Cumple del Abuelo","start": "Jul 13, 2016","description":"Jul 13, 2016"},  {"id":"e2","title":"Hacer compra general","start": "Jul 27, 2016","description":"Jul 27, 2016"}];     
     
    };    
   return PlanificacionViewModel;
  }
);