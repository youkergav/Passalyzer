<?php
  $filename = strtolower(ucfirst(pathinfo($_SERVER['PHP_SELF'], PATHINFO_FILENAME)));
?> <header><nav class="navbar navbar-expand-lg navbar-dark bg-primary"><div class="container"><a class="navbar-brand" href="/index">Passalyer</a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav ml-auto"> <?php
            include("navLinks.inc");

            for($i = 0; $i < count($navLinks); $i++) {
              if($filename == $navLinks[$i]["url"]) {
                echo("<li class='nav-item active'><a class='nav-link' href='/".$navLinks[$i]["url"]."'>".$navLinks[$i]["title"]."</a></li>");
              } else {
                echo("<li class='nav-item'><a class='nav-link' href='/".$navLinks[$i]["url"]."'>".$navLinks[$i]["title"]."</a></li>");
              }
            }
          ?> </ul></div></div></nav></header>