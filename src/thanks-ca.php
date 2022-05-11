<?php include 'includes/var-main.php'; ?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="Smart for Life">

    <title><?php echo $title; ?> | <?php echo $description_main; ?></title>

    <link href="vendor/bootstrap-v4.0.0/boostrap.min.css" rel="stylesheet">
    <link href="assets/styles/main.css" rel="stylesheet">

    <?php include 'includes/gtag.php'; ?>

</head>

<body>
    <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#"><img class="img-fluid" src="<?php echo $img_logo['url'] ?>" alt="<?php echo $img_logo['alt'] ?>"></a>
        <h1><?php echo $title; ?></h1>
    </nav>

    <main role="main">
        <div class="jumbotron">
            <div class="container">

            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width:100%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">100%</div>
                    </div>
                    <h2>Thanks for your Feedback!</h2>
                    <p class="lead">Once verified, you will receive a confirmation email and your free product will be shipped.</p>
                    <p>Check out some of our other great products with the link below</p>
                    <p><a class="btn btn-primary btn-lg btn-block" id="btn-08" href="https://www.smartforlife.ca" role="button">Shop Now &raquo;</a></p>
                </div><!-- /.col -->
            </div><!-- /.row -->
            <hr>
        </div> <!-- /.container -->

    </main>

    <?php include 'includes/footer.php' ?>

</body>
</html>
