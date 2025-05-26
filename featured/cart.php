<?php
session_start();

// Define book prices (you can adjust these as needed)
$book_prices = [
    "Farenheit 451" => 15.99,
    "The Great Gatsby" => 12.99,
    "The Godfather" => 18.99,
    "A Street Car Named Desire" => 14.99,
];

// Initialize the cart
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}

// Function to add a book to the cart
function addBookToCart($bookName)

{
    global $book_prices;
    if (isset($book_prices[$bookName])) {
        if (!isset($_SESSION['cart'][$bookName])) {
            $_SESSION['cart'][$bookName] = 0;
        }
        $_SESSION['cart'][$bookName]++;
    }
}

// Function to delete a book from the cart
function deleteBookFromCart($bookName)

{
    if (isset($_SESSION['cart'][$bookName])) {
        $_SESSION['cart'][$bookName]--;
        if ($_SESSION['cart'][$bookName] <= 0) {
            unset($_SESSION['cart'][$bookName]);
        }
    }
}

// Function to calculate the subtotal
function getSubtotal() {
    global $book_prices;
    $subtotal = 0;
    foreach ($_SESSION['cart'] as $bookName => $quantity) {
        if (isset($book_prices[$bookName])) {
            $subtotal += $book_prices[$bookName] * $quantity;
        }
    }
    return $subtotal;
}

// Handle POST requests for adding books to the cart
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['book_name'])) {
        $bookName = $_POST['book_name'];
        addBookToCart($bookName);
    }
}

// Handle POST requests for deleting books from the cart
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['delete_book'])) {
        $bookName = $_POST['delete_book'];
        deleteBookFromCart($bookName);
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Cart</title>
    <link href="cart.css" rel="stylesheet">
</head>

<body>
    
    <header>
    <?php include 'nav.php';?>
    </header>

    <main>
        


       <!-- Your HTML body content -->


<!-- Add book to cart form -->



<!-- Display cart content and subtotal -->
<div>
    <h1>Shopping Cart</h1>
    <table>
        <tr>
            <th>Item</th>
            <th>Quantity</th>
        </tr>
        <?php
        foreach ($_SESSION['cart'] as $bookName => $quantity) {
            echo "<tr>";
            echo "<td>$bookName</td>";
            echo "<td>$quantity</td>";
            echo "</tr>";
        }
        ?>
    </table>
    <p>Subtotal: $<?php echo number_format(getSubtotal(), 2); ?></p>
</div>

<!-- Clear Cart button  -->
<form method="post" action="cart.php">
        <input type="hidden" name="clear_cart" value="true">
        <button class="clear-cart-button" type="submit">Clear Cart</button>
    </form>




    <!-- Back to featured button -->
    <a href="featured.php" class="back-to-featured-button">Back to Featured</a>
    </main>

    <footer>
        &copy; 2023 FNBLibrary. All rights reserved.
    </footer>
    <script>
        // JavaScript to clear the cart visually when the "Clear Cart" button is clicked
        document.querySelector(".clear-cart-button").addEventListener("click", function()
         {
            // Remove cart items visually
            var cartItems = document.querySelectorAll("table tr");
            cartItems.forEach(function(item) {
                item.remove();
            });

            
        });
    </script>





</body>
</html>




<?php
// Handle POST requests for clearing the cart
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['clear_cart'])) {
    if ($_POST['clear_cart'] === 'true') {
        $_SESSION['cart'] = []; // Clear the cart
    }
}
?>

