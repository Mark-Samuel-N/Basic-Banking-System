function sendMoney() {
	var enterName = document.getElementById("enterName").value;
	var enterAmount = parseInt(document.getElementById("enterAmount").value);
	var enterSName = document.getElementById("enterSName").value;
	var findSenderBankAccount = enterSName + "BankBalance";
	var enterSAmount = parseInt(document.getElementById(findSenderBankAccount).innerHTML);
	if(enterAmount > enterSAmount) {
		alert("Insufficient Balance!")
	} else {
		var findUserBankAccount = enterName + "BankBalance";
		var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
		var myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - enterAmount;
		document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
		document.getElementById(findUserBankAccount).innerHTML = finalAmount;
		alert(`Successful Transaction !!! \nRs.${enterAmount} is sent to ${enterName}@gmail.com from ${enterSName}@gmail.com`)
		var createPTag = document.createElement("li");
		var textNode = document.createTextNode(`Rs. ${enterAmount} is sent from the sender with \nEmail-ID ${enterSName}@gmail.com to receiver with Email-ID ${enterName}@gmail.com \non ${Date()}.`);
		createPTag.appendChild(textNode);
		var element = document.getElementById("transaction-history-body");
		element.insertBefore(createPTag, element.firstChild);
	}
}
