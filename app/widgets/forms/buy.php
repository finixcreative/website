<form id="payment-form" action="buy.php" method="POST">
	<div id="payment-errors"></div>

	<label>Card Number</label>
	<input type="text" size="20" autocomplete="off">
	<span>Enter the number without spaces or hyphens.</span>

	<label>CVC</label>
	<input type="text" size="4" autocomplete="off">

	<label>Expiration (MM/YYYY)</label>
	<input type="text" size="2">
	<span> / </span>
	<input type="text" size="4">
</form>