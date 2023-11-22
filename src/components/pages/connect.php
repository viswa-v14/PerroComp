<?php
    $email = $_POST['email'];
    $mobileNumber = $_POST['mobileNumber'];
    $passWord = $_POST['passWord'];
    $repassWord = $_POST['repassWord'];

    //database connection
    $conn = new mysqli('localhost','root','','registers');

    if($conn->connect_error){
        die("Connection Failed".$conn->connect_error);
    }
    else{
        $stmt = $conn->prepare("insert into registeracc(email,mobileNumber,passWord,repassWord)
            values(?,?,?,?)");
        $stmt->bind_param("siss",$email,$mobileNumber,$passWord,$repassWord);
        $stmt->execute();
        echo "Registered";
        $stmt->close();
        $conn->close();
    }
?>