<!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>Passalyzer</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <meta name="author" content="Gavin Youker">
    <meta name="description" content="Password analysis web tool and browser extension.">
    <meta name="copyright" content="2018">

    <link type="text/css" rel="stylesheet" href="/css/bootstrap.min.css"">
    <link type="text/css" rel="stylesheet" href="/css/bootstrap-grid.min.css"">
    <link type="text/css" rel="stylesheet" href="/css/bootstrap-reboot.min.css"">
    <link type="text/css" rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link type="text/css" rel="stylesheet" href="/css/main.css">
  </head>

  <body>
    <div class="container" id="grpContainer">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="/index.php">Passalyer</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a class="nav-link" href="/api.php">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="/api.php">API</a></li>
            <li class="nav-item"><a class="nav-link" href="/about.php">About</a></li>
            <li class="nav-item"><a class="nav-link" href="/contact.php">Contact</a></li>
            <li class="nav-item"><a class="nav-link" href="/donate.php">Donate</a></li>
          </ul>
        </div>
      </nav>

      <div class="jumbotron text-center text-md-left">
        <h1 class="display-4">Passalyzer</h1>
        <p class="lead">Trust in your passwords. Analyze your passwords to ensure the strength and authenticity. Get real-time reports of crack times and compromises. </p>
      </div>

      <div class="input-group input-group-lg mb-3">
        <input type="password" class="form-control" id="inPassword" name="password" placeholder="Enter a password..." aria-label="Analyze" aria-describedby="inputGroup-sizing-lg">
      
        <div class="input-group-append d-none d-sm-inline-block">
          <button id="btnAnalyze" class="btn btn-primary" data-loading-text="<i class='fa fa-spinner fa-spin fa-fw' aria-hidden='true'></i>Analyzing">
            Analyze
          </button>
        </div>
      </div>

      <div id="grpPassword">
        <div class="alert alert-success d-none" id="outSuccess" role="alert">
          <button type="button" class="close d-none d-md-block" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>

          <h4 class="alert-heading">Good news!</h4>
          <span>Your password has been checked and deemed safe to use. <!-- <a href="#" class="alert-link d-inline-block">More info...</a> --></span>
        </div>

        <div class="alert alert-warning d-none" id="outWarning" role="alert">
          <button type="button" class="close d-none d-md-block" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>

          <h4 class="alert-heading">Weak Password!</h4>
          <span>Your password is easy to crack. We highly recommend changing your password. <!-- <a href="#" class="alert-link d-inline-block">More info...</a> --></span>
        </div>


        <div class="alert alert-danger d-none" id="outDanger" role="alert">
          <button type="button" class="close d-none d-md-block" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>

          <h4 class="alert-heading">Oh no!</h4>
         <span>Your password has been compromised. Please change your password immediately. <!-- <a href="#" class="alert-link d-inline-block">More info...</a> --></span>
        </div>

        <div class="alert alert-info d-none" id="outError" role="alert">
          <button type="button" class="close d-none d-md-block" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>

          <span>An error has occured. Please try again.</span>
        </div>

        <!-- <div id="grpResult">
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

          <table id="matches" style="display: none; margin-top: 10px;">
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
        </div> -->
      </div>

      <hr>
      <p class="text-center">Powered by <a href="https://haveibeenpwned.com/" target="_new">HIBP</a> and <a href="https://github.com/dropbox/zxcvbn" target="_new">Zxcvbn</a></p>
    </div>

    <script type="text/javascript" src="/scripts/jquery.min.js"></script>
    <script type="text/javascript" src="/scripts/popper.min.js"></script>
    <script type="text/javascript" src="/scripts/bootstrap.min.js"></script>
    <script type="text/javascript" src="/scripts/bootstrap.bundle.min.js"></script>
    <script type="text/javascript" src="/scripts/interface.js"></script>
    <script type="text/javascript" src="/scripts/events.js"></script>
    <script type="text/javascript" src="/scripts/password.js"></script>
  </body>
</html>