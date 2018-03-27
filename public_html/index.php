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
    <link type="text/css" rel="stylesheet" href="/css/global.css">
    <link type="text/css" rel="stylesheet" href="/css/main.css">
  </head>

  <body>
    <div class="container" id="grpContainer">
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="/index.php">Passalyer</a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active"><a class="nav-link" href="/index.php">Home</a></li>
              <li class="nav-item"><a class="nav-link" href="/api.php">API</a></li>
              <li class="nav-item"><a class="nav-link" href="/about.php">About</a></li>
              <li class="nav-item"><a class="nav-link" href="/contact.php">Contact</a></li>
              <li class="nav-item"><a class="nav-link" href="/donate.php">Donate</a></li>
            </ul>
          </div>
        </nav>

        <div class="jumbotron bg-secondary text-center text-md-left" style="border-top-left-radius: 0; border-top-right-radius: 0;">
          <h1 class="display-4">Passalyzer</h1>
          <p class="lead">Trust in your passwords. Analyze your passwords to ensure the strength and authenticity. Get real-time reports of crack times and compromises. We never store your passwords.</p>
        </div>
      </header>

      <div class="content" id="grpContent">
        <div class="input-group input-group-lg mb-3">
          <input type="password" class="form-control" id="inPassword" name="password" placeholder="Enter a password..." aria-label="Analyze" aria-describedby="inputGroup-sizing-lg">
        
          <div class="input-group-append">
            <span class="input-group-text bg-secondary d-none d-sm-inline-block c-pointer" id="btnVisibility"><i class="fa fa-eye-slash" id="icnVisibility"></i></span>
            <button id="btnAnalyze" class="btn btn-primary" data-loading-text="<i class='fa fa-spinner fa-spin fa-fw' aria-hidden='true'></i>Analyzing">
              Analyze
            </button>
          </div>
        </div>

        <div id="grpPassword">
          <div class="alert d-none" id="outResult" role="alert">
            <button type="button" class="close d-none d-md-block" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>

            <h4 class="alert-heading"></h4>
            <div id="grpMessage">
              <span class="alert-message"></span>
              <a class="alert-link c-pointer" id="btnMore"> More info...</a>
              <a class="alert-link d-none c-pointer" id="btnLess"> Less info...</a>
            </div>

            <div class="d-none" id="grpResult">
              <hr>
              <div class="row">
                <div class="col-4">
                  <div class="list-group" id="list-tab-result" role="tablist"></div>
                </div>

                <div class="col-8">
                  <div class="tab-content" id="nav-tabContent-result"></div>
                </div>
              </div>

              <!-- <table id="stats">
                <thead>
                  <tr>  
                    <th>Category</th>
                    <th>Value</th>
                  </tr>
                </thead>

                <tbody>
                </tbody>
              </table>

              <table id="matches">
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
              </table> -->
            </div>
          </div>

          <div class="alert alert-info d-none" id="outError" role="alert">
            <button type="button" class="close d-none d-md-block" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>

            <span>An error has occured. Please try again.</span>
          </div>
        </div>
      </div>

      <footer>
        <div class="container mt-4-5 bg-primary rounded">
          <div class="row pt-2 d-flex align-items-center">
            <div class="col-md-6 col-lg-5 text-center text-md-left">
              <h6 class="mb-0 text-white">A Gavin Youker Project</h6>
            </div>

            <div class="col-md-6 col-lg-7 text-center text-md-right">
              <a href="https://www.facebook.com/youkergav" target="_new"><i class="fa fa-facebook text-white mr-lg-4"> </i></a>
              <a href="https://twitter.com/youkergav" target="_new"><i class="fa fa-twitter text-white mr-lg-4"> </i></a>
              <a href="https://www.instagram.com/youkergav" target="_new"><i class="fa fa-instagram text-white mr-lg-4"> </i></a>
              <a href="https://github.com/youkergav" target="_new"><i class="fa fa-github text-white mr-lg-4"> </i></a>
              <a href="https://www.linkedin.com/in/youkergav" target="_new"><i class="fa fa-linkedin text-white"> </i></a>
            </div>
          </div>

          <div class="row pb-2 d-flex align-items-center">
            <div class="col-12 text-center">
              <span class="text-white">&copy; 2018 Passalyzer.com</span>
            </div>
          </div>
        </div>
      </footer>
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