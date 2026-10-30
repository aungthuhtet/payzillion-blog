---
title: "Day 23 - Card Payment Transaction များကို Trace လုပ်ခြင်း"
description: ""
pubDate: 2025-12-09
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

Card payment transaction တွေကို စစ်ဆေးတဲ့အခါမှာ transaction flow ရဲ့ ဘယ်နေရာမှာ ပြဿနာရှိသလဲဆိုတာ သိရအောင် transaction journey အတိုင်း စစ်ကြည့်နိုင်ပါတယ်။

(၁) ငွေပေးချေလို့ မရဘူးလို့ complaint ရတဲ့အခါမှာ cardholder က ဘယ်နေ့ ဘယ်ရက် ဘယ်အချိန်မှာ ဘာ transaction လုပ်ခဲ့တာလဲ၊ ဘယ်လိုလုပ်ခဲ့တာလဲဆိုတဲ့ cardholder action ကို အရင်ဆုံး သိအောင် မေးရပါမယ်၊ confirm လုပ်ရပါမယ်။

(၂) ပြီးတော့ merchant ရဲ့ POS စက်၊ ecommerce app တွေကနေ transaction request ကို acquirer ဆီ ပို့လိုက်နိုင်ရဲ့လားဆိုတာ စစ်ဆေးရပါမယ်။ Transaction failure တော်တော်များများမှာ POS စက် နဲ့ merchant app တွေကနေ transaction ကို ပို့မပေးနိုင်တာကြောင့် ဖြစ်တတ်ပါတယ်။

(၃) အဲ့ဒီနောက် ကိုယ်က acquire side မှာဆို acquirer ကနေ card scheme ဆီ transaction ပို့လိုက်နိုင်သလား၊ issuer side မှာဆို card scheme ကနေ transaction ကို လက်ခံရရှိထားသလား စစ်ဆေးရပါမယ်။ Transaction ကို မပို့လိုက်နိုင်ဘူး သို့မဟုတ် မရထားဘူးဆိုရင် configuration ကြောင့်နဲ့ connectivity တွေကြောင့် ဖြစ်နိုင်ပါတယ်။

(၄) နောက်ဆုံးမှာတော့ issuer ရဲ့ decision ကို စစ်ရမှာ ဖြစ်ပါတယ်။ Issuer ဆီကနေ approve သို့မဟုတ် decline လုပ်တဲ့ transaction response ကို ပြန်ပေးထားသလား၊ ရထားသလားစစ်ပါ။ Issuer ဆီက decline ဖြစ်ထားတဲ့ transaction တွေအတွက် response code ကို ကြည့်ပြီး ဘာကြောင့် transaction failure ဖြစ်သလဲဆိုတာကို သိနိုင်ပါတယ်။

Transaction အဆင့်တိုင်းမှာ လိုက်ကြည့်မယ်ဆိုရင် flow ဘယ်နေရာမှာ ပြတ်သွားသလဲ၊ ဘာကြောင့်လဲဆိုတာ သိရမှာ ဖြစ်ပါတယ်။

(40-day “Payments Made Simple” series ရဲ့ day 23 အတွက် ဖြစ်ပါတယ်။ Payments ဆိုင်ရာ အကြောင်းအရာတွေကို လက်တွေ့ကျကျ တိုတိုရှင်းရှင်းနဲ့ တစ်နေ့တစ်ပုဒ် ဆက်ပြီး တင်ပေးပါမယ်။)
