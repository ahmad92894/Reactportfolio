import React from 'react';

const Navbar = () => {
    return (
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Ahmad Bustami</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">About Me</a>
        <a class="nav-link" href="#">Projects</a>
        <a class="nav-link" href="#">Contact me</a>
        <a class="nav-link" href="#">Resume</a>
      </div>
    </div>
  </div>
</nav>
    );
};
export default Navbar;