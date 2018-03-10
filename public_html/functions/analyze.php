<!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>Passalyzer</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <meta name="author" content="Gavin Youker">
    <meta name="description" content="Password analysis web tool and browser extension.">
    <meta name="copyright" content="2018">

    <link type="text/css" rel="stylesheet" href="/css/bootstrap.min.css">
    <link type="text/css" rel="stylesheet" href="/css/bootstrap-grid.min.css">
    <link type="text/css" rel="stylesheet" href="/css/bootstrap-reboot.min.css">
  </head>

  <body>
    <p>
      <?php
        // Files to include.
        require_once($_SERVER["DOCUMENT_ROOT"]."/functions/password.class.php");

        // Create a new password object.
        if(isset($_POST["password"])) {
          $password = new Password($_POST["password"]);
        }

        // Output to screen.
        if($password->breached) {
          echo("The password \"".$password->password."\" has been breached!");
        } else {
          echo("The password \"".$password->password."\" is currently safe from breaches.");
        }

        // Remove the password object.
        unset($password);
      ?>
    </p>

    <script type="text/javascript" src="/scripts/jquery.min.js"></script>
    <script type="text/javascript" src="/scripts/bootstrap.min.js"></script>
    <script type="text/javascript" src="/scripts/bootstrap.bundle.min.js"></script>
  </body>
</html>