---
title: "Day 29 - Settlement Files တွေ ကိုင်တွယ်တဲ့အခါ သတိထားရမယ့် အချက်များ"
description: ""
pubDate: 2025-12-15
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

Payment transaction တွေရဲ့ settlement data တွေ မှန်မှန်ကန်ကန်နဲ့ အမှားအယွင်း မရှိစေဖို့ ဒီအချက်တွေကို ဂရုစိုက်သင့်ပါတယ်။

(၁) Settlement file တွေမှာပါဝင်တဲ့ header နဲ့ trailer တွေကို အရင်ဆုံး စစ်ဆေးပါ။ ဖိုင်ထဲမှာ ပါဝင်တဲ့ record count တွေ၊ total debit amount ၊ total credit amount တွေ၊ file datetime နဲ့ sequence number တွေ မှန်ကန်မှုရှိမရှိ စစ်ဆေးပါ။

(၂) Settlement file မှာပါဝင်တဲ့ net settlement amount ကို system ကနေ ထုတ်ယူထားတဲ့ authorized transaction တွေရဲ့ စုစုပေါင်း ပမာဏနဲ့ ကိုက်ညီမှုရှိမရှိ စစ်ဆေးပါ။ ဒီနေရာမှာ transaction အကုန်လုံး settled မလုပ်ရသေးတာ၊ မတူညီတဲ့ different party (system) တွေကြား timing ကွာဟချက်၊ cut-off လုပ်တဲ့ အချိန် ကွာဟချက်တွေကြောင့် စာရင်းမကိုက်ညီတာတွေ ဖြစ်တတ်ပါတယ်။

(၃) MDR fee တွေ၊ interchange fee တွေ၊ service charges တွေကို သတ်မှတ်ထားတဲ့ transaction  အမျိုးအစားအလိုက် မှန်ကန်စွာ တွက်ချက်ထားသလား စစ်ဆေးပါ။

(၄) Failed ဖြစ်ထားတဲ့ transaction တွေ၊ chargeback တွေ၊ reversal ဖြစ်ထားတဲ့ transaction တွေ အစရှိသဖြင့် ပုံမှန် transaction မဟုတ်တာတွေ settlement မှာ ပါနေသလားစစ်ပါ။ အကယ်၍ အဲ့ဒီလို transaction တွေ ပါနေခဲ့ရင် မှန်ကန်မှုရှိမရှိ သတိထားပြီး စစ်ပေးပါ။

နောက်ဆုံးအနေနဲ့ settlement file တွေကို ကိုင်တွယ်တဲ့အခါမှာ စစ်ဆေးတဲ့ process တွေကို manual လုပ်တာထက် automation နဲ့ အလိုအလျောက် လုပ်ဆောင်နိုင်အောင် စီစဉ်ထားသင့်ပါတယ်။ Automation ကြောင့် exception case တွေလောက်ပဲ manual စစ်ဖို့ လိုတော့မှာဖြစ်လို့ အချိန်ကုန်သက်သာသွားသလို၊ human error ကိုလည်း လျှော့ချနိုင်မှာ ဖြစ်ပါတယ်။

(40-day “Payments Made Simple” series ရဲ့ day 29 အတွက် ဖြစ်ပါတယ်။ Payments အကြောင်း၊ payment system တွေအကြောင်းကို လက်တွေ့ကျကျ တိုတိုရှင်းရှင်းနဲ့ တစ်နေ့တစ်ပုဒ် ဆက်ပြီး တင်ပေးပါမယ်။)
