<!doctype html>
<html lang="en">
  <head>
    <title>OOP PHP</title>
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
            <?php

               //Interface
               interface School{
                   public function mySchool();
               }

               interface College{
                    public function myCollege();
                }

                interface Uni{
                    public function myUni();
                }

               class Teacher implements School{

                    public function __construct(){
                        $this->mySchool();
                        $this->myCollege();
                        $this->myUni();
                        
                    }

                    public function mySchool(){
                        echo "I am A School Teacher<br />";
                    }
                    public function myCollege(){
                        echo "I am A College Teacher<br />";
                    }
                    public function myUni(){
                        echo "I am A University Teacher<br />";
                    }
               }

               class Student implements School{

                    public function __construct(){
                        $this->mySchool();
                        $this->myCollege();
                        $this->myUni();
                        
                    }

                    public function mySchool(){
                        echo "I am A School Student<br />";
                    }
                    public function myCollege(){
                        echo "I am A College Student<br />";
                    }
                    public function myUni(){
                        echo "I am A University Student";
                    }
                }

               $t = new Teacher;
               $s = new Student;
            
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