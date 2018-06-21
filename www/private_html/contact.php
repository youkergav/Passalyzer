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
    <link type="text/css" rel="stylesheet" href="/css/fontawesome.min.css">
    <link type="text/css" rel="stylesheet" href="/css/styles.min.css">
  </head>

  <body>
    <div class="container-fluid px-0" id="grpContainer">
      <?php include("includes/content/header.inc"); ?>

      <div class="container mt-4-5" id="grpContent">
        <div class="col-lg-9 text-center px-0 text-md-left">
          <h1 id="test" class="display-5">Get in Touch</h1>

          <p class="lead text-muted">Want to express your thoughts? Please fill out this form to contact us. We will respond back as soon as we can.</p>
        </div>

        <div class="form-group">
          <form id="frmContact" method="post" action="/functions/mail" novalidate>
            <div class="row justify-content-center">
              <div class="col-lg-4">
                <label class="form-control-label" for="inName">Name</label> <span class="required">*</span>
                <input id="inName" class="form-control" type="text" name="name" required>

                <div class="invalid-feedback">Please enter your name.</div>
              </div>

              <div class="col-lg-4">
                <label class="form-control-label" for="inEmail">Email</label> <span class="required">*</span>
                <input id="inName" class="form-control" type="email" name="email" required>

                <div class="invalid-feedback">Please enter a valid email address.</div>
              </div>
            </div>

            <div class="row justify-content-center mt-3">
              <div class="col-lg-8">
                <label class="form-control-label" for="inSubject">Subject</label> <span class="required">*</span>
                <input id="inSubject" class="form-control" type="text" name="subject" required>

                <div class="invalid-feedback">Please enter a subject.</div>
              </div>
            </div>

            <div class="row justify-content-center mt-3">
              <div class="col-lg-8">
                <label class="form-control-label" for="inMessage">Message</label> <span class="required">*</span>
                <textarea id="inMessage" class="form-control" type="text" name="message" rows="7" required></textarea>

                <div class="invalid-feedback">Please enter a message.</div>
              </div>
            </div>

            <div class="row justify-content-center mt-3">
              <div class="col-xs-12 col-sm-8 col-lg-4">
                <div id="frmCaptcha" class="g-recaptcha float-right float-sm-none" type="captcha" data-callback="validateCaptcha" data-sitekey="6LdIZlEUAAAAALab5meYVBPbLB7MVxrR8HS73NpD" required></div>
                <div class="invalid-feedback float-right float-sm-left text-right text-sm-left pb-2">Please complete the challenge.</div>
              </div>

              <div class="col-xs-12 col-sm-4 col-lg-4 mt-1 text-right">
                <input id="frmSubmit" class="btn btn-primary" type="submit">
              </div>
            </div>
          </form>
        </div>
      </div>

      <?php include("includes/content/footer.inc"); ?>
    </div>

    <div id="grpModal">
      <div class="modal fade" id="frmResponse" tabindex="-1" role="dialog" aria-labelledby="donateBitcoin" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"></h5>
              <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="modal-body text-center">
              <p class="mb-0"></p>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <?php include("includes/globals/scripts.php"); ?>
    <script src='https://www.google.com/recaptcha/api.js'></script>
    <script type="text/javascript" src="/js/jquery.min.js"></script>
    <script type="text/javascript" src="/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/functions.js"></script>
    <script>
      $("#frmContact").submit(function(event) {
        if(!validateForm("#frmContact")) {
          event.preventDefault();
        }
      });

      function validateCaptcha() {
        $("#frmCaptcha").children()
          .css("border", "none")
          .css("border-radius", "none");

        $("#frmCaptcha").next().hide();
      }

      if(getParameter("response") == "success") {
        removeParameter("response");
        
        $("#frmResponse .modal-title").html("Submission Recieved!");
        $("#frmResponse .modal-body p").html("Thanks for reaching out! You'll be hearing from us shortly.");
        $("#frmResponse").modal("toggle");
      } else if(getParameter("response") == "failure") {
        removeParameter("response");
        
        $("#frmResponse .modal-title").html("Submission Failure");
        $("#frmResponse .modal-body p").html("We're sorry, an error has occured. Please try again later.");
        $("#frmResponse").modal("toggle");
      }
    </script>
  </body>
</html>