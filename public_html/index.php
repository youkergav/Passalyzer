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
    <div id="container">
      <label for="inputPassword">Password: </label>
      <input type="text" id="frmPassword" name="password">

      <input type="button" id="frmSubmit" value="Analyze">

      <hr>
      <table id="results">
        <tr>
          <td>Password:</td>
          <td id="rsPassword"></td>
        </tr>
        <tr>
          <td>Number of Characters:</td>
          <td id="rsLenPass"></td>
        </tr>
        <tr>
          <td>Alphabetic Characters:</td>
          <td id="rsLenAlpha"></td>
        </tr>
        <tr>
          <td>Number Characters:</td>
          <td id="rsLenNumeric"></td>
        </tr>
        <tr>
          <td>Special Characters:</td>
          <td id="rsLenSpecial"></td>
        </tr>
        <tr>
          <td>Breached:</td>
          <td id="rsBreached"></td>
        </tr>
      </table>
    </div>

    <script type="text/javascript" src="/scripts/jquery.min.js"></script>
    <script type="text/javascript" src="/scripts/bootstrap.min.js"></script>
    <script type="text/javascript" src="/scripts/bootstrap.bundle.min.js"></script>
    <script type="text/javascript" src="/scripts/events.js"></script>
    <script type="text/javascript" src="/scripts/password.js"></script>
  </body>
</html>