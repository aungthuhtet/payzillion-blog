---
title: "Day 26 - QR Payment နဲ့ Card Payment တွေရဲ့ Posting Logic များ"
description: ""
pubDate: 2025-12-12
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

**QR** scan ကိုသုံးပြီး wallet နဲ့ mobile payment တွေလုပ်တဲ့အခါမှာ ငွေပေးချေသူ customer ရဲ့ app ကနေ scan ဖတ်လိုက်တာနဲ့ customer ရဲ့ payment provider ဆီ transaction ရောက်သွားပြီး validation လုပ်ပါတယ်။ Customer ရဲ့ provider ဆီကနေ transaction ကို ခွင့်ပြုပေးလိုက်ပြီဆိုတာနဲ့ customer ရဲ့ mobile payment account ထဲကနေ ငွေချက်ချင်း ဖြတ်သွားမှာပါ။ ဒီအခြေအနေမှာ merchant တွေအနေနဲ့ကတော့ transaction အောင်မြင်ကြောင်း notification ရမှာ ဖြစ်ပါတယ်။ ချိတ်ဆက်ထားတဲ့ QR စနစ်နဲ့ acquirer ပေါ်မူတည်ပြီး merchant တွေအတွက် ငွေချက်ချင်းရတာ ဖြစ်နိုင်သလို settlement process တွေလုပ်ဆောင်ပြီး နောက်ရက်မှ ငွေရတာလည်း ဖြစ်နိုင်ပါတယ်။

**ကတ်**အသုံးပြုပြီး ငွေပေးချေတဲ့ transaction တွေမှာတော့ များသောအားဖြင့် POS စက်ကနေ ငွေပေးချေလိုက်တဲ့အခါမှာ issuer ဆီကနေ လိုအပ်တာတွေ စစ်ဆေးပြီး transaction ကို ခွင့်ပြုပေးလိုက်ပါတယ်။ ဒီအဆင့်မှာ customer ရဲ့ ကတ်ထဲကနေ ငွေကို ချက်ချင်း မဖြတ်သေးပါဘူး။ On-hold လုပ်ထားလိုက်ပါတယ်။ သဘောတရားကတော့ ကတ်ထဲက ငွေကို မနှုတ်ယူရသေးပါဘူး။ အသုံးပြုလိုက်တဲ့ ငွေပမာဏကိုပဲ ထပ်ပြီး မသုံးနိုင်အောင် ခဏတာ ထိန်းသိမ်းထားတာပါ။ Available Balance လျော့သွားပါမယ်၊ account balance မနှုတ်ရသေးပါဘူး။ Settlement process တွေ အားလုံးပြီးတဲ့အခါကျမှ ကတ်ထဲကငွေကို အမှန်တစ်ကယ် နှုတ်ယူမှာပါ။ Merchant တွေအနေနဲ့လည်း settlement process တွေ လုပ်ဆောင်ပြီးတဲ့အခါကျမှ ငွေလက်ခံရရှိမှာပါ။

(40-day “Payments Made Simple” series ရဲ့ day 26 အတွက် ဖြစ်ပါတယ်။ Payments ဆိုင်ရာ အကြောင်းအရာတွေကို လက်တွေ့ကျကျ တိုတိုရှင်းရှင်းနဲ့ တစ်နေ့တစ်ပုဒ် ဆက်ပြီး တင်ပေးပါမယ်။)
