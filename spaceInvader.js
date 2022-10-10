"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawLine();

function drawLine(){

    context.beginPath();
    context.lineWidth=2;
    context.rect(20,20,300,300);
    context.fillStyle = "black";
    context.fill();

    context.lineWidth = 3;
    context.fillStyle = "limeGreen";
    context.beginPath();
    context.rect(45, 35, 50, 100);
    context.fill();
    

    context.lineWidth = 3;
    context.fillStyle = "limeGreen";
    context.beginPath();
    context.rect(95, 85, 50, 100);
    context.fill();
   

    context.lineWidth = 3;
    context.fillStyle = "limeGreen";
    context.beginPath();
    context.rect(145, 135, 100, 50 );
    context.fill();

    context.lineWidth = 3;
    context.fillStyle = "limeGreen";
    context.beginPath();
    context.rect(195, 85, 50, 50);
    context.fill();

    context.lineWidth = 3;
    context.fillStyle = "limeGreen";
    context.beginPath();
    context.rect(245, 85, 50, 50);
    context.fill();

    context.lineWidth = 3;
    context.fillStyle = "limeGreen";
    context.beginPath();
    context.rect(245, 35, 50, 50);
    context.fill();

    context.lineWidth = 3;
    context.fillStyle = "limeGreen";
    context.beginPath();
    context.rect(45, 235, 250, 50);
    context.fill();


    
    
   


}

    

