---
title: "Day 36 - Cardholder Data များ လုံခြုံမှုရှိစေဖို့ PCI DSS အကြောင်း"
description: ""
pubDate: 2025-12-22
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

**PCI DSS** ကတော့ “**Payment Card Industry Data Security Standard**” ဖြစ်ပြီး၊ ကတ်အသုံးပြုသူတွေရဲ့ အချက်အလက်တွေ လုံခြုံမှုရှိစေဖို့ လိုအပ်တဲ့ PCI DSS requirement ၁၂-ချက် ရှိပါတယ်။

(၁) Firewall တွေ၊ network security control တွေ ထားရှိပြီး သေချာစွာ maintain လုပ်ပါ။

(၂) System နဲ့ device အားလုံးမှာ လုံခြုံတဲ့ configuration ကိုပဲ သုံးပါ။ Default ပါလာတဲ့ password အစရှိတာတွေကို ပြောင်းလဲအသုံးပြုပါ။

(၃) System ထဲမှာ သိမ်းဆည်းထားတဲ့ အချက်အလက်တွေကို လုံခြုံစွာထားပါ။ Encryption လုပ်တာတွေ၊ masking လုပ်တာတွေနဲ့ အလွယ်တကူ access မလုပ်နိုင်၊ မမြင်နိုင်အောင် ကာကွယ်ထားပါ။

(၄) Cardholder တွေရဲ့ အချက်အလက်တွေကို network ကနေ ပေးပို့တဲ့အခါမှာ strong cryptography ကို အသုံးပြုပြီး ပေးပို့ပါ။

(၅) System နဲ့ network တွေ အားလုံးကို virus တွေ၊ malware တွေ ရန်ကနေ ကာကွယ်ပါ။

(၆) System နဲ့ software တွေကို secure ဖြစ်အောင် develop လုပ်ပြီး၊ ပုံမှန် maintain လုပ်ပါ။

(၇) System နဲ့ cardholder ရဲ့ အချက်အလက်တွေကို လုပ်ငန်းလိုအပ်ချက်အရ တကယ်သိဖို့ လိုအပ်တဲ့လူကိုပဲ access လုပ်ခွင့်ပေးပါ။ လိုအပ်တဲ့ permission တွေပဲ access ပေးပါ။

(၈) System ကို access လုပ်မယ့် user တိုင်းကို ဘယ်သူဘယ်ဝါလဲဆိုတာ သေချာ identify လုပ်ပြီးမှ အသုံးပြုခွင့်ကို authenticate လုပ်ပါ။

(၉) Cardholder တွေရဲ့ အချက်အလက်တွေ ထားရှိတဲ့ server ခန်းတွေ၊ data center တွေကို လူတိုင်း ဝင်ထွက်လို့ မရအောင် physically ကန့်သတ်ထားပါ။

(၁၀) System နဲ့ cardholder ရဲ့ အချက်အလက်တွေကို access ဝင်ကြည့်တာ၊ သုံးတာ အားလုံးကို log မှတ်ထားပါ။ Monitor လုပ်ပါ။

(၁၁) System တွေနဲ့ network security တွေကို လုံခြုံမှု ရှိမရှိ ပုံမှန် စမ်းသပ်စစ်ဆေးပါ။

(၁၂) Information security နဲ့ ပတ်သက်ပြီး ဝန်ထမ်းတွေအားလုံး လိုက်နာရမယ့် စည်းမျဉ်းစည်းကမ်း policy တွေ၊ အစီအစဉ် program တွေ ချမှတ်ပြီး စဉ်ဆက်မပြတ် ပံ့ပိုးပါ။

(40-day “Payments Made Simple” series ရဲ့ day 36 အတွက် ဖြစ်ပါတယ်။ Payments အကြောင်း၊ payment system တွေအကြောင်းကို လက်တွေ့ကျကျ တိုတိုရှင်းရှင်းနဲ့ တစ်နေ့တစ်ပုဒ် ဆက်ပြီး တင်ပေးပါမယ်။)
