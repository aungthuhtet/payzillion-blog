---
title: "Card Number Validator using Luhn Algorithm"
description: ""
pubDate: 2025-03-21
author: "Aung Thu Htet"
draft: false
---

  Luhn Algorithm Calculator with Card Brand 

# Card No Checker (Luhn Algorithm)

 Validate

<script>// Function to format the card number as the user types function formatCardNumber() { const input = document.getElementById('cardNumber'); let value = input.value.replace(/\D/g, ''); // Remove all non-digit characters value = value.match(/.{1,4}/g)?.join(' ') || value; // Group digits into sets of four input.value = value; // Update the input field with formatted value } <div></div> // Add event listener for input formatting document.getElementById('cardNumber').addEventListener('input', formatCardNumber); <div></div> // Function to identify the card brand based on starting digits function identifyCardBrand(cardNumber) { const firstDigit = cardNumber.charAt(0); const firstTwoDigits = cardNumber.substring(0, 2); const firstThreeDigits = cardNumber.substring(0, 3); const firstFourDigits = cardNumber.substring(0, 4); const firstSixDigits = cardNumber.substring(0, 6); <div></div> if (firstDigit === '4') return 'Visa'; if (firstTwoDigits >= '51' && firstTwoDigits <= '55') return 'Mastercard'; if (firstFourDigits >= '2221' && firstFourDigits <= '2720') return 'Mastercard'; if (firstTwoDigits === '34' || firstTwoDigits === '37') return 'American Express'; if (firstFourDigits === '6011' || firstTwoDigits === '65' || (firstThreeDigits >= '644' && firstThreeDigits <= '649')) return 'Discover'; if (firstTwoDigits === '62') return 'UnionPay'; if (firstFourDigits >= '3528' && firstFourDigits <= '3589') return 'JCB'; if ((firstThreeDigits >= '300' && firstThreeDigits <= '305') || firstTwoDigits === '36' || firstTwoDigits === '38' || firstTwoDigits === '39') return 'Diners Club'; if (firstTwoDigits === '50' || (firstTwoDigits >= '56' && firstTwoDigits <= '58') || firstDigit === '6') return 'Maestro'; // Broad check due to overlap if (firstTwoDigits === '60' || firstFourDigits === '6521' || firstFourDigits === '6522') return 'RuPay'; if (firstTwoDigits === '95') return 'MPU'; // Added MPU for Myanmar Payment Union <div></div> return 'Unknown Card Brand'; } <div></div> // Function to validate the card number using Luhn algorithm and identify brand function validateCard() { const input = document.getElementById('cardNumber').value.replace(/\D/g, ''); // Remove spaces and non-digits const resultDiv = document.getElementById('result'); <div></div> if (input.length < 13 || input.length > 19) { resultDiv.innerHTML = 'Please enter a valid card number (13 to 19 digits).'; resultDiv.className = 'error'; // Set class to error for error message return; } <div></div> // Identify the card brand const cardBrand = identifyCardBrand(input); <div></div> // Luhn Algorithm validation let sum = 0; let shouldDouble = false; <div></div> for (let i = input.length - 1; i >= 0; i--) { let digit = parseInt(input.charAt(i), 10); <div></div> if (shouldDouble) { digit *= 2; if (digit > 9) { digit -= 9; } } <div></div> sum += digit; shouldDouble = !shouldDouble; } <div></div> const isValid = (sum % 10 === 0); if (isValid) { resultDiv.innerHTML = `Card Brand: ${cardBrand}<br>The card number is valid.`; resultDiv.className = 'valid'; // Set class to valid for valid result } else { resultDiv.innerHTML = `Card Brand: ${cardBrand}<br>The card number is invalid.`; resultDiv.className = 'invalid'; // Set class to invalid for invalid result } }</script>

Luhn Algorithm ကို Hans Peter Luhn ဆိုတဲ့ IBM ပညာရှင်က တီထွင်ခဲ့တာဖြစ်ပြီး ဘဏ်ကဒ်နံပါတ် (Card Number) တွေ တွက်ချက်ဖို့အတွက် စစ်ဆေးဖို့အတွက် အသုံးပြုကြပါတယ်။

![Luhn Algorithm](/images/card-no-checker-luhn-algorithm.png)

အပေါ်မှာ ထည့်ထားပေးတာကတော့ Luhn Algorithm နဲ့ Card Brand အမျိုးအစားနဲ့ Card Number မှန်၊ မမှန် တွက်ချက်ပေးတဲ့ Calculator ဖြစ်ပါတယ်။

Card Brand အနေနဲ့ MPU အပါအဝင် JCB ၊ UPI ၊ Visa ၊ Mastercard ၊ American Express ၊ Discover ၊ Diners Club အစရှိတဲ့ Major Card Brand တွေကို ခွဲခြားပေးနိုင်ပါတယ်။

Text box ထဲမှာ မိမိစစ်ချင်တဲ့ card number ကို ရိုက်ထည့်ပြီး "Validate" button ကို နှိပ်ပြီး စစ်နိုင်ပါတယ်။ Validate လုပ်လိုက်တာနဲ့ ကဒ်အမျိုးအစားနဲ့ ကဒ်နံပါတ်မှန်၊ မမှန်ကို output ပြန်ပြပေးပါမယ်။

ကဒ်နံပါတ်မှန်တယ်ဆိုရင် "The card number is valid." ဆိုပြီး အစိမ်းရောင်နဲ့ result ပြပါမယ်။ နံပါတ်မှားခဲ့ရင် "The card number is invalid." ဆိုပြီး အနီရောင်နဲ့ ပြပါမယ်။
