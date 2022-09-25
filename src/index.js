
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './main.css';
import '/index.html';

window.onload = function(){
    document.getElementById('close').onclick = function(){
        this.parentNode.parentNode.remove();
        return false;
    };
};