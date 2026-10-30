---
title: "Day 21 - ISO 8583 သို့မဟုတ် Card System တွေရဲ့ ဘာသာစကား"
description: ""
pubDate: 2025-12-07
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

Card payment system တွေကြားမှာ အချင်းချင်း communicate လုပ်ဖို့အတွက် ISO 8583 လို့ခေါ်တဲ့ standard messaging format ကို အသုံးပြုပါတယ်။ အထူးသဖြင့် acquirer နဲ့ card scheme ကြား၊ card scheme နဲ့ issuer တွေကြားမှာ ISO 8583 ကို အသုံးပြုပြီး communicate လုပ်ပါတယ်။ ISO 8583 message မှာ 1987 ၊ 1993 နဲ့ 2003 အစရှိသဖြင့် version ၃မျိုးရှိပြီး တွင်တွင်ကျယ်ကျယ် အသုံးပြုနေတာကတော့ 1987 ထွက် version ပဲ ဖြစ်ပါတယ်။ ISO 8583 message တွေမှာ အဓိကအားဖြင့် အပိုင်း(၃)ပိုင်း ရှိပါတယ်။

၁) ပထမဆုံးတစ်ခုကတော့ MTI (Message Type Indicator) ဖြစ်ပြီး 4-digit numeric field ဖြစ်ပါတယ်။ Digit 1 မှာ အသုံးပြုထားတဲ့ ISO 8583 message version ကို ဖော်ပြပါတယ်။ Digit 2 မှာ message က authorization message လား၊ financial message လား၊ network management message လား အစရှိသဖြင့် message ရဲ့ purpose ကို ဖော်ပြပါတယ်။ Digit 3 မှာ request လား၊ response လား အစရှိသဖြင့် message ရဲ့ function ကို ဖော်ပြပါတယ်။ Digit 4 မှာ acquirer ဆီက လာသလား၊ issuer ဆီကလာသလား အစရှိသဖြင့် message ရဲ့ စတင်ရာ origin ကို ဖော်ပြပါတယ်။

၂) ဒုတိယတစ်ခုကတော့ Bitmaps ဖြစ်ပြီး အဲ့ဒီ bitmap တွေကို အသုံးပြုပြီး message တစ်ခုချင်းစီမှာ ပါဝင်မယ့် data element တွေကို ဖော်ပြပါတယ်၊ ခွဲခြားကြပါတယ်။

၃) နောက်ဆုံးတစ်ခုကတော့ Data elements (data fields) တွေဖြစ်ပြီး transaction တစ်ခုချင်းစီရဲ့ အသေးစိတ် အချက်အလက်တွေကို ဖော်ပြပေးပါတယ်။ ကတ်နံပါတ်၊ အသုံးပြုတဲ့ timestamp ၊ merchant အချက်အလက်၊ ငွေပမာဏ၊ respond codes အစရှိသဖြင့် transaction ရဲ့ detailed အချက်အလက်တွေကို ဖော်ပြပါတယ်။

“Payments Made Simple” 40 day series - day 21 အတွက် ဖြစ်ပါတယ်။ Payments ဆိုင်ရာ အကြောင်းအရာတွေကို လက်တွေ့ကျကျ တိုတိုရှင်းရှင်းနဲ့ တစ်နေ့တစ်ပုဒ် ဆက်ပြီး တင်ပေးပါမယ်။ ထပ်ဖြည့်ပေးချင်တာ၊ ရေးစေချင်တာတွေ ရှိရင်လည်း comment မှာ ဆွေးနွေးပေးခဲ့ကြပါဦး။
