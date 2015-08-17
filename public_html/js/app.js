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
    $scope.costo='';
    $scope.fecha='';
    $scope.unidades='';
    $scope.concepto='';
    $scope.cantidad='';
    $scope.idTarjeta='';
    $scope.algo='';
    $scope.gCentigrados='';
    $scope.convertir='';
    $scope.diacorte='';
     $scope.nombreTar='';
    
    $scope.centi= function (){
      $scope.convertir= (gCentigrados*1.8)+32,'resultado';
    };
    
    $scope.apachurrame= function(){//metodo tipo onClick
        $scope.algo='haz apachurrado el boton';
    };
    $scope.guardarProducto=function(){
        $http.post('http://localhost:9000/producto/'+$scope.nombre+'/'+$scope.costo+'/'+$scope.unidades).success(function (data){
            console.log(data);
        });
    }
     
    $scope.guardar=function(){
      //Enviamos informacion a travez de rest.
      $http.post('http://localhost:9000/tarjeta/'+$scope.nombreTar+'/'+$scope.diacorte).success(function (data){
              console.log(data);
        
    });
   
   };
    $scope.buscarTarjeta=function(){
                   $http.get('http://localhost:9000/tarjeta').success(function(data){
                       console.log(data);
                       $scope.tarjeta=data;
                   });
               };
    $scope.buscarIdTarjeta=function(){
                   $http.get('http://localhost:9000/tarjeta/'+$scope.idTarjeta).success(function(data){
                       console.log(data);
                       $scope.tarjeta=data;
                   });
               };
    $scope.actualizarTarjeta=function(){
                   $http.put('http://localhost:9000/tarjeta/'+$scope.idTarjeta+'/'+$scope.nombreTar+'/'+$scope.diacorte).success(function(data){
                       console.log(data);
                   });
               };
    $scope.borrarTarjeta=function(){
                   $http.delete('http://localhost:9000/tarjeta/'+$scope.idTarjeta).success(function(data){
                       console.log(data);
                   });
               };
    
    
    
    $scope.guardarGastos=function(){
                   $http.post('http://localhost:9000/gastos/'+$scope.fecha+'/'+$scope.concepto+'/'+$scope.cantidad+'/'+$scope.idTarjeta).success(function(data){
                       console.log(data);
                   });
               };
    $scope.buscarGastos=function(){
                   $http.get('http://localhost:9000/gastos').success(function(data){
                       console.log(data);
                       $scope.gastos=data;
                   });
               };
    $scope.buscarIdGastos=function(){
                   $http.get('http://localhost:9000/gastos/'+$scope.idGastos).success(function(data){
                       console.log(data);
                       $scope.gastos=data;
                   });
               };
    $scope.actualizarGastos=function(){
                   $http.put('http://localhost:9000/gastos/'+$scope.idGastos+'/'+$scope.fecha+'/'+$scope.concepto+'/'+$scope.cantidad+'/'+$scope.idTarjeta).success(function(data){
                       console.log(data);
                   });
               };
    $scope.borrarGastos=function(){
                   $http.delete('http://localhost:9000/gastos/'+$scope.idGastos).success(function(data){
                       console.log(data);
                   });
               };
});


