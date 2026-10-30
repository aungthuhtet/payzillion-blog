---
title: "Day 24 - Card Management System ၊ Switch နဲ့ Core Banking အကြောင်း"
description: ""
pubDate: 2025-12-10
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

**Card Management System (CMS)** ကတော့ ကတ်အကောင့်တွေ၊ cardholder profile တွေ၊ credit limit ၊ ကတ် limit တွေနဲ့ available balance တွေကို သိမ်းဆည်းတာ၊ စီမံခန့်ခွဲတာတွေ လုပ်ပေးပါတယ်။ ပြီးတော့ ကတ်ထုတ်ဝေတဲ့ card issuance လုပ်ငန်းစဉ်တွေ၊ transaction posting လုပ်တာတွေ၊ interest calculation တွေနဲ့ credit card ကိုင်‌ဆောင်သူတွေအတွက် လစဉ် monthly statement ထုတ်ပေးတာတွေကို လုပ်ပါတယ်။

**Card Payment Switch** ကတော့ card network တွေနဲ့ backend system တွေကြားမှာ routing နဲ့ switching ကို အဓိက လုပ်ပေးပါတယ်။ Card network ကနေ ISO 8583 messaging format နဲ့ transaction တွေကို ဝင်လာတဲ့အခါ ကတ်အမျိုးအစားအပေါ် မူတည်ပြီး သက်ဆိုင်ရာ system တွေဆီကို route လုပ်ပေးပါတယ်။ Debit ကတ် transaction တွေအတွက် core banking ဆီကို route လုပ်ပေးပြီး account နဲ့ balance အချက်အလက်တွေတောင်းခံတာ၊ approval ယူတာတွေ လုပ်ပေးပါတယ်။ Credit ကတ်၊ prepaid ကတ်တွေအတွက်ကတော့ card management system ကနေ လုပ်ပေးပါတယ်။

**Core Banking System** ကတော့ customer တွေရဲ့ အချက်အလက်တွေ၊ ဘဏ်အကောင့် အချက်အလက်တွေအတွက် source of truth ဖြစ်ပါတယ်။ Debit card transaction တွေအတွက် real-time balance ကို ကိုင်တွယ်ပြီး approval လုပ်ပေးပါတယ်။ Credit card တွေ၊ prepaid card တွေအတွက်တော့ real-time ထိတွေ့ရတဲ့အပိုင်း မရှိပါဘူး။ ဒါပေမယ့် card payments system တွေနဲ့ ဆက်စပ်စနစ်တွေ အားလုံးမှာ နေ့စဉ်ဖြစ်နေတဲ့ overall portfolio တွေကတော့ ဘဏ်ရဲ့ financial အချက်အလက်တွေအားလုံးရဲ့ source ဖြစ်တဲ့ core banking system မှာ maintain လုပ်ထားမှာ ဖြစ်ပါတယ်။

(40-day “Payments Made Simple” series ရဲ့ day 24 အတွက် ဖြစ်ပါတယ်။ Payments ဆိုင်ရာ အကြောင်းအရာတွေကို လက်တွေ့ကျကျ တိုတိုရှင်းရှင်းနဲ့ တစ်နေ့တစ်ပုဒ် ဆက်ပြီး တင်ပေးပါမယ်။)
