import React from 'react';

function Menu(){
    return(
        <ul class="nav">
         <li class="nav-item">
            <a class="nav-link" href="/Login">Login</a>
        </li>
        <li class="nav-item">
            <a class="nav-link active" href="/Home">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/Books">Books</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/Electronics">Electronics</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/Story">Story</a>
        </li>
        <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
        </li>

        </ul>
    );
}

export default Menu;