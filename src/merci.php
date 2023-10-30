<?php include 'includes/var-main.php'; ?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="Smart for Life">

    <title><?php echo $title; ?> | <?php echo $description_main; ?></title>

    <link href="<?php echo $bootstrap_cc_path ?>" rel="stylesheet">
    <link href="assets/styles/main.css" rel="stylesheet">

    <?php include 'includes/gtag.php'; ?>

</head>

<body>
    <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#"><img class="img-fluid" src="<?php echo $img_logo['url'] ?>" alt="<?php echo $img_logo['alt'] ?>"></a>
        <h1><?php echo $title; ?></h1>
    </nav>

    <?php include 'includes/views/en/suspended.php'; ?>

    <?php include 'includes/footer.php' ?>

</body>
</html>
