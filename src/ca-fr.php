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

    <title><?php echo $title; ?> | <?php echo $description_main; ?></title>

    <link href="<?php echo $bootstrap_cc_path ?>" rel="stylesheet">
    <link href="assets/styles/main.css" rel="stylesheet">

    <?php include 'includes/gtag.php'; ?>

    <script type="text/javascript" src="https://display.ugc.bazaarvoice.com/static/smartforlife/main_site/fr_CA/bvapi.js"></script>

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

        <form id="freeProductForm">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width:0%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">0%</div>
                        </div>
                        <?php include 'includes/views/fr/view-01-fr.php'; ?>
                        <?php include 'includes/views/fr/view-02-fr.php'; ?>
                        <?php include 'includes/views/fr/view-03-fr.php'; ?>
                        <?php include 'includes/views/fr/view-04-selector-ca-fr.php'; ?>
                        <?php include 'includes/views/fr/view-05-ca-fr.php'; ?>
                    </div><!-- /.col -->
                </div><!-- /.row -->
                <hr>
            </div> <!-- /.container -->
            <input id="date" name="date" type="hidden">
            <input id="time" name="time" type="hidden">
        </form>

    </main>

    <?php include 'includes/footer.php' ?>
    
    </body>
</html>
