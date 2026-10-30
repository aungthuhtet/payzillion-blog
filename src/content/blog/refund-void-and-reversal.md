---
title: "Day 9 - တူသလိုလိုနဲ့ ကွဲပြားတဲ့ Void ၊ Refund နဲ့ Reversal တွေအကြောင်း"
description: ""
pubDate: 2025-11-25
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

**Void** ၊ **Refund** နဲ့ **Reversal** transaction အမျိုးအစားတွေ အားလုံးက ငွေပေးချေသူ customer ကို ငွေပြန်ပေးတာချင်း အတူတူပေမယ့် အသုံးပြုရတဲ့ အခြေအနေတွေ မတူညီပါဘူး။

**Void** transaction အမျိုးအစားကတော့ ငွေပေးချေမှု transaction တစ်ခုအတွက် settled မလုပ်ရသေးတဲ့ အခြေအနေမှာ cancel ပြန်လုပ်တာ ဖြစ်ပါတယ်။ ငွေပေးချေမှု လုပ်ဆောင်တဲ့နေ့နဲ့ void က တစ်ရက်တည်း ဖြစ်လေ့ရှိပြီး settlement လုပ်ပြီးသွားရင်တော့ void ကို အသုံးပြုလို့ မရတော့ပါ။

**Refund** ကတော့ merchant တွေအနေနဲ့ settlement ပြုလုပ်ပြီး ငွေလက်ခံရရှိပြီးတဲ့ အခြေအနေမှာ အသုံးပြုပါတယ်။ Merchant အနေနဲ့ ပိုက်ဆံကို လက်ခံရရှိပြီး ဖြစ်တဲ့အတွက် void လုပ်လို့မရတော့ပါ။ Refund transaction ကိုသုံးပြီး ငွေပြန်အမ်းပေးရမှာ ဖြစ်ပါတယ်။ Settlement ပြီးမှ refund လုပ်ပေးနိုင်တာဖြစ်တဲ့အတွက် void လိုမျိုး ချက်ချင်းမရဘဲ အချိန်ပိုကြာလေ့ရှိပါတယ်။

**Reversal** ကတော့ အကြောင်းတစ်ခုခုကြောင့် customer ကို ဝန်ဆောင်မှုလည်း မပေးနိုင်တဲ့ အခြေအနေမှာ ငွေပေးချေမှု authorization ကို ပြန်လည်ပြင်ဆင်တဲ့ transaction အမျိုးအစား ဖြစ်ပါတယ်။ များသောအားဖြင့် timeout နဲ့ system failure တွေ ဖြစ်တဲ့အခါတွေမှာ reversal transaction ကို အသုံးပြုပြီး ငွေပေးချေသူဆီက authorized လုပ်ထားတဲ့ငွေကို release ပြန်လုပ်ပေးပါတယ်။ Void နဲ့ မတူတာက void မှာ transaction ကို manual cancel လုပ်ပေးတာဖြစ်ပြီး၊ reversal မှာတော့ အလိုအလျောက် release လုပ်ပေးတာ ဖြစ်ပါတယ်။

“Payments Made Simple” 40-day series day 9 အတွက် ဖြစ်ပါတယ်။ Payments ဆိုင်ရာ အကြောင်းအရာတွေကို လက်တွေ့ကျကျ တိုတိုရှင်းရှင်းနဲ့ တစ်နေ့တစ်ပုဒ် ဆက်ပြီး တင်ပေးပါမယ်။ ထပ်ဖြည့်ပေးချင်တာ၊ ရေးစေချင်တာတွေ ရှိရင်လည်း comment မှာ ဆွေးနွေးပေးခဲ့ကြပါဦး။
