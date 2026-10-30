---
title: "Day 17 - Merchant များ ဖြစ်လေ့ဖြစ်ထရှိတဲ့ ပြဿနာများ"
description: ""
pubDate: 2025-12-03
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

Merchant တွေအတွက် ငွေပေးချေမှု လက်ခံရမှာ ဖြစ်လေ့ဖြစ်ထရှိတဲ့ ပြဿနာလေးတွေကတော့

(၁) Merchant တွေဆီမှာ approved ဖြစ်ခဲ့တဲ့ transaction တွေအတွက် ငွေမဝင်တာပါ။ များသောအားဖြင့် settlement မှာ delay ကြောင့် ဖြစ်နိုင်ပါတယ်။ Settlement files တွေ process လုပ်ပြီးမပြီးနဲ့ cut-off လုပ်တဲ့ အချိန်တွေ စစ်ဆေးရပါမယ်။

(၂) ငွေပေးချေမှု တစ်ခုအတွက် ဝယ်သူဆီမှာ ငွေနှစ်ခါ ဖြတ်မိတာပါ။ ငွေပေးချေမှုလုပ်တဲ့ အချိန်မှာ timeout ဖြစ်သွားတာကြောင့် တစ်ကြိမ်ထက်ပိုပြီး ငွေပေးချေဖို့ reattempt တွေ လုပ်မိတာကြောင့် ဖြစ်နိုင်ပါတယ်။ Multiple attempt လုပ်မိတာအတွက် reversal ဖြစ်ထားတာ ရှိမရှိနဲ့ duplicate authorization လုပ်ခဲ့မိတာ ရှိမရှိ စစ်ဆေးရပါမယ်။

(၃) Transaction မအောင်မြင်ဘဲ ငွေပေးချေသူရဲ့ ကတ်၊ အကောင့်တွေထဲကနေ ပိုက်ဆံလျော့သွားတာပါ။ Issuer သို့မဟုတ် provider တွေဆီမှာ ငွေကို on-hold ဖြစ်နေတာ  ဖြစ်နိုင်ပါတယ်။ Reversals သို့မဟုတ် void လုပ်လိုက်ရင် အဆင်ပြေသွားတတ်ပါတယ်။

(၄) ဝယ်သူက QR scan ဖတ်လိုက်ပေမယ့် merchant ဆီမှာ ငွေပေးချေမှု အောင်မြင်ကြောင်း ပေါ်မလာတာပါ။ Callback နောက်ကျနေတာ ဖြစ်နိုင်ပါတယ်။ Provider system ရဲ့ notification logs တွေကို စစ်ဆေးကြည့်ပါ။

(၅) POS စက် လိုင်းမတက်တာပါ။ Merchant သို့ဟုတ် acquirer ဆီမှာ network ကွန်ရက် သို့မဟုတ် system issue ရှိနေတာကြောင့် ဖြစ်နိုင်ပါတယ်။ Network နဲ့ system တွေ ပုံမှန်အခြေအနေရှိမရှိ စစ်ဆေးကြည့်ပါ။

“Payments Made Simple” 40 day series - day 17 အတွက် ဖြစ်ပါတယ်။ Payments ဆိုင်ရာ အကြောင်းအရာတွေကို လက်တွေ့ကျကျ တိုတိုရှင်းရှင်းနဲ့ တစ်နေ့တစ်ပုဒ် ဆက်ပြီး တင်ပေးပါမယ်။ ထပ်ဖြည့်ပေးချင်တာ၊ ရေးစေချင်တာတွေ ရှိရင်လည်း comment မှာ ဆွေးနွေးပေးခဲ့ကြပါဦး။
