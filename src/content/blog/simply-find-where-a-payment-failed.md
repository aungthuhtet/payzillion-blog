---
title: "Day 25 - Payment မအောင်မြင်ရတဲ့ Root Cause ချက်ချင်း သိနိုင်ဖို့"
description: ""
pubDate: 2025-12-11
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

ငွေပေးချေမှု payment တွေ မအောင်မြင်ဘဲ fail ဖြစ်တဲ့အခါ အသေးစိတ် စစ်တာတွေ၊ technical log ကြည့်တာတွေ မလုပ်ပါနဲ့ဦး။ အကြောင်းရင်း root cause ကို အလွယ်တကူနဲ့ ချက်ချင်းသိနိုင်တဲ့ ဒီအချက်တွေကို အရင်ဆုံး စစ်ကြည့်ပါ။

(၁) ငွေပေးချေသူ customer ကြောင့် ဖြစ်တတ်တဲ့ issue လား စစ်ပါ။ Customer တွေကြောင့် ဖြစ်တတ်တာတွေကတော့ PIN ၊ OTP တွေ မှားရိုက်မိတာ၊ ကတ်သက်တမ်းကုန်နေတာ၊ အကောင့်တွေ ကတ်တွေ PIN တွေ lock ကျနေတာ၊ လက်ကျန်ငွေ balance မလုံလောက်တာတွေပါ။

(၂) Merchant ကြောင့် ဖြစ်တတ်တဲ့ issue လား စစ်ပါ။ POS စက် လိုင်းမတက်ဘဲ offline ဖြစ်နေတာ၊ QR code ထုတ်မပေးနိုင်တာ၊ online ecommerce ငွေပေးချေရာမှာ checkout အဆင့်ကနေ ဆက်မသွားနိုင်ဘဲ error တက်နေတာ အစရှိတာတွေပါ။

(၃) Acquirer ရဲ့ transaction routing မှာ ဖြစ်တတ်တဲ့ issue လား စစ်ပါ။ Transaction request တွေ issuer ဆီကို မရောက်တဲ့၊ မပို့နိုင်တဲ့ case တော်တော်များများမှာ configuration တွေ၊ merchant setup တွေ မှားယွင်းနေတာကြောင့်နဲ့ network ပြဿနာရှိနေတာတွေကြောင့် ဖြစ်တတ်ပါတယ်။

(၄) Issuer ၊ mobile wallet အစရှိသဖြင့် customer ကို payment instrument တွေ ထုတ်ပေးထားတဲ့ provider ရဲ့ response ကြောင့်ဖြစ်တတ်တဲ့ issuer လား စစ်ပါ။ Issuer တွေ၊ wallet provider တွေ ဆီက ပြန်လာတဲ့ response code တွေကို ကြည့်ပြီး ဘာကြောင့် payment မအောင်မြင်တာလဲဆိုတာကို ခွဲခြားသိနိုင်ပါတယ်။

(40-day “Payments Made Simple” series ရဲ့ day 25 အတွက် ဖြစ်ပါတယ်။ Payments ဆိုင်ရာ အကြောင်းအရာတွေကို လက်တွေ့ကျကျ တိုတိုရှင်းရှင်းနဲ့ တစ်နေ့တစ်ပုဒ် ဆက်ပြီး တင်ပေးပါမယ်။)
