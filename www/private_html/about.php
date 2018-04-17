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
    <div class="container" id="grpContainer">
      <?php include("includes/content/header.inc"); ?>

      <div class="content mt-4-5" id="grpContent">
        <div class="col-lg-9 text-center px-0 text-md-left">
          <h1 id="test" class="display-5">About Us</h1>

          <p class="lead text-muted">Learn more about the software, and the developer too.</p>
        </div>

        <div id="grpType" class="px-1">
          <div class="mt-4-5">
            <h2 class="sub mb-0">About the Program</h2>
            <p class="lead">Learn more about Passalyzer</p>

            <div class="type">
              <p>Passalyzer was developed during the start of 2018. It's purpose is provide a simple and clear way of displaying password strength. This program uses a combination of password entropy, database breaches, and dictonary attacks to provide an accurate reading on password security.</p>

              <p>Any password that has been compromised in a database breach, or can be cracked extremely easily will result in a dangerous password, labeled with red. A weak password consists of passwords that can be cracked with some time and effort, and labeled with yellow. If your password is labeled green, good news! Your password is not easy to crack and is not found in any breaches. Thus, it is safe to use the password. For more information, click the "more info" text to see things like password problems, solutions, password statistics and keyword matches.</p>

              <p>Passalyzer is an free to use, open source program and can be found on <a href="https://github.com/youkergav/Passalyzer" target="_new">GitHub</a>. We promise to never store your passwords while using this service. Fo useing Passalyzer in your own projects, try out our <a href="/api">API</a>. If you have any concerns or feedback, please <a href="/contact">contact us</a>. If we really helped increased your password strength and security, consider <a href="/donate">donating</a>.</p>
            </div>
          </div>

          <div class="mt-4-5">
            <h2 class="sub mb-0">About the Developer</h2>
            <p class="lead">Get to know Gavin</p>
            
            <div class="type">
              <img class="float-right rounded-circle" src="/images/avatar.jpg" width="150" alt="Profile Picture">
              <p>My name is Gavin Youker. I am 21 years old (buy me a beer), and obtaining a degree in Computer Information Systems at Buffalo State College. I am pursuing a career in cyber security. After discovering a friend had become a victim of a databreach, I tried my best to alert friends and family about the seriousness of password security. Because of my heavy intrest in cyber security, and wanting to create an online community of better passwords, I have decided to create this program.</p>

              <p>I have authored many projects, and you can find them on <a href="https://github.com/youkergav" target="_new">GitHub</a>. If you would like to chat, hit me up on <a href="https://twitter.com/youkergav" target="_new">Twitter</a>. For professional conversation, please contact me on <a href="https://www.linkedin.com/in/youkergav" target="_new">LinkedIn</a>.</p>
            </div>
          </div>
        </div>
      </div>

      <?php include("includes/content/footer.inc"); ?>
    </div>

    <script type="text/javascript" src="/js/jquery.min.js"></script>
    <script type="text/javascript" src="/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/functions.js"></script>
  </body>
</html>