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
    <link type="text/css" rel="stylesheet" href="/css/cryptocoins.min.css">
    <link type="text/css" rel="stylesheet" href="/css/styles.min.css">

    <style>
      .ui.button {
        min-width:300px !important;
        min-height:50px !important;
      }
    </style>
  </head>

  <body>
    <div class="container-fluid px-0" id="grpContainer">
      <?php include("includes/content/header.inc"); ?>

      <div class="container mt-4-5" id="grpContent">
          <div class="col-lg-9 text-center px-0 text-md-left">
            <h1 class="display-5">Thanks!</h1>

            <p class="lead text-muted">Thank you for your donation! We are working very hard at Passalyzer to maintain a current and accurate database that can help keep your passwords safe. Your donations are greatly appreciated and will be used to help fund this service.</p>
          </div>

        <div class="card-deck mt-4-5">
          <div class="card">
            <div class="card-body">
              <h1 class="card-title"><i class="fab fa-paypal"></i></h1>
              <p class="card-text">Say thanks and show your apreciation by donating with PayPal.</p>
              <div class="text-center">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick">
                  <input type="hidden" name="hosted_button_id" value="S3RCXXX36PLYG">
                  <input class="btn btn-primary" type="submit" value="Donate Now">
                </form>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h1 class="card-title"><i class="cc BTC-alt"></i></h1>
              <p class="card-text">Say thanks and show your apreciation by donating with Bitcoin.</p>
              <div class="text-center">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#donate-btc">Donate Now</button>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <h2 class="card-title"><i class="cc LTC-alt"></i></h2>
              <p class="card-text">Say thanks and show your apreciation by donating with Litecoin.</p>
              <div class="text-center">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#donate-ltc">Donate Now</button>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="donate-btc" tabindex="-1" role="dialog" aria-labelledby="donateBitcoin" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Donate with Bitcoin</h5>
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div class="modal-body text-center">
                <p class="mb-0">Please scan this QR Code or copy the text with your wallet application</p>
                <img class="p-3" src="https://chart.googleapis.com/chart?cht=qr&chs=225x225&chld=L|0&chl=3JbKD2iCGtwrGAfHjAFTh9gstYVvBNT4v2">
              
                <div class="input-group mb-2">
                  <input id="inBTC" class="form-control" type="text" value="3JbKD2iCGtwrGAfHjAFTh9gstYVvBNT4v2">
                  <div class="input-group-append">
                    <span id="btnCopyBTC" class="input-group-text"><i class="fas fa-copy"></i></span>
                  </div>
                </div>

                <small class="text-muted">Don't have a Bitcoin wallet? Get a wallet with <a href="https://www.coinbase.com" target="_new">Coinbase</a></small>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="donate-ltc" tabindex="-1" role="dialog" aria-labelledby="donateLitecoin" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Donate with Litecoin</h5>
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div class="modal-body text-center">
                <p class="mb-0">Please scan this QR Code or copy the text with your wallet application</p>
                <img class="p-3" src="https://chart.googleapis.com/chart?cht=qr&chs=225x225&chld=L|0&chl=MScRVB5wDrUGNkef3NTDoFUzugVe14tiwN">
              
                <div class="input-group mb-3">
                  <input id='inLTC' class="form-control" type="text" value="MScRVB5wDrUGNkef3NTDoFUzugVe14tiwN">
                  <div class="input-group-append">
                    <span id="btnCopyLTC" class="input-group-text"><i class="fas fa-copy"></i></span>
                  </div>
                </div>

                <small class="text-muted">Don't have a Litecoin wallet? Get a wallet with <a href="https://www.coinbase.com" target="_new">Coinbase</a></small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <?php include("includes/content/footer.inc"); ?>
    </div>

    <script type="text/javascript" src="/js/jquery.min.js"></script>
    <script type="text/javascript" src="/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/functions.js"></script>
    <script type="text/javascript">
      $("#btnCopyBTC").click(function() {
        copyText($("#inBTC"));
      });

      $("#btnCopyLTC").click(function() {
        copyText($("#inLTC"));
      });
    </script>
  </body>
</html>