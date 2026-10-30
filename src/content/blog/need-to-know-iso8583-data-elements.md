---
title: "Day 22 - Card Payments အတွက် သိထားရမယ့် ISO 8583 Data Element များ"
description: ""
pubDate: 2025-12-08
author: "Aung Thu Htet"
tags: 
  - "40-days-of-payments"
  - "digital-payments"
  - "financial-services"
  - "fintech"
  - "payments"
  - "payments-made-simple"
draft: false
---

Card payment အတွက် မဖြစ်မနေ သိထားရမယ့် ISO 8583 data element fields တွေကတော့

**\[DE 2\] Primary Account Number (PAN)** - ကတ်နံပါတ် ဖြစ်ပါတယ်။ Visa ၊ Mastercard ၊ MPU အစရှိသဖြင့် ကတ် brand နဲ့ ကတ်ထုတ်ပေးထားတဲ့ issuer ကို ခွဲခြားသိနိုင်စေပါတယ်။

**\[DE 3\] Processing Code** - Purchase လား၊ refund လား၊ withdrawal လား အစရှိသဖြင့် transaction အမျိုးအစားကို ခွဲခြားပေးတဲ့ 6 digit ကုဒ်ဖြစ်ပါတယ်။

**\[DE 4\] Transaction Amount** - အသုံးပြုလိုက်တဲ့ ငွေပမာဏ ဖြစ်ပါတယ်။ Issuer ၊ acquirer နဲ့ card scheme တွေကြားမှာ တူညီနေဖို့လိုအပ်ပြီး reconciliation အတွက် အရေးကြီးပါတယ်။

**\[DE 11\] System Trace Audit Number (STAN)** - ATM ၊ POS အစရှိတဲ့ terminal တွေကနေ သတ်မှတ်ပေးတဲ့ trace number ဖြစ်ပြီး 6 digit နံပါတ်တွဲ ဖြစ်ပါတယ်။

**\[DE 18\] Merchant Category Code (MCC)** - Retail လား၊ travel လား အစရှိသဖြင့် merchant ရဲ့ business အမျိုးအစားကို ခွဲခြားဖို့သုံးတဲ့ 4 digit ကုဒ်ဖြစ်ပါတယ်။

**\[DE 37\] Retrieval Reference Number (RRN)** - Acquirer ကနေ ထုတ်ပေးတဲ့ transaction အတွက် unique reference ဖြစ်ပြီး 12 characters ပါဝင်တဲ့ ကုဒ်ဖြစ်ပါတယ်။

**\[DE 39\] Response Code** - Transaction တစ်ခု approved ဖြစ်တယ်၊ ဘာကြောင့် rejected ဖြစ်တယ်ဆိုတဲ့ result ကို ဖော်ပြပေးတဲ့ 2 digit ကုဒ်ဖြစ်ပါတယ်။

**\[DE 41\] Card Acceptor Terminal ID (TID)** - အသုံးပြုတဲ့ ATM ၊ POS အစရှိတဲ့ terminal ရဲ့ ID ကို ဖော်ပြပါတယ်။

**\[DE 42\] Card Acceptor Identification Code (MID)** - အသုံးပြုတဲ့ merchant ရဲ့ ID ကို ဖော်ပြပါတယ်။

**\[DE 49\] Transaction Currency Code** - Transaction ပြုလုပ်တဲ့ currency ကို ဖော်ပြပါတယ်။

“Payments Made Simple” 40 day series - day 22 အတွက် ဖြစ်ပါတယ်။ Payments ဆိုင်ရာ အကြောင်းအရာတွေကို လက်တွေ့ကျကျ တိုတိုရှင်းရှင်းနဲ့ တစ်နေ့တစ်ပုဒ် ဆက်ပြီး တင်ပေးပါမယ်။
