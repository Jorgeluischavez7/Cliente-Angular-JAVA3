/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Primero creamos un modulo, el cual es la aplicación de angular JS.
var aplicacion=angular.module('aplicacionsita',[]);
//En los corchetes van las directivas.

//Definimos un controlador para comunicarnos con el index.html
aplicacion.controller('controladorPrincipal',function ($scope, $http){
    //Creamos un modelo simple.
    //scope.- alcance
    $scope.mensajito='Hola desde angular!!!';
    $scope.nombre='';
    $scope.algo='';
    $scope.gCentigrados='';
    $scope.convertir='';
    $scope.centi= function (){
      $scope.convertir= (gCentigrados*1.8)+32,'resultado';
    };
    
    $scope.apachurrame= function(){
        $scope.algo='haz apachurrado el boton';
    };
    
    
    $scope.guaradarProducto=function(){
      //Enviamos informacion a travez de rest.
      $http.post('http://localhost:9000/producto/pinguinos/10/25').success(function (datos){
              console.log(datos)
        
    });
   
   };
});


