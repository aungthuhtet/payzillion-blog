---
title: "Day 27 - Authorization vs Posting အကြောင်း"
description: ""
pubDate: 2025-12-13
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

**Authorization** ကတော့ issuer ၊ wallet provider အစရှိတာတွေကနေ transaction ကို real-time အသုံးပြုခွင့်ပြုမယ်၊ မပြုဘူးဆိုတဲ့ decision ချပေးတာဖြစ်ပါတယ်။ ငွေပေးချေမှုလုပ်တဲ့အခါ လက်ကျန်ငွေ balance ၊ အသုံးပြုခွင့် limit ၊ account status နဲ့ fraud rules အစရှိတာတွေကို စစ်ဆေးပြီးနောက် transaction အသုံးပြုခွင့် approved ပေးလိုက်တာ သို့မဟုတ် ငြင်းပယ်တာ denied လုပ်ပါတယ်။ အဲ့ဒီအတည်ပြုချက်ကို merchant တွေဆီမှာ ချက်ချင်း လက်ခံရရှိမှာပါ။ ဒါပေမယ့် ဒီအဆင့်မှာ money movement တွေ အမှန်တစ်ကယ် မဖြစ်သေးပါဘူး။ Authorization အဆင့်မှာ ငွေပမာဏကို reserve လုပ်ပြီး ဖယ်ထားလိုက်တာနဲ့၊ အသုံးပြုမှု အတည်ပြုပြီး ခွင့်ပြုချက်ချပေးတာတွေကိုပဲ လုပ်ဆောင်မှာပါ။

**Posting** ကတော့ transaction ရဲ့ ရလဒ်ပေါ် မူတည်ပြီး customer နဲ့ merchant ရဲ့ record တွေ၊ account တွေကို update လုပ်ပေးတာ ဖြစ်ပါတယ်။ Clearing file တွေကို အသုံးပြုပြီး posting လုပ်တာဖြစ်နိုင်သလို၊ callbacks တွေ သို့မဟုတ် internal confirmation တွေအပေါ် မူတည်ပြီး posting လုပ်ဆောင်တာလည်း ဖြစ်နိုင်ပါတယ်။ Posting ပြီးတဲ့အခါမှ customer ရဲ့ အကောင့်ထဲက ငွေအမှန်တစ်ကယ် ဖြတ်သွားတာနဲ့ merchant တွေအတွက် ငွေအမှန်တစ်ကယ် ရရှိတာတွေ ဖြစ်မှာပါ။

(40-day “Payments Made Simple” series ရဲ့ day 27 အတွက် ဖြစ်ပါတယ်။ Payments ဆိုင်ရာ အကြောင်းအရာတွေကို လက်တွေ့ကျကျ တိုတိုရှင်းရှင်းနဲ့ တစ်နေ့တစ်ပုဒ် ဆက်ပြီး တင်ပေးပါမယ်။)
