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
      <label for="inPassword">Password: </label>
      <input type="password" id="inPassword" name="password">
      <input type="button" id="btnPassword" value="Analyze">

      <div id="grpPassword">
        <p id="outLoading" style="display: none;">Loading...</p>

        <div id="grpResult">
          <table id="stats" style="display: none;">
            <thead>
              <tr>
                <th>Category</th>
                <th>Value</th>
              </tr>
            </thead>

            <tbody>
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
        </div>

        <p id="outError" style="display: none;">An error has occured. Please try again later.</p>
      </div>

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