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
    <link type="text/css" rel="stylesheet" href="css/fontawesome.min.css">
    <link type="text/css" rel="stylesheet" href="/css/global.css">
    <link type="text/css" rel="stylesheet" href="/css/main.css">
  </head>

  <body>
    <div class="container" id="grpContainer">
      <?php include("includes/content/header.inc"); ?>

      <div class="content mt-4-5" id="grpContent">
        <div class="col-lg-9 text-center px-0 text-md-left">
          <h1 id="test" class="display-5">Start Building</h1>

          <p class="lead text-muted"><b>In Development!</b> Please bare with us will usage might be limited.</p>
        </div>

        <div class="mt-4-5" id="grpAPI">
          <h5 class="mb-3">Scan a Password</h5>

          <div class="row">
            <div class="col-lg-8">
              <label class="form-control-label" for="inScan">URL</label>
              <pre class="coding">https://passalyzer.com/api/password/testing123</pre>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-8">
              <label class="form-control-label" for="outScan">Response</label>
              <pre class="coding">
                { 
                  "lenPass": 10, 
                  "lenAlpha": 7, 
                  "lenNumeric": 3, 
                  "lenSpecial": 0, 
                  "breached": true, 
                  "entropy": 10.672425341971497, 
                  "timeCrack": 0.08160000000000009, 
                  "timeCalc": 0.039192914962768555, 
                  "score": 0, 
                  "matches": [ 
                    { 
                      "token": "testing", 
                      "pattern": "dictionary", 
                      "entropy": null, 
                      "matchedWord": "testing" 
                    }, 
                    { 
                      "token": "123", 
                      "pattern": "sequence", 
                      "entropy": null, 
                      "matchedWord": null 
                    } 
                  ] 
                } 
              </pre>
            </div>
          </div>
        </div>
      </div>

      <?php include("includes/content/footer.inc"); ?>
    </div>

    <script type="text/javascript" src="/scripts/jquery.min.js"></script>
    <script type="text/javascript" src="/scripts/popper.min.js"></script>
    <script type="text/javascript" src="/scripts/bootstrap.min.js"></script>
    <script type="text/javascript" src="/scripts/bootstrap.bundle.min.js"></script>
    <script type="text/javascript" src="/scripts/functions.js"></script>
    <script type="text/javascript">
      formatCode();
    </script>
  </body>
</html>