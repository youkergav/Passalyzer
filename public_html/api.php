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

          <div class="row mb-2">
            <div class="col-lg-8">
              <label class="form-control-label" for="inScan">URL</label>
              <input id="inScan" class="form-control" type="text" value="https://passalyzer.com/functions/analyze/password/test" disabled>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-8">
              <label class="form-control-label" for="outScan">Response</label>
              <textarea id="outScan" class="form-control" type="text" name="message" rows="15" disabled>{ &#013;&#010; "lenPass": 4, &#013;&#010; "lenAlpha": 4, &#013;&#010; "lenNumeric": 0, &#013;&#010; "lenSpecial": 0, &#013;&#010; "breached": true, &#013;&#010; "entropy": 5.08746284125034, &#013;&#010; "timeCrack": 0.0017000000000000008, &#013;&#010; "timeCalc": 0.045007944107055664, &#013;&#010; "score": 0, &#013;&#010; "matches": "W3sidG9rZW4iOiJ0ZXN0IiwicGF0dGVybiI6ImRpY3Rpb25hcnkiLCJlbnRyb3B5IjpudWxsLCJtYXRjaGVkV29yZCI6InRlc3QifV0="&#013;&#010;}
              </textarea>
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
  </body>
</html>