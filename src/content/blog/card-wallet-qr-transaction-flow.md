---
title: "Day 11 - ကတ်၊ Wallet နဲ့  MMQR Transaction Flow စီးဆင်းပုံ"
description: ""
pubDate: 2025-11-27
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

ငွေပေးချေမှုနည်းလမ်းတိုင်းမှာ ပုံမှန်အားဖြင့် request ၊ routing ၊ approval နဲ့ posting ဆိုတဲ့ အဆင့်တွေကို လုပ်ဆောင်ကြရပါတယ်။ ဒီတစ်ခါတော့ ကတ်နဲ့ QR payment တွေအတွက် ယေဘုယျ transaction flow ကို မျှဝေပေးပါမယ်။

**(၁) Card Payment Flow**

`Cardholder (Tap/Insert/Swipe) → Merchant POS → Acquirer → Card Network → Issuer`

ကတ်နဲ့ ငွေပေးချေတဲ့အခါမှာ merchant POS စက်ကနေပြီး transaction request ကို acquirer ဆီ ပို့ပေးပါတယ်။ အဲ့ဒီနောက် acquirer ကနေ card network ကိုဖြတ်ပြီး issuer ဆီ ပို့ပေးလိုက်ပါတယ်။ Issuer က ရရှိလာတဲ့ အချက်အလက်တွေကို စစ်ဆေးပြီး အသုံးပြုခွင့်ပြုမယ်၊ မပြုဘူးဆိုတာ ချက်ချင်း respond ပြန်ပေးပါတယ်။ ငွေပေးချေမှု အောင်မြင်ခဲ့ရင် cardholder က ဝယ်ယူတဲ့ပစ္စည်း ရပါပြီ။ Merchant အတွက် ငွေကတော့ clearing နဲ့ settlement တွေပြီးမှ ရမှာဖြစ်ပါတယ်။

**(၂) QR Payment Flow**

`Merchant POS (Display QR) → Payer App (Scan & Pay) → Issuer → National QR Switch → Acquirer → Merchant POS (Notify)`

National QR Switch (ဥပမာ - MMQR) လို မတူညီတဲ့ provider တွေကြား interoperate လုပ်နိုင်တဲ့ network အသုံးပြုထားတဲ့ wallet နဲ့ QR ငွေ‌ပေးချေမှုတွေမှာတော့ ပထမဆုံး အဆင့်အနေနဲ့ merchant POS ကနေ QR code ကို ထုတ်ပြီး customer ကို ပြပါတယ်။ Customer က wallet သို့မဟုတ် payment app ကနေ scan ဖတ်ပြီး ငွေပေးချေပါတယ်။ အဲ့ဒီမှာ issuer (wallet/payment app provider) ကနေ အသုံးပြုခွင့်ပြုမယ်၊ မပြုဘူး ဆုံးဖြတ်ပေးပါတယ်။ အဲ့ဒီ ဆုံးဖြတ်ချက် response ကို national QR switch ကနေတစ်ဆင့် acquirer ဆီ၊ acquirer ကနေတစ်ဆင့် merchant POS ဆီကို notify ပြန်လုပ်ပေးပါတယ်။ ဒါဆိုရင်တော့ customer အတွက် ငွေပေးချေခြင်း ပြီးဆုံးပါပြီ။ ကတ်နဲ့ငွေပေးချေတာမှာလိုပဲ merchant အတွက် ငွေကတော့ clearing နဲ့ settlement တွေပြီးမှ ရမှာဖြစ်ပါတယ်။

ဒီနေရာမှာ သိထားရမှာက အသုံးပြုတဲ့ network ကွန်ရက်၊ channel (ATM, POS, Ecommerce) နဲ့ payment service provider တွေအပေါ်မူတည်ပြီး transaction flow ဟာ အမြဲတမ်း တစ်သမတ်တည်း ဖြစ်နေမှာ မဟုတ်ပါဘူး။ ယေဘုယျ သဘောတရားကို သိထားခြင်းဖြင့် မတူညီတဲ့ ချိတ်ဆက်လုပ်ဆောင်မှုတွေကို ကိုင်တွ်တဲ့အခါမှာ အလွယ်တကူနားလည်နိုင်ဖို့ အထောက်အကူဖြစ်ပါလိမ့်မယ်။

“Payments Made Simple” 40 day series - day 11 အတွက် ဖြစ်ပါတယ်။ Payments ဆိုင်ရာ အကြောင်းအရာတွေကို လက်တွေ့ကျကျ တိုတိုရှင်းရှင်းနဲ့ တစ်နေ့တစ်ပုဒ် ဆက်ပြီး တင်ပေးပါမယ်။ ထပ်ဖြည့်ပေးချင်တာ၊ ရေးစေချင်တာတွေ ရှိရင်လည်း comment မှာ ဆွေးနွေးပေးခဲ့ကြပါဦး။
