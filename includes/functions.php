<?php
   //include the file we just wrote - connect.php
   include("connect.php");//like a js import statement

   $query = "SELECT * FROM profdata";

   $runQuery=$pdo->query($query);

   $result=array();//5 rows->display array

   while($row=$runQuery->fetchALL(PDO::FETCH_ASSOC)){//store the result
       $result[]=$row;
   }

   //return $result;
  echo(json_encode($result));//translate --window use echo, mac use var_dump   