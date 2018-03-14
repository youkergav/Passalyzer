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
      <input type="password" id="frmPassword" name="password">
      <input type="button" id="frmSubmit" value="Analyze">

      <p id="loading" style="display: none;">Loading...</p>

      <table id="results" style="display: none;">
        <thead>
          <tr>
            <th>Category</th>
            <th>Value</th>
          </tr>
        </thead>

        <tbody>
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
            <td>Entropy:</td>
            <td id="rsEntropy"></td>
          </tr>
          <tr>
            <td>Breached:</td>
            <td id="rsBreached"></td>
          </tr>
          <tr>
            <td>Crack Time:</td>
            <td id="rsTimeCrack"></td>
          </tr>
          <tr>
            <td>Score:</td>
            <td id="rsScore"></td>
          </tr>
        </tbody>
      </table>

      <br>

      <table id="matches" style="display: none;">
        <thead>
          <tr>
              <th>Token</th>
              <th>Pattern</th>
              <th>Entropy</th>
              <th>Matched Word</th>
          </tr>
        </thead>

        <tbody>
        </tbody>
      </table>

      <p id="error" style="display: none;">An error has occured. Please try again later.</p>

      <hr>
      <p>Powered by <a href="https://haveibeenpwned.com/" target="_new">HIBP</a> and <a href="https://github.com/dropbox/zxcvbn" target="_new">Zxcvbn</a></p>
    </div>

    <script type="text/javascript" src="/scripts/jquery.min.js"></script>
    <script type="text/javascript" src="/scripts/bootstrap.min.js"></script>
    <script type="text/javascript" src="/scripts/bootstrap.bundle.min.js"></script>
    <script type="text/javascript" src="/scripts/events.js"></script>
    <script type="text/javascript" src="/scripts/password.js"></script>
  </body>
</html>