<!doctype html>
<html lang="en">
  <head>
    <title>Calculator</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  </head>
  <body>

  <!-- Body Area -->


    <div class="container border border-secondary px-0">
        <header class="header">
            <div class="jumbotron jumbotron-fluid text-center bg-info text-white p-3">
                <div class="container">
                    <h1 class="display-3">Welcome to OOP</h1>
                    <p class="lead">This is oop Practise</p>
                </div>
            </div>
        </header>
        <section class="main-body p-3" style="min-height:300px">
            
            <form class="form" method="POST" acton="">
                <div class="form-group form-inline">
                    <label for="fNumber">First Number : </label>
                    <input type="number" name="fNumber" id="fNumber" class="form-control mx-3" placeholder="" aria-describedby="helpId">
                    <small id="helpId" class="text-muted">write First number</small>
                </div>
                <div class="form-group form-inline">
                    <label for="sNumber">Another Number : </label>
                    <input type="number" name="sNumber" id="sNumber" class="form-control mx-3" placeholder="" aria-describedby="helpId">
                    <small id="helpId" class="text-muted">write Another number</small>
                </div>
                <button type="submit" name="calculation" class="btn btn-info">Submit</button>
            </form>
            

            <?php

                if(isset($_POST['calculation'])){
                    $oneNumb = $_POST['fNumber'];
                    $secNumb = $_POST['sNumber'];

                    if(empty($oneNumb) || empty($secNumb)){
                        echo "<span class=\"text-danger py-3 d-block\">Field Must Not Be Empty</span>";
                    }else{
                        //Call Method
                        $cal = new calculator;
                        $cal->add($oneNumb , $secNumb);
                        $cal->sub($oneNumb , $secNumb);
                        $cal->mul($oneNumb , $secNumb);
                        $cal->divi($oneNumb , $secNumb);
                        $cal->modu($oneNumb , $secNumb);
                    }
                }
                
                

                //create class For oop
                class calculator{

                    // Add Two Number
                    public function add($a , $b){
                        echo "<span class=\"text-info py-3 d-block\">Summition Of " . $a ." & ". $b ." is : <span class=\"text-danger\">" . ($a+$b) . "</span></span>";
                    }

                    // Sub Two Number
                    public function sub($a , $b){
                        echo "<span class=\"text-info py-3 d-block\">Subtraction Of " . $a ." & ". $b ." is : <span class=\"text-danger\">" . ($a-$b) . "</span></span>";
                    }

                    // Multiply Two Number
                    public function mul($a , $b){
                        echo "<span class=\"text-info py-3 d-block\">Multiply Of " . $a ." & ". $b ." is : <span class=\"text-danger\">" . ($a*$b) . "</span></span>";
                    }

                    // Divide Two Number
                    public function divi($a , $b){
                        echo "<span class=\"text-info py-3 d-block\">Divide Of " . $a ." & ". $b ." is : <span class=\"text-danger\">" . ($a/$b) . "</span></span>";
                    }
                    
                    // Modulas Two Number
                    public function modu($a , $b){
                        echo "<span class=\"text-info py-3 d-block\">Modulas Of " . $a ." & ". $b ." is : <span class=\"text-danger\">" . ($a%$b) . "</span></span>";
                    }

                }
            
            ?>

        </section>
        <footer class="footer bg-info py-3">
            <div class="row">
                <div class="col-md-8 offset-2">
                    <h5 class="text-white text-center">Thanks For with us</h5>
                </div>
            </div>
        </footer>
    </div>



    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>