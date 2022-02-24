<?php include 'includes/var-main.php'; ?>
<?php include 'includes/var-prod-selector.php'; ?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="Smart for Life">

    <?php include 'includes/gtm-head.php'; ?>

    <title><?php echo $title; ?> | <?php echo $descriptionMain; ?></title>

    <link href="vendor/bootstrap-v4.0.0/boostrap.min.css" rel="stylesheet">
    <link href="assets/styles/main.css" rel="stylesheet">

    <?php include 'includes/gtag.php'; ?>

    <script type="text/javascript" src="https://display.ugc.bazaarvoice.com/static/smartforlife/main_site/en_CA/bvapi.js"></script>

    <?php include 'includes/go-squared.php'; ?>

</head>

<body>
<?php include 'includes/gtm-body.php'; ?>
    <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#"><img class="img-fluid" src="<?php echo $img_logo['url'] ?>" alt="<?php echo $img_logo['alt'] ?>"></a>
        <h1><?php echo $title; ?></h1>
    </nav>

    <main role="main">

        <div class="jumbotron">
            <div class="container">

            </div>
        </div>

        <p style="text-align: center;"><a style="font-size: 2em;" class="btn btn-primary btn-lg" id="btn-02" href="ca-en.php" role="button">English &raquo;</a></p>
        <p style="text-align: center;"><a style="font-size: 2em;" class="btn btn-primary btn-lg" id="btn-02" href="ca-fr.php" role="button">Français &raquo;</a></p>

    </main>

    <?php include 'includes/footer.php' ?>
    
    </body>
</html>
