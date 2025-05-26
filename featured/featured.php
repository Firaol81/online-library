<!DOCTYPE html>
<html>
<head>
<title>Featured</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Karma">


</head>
<body>

<header class="header">

	<nav class="header-1">
		<a href="#" class="logo"> <i class="fas fa-books"></i> 𝐅𝐍𝐁 𝐋𝐈𝐁𝐑𝐀𝐑𝐘 </a>
		
		
		<!-- Icons-->
		<div class="icons">
			<a href="#" class="fas fa-heart"></a>
			<a href="#" class="fas fa-shopping-cart"></a>
			<div id="login-btn" class="fas fa-user"></div>
		
	    </div>
	</nav>
	

	
	<?php include 'nav.php';?>

</header>

<!-- Top menu -->

<!--------------FARENHEIT451------------------------------------>
<div class="w3-main w3-content w3-padding" style="max-width:1200px;margin-top:100px">

  <!-- First Book Row-->
  <div class="w3-row-padding w3-padding-16 w3-center" id="food">
    <div class="w3-quarter">
      <img src="farenheit451.png" alt="farenheit451" style="width:100%">
      <h3>Farenheit 451</h3>
      <p>$15.99</p>
      
      <form method="post" action="cart.php">
      <input type="hidden" name="book_name" value="Farenheit 451">
      <button class="book-button" type = "submit">Add to Cart</button>
      <input type="hidden" name="quantity" value="1">
    </form>

      <button class="book-button">Read Excerpt</button>
    </div>
<!-------------------------------------------------->




<!--------THE GREAT GATSBY------------------------------------------>
    <div class="w3-quarter">
      <img src="gatsby-original2.png" alt="The Great Gatsby" style="width:100%">
      <h3>The Great Gatsby</h3>
      <p>$12.99.</p>

      <form method="post" action="cart.php">
      <input type="hidden" name="book_name" value="The Great Gatsby">
      <button class="book-button" type = "submit">Add to Cart</button>
        <input type="hidden" name="quantity" value="1">
      </form>

    <button class="book-button">Read Excerpt</button>
    </div>
<!-------------------------------------------------->






<!-------------THE GODFATHER------------------------------------->
    <div class="w3-quarter">
    <img src="godfather.png" alt="The Godfather" style="width:100%">
    <h3>The Godfather</h3>
    <p>$18.99</p>

    <form method="post" action="cart.php">
    <input type="hidden" name="book_name" value="The Godfather">
     <button class="book-button" type="submit">Add to Cart</button>
    <input type="hidden" name="quantity" value="1">
    </form>

    <button class="book-button">Read Excerpt</button>
    </div>
<!-------------------------------------------------->





<!--------------STREETCARNAMEDDESIRE------------------------------------>
    <div class="w3-quarter">
      <img src="streetcarnameddesire.png" alt="streetcarnameddesire" style="width:100%">
      <h3>A Street Car Named Desire</h3>
      <p>$14.99</p>

      <form method="post" action="cart.php">
    <input type="hidden" name="book_name" value="A Street Car Named Desire">
     <button class="book-button" type="submit">Add to Cart</button>
    <input type="hidden" name="quantity" value="1">
    </form>
      
    <button class="book-button">Read Excerpt</button>
<!-------------------------------------------------->


    </div>
  </div>
  

  <!-- Second Photo Grid-->
  

<!-- End page content -->
</div>



</body>
<style>



body,h1,h2,h3,h4,h5,h6 {font-family: "Karma", sans-serif}
.w3-bar-block .w3-bar-item {padding:20px}

.book-button {
  display: inline-block;
  padding: 10px 20px;
  margin: 5px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.book-button:hover {
  background-color:#475547;
}
</style>
</html>
