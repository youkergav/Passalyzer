<!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>Passalyzer</title>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <meta name="author" content="Gavin Youker">
    <meta name="description" content="Password analysis web tool and browser extension.">
    <meta name="copyright" content="2018">

    <link type="text/css" rel="stylesheet" href="/css/styles.min.css">
  </head>

  <body>
    <div class="container-fluid px-0" id="grpContainer">
      <?php include("includes/content/header.inc"); ?>

        <div class="jumbotron text-center text-md-left">
          <div class="container">
            <h1 class="display-4">Passalyzer</h1>
            <p class="lead">Trust in your passwords. Analyze your passwords to ensure the strength and authenticity. Get real-time reports of crack times and compromises. We never store your passwords.</p>
          </div>
        </div>

      <div class="container" id="grpContent">
        <div class="input-group input-group-lg mb-3">
          <input id="inPassword" class="form-control" type="password" name="password" placeholder="Enter a password..." aria-label="Analyze" aria-describedby="inputGroup-sizing-lg">
        
          <div class="input-group-append">
            <span class="input-group-text d-none d-sm-inline-block c-pointer" id="btnVisibility"><i class="fa fa-eye-slash" id="icnVisibility"></i></span>
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
                <div class="col-sm-12 col-md-4">
                  <div class="list-group" id="list-tab-result" role="tablist"></div>
                </div>

                <div class="col-sm-12 col-md-8">
                  <hr class="d-block d-md-none">
                  <div class="tab-content" id="nav-tabContent-result"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="alert alert-info d-none" id="outError" role="alert">
            <button type="button" class="close d-none d-md-block" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>

            <span>An error has occurred. Please try again.</span>
          </div>
        </div>
      </div>

      <?php include("includes/content/footer.inc"); ?>
    </div>

    <script type="text/javascript" src="/js/jquery.min.js"></script>
    <script type="text/javascript" src="/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/functions.js"></script>
    <script type="text/javascript" src="/js/password.js"></script>
    <script type="text/javascript">
      $("#btnVisibility").click(function() {
        if($("#inPassword").prop("type") == "password") {
          $("#inPassword").prop("type", "text");
          $("#icnVisibility").removeClass("fa-eye-slash");
          $("#icnVisibility").addClass("fa-eye");
        } else if($("#inPassword").prop("type") == "text") {
          $("#inPassword").prop("type", "password");
          $("#icnVisibility").removeClass("fa-eye");
          $("#icnVisibility").addClass("fa-eye-slash");
        }
      });

      $("#btnAnalyze").click(function() {
        var input = $("#inPassword").val();

        if(input) {
          // Parse out the password data.
          showLoading();
          parsePassword(input);
        }
      });

      $("#inPassword").keypress(function(e) {
        if (e.which == 13) {
            var input = $("#inPassword").val();

            if(input) {
              // Parse out the password data.
              showLoading();
              parsePassword(input);
            }
          }
      });

      $("#btnMore").click(function() {
        $("#grpResult").reveal();
        $("#btnMore").addClass("d-none");
        $("#btnMore").removeClass("d-inline");
        $("#btnLess").addClass("d-inline");
        $("#btnLess").removeClass("d-none");
      });

      $("#btnLess").click(function() {
        $("#grpResult").slideUp();
        $("#btnLess").addClass("d-none");
        $("#btnLess").removeClass("d-inline");
        $("#btnMore").addClass("d-inline");
        $("#btnMore").removeClass("d-none");
      });

      $("button.close").click(function() {
        reset();
      });
    </script>
  </body>
</html>