<!-- http://localhost/RemoteTest/php -->
<!-- http://localhost/app/php/script.php old way -->
<!-- <php ob_start('ob_gzhandler'); ?> compress the HTML -->

<?php 
  connectToDB();
             
  function connectToDB(){
    $mysqliLink = new mysqli('localhost', 'root', 'root', 'Test_DB');
   
 
    if(mysqli_connect_errno()){
      echo "not connected";
      exit();
    }else{
      echo "connected";
    }
  }


?>
<!-- ?php ob_end_flush(); ?> -->