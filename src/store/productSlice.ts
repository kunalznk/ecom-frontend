import { createAsyncThunk, createSlice, current, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";
import axios from "axios";

import api from "../api"
import { productType } from "../utils/schema/product";

const testProducts = [
    
    {
        "title": "realme Narzo 50i Dual-SIM 32GB ROM + 2GB RAM (Only GSM | No CDMA) Factory Unlocked 4G/LTE Smartphone (Mint Green) - International Version",
        "description": " The Realme Narzo 50i is powered by 1.6 GHz Octa-core processor and it comes with 2GB of RAM. The Realme Narzo 50i packs 32GB of internal storage that can be expanded via microSDXC (uses shared SIM slot).The Realme Narzo 50i runs Android 11 and is powered by a Li-Po 5000 mAh, non-removable battery.  FREQUENCIES : COMPATIBLE TO USE WITH NETWORK SIM CARDS THAT WORKS ONSIM CARD 1:2G : GSM 850 / 900 / 1800 / 1900 and/or3G : HSDPA 850 / 900 / 2100 and/or4G : LTE 850(B5) / 900(B8) / 1800(B3) / 2100(B1) / 2300(B40) / 2500(B41) / 2600(B38) SIM CARD 2 :2G : GSM 850 / 900 / 1800 / 1900 and/or3G : HSDPA 850 / 900 / 2100 and/or4G : LTE 850(B5) / 900(B8) / 1800(B3) / 2100(B1) / 2300(B40) / 2500(B41) / 2600(B38)   IMPORTANT : PLEASE CHECK WITH YOUR NETWORK PROVIDER FOR COMPATIBILITY CHECK BEFORE YOU PURCHASE.",
        "feature_bullets": [
            " For USA Buyers: This Smartphone is not compatible/will not work with any CDMA Networks including: VERIZON, SPRINT, US CELLULAR. Please check with your network provider for 3G or 4G/LTE compatibility check before you purchase.",
            " Dual-SIM, Network Compatibility, SIM CARD 1: [2G : GSM 850 / 900 / 1800 / 1900 and/or 3G : HSDPA 850 / 900 / 2100 and/or 4G : LTE 850(B5) / 900(B8) / 1800(B3) / 2100(B1) / 2300(B40) / 2500(B41) / 2600(B38) ] SIM CARD 2: [2G : GSM 850 / 900 / 1800 / 1900]",
            " 6.5 inches, IPS LCD, 720 x 1600 pixels",
            " 32GB Storage, 2GB RAM, microSDXC (dedicated slot)",
            " Android 11, Realme Go UI, Octa-core 1.6 GHz",
            " 8 MP, f/2.0, (wide), AF, Front, 5 MP, f/2.2, (wide)"
        ],
        "variants": [],
        "categories": [
            {
                "category": "Cell Phones & Accessories",
                "url": "https://www.amazon.com/cell-phones-service-plans-accessories/b/ref=dp_bc_aui_C_1/134-1394475-2622060?ie=UTF8&node=2335752011"
            },
            {
                "category": "Cell Phones",
                "url": "https://www.amazon.com/cell-phone-devices/b/ref=dp_bc_aui_C_2/134-1394475-2622060?ie=UTF8&node=7072561011"
            }
        ],
        "url": "https://www.amazon.com/dp/B09FKDH6FS",
        "reviews": {
            "total_reviews": 9250,
            "rating": "",
            "answered_questions": 0
        },
        "item_available": true,
        "price": {
            "symbol": "$",
            "currency": "USD",
            "current_price": 9999,
            "discounted": false,
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "main_image": "https://m.media-amazon.com/images/I/81QqVNKWtML._AC_SL1500_.jpg",
        "total_images": 7,
        "images": [
            "https://m.media-amazon.com/images/I/81QqVNKWtML._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71WyCkbWC-L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71I8MlQY1yL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61VVrddhRQL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/6196s7Xn4lL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/51b7dcc2OLL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/41NBANeRIeL._AC_SL1500_.jpg"
        ],
        "product_information": {
            "dimensions": "",
            "weight": "",
            "available_from": "",
            "available_from_utc": "",
            "available_for_months": 0,
            "available_for_days": 0,
            "manufacturer": "",
            "model_number": "",
            "department": "",
            "qty_per_order": "na",
            "store_id": "",
            "brand": "Visit the realme Store"
        }
    },
    {
        "title": "realme Narzo 50 Dual-Sim 64GB ROM + 4GB RAM (GSM only | No CDMA) Factory Unlocked 4G/LTE Smartphone (Blue) - International Version",
        "description": " The Realme Narzo 50 is powered by 2.05 GHz Octa-core processor and it comes with 4GB of RAM. The Realme Narzo 50 packs 64GB of internal storage that can be expanded via microSDXC (dedicated slot).The Realme Narzo 50 runs Android 11 and is powered by a 5000mAh non-removable battery.  FREQUENCIES : COMPATIBLE TO USE WITH NETWORK SIM CARDS THAT WORKS ONSIM CARD 1:2G : GSM 850 / 900 / 1800 / 1900 and/or3G : WCDMA 850(B5) / 900(B8) / 1900(B2) / 2100(B1) and/or4G : FDD-LTE 850(B5) / 900(B8) / 1800(B3) / 2100(B1) : TDD-LTE 2300(B40) / 2500(B41) / 2600(B38)SIM CARD 2:2G : GSM 850 / 900 / 1800 / 1900 and/or3G : WCDMA 850(B5) / 900(B8) / 1900(B2) / 2100(B1) and/or4G : FDD-LTE 850(B5) / 900(B8) / 1800(B3) / 2100(B1) : TDD-LTE 2300(B40) / 2500(B41) / 2600(B38)  IMPORTANT : PLEASE CHECK WITH YOUR NETWORK PROVIDER FOR COMPATIBILITY CHECK BEFORE YOU PURCHASE.",
        "feature_bullets": [
            " For USA Buyers: This Smartphone is not compatible/will not work with any CDMA Networks including: VERIZON, SPRINT, US CELLULAR. Please check with your network provider for 3G or 4G/LTE compatibility check before you purchase.",
            " Dual-SIM, Network Compatibility, SIM CARD 1 & 2 : [2G : GSM GSM 850 / 900 / 1800 / 1900 and/or 3G : WCDMA 850(B5) / 900(B8) / 1900(B2) / 2100(B1) and/or 4G : FDD-LTE 850(B5) / 900(B8) / 1800(B3) / 2100(B1) TDD-LTE 2300(B40) / 2500(B41) / 2600(B38)]",
            " 6.6 inches, IPS LCD, 1080 x 2412 pixels",
            " 64GB Storage, 4GB RAM, microSDXC (dedicated slot)",
            " Android 11, Mediatek Helio G96 (12 nm), Octa-core (2x2.05 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)",
            " 50 MP, f/1.8, 26mm (wide), 1/2.76\", 0.64µm, PDAF 2 MP, f/2.4, (macro) 2 MP, f/2.4, (depth), Front: 16 MP, f/2.1, (wide), 1/3.0\", 1.0µm"
        ],
        "variants": [],
        "categories": [
            {
                "category": "Cell Phones & Accessories",
                "url": "https://www.amazon.com/cell-phones-service-plans-accessories/b/ref=dp_bc_aui_C_1/139-4087987-6850336?ie=UTF8&node=2335752011"
            },
            {
                "category": "Cell Phones",
                "url": "https://www.amazon.com/cell-phone-devices/b/ref=dp_bc_aui_C_2/139-4087987-6850336?ie=UTF8&node=7072561011"
            }
        ],
        "url": "https://www.amazon.com/dp/B09RMQYHLH",
        "reviews": {
            "total_reviews": 6188,
            "rating": "",
            "answered_questions": 0
        },
        "item_available": true,
        "price": {
            "symbol": "$",
            "currency": "USD",
            "current_price": 9999,
            "discounted": false,
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "main_image": "https://m.media-amazon.com/images/I/81gRC3KTeaL._AC_SL1500_.jpg",
        "total_images": 8,
        "images": [
            "https://m.media-amazon.com/images/I/81gRC3KTeaL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81coFqgof2L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61zP4Q3343L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61d5ZLuC2SL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/5199G5Uap1L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/51LSBbze1iL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/513ZuJCk+1L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/51t1ggvZoXL._AC_SL1500_.jpg"
        ],
        "product_information": {
            "dimensions": "",
            "weight": "",
            "available_from": "",
            "available_from_utc": "",
            "available_for_months": 0,
            "available_for_days": 0,
            "manufacturer": "",
            "model_number": "",
            "department": "",
            "qty_per_order": "na",
            "store_id": "",
            "brand": "Visit the realme Store"
        }
    },
    {
        "title": "realme Narzo 50i Dual-SIM 32GB ROM + 2GB RAM (Only GSM | No CDMA) Factory Unlocked 4G/LTE Smartphone (Carbon Black) - International Version",
        "description": " The Realme Narzo 50i is powered by 1.6 GHz Octa-core processor and it comes with 2GB of RAM. The Realme Narzo 50i packs 32GB of internal storage that can be expanded via microSDXC (uses shared SIM slot).The Realme Narzo 50i runs Android 11 and is powered by a Li-Po 5000 mAh, non-removable battery.  FREQUENCIES : COMPATIBLE TO USE WITH NETWORK SIM CARDS THAT WORKS ONSIM CARD 1:2G : GSM 850 / 900 / 1800 / 1900 and/or3G : HSDPA 850 / 900 / 2100 and/or4G : LTE 850(B5) / 900(B8) / 1800(B3) / 2100(B1) / 2300(B40) / 2500(B41) / 2600(B38) SIM CARD 2 :2G : GSM 850 / 900 / 1800 / 1900 and/or3G : HSDPA 850 / 900 / 2100 and/or4G : LTE 850(B5) / 900(B8) / 1800(B3) / 2100(B1) / 2300(B40) / 2500(B41) / 2600(B38)   IMPORTANT : PLEASE CHECK WITH YOUR NETWORK PROVIDER FOR COMPATIBILITY CHECK BEFORE YOU PURCHASE.",
        "feature_bullets": [
            " For USA Buyers: This Smartphone is not compatible/will not work with any CDMA Networks including: VERIZON, SPRINT, US CELLULAR. Please check with your network provider for 3G or 4G/LTE compatibility check before you purchase.",
            " Dual-SIM, Network Compatibility, SIM CARD 1: [2G : GSM 850 / 900 / 1800 / 1900 and/or 3G : HSDPA 850 / 900 / 2100 and/or 4G : LTE 850(B5) / 900(B8) / 1800(B3) / 2100(B1) / 2300(B40) / 2500(B41) / 2600(B38) ] SIM CARD 2: [2G : GSM 850 / 900 / 1800 / 1900]",
            " 6.5 inches, IPS LCD, 720 x 1600 pixels",
            " 32GB Storage, 2GB RAM, microSDXC (dedicated slot)",
            " Android 11, Realme Go UI, Octa-core 1.6 GHz",
            " 8 MP, f/2.0, (wide), AF, Front, 5 MP, f/2.2, (wide)"
        ],
        "variants": [],
        "categories": [
            {
                "category": "Cell Phones & Accessories",
                "url": "https://www.amazon.com/cell-phones-service-plans-accessories/b/ref=dp_bc_aui_C_1/133-0187618-4524635?ie=UTF8&node=2335752011"
            },
            {
                "category": "Cell Phones",
                "url": "https://www.amazon.com/cell-phone-devices/b/ref=dp_bc_aui_C_2/133-0187618-4524635?ie=UTF8&node=7072561011"
            }
        ],
        "url": "https://www.amazon.com/dp/B09FKGDJNC",
        "reviews": {
            "total_reviews": 4972,
            "rating": "",
            "answered_questions": 0
        },
        "item_available": true,
        "price": {
            "symbol": "$",
            "currency": "USD",
            "current_price": 175,
            "discounted": false,
            "before_price": 175,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "main_image": "https://m.media-amazon.com/images/I/81HJ4pkOsiL._AC_SL1500_.jpg",
        "total_images": 7,
        "images": [
            "https://m.media-amazon.com/images/I/81HJ4pkOsiL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71s10yDrWbL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71DJvFUGWHL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71e+8v9B3mL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71mHwDN3SGL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/51Z0k1o1B9L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/41QUHweLrML._AC_SL1500_.jpg"
        ],
        "product_information": {
            "dimensions": "",
            "weight": "",
            "available_from": "",
            "available_from_utc": "",
            "available_for_months": 0,
            "available_for_days": 0,
            "manufacturer": "",
            "model_number": "",
            "department": "",
            "qty_per_order": "na",
            "store_id": "",
            "brand": "Visit the realme Store"
        }
    },
    {
        "title": "realme Narzo 50 Dual-Sim 128GB ROM + 6GB RAM (GSM only | No CDMA) Factory Unlocked 4G/LTE Smartphone (Blue) - International Version",
        "description": " The Realme Narzo 50 is powered by 2.05 GHz Octa-core processor and it comes with 6GB of RAM. The Realme Narzo 50 packs 128GB of internal storage that can be expanded via microSDXC (dedicated slot).The Realme Narzo 50 runs Android 11 and is powered by a 5000mAh non-removable battery.  FREQUENCIES : COMPATIBLE TO USE WITH NETWORK SIM CARDS THAT WORKS ONSIM CARD 1:2G : GSM 850 / 900 / 1800 / 1900 and/or3G : WCDMA 850(B5) / 900(B8) / 1900(B2) / 2100(B1) and/or4G : FDD-LTE 850(B5) / 900(B8) / 1800(B3) / 2100(B1) : TDD-LTE 2300(B40) / 2500(B41) / 2600(B38)SIM CARD 2:2G : GSM 850 / 900 / 1800 / 1900 and/or3G : WCDMA 850(B5) / 900(B8) / 1900(B2) / 2100(B1) and/or4G : FDD-LTE 850(B5) / 900(B8) / 1800(B3) / 2100(B1) : TDD-LTE 2300(B40) / 2500(B41) / 2600(B38)  IMPORTANT : PLEASE CHECK WITH YOUR NETWORK PROVIDER FOR COMPATIBILITY CHECK BEFORE YOU PURCHASE.",
        "feature_bullets": [
            " For USA Buyers: This Smartphone is not compatible/will not work with any CDMA Networks including: VERIZON, SPRINT, US CELLULAR. Please check with your network provider for 3G or 4G/LTE compatibility check before you purchase.",
            " Dual-SIM, Network Compatibility, SIM CARD 1 & 2 : [2G : GSM GSM 850 / 900 / 1800 / 1900 and/or 3G : WCDMA 850(B5) / 900(B8) / 1900(B2) / 2100(B1) and/or 4G : FDD-LTE 850(B5) / 900(B8) / 1800(B3) / 2100(B1) TDD-LTE 2300(B40) / 2500(B41) / 2600(B38)]",
            " 6.6 inches, IPS LCD, 1080 x 2412 pixels",
            " 128GB Storage, 6GB RAM, microSDXC (dedicated slot)",
            " Android 11, Mediatek Helio G96 (12 nm), Octa-core (2x2.05 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)",
            " 50 MP, f/1.8, 26mm (wide), 1/2.76\", 0.64µm, PDAF 2 MP, f/2.4, (macro) 2 MP, f/2.4, (depth), Front: 16 MP, f/2.1, (wide), 1/3.0\", 1.0µm"
        ],
        "variants": [],
        "categories": [
            {
                "category": "Cell Phones & Accessories",
                "url": "https://www.amazon.com/cell-phones-service-plans-accessories/b/ref=dp_bc_aui_C_1/133-0784898-4689349?ie=UTF8&node=2335752011"
            },
            {
                "category": "Cell Phones",
                "url": "https://www.amazon.com/cell-phone-devices/b/ref=dp_bc_aui_C_2/133-0784898-4689349?ie=UTF8&node=7072561011"
            }
        ],
        "url": "https://www.amazon.com/dp/B09RN24CY6",
        "reviews": {
            "total_reviews": 2088,
            "rating": "",
            "answered_questions": 0
        },
        "item_available": true,
        "price": {
            "symbol": "$",
            "currency": "USD",
            "current_price": 159.99,
            "discounted": false,
            "before_price": 159.99,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "main_image": "https://m.media-amazon.com/images/I/81gRC3KTeaL._AC_SL1500_.jpg",
        "total_images": 8,
        "images": [
            "https://m.media-amazon.com/images/I/81gRC3KTeaL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/81coFqgof2L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61zP4Q3343L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61d5ZLuC2SL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/5199G5Uap1L._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/51LSBbze1iL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/51t1ggvZoXL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/513ZuJCk+1L._AC_SL1500_.jpg"
        ],
        "product_information": {
            "dimensions": "",
            "weight": "",
            "available_from": "",
            "available_from_utc": "",
            "available_for_months": 0,
            "available_for_days": 0,
            "manufacturer": "",
            "model_number": "",
            "department": "",
            "qty_per_order": "na",
            "store_id": "",
            "brand": "Visit the realme Store"
        }
    },
    {
        "title": "realme Narzo 50 Pro 5G Dual-SIM 128GB ROM + 6GB RAM (GSM only | No CDMA) Factory Unlocked 5G Smartphone (Hyper Black) - International Version",
        "description": " The Realme Narzo 50 Pro 5G is powered by 2.5 GHz Octa-core processor and it comes with 6GB of RAM. The Realme Narzo 50 Pro 5G packs 128GB of internal storage that cannot be expanded.The Realme Narzo 50 Pro 5G runs Android 12 and is powered by a 5000mAh non-removable battery.  FREQUENCIES : COMPATIBLE TO USE WITH NETWORK SIM CARDS THAT WORKS ONSIM CARD 1 :2G : GSM 850 / 900 / 1800 / 1900 and/or3G : HSDPA 800 / 850 / 900 / 1700(AWS) / 1900 / 2100 and/or4G : FDD-LTE 700(B28) / 850(B5) / 900(B8) / 1700|2100(B4) / 1800(B3) / 1900(B2) / 2100(B1) / 2600(B7) : TDD-LTE 1900(B39) / 2000(B34) / 2300(B40) / 2500(B41) / 2600(B38) and/or5G : 1/28/41/77/78/SA/NSASIM CARD 2 :2G : GSM 850 / 900 / 1800 / 1900 and/or3G : HSDPA 800 / 850 / 900 / 1700(AWS) / 1900 / 2100 and/or4G : FDD-LTE 700(B28) / 850(B5) / 900(B8) / 1700|2100(B4) / 1800(B3) / 1900(B2) / 2100(B1) / 2600(B7) : TDD-LTE 1900(B39) / 2000(B34) / 2300(B40) / 2500(B41) / 2600(B38) and/or5G : 1/28/41/77/78/SA/NSA  IMPORTANT : PLEASE CHECK WITH YOUR NETWORK PROVIDER FOR COMPATIBILITY CHECK BEFORE YOU PURCHASE.",
        "feature_bullets": [
            " For USA Buyers: This Smartphone is not compatible/will not work with any CDMA Networks including: VERIZON, SPRINT, US CELLULAR. Please check with your network provider for 3G or 4G/LTE compatibility check before you purchase.",
            " Dual-SIM, Network Compatibility, SIM CARD 1 & 2 : [2G : GSM 850 / 900 / 1800 / 1900 and/or 3G : HSDPA 800 / 850 / 900 / 1700(AWS) / 1900 / 2100 and/or 4G : FDD-LTE 700(B28) / 850(B5) / 900(B8) / 1700|2100(B4) / 1800(B3) / 1900(B2) / 2100(B1) / 2600(B7) : TDD-LTE 1900(B39) / 2000(B34) / 2300(B40) / 2500(B41) / 2600(B38) and/or 5G : 1/28/41/77/78/SA/NSA]",
            " 6.4 inches, Super AMOLED, 1080 x 2400 pixels, Corning Gorilla Glass 5",
            " 128GB Storage, 6GB RAM",
            " Android 12, MediaTek Dimensity 920 (6 nm), Octa-core (2x2.5 GHz Cortex-A78 & 6x2.0 GHz Cortex-A55)",
            " 48 MP, f/1.8, 26mm (wide), 1/2.0\", 0.8µm, PDAF, 8 MP, f/2.2, 120˚ (ultrawide), 1/4\", 1.12µm, 2 MP, f/2.4, (macro), Front, 16 MP, f/2.4, 26mm (wide)"
        ],
        "variants": [],
        "categories": [
            {
                "category": "Cell Phones & Accessories",
                "url": "https://www.amazon.com/cell-phones-service-plans-accessories/b/ref=dp_bc_aui_C_1/147-6076631-0165861?ie=UTF8&node=2335752011"
            },
            {
                "category": "Cell Phones",
                "url": "https://www.amazon.com/cell-phone-devices/b/ref=dp_bc_aui_C_2/147-6076631-0165861?ie=UTF8&node=7072561011"
            }
        ],
        "url": "https://www.amazon.com/dp/B09ZBG7J7F",
        "reviews": {
            "total_reviews": 2194,
            "rating": "",
            "answered_questions": 0
        },
        "item_available": true,
        "price": {
            "symbol": "$",
            "currency": "USD",
            "current_price": 9999,
            "discounted": false,
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "main_image": "https://m.media-amazon.com/images/I/8129V02wQuL._AC_SL1500_.jpg",
        "total_images": 8,
        "images": [
            "https://m.media-amazon.com/images/I/8129V02wQuL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71vEiwAteAL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71uTsPjZJNL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/711y8So81AL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71J5zLB36uL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/71f8jquOuXL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61T7w2DQbDL._AC_SL1500_.jpg",
            "https://m.media-amazon.com/images/I/61DJ8W9jFcL._AC_SL1500_.jpg"
        ],
        "product_information": {
            "dimensions": "",
            "weight": "",
            "available_from": "",
            "available_from_utc": "",
            "available_for_months": 0,
            "available_for_days": 0,
            "manufacturer": "",
            "model_number": "",
            "department": "",
            "qty_per_order": "na",
            "store_id": "",
            "brand": "Visit the realme Store"
        }
    }
,
    {
        "title": "SIRIL Women's Georgette Floral Printed Saree with Blouse",
        "description": "",
        "feature_bullets": [
            " Georgette",
            " Dry Clean Only",
            " Saree Fabric: Georgette | Blouse Fabric: Georgette",
            " Length:: Saree: 5.30Mtr | Blouse: 0.70Mtr, Which Need To Be Stitched As Per Size And Fit",
            " Colour:: Saree Color: Purple | Blouse Color: Purple",
            " Work:: Saree: Floral Printed | Blouse: Printed",
            " Do Not Bleach; Dry in Shade; Dry Clean"
        ],
        "variants": [],
        "categories": [
            {
                "category": "Clothing, Shoes & Jewelry",
                "url": "https://www.amazon.com/amazon-fashion/b/ref=dp_bc_aui_C_1/143-3819409-8161030?ie=UTF8&node=7141123011"
            },
            {
                "category": "Women",
                "url": "https://www.amazon.com/Womens-Fashion/b/ref=dp_bc_aui_C_2/143-3819409-8161030?ie=UTF8&node=7147440011"
            },
            {
                "category": "Clothing",
                "url": "https://www.amazon.com/Womens-Clothing/b/ref=dp_bc_aui_C_3/143-3819409-8161030?ie=UTF8&node=1040660"
            },
            {
                "category": "Tops, Tees & Blouses",
                "url": "https://www.amazon.com/Womens-Tops-Tees/b/ref=dp_bc_aui_C_4/143-3819409-8161030?ie=UTF8&node=2368343011"
            },
            {
                "category": "Blouses & Button-Down Shirts",
                "url": "https://www.amazon.com/Womens-Shirts/b/ref=dp_bc_aui_C_5/143-3819409-8161030?ie=UTF8&node=2368365011"
            }
        ],
        "url": "https://www.amazon.com/dp/B098QM6N71",
        "reviews": {
            "total_reviews": 436,
            "rating": "",
            "answered_questions": 0
        },
        "item_available": true,
        "price": {
            "symbol": "$",
            "currency": "USD",
            "current_price": 38.57,
            "discounted": false,
            "before_price": 38.57,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "main_image": "https://m.media-amazon.com/images/I/71nJsZGi5uS._AC_UL1500_.jpg",
        "total_images": 5,
        "images": [
            "https://m.media-amazon.com/images/I/71nJsZGi5uS._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/71FF2xfV9vS._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/710c2WXy5fS._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/71GagivqNAS._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/61K4KOc6GFS._AC_UL1500_.jpg"
        ],
        "product_information": {
            "dimensions": "",
            "weight": "",
            "available_from": "",
            "available_from_utc": "",
            "available_for_months": 0,
            "available_for_days": 0,
            "manufacturer": "",
            "model_number": "",
            "department": "",
            "qty_per_order": 10,
            "store_id": "",
            "brand": "Brand: SIRIL"
        }
    },
    {
        "title": "ANANT DESIGNER STUDIO women's Soft Satin Silk Plain Saree With Art Silk Digital Printed Unstiched Designer Blouse",
        "description": " Explore the collection of beautifully designed Saree from ANANT DESIGNER STUDIO on Amazon. Each piece is elegantly crafted and will surely add to your wardrobe. Pair this piece with heels or flats for a graceful look.",
        "feature_bullets": [
            " Satin",
            " No Closure closure",
            " Dry Clean Only",
            " Saree details - Light Purple | Saree material – Soft Satin Silk | Saree length - 5.5 Meters | Saree Print – Solid | Saree work type - Plain saree",
            " Blouse detail- Multi Colour | Blouse material – Art Silk with Zari Weaving | Blouse length – 0.80 Meter | Blouse Print – Floral | Blouse work type – Digital Print",
            " Border &Pallu details- No border and solid fully plain pallu|Border work type – No border, No pico|Pallucolor- Same as saree colour |Pallu Style – Solid |Pallu work type – Solid",
            " Wash Care: Dry clean only for saree For Blouse piece: Handwash",
            " Weave type- Banarasi | Included components – 1 palin satin saree with 1 unstitched blouse piece"
        ],
        "variants": [
            {
                "asin": "B09DGH7MQG",
                "images": [],
                "title": "Black",
                "link": "https://www.amazon.com/dp/B09DGH7MQG/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            },
            {
                "asin": "B09GRQJFP8",
                "images": [],
                "title": "Grey",
                "link": "https://www.amazon.com/dp/B09GRQJFP8/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            },
            {
                "asin": "B093BQ5D2S",
                "images": [],
                "title": "Light Green",
                "link": "https://www.amazon.com/dp/B093BQ5D2S/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            },
            {
                "asin": "B093BQP3D2",
                "images": [],
                "title": "Light Purple",
                "link": "https://www.amazon.com/dp/B093BQP3D2/?th=1&psc=1",
                "is_current_product": true,
                "price": ""
            },
            {
                "asin": "B093BQ137H",
                "images": [],
                "title": "Maroon",
                "link": "https://www.amazon.com/dp/B093BQ137H/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            },
            {
                "asin": "B0993TY2YS",
                "images": [],
                "title": "Morpich",
                "link": "https://www.amazon.com/dp/B0993TY2YS/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            },
            {
                "asin": "B09DGGXJQR",
                "images": [],
                "title": "Olive Green",
                "link": "https://www.amazon.com/dp/B09DGGXJQR/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            },
            {
                "asin": "B0993T9KYJ",
                "images": [],
                "title": "Pink",
                "link": "https://www.amazon.com/dp/B0993T9KYJ/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            },
            {
                "asin": "B09GRHP1NF",
                "images": [],
                "title": "Purple",
                "link": "https://www.amazon.com/dp/B09GRHP1NF/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            }
        ],
        "categories": [
            {
                "category": "Clothing, Shoes & Jewelry",
                "url": "https://www.amazon.com/amazon-fashion/b/ref=dp_bc_aui_C_1/146-2155580-9080666?ie=UTF8&node=7141123011"
            },
            {
                "category": "Novelty & More",
                "url": "https://www.amazon.com/Novelty-Fashion/b/ref=dp_bc_aui_C_2/146-2155580-9080666?ie=UTF8&node=7147445011"
            },
            {
                "category": "Clothing",
                "url": "https://www.amazon.com/Novelty-Clothing-and-More/b/ref=dp_bc_aui_C_3/146-2155580-9080666?ie=UTF8&node=12035955011"
            },
            {
                "category": "Novelty",
                "url": "https://www.amazon.com/Novelty-Clothing/b/ref=dp_bc_aui_C_4/146-2155580-9080666?ie=UTF8&node=9103696011"
            },
            {
                "category": "Women",
                "url": "https://www.amazon.com/Womens-Novelty-Clothing/b/ref=dp_bc_aui_C_5/146-2155580-9080666?ie=UTF8&node=9056921011"
            },
            {
                "category": "Dresses",
                "url": "https://www.amazon.com/Womens-Novelty-Dresses/b/ref=dp_bc_aui_C_6/146-2155580-9080666?ie=UTF8&node=9056931011"
            }
        ],
        "url": "https://www.amazon.com/dp/B093BQP3D2",
        "reviews": {
            "total_reviews": 625,
            "rating": "",
            "answered_questions": 0
        },
        "item_available": true,
        "price": {
            "symbol": "$",
            "currency": "USD",
            "current_price": 20,
            "discounted": false,
            "before_price": 20,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "main_image": "https://m.media-amazon.com/images/I/71kIKbuDu9S._AC_UL1500_.jpg",
        "total_images": 6,
        "images": [
            "https://m.media-amazon.com/images/I/71kIKbuDu9S._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/71hIM3hNIXS._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/71SnBJxj-US._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/71sG5GUNwNS._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/914hbYswSQS._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/91ebUkwNK8S._AC_UL1500_.jpg"
        ],
        "product_information": {
            "dimensions": "",
            "weight": "",
            "available_from": "",
            "available_from_utc": "",
            "available_for_months": 0,
            "available_for_days": 0,
            "manufacturer": "",
            "model_number": "",
            "department": "",
            "qty_per_order": 5,
            "store_id": "",
            "brand": "Brand: ANANT DESIGNER STUDIO"
        }
    },
    {
        "title": "SWORNOF Women's Lucknowi Chikankari Linen Cotton Woven Sarees with Blouse Wedding",
        "description": " Explore the collection of beautifully designed sarees from \"SWORNOFon Amazon. Each piece is elegantly crafted and will surely add to your wardrobe. Pair this piece with heels or flats for a graceful look.Sarees are not just cloth to be draped around your waist, they are much more than that. With thousands of years of Indian traditions woven in, the saree has been popular through the ages for its ability to redefine elegance and accentuates the wearer's femininity. This season your look gets better definition with just a little attention to detail. Sarees offers affordable, high-quality sarees online, bringing you sarees for women's latest designs with new collections every month. If you are looking for designer sarees for women's New sarees for women, Bollywood sarees, saree with blouse or casual daily wear sarees, Devangi Fashionwill cater to your need and help you look your best. Our Jacquard printed Kanjivaram sarees daily wear are known for high-quality printing waves with vibrant colors and latest designs.We offer all kinds of ARt silk sarees below 500 and sarees below 1000 1500 cotton sarees for women, polycotton sarees, art silk sarees, bhagalpuri silk sarees for women, cotton silk sarees, handloom cotton sarees, south cotton sarees. Featuring an eye-catching print, this designer saree will lend you a look worth flaunting. This saree will present you more glamorous and beautiful to your peers than ever. Made from art silk, this printed saree features abstract geometric prints all over the body and pallu of the sareeIf you have a puja at home or some other festive occasion, this saree will surely make you stand out in the crowd. These saris lend a very formal and proper look because of the stiff fabric. these sarees are most preferred for the festive because of the lightweight, they can be worn in all four seasons. This saree is crafted by skill craftsmen without compromising on its quality. With this beautiful design and fabric, this saree will fetch you oo",
        "feature_bullets": [
            " Cotton linen",
            " Dry Clean Only",
            " Material : Soft Cotton",
            " Design : Lucknowi Chikankari Hand Weaving Work",
            " Features : Saree With Blouse Piece",
            " Style : The Texture And Weight Of The Saree Brings Image Prints One Step Closer To The Originals And Invites Attention",
            " Occasion : Sarees for women, festive, traditional saree. Best birth-day gift for your loved ones. Each piece is elegantly crafted and will surely add to your wardrobe"
        ],
        "variants": [
            {
                "asin": "B099NDSX4P",
                "images": [],
                "title": "Gray",
                "link": "https://www.amazon.com/dp/B099NDSX4P/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            },
            {
                "asin": "B099NDZJQW",
                "images": [],
                "title": "Peach",
                "link": "https://www.amazon.com/dp/B099NDZJQW/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            },
            {
                "asin": "B099NFLNW7",
                "images": [],
                "title": "Pink",
                "link": "https://www.amazon.com/dp/B099NFLNW7/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            },
            {
                "asin": "B099NGMCHP",
                "images": [],
                "title": "Sea Green",
                "link": "https://www.amazon.com/dp/B099NGMCHP/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            },
            {
                "asin": "B09GHJSQL4",
                "images": [],
                "title": "Grays Blue",
                "link": "https://www.amazon.com/dp/B09GHJSQL4/?th=1&psc=1",
                "is_current_product": true,
                "price": ""
            }
        ],
        "categories": [
            {
                "category": "Clothing, Shoes & Jewelry",
                "url": "https://www.amazon.com/amazon-fashion/b/ref=dp_bc_aui_C_1/147-5423017-3478600?ie=UTF8&node=7141123011"
            },
            {
                "category": "Novelty & More",
                "url": "https://www.amazon.com/Novelty-Fashion/b/ref=dp_bc_aui_C_2/147-5423017-3478600?ie=UTF8&node=7147445011"
            },
            {
                "category": "Clothing",
                "url": "https://www.amazon.com/Novelty-Clothing-and-More/b/ref=dp_bc_aui_C_3/147-5423017-3478600?ie=UTF8&node=12035955011"
            },
            {
                "category": "Novelty",
                "url": "https://www.amazon.com/Novelty-Clothing/b/ref=dp_bc_aui_C_4/147-5423017-3478600?ie=UTF8&node=9103696011"
            },
            {
                "category": "Women",
                "url": "https://www.amazon.com/Womens-Novelty-Clothing/b/ref=dp_bc_aui_C_5/147-5423017-3478600?ie=UTF8&node=9056921011"
            },
            {
                "category": "Dresses",
                "url": "https://www.amazon.com/Womens-Novelty-Dresses/b/ref=dp_bc_aui_C_6/147-5423017-3478600?ie=UTF8&node=9056931011"
            }
        ],
        "url": "https://www.amazon.com/dp/B09GHJSQL4",
        "reviews": {
            "total_reviews": 894,
            "rating": "",
            "answered_questions": 0
        },
        "item_available": true,
        "price": {
            "symbol": "$",
            "currency": "USD",
            "current_price": 69,
            "discounted": false,
            "before_price": 69,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "main_image": "https://m.media-amazon.com/images/I/41uF1XPtd0L._AC_.jpg",
        "total_images": 3,
        "images": [
            "https://m.media-amazon.com/images/I/41uF1XPtd0L._AC_.jpg",
            "https://m.media-amazon.com/images/I/81rOL+EMAaS._AC_UL1280_.jpg",
            "https://m.media-amazon.com/images/I/918o1N31c1S._AC_UL1500_.jpg"
        ],
        "product_information": {
            "dimensions": "",
            "weight": "",
            "available_from": "",
            "available_from_utc": "",
            "available_for_months": 0,
            "available_for_days": 0,
            "manufacturer": "",
            "model_number": "",
            "department": "",
            "qty_per_order": 18,
            "store_id": "",
            "brand": "Brand: SWORNOF"
        }
    },
    {
        "title": "PBANDH MAR, MAROON, Free Size",
        "description": "",
        "feature_bullets": [
            " Hand Wash Only"
        ],
        "variants": [],
        "categories": [],
        "url": "https://www.amazon.com/dp/B09HZNMCSP",
        "reviews": {
            "total_reviews": 0,
            "rating": 0,
            "answered_questions": 0
        },
        "item_available": true,
        "price": {
            "symbol": "$",
            "currency": "USD",
            "current_price": 9999,
            "discounted": false,
            "before_price": 0,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "main_image": "https://m.media-amazon.com/images/I/910+WwLX+iL._AC_UL1500_.jpg",
        "total_images": 4,
        "images": [
            "https://m.media-amazon.com/images/I/910+WwLX+iL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/91ChTOcLelL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/91NBaOK25rL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/81A+kebFAvL._AC_UL1500_.jpg"
        ],
        "product_information": {
            "dimensions": "",
            "weight": "",
            "available_from": "",
            "available_from_utc": "",
            "available_for_months": 0,
            "available_for_days": 0,
            "manufacturer": "",
            "model_number": "",
            "department": "",
            "qty_per_order": "na",
            "store_id": "",
            "brand": "Brand: BH BANDHANI HUB"
        }
    },
    {
        "title": "Jaanvi fashion Women's Georgette Indian Ethnic Saree with Unstitched Blouse Piece",
        "description": " The Designer Saree from the house of Jaanvi Fashion is designed as per the latest trends giving the best experience to the Indian Women. OCCASSION: Party Wear, Indian Wedding, Evening, Ceremony, Function, Festival, Tradition. You Can wear with saree with a pair of earing or necklace. About us: We offer all type of sarees like Banarasi Silk Saree, Fancy Saree, Readymade Saree with readymade blouse, Handloom Saree, Printed Saree, Silk Sarees, Ethnic Saree, Indian Saree, Cotton Saree,Kanjivaram Saree, Kanchipuran Saree,handloom Saree,Soft fabric Saree,Boutique saree,BOllywood Sarees and much more. Colors: We sarees available in all colors like Red,Green,Blue,Black,White,Orange,Yellow,Maroon,Pink,Burgundy,Beige ,Indigo,Grey and Multicolor. Our Customers: Most of our customers shop our best products online from Amazon USA under 20 or 25 dollars upto 100 dollars along with saree belt jacket and petticoat.",
        "feature_bullets": [
            " Georgette",
            " Imported",
            " Hand Wash Only",
            " Indian Ethnic",
            " Floral Printed",
            " Saree - 5.5Mtr, Blouse - 0.8Mtr (Need To Be Stitched As Per Size And Fit)",
            " Disclaimer: Actual product color might slightly vary due to photography effects."
        ],
        "variants": [],
        "categories": [
            {
                "category": "Clothing, Shoes & Jewelry",
                "url": "https://www.amazon.com/amazon-fashion/b/ref=dp_bc_aui_C_1/146-0510630-8076347?ie=UTF8&node=7141123011"
            },
            {
                "category": "Novelty & More",
                "url": "https://www.amazon.com/Novelty-Fashion/b/ref=dp_bc_aui_C_2/146-0510630-8076347?ie=UTF8&node=7147445011"
            },
            {
                "category": "Clothing",
                "url": "https://www.amazon.com/Novelty-Clothing-and-More/b/ref=dp_bc_aui_C_3/146-0510630-8076347?ie=UTF8&node=12035955011"
            },
            {
                "category": "Novelty",
                "url": "https://www.amazon.com/Novelty-Clothing/b/ref=dp_bc_aui_C_4/146-0510630-8076347?ie=UTF8&node=9103696011"
            },
            {
                "category": "Women",
                "url": "https://www.amazon.com/Womens-Novelty-Clothing/b/ref=dp_bc_aui_C_5/146-0510630-8076347?ie=UTF8&node=9056921011"
            },
            {
                "category": "Dresses",
                "url": "https://www.amazon.com/Womens-Novelty-Dresses/b/ref=dp_bc_aui_C_6/146-0510630-8076347?ie=UTF8&node=9056931011"
            }
        ],
        "url": "https://www.amazon.com/dp/B08M63KNP2",
        "reviews": {
            "total_reviews": 27,
            "rating": "",
            "answered_questions": 0
        },
        "item_available": true,
        "price": {
            "symbol": "$",
            "currency": "USD",
            "current_price": 36,
            "discounted": false,
            "before_price": 36,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "main_image": "https://m.media-amazon.com/images/I/71Dsh7tj2cL._AC_UL1500_.jpg",
        "total_images": 6,
        "images": [
            "https://m.media-amazon.com/images/I/71Dsh7tj2cL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/71ZStgE-bSL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/71+hLooAd6L._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/71MJRY3DxzL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/61nnGdeQUFL._AC_UL1200_.jpg",
            "https://m.media-amazon.com/images/I/61xJJ-uAI6L._AC_UL1200_.jpg"
        ],
        "product_information": {
            "dimensions": "",
            "weight": "",
            "available_from": "",
            "available_from_utc": "",
            "available_for_months": 0,
            "available_for_days": 0,
            "manufacturer": "",
            "model_number": "",
            "department": "",
            "qty_per_order": 7,
            "store_id": "",
            "brand": "Brand: Jaanvi fashion"
        }
    },
    {
        "title": "SIRIL Women's Lace & Printed Chiffon Saree with Blouse(2206S934_Blue & Multi)",
        "description": " Explore The Collection of Beautifully Designed Sarees From SIRIL on Amazon. Each Piece Is Elegantly Crafted And Will Surely Add to Your Wardrobe. Pair This Piece With Heels or Flats for A Graceful Look",
        "feature_bullets": [
            " Chiffon",
            " Hand Wash Only",
            " Saree Fabric: Chiffon | Blouse Fabric: Chiffon",
            " Length:: Saree: 5.60Mtr | Blouse: 0.70Mtr, Which Need To Be Stitched As Per Size And Fit",
            " Colour:: Saree Color: Blue & Multi | Blouse Color: Blue",
            " Work:: Saree: Lace & Geometric Printed | Blouse: Lace & Printed",
            " Package Content : 1 Saree With 1 Blouses Pice Included"
        ],
        "variants": [],
        "categories": [
            {
                "category": "Clothing, Shoes & Jewelry",
                "url": "https://www.amazon.com/amazon-fashion/b/ref=dp_bc_aui_C_1/142-3274981-6737749?ie=UTF8&node=7141123011"
            },
            {
                "category": "Novelty & More",
                "url": "https://www.amazon.com/Novelty-Fashion/b/ref=dp_bc_aui_C_2/142-3274981-6737749?ie=UTF8&node=7147445011"
            },
            {
                "category": "Clothing",
                "url": "https://www.amazon.com/Novelty-Clothing-and-More/b/ref=dp_bc_aui_C_3/142-3274981-6737749?ie=UTF8&node=12035955011"
            },
            {
                "category": "Novelty",
                "url": "https://www.amazon.com/Novelty-Clothing/b/ref=dp_bc_aui_C_4/142-3274981-6737749?ie=UTF8&node=9103696011"
            },
            {
                "category": "Women",
                "url": "https://www.amazon.com/Womens-Novelty-Clothing/b/ref=dp_bc_aui_C_5/142-3274981-6737749?ie=UTF8&node=9056921011"
            },
            {
                "category": "Dresses",
                "url": "https://www.amazon.com/Womens-Novelty-Dresses/b/ref=dp_bc_aui_C_6/142-3274981-6737749?ie=UTF8&node=9056931011"
            }
        ],
        "url": "https://www.amazon.com/dp/B09QHYYXZ7",
        "reviews": {
            "total_reviews": 388,
            "rating": "",
            "answered_questions": 0
        },
        "item_available": true,
        "price": {
            "symbol": "$",
            "currency": "USD",
            "current_price": 29.99,
            "discounted": false,
            "before_price": 29.99,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "main_image": "https://m.media-amazon.com/images/I/711vlC6N6bL._AC_UL1500_.jpg",
        "total_images": 4,
        "images": [
            "https://m.media-amazon.com/images/I/711vlC6N6bL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/71n-fzeTgJL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/712wLI0b9YL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/51uiFRNMijL._AC_UL1500_.jpg"
        ],
        "product_information": {
            "dimensions": "",
            "weight": "",
            "available_from": "",
            "available_from_utc": "",
            "available_for_months": 0,
            "available_for_days": 0,
            "manufacturer": "",
            "model_number": "",
            "department": "",
            "qty_per_order": 6,
            "store_id": "",
            "brand": "Brand: SIRIL"
        }
    },
    {
        "title": "Sourbh Women's Kanchipuram Silk Blend Party Wear Sari with Blouse Piece",
        "description": " Beautifully designed and latest in trends Indian traditional ethnic kanjivaram saree made of high-quality polyester fabric. SOURBH Fashion brings you a nice addition to the wardrobe of every fashionable female, who wants to look glamorous and distinct.Usage Ideas:: This sari is ideal for festivals, parties and friends/family get-togethers, ceremonies or rituals, business functions, evening, marriage ceremony, gifting to loved ones wherever you want to flaunt your style. Wear it with matching accessories to get complemented on next ethnic wear look.Suitability:: Sari design and color combination are suitable for girls or women of across all age or region and this is a perfect dress for housewives, working women, girls, newly married. Also suitable for gifting to wife, sister, mother, friend on anniversary, birthday, festival, diwali, pooja, raksha bandhan, grah pravesh, marriage functions.Draping Styles:: You can drape it as a casual normal saree, or else in Gujarati or Rajasthani style as well.Sourbh Sarees brings together the Ethnic Fashion from the Indian subcontinent to Indian wear lovers across the world, with a variety of popular and trendy ethnic products for various occasions - festive wear, parties wear, regular to contemporary Indian suits-salwar kameez and beachwear.FAQ:Does this include stitched top/blouse?No, the top will come as unstitched fabric/material. It must be sewn at your end as per your comfort Up to 32\" to 42\".Will Saree be Ready to Wear?No, you will need to wear the stitched inner top (aka blouse) and bottom (aka underskirt/peticoat).How to wear a saree?Believe us its easy, refer online resources and you will get the look as the image depictsDimension of Saree?Its a Free Size product. Saree will be 5.5 meters long, attached at the rear end will be additonal blouse fabric of 0.8 meters length",
        "feature_bullets": [
            " Synthetic",
            " Imported",
            " Dry Clean Only",
            " Indian Traditional New Kanjivaram Style All Over Zari Woven Motif and Golden Border-Palav Design",
            " Fabric :: Saree - Silk Blend | Blouse - Silk Blend",
            " Color :: Saree - Teal | Blouse - Teal",
            " Saree - 5.5Mtr, Blouse - 0.8Mtr (Need To Be Stitched As Per Size And Fit)",
            " Dry Clean, Don't Bleach, Iron with Care"
        ],
        "variants": [
            {
                "asin": "B0851GCQKV",
                "images": [],
                "title": "Crimson",
                "link": "https://www.amazon.com/dp/B0851GCQKV/?th=1&psc=1",
                "is_current_product": false,
                "price": 35
            },
            {
                "asin": "B0851G86QZ",
                "images": [],
                "title": "Magenta",
                "link": "https://www.amazon.com/dp/B0851G86QZ/?th=1&psc=1",
                "is_current_product": false,
                "price": 25
            },
            {
                "asin": "B0851FP6PR",
                "images": [],
                "title": "Navy Blue",
                "link": "https://www.amazon.com/dp/B0851FP6PR/?th=1&psc=1",
                "is_current_product": false,
                "price": 25
            },
            {
                "asin": "B0851GNZ5F",
                "images": [],
                "title": "Red",
                "link": "https://www.amazon.com/dp/B0851GNZ5F/?th=1&psc=1",
                "is_current_product": false,
                "price": 25
            },
            {
                "asin": "B07YFNFFBX",
                "images": [],
                "title": "Teal",
                "link": "https://www.amazon.com/dp/B07YFNFFBX/?th=1&psc=1",
                "is_current_product": true,
                "price": 25
            },
            {
                "asin": "B07YFJ1HZW",
                "images": [],
                "title": "Turquoise Blue",
                "link": "https://www.amazon.com/dp/B07YFJ1HZW/?th=1&psc=1",
                "is_current_product": false,
                "price": 25
            }
        ],
        "categories": [],
        "url": "https://www.amazon.com/dp/B07YFNFFBX",
        "reviews": {
            "total_reviews": 976,
            "rating": "",
            "answered_questions": 0
        },
        "item_available": true,
        "price": {
            "symbol": "$",
            "currency": "USD",
            "current_price": 25,
            "discounted": false,
            "before_price": 25,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "main_image": "https://m.media-amazon.com/images/I/91KbVpTcewL._AC_UL1500_.jpg",
        "total_images": 9,
        "images": [
            "https://m.media-amazon.com/images/I/91KbVpTcewL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/91oNHWpaUWL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/81HNBV3WlCL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/81n8Ji-zMJL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/71j7sT7NzgL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/91ZOdJ65qUL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/91ZOdJ65qUL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/91RmANR80bL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/81uQhia97uL._AC_UL1347_.jpg"
        ],
        "product_information": {
            "dimensions": "",
            "weight": "",
            "available_from": "",
            "available_from_utc": "",
            "available_for_months": 0,
            "available_for_days": 0,
            "manufacturer": "",
            "model_number": "",
            "department": "",
            "qty_per_order": 5,
            "store_id": "",
            "brand": "Brand: Sourbh"
        }
    },
    {
        "title": "Sidhidata Women's Full Crushed/Pleated Satin Saree With Unstitched Blouse Piece",
        "description": "",
        "feature_bullets": [
            " Satin",
            " Imported",
            " Machine Wash",
            " Fabric : Heavy Satin || Type : Crushed/ Pleated Saree",
            " Colour : Maroon || Design : Plain/Solid",
            " Saree Length : 5.6 Mtr + Blouse Length : 0.80 Mtr (Unstitched)",
            " Whole Saree is Crushed Exact As Shown In Image & This is Satin So it's Shining Cloth",
            " This Saree is Suitable For Get Just Stylish Casual look in office or work, normal occasions, family get together, regular or daily Use or gifting to loved one"
        ],
        "variants": [
            {
                "asin": "B09P8DQFH1",
                "images": [],
                "title": "B Rama",
                "link": "https://www.amazon.com/dp/B09P8DQFH1/?th=1&psc=1",
                "is_current_product": false,
                "price": 40
            },
            {
                "asin": "B09TFVNJR7",
                "images": [],
                "title": "Blackk",
                "link": "https://www.amazon.com/dp/B09TFVNJR7/?th=1&psc=1",
                "is_current_product": false,
                "price": 40
            },
            {
                "asin": "B09P8CQ5ZG",
                "images": [],
                "title": "Dark Green",
                "link": "https://www.amazon.com/dp/B09P8CQ5ZG/?th=1&psc=1",
                "is_current_product": false,
                "price": 40
            },
            {
                "asin": "B09TFT69BG",
                "images": [],
                "title": "Maroonn",
                "link": "https://www.amazon.com/dp/B09TFT69BG/?th=1&psc=1",
                "is_current_product": true,
                "price": 40
            },
            {
                "asin": "B09TL6RDDZ",
                "images": [],
                "title": "Navy Blue",
                "link": "https://www.amazon.com/dp/B09TL6RDDZ/?th=1&psc=1",
                "is_current_product": false,
                "price": 40
            },
            {
                "asin": "B09TL6N9FY",
                "images": [],
                "title": "Purple",
                "link": "https://www.amazon.com/dp/B09TL6N9FY/?th=1&psc=1",
                "is_current_product": false,
                "price": 40
            },
            {
                "asin": "B09VGTYK8L",
                "images": [],
                "title": "Wine",
                "link": "https://www.amazon.com/dp/B09VGTYK8L/?th=1&psc=1",
                "is_current_product": false,
                "price": 40
            },
            {
                "asin": "B09VGWX465",
                "images": [],
                "title": "Z Baby Pink",
                "link": "https://www.amazon.com/dp/B09VGWX465/?th=1&psc=1",
                "is_current_product": false,
                "price": 40
            }
        ],
        "categories": [
            {
                "category": "Clothing, Shoes & Jewelry",
                "url": "https://www.amazon.com/amazon-fashion/b/ref=dp_bc_aui_C_1/141-5246059-6175569?ie=UTF8&node=7141123011"
            },
            {
                "category": "Novelty & More",
                "url": "https://www.amazon.com/Novelty-Fashion/b/ref=dp_bc_aui_C_2/141-5246059-6175569?ie=UTF8&node=7147445011"
            },
            {
                "category": "Clothing",
                "url": "https://www.amazon.com/Novelty-Clothing-and-More/b/ref=dp_bc_aui_C_3/141-5246059-6175569?ie=UTF8&node=12035955011"
            },
            {
                "category": "Novelty",
                "url": "https://www.amazon.com/Novelty-Clothing/b/ref=dp_bc_aui_C_4/141-5246059-6175569?ie=UTF8&node=9103696011"
            },
            {
                "category": "Women",
                "url": "https://www.amazon.com/Womens-Novelty-Clothing/b/ref=dp_bc_aui_C_5/141-5246059-6175569?ie=UTF8&node=9056921011"
            },
            {
                "category": "Dresses",
                "url": "https://www.amazon.com/Womens-Novelty-Dresses/b/ref=dp_bc_aui_C_6/141-5246059-6175569?ie=UTF8&node=9056931011"
            }
        ],
        "url": "https://www.amazon.com/dp/B09TFT69BG",
        "reviews": {
            "total_reviews": 1391,
            "rating": "",
            "answered_questions": 0
        },
        "item_available": true,
        "price": {
            "symbol": "$",
            "currency": "USD",
            "current_price": 40,
            "discounted": false,
            "before_price": 40,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "main_image": "https://m.media-amazon.com/images/I/71PG8dbhIcL._AC_UL1500_.jpg",
        "total_images": 1,
        "images": [
            "https://m.media-amazon.com/images/I/71PG8dbhIcL._AC_UL1500_.jpg"
        ],
        "product_information": {
            "dimensions": "",
            "weight": "",
            "available_from": "",
            "available_from_utc": "",
            "available_for_months": 0,
            "available_for_days": 0,
            "manufacturer": "",
            "model_number": "",
            "department": "",
            "qty_per_order": 30,
            "store_id": "",
            "brand": "Brand: Sidhidata"
        }
    },
    {
        "title": "SIRIL Women's Silk Blend Woven Design Kanjeevaram Saree with Blouse",
        "description": "",
        "feature_bullets": [
            " 40% Silk,60% Polyster",
            " Saree Fabric: Cotton Silk | Blouse Fabric: Cotton Silk",
            " Length:: Saree: 5.20Mtr | Blouse: 0.80Mtr, Which Need To Be Stitched As Per Size And Fit",
            " Colour:: Saree Color: Purple | Blouse Color: Purple, Multi",
            " Work:: Saree: Gold Toned Woven Design | Blouse: Woven",
            " Zari work is known for the art of weaving threads in golden and silver colours. It involves the process of twisting a flattened metallic strip, which sometimes is made from pure gold and silver."
        ],
        "variants": [
            {
                "asin": "B08XQQZS8Q",
                "images": [],
                "title": "Green",
                "link": "https://www.amazon.com/dp/B08XQQZS8Q/?th=1&psc=1",
                "is_current_product": false,
                "price": 39.6
            },
            {
                "asin": "B08XQRP8HF",
                "images": [],
                "title": "Orange",
                "link": "https://www.amazon.com/dp/B08XQRP8HF/?th=1&psc=1",
                "is_current_product": false,
                "price": 35
            },
            {
                "asin": "B08XQSP8X8",
                "images": [],
                "title": "Purple",
                "link": "https://www.amazon.com/dp/B08XQSP8X8/?th=1&psc=1",
                "is_current_product": true,
                "price": 35
            }
        ],
        "categories": [
            {
                "category": "Clothing, Shoes & Jewelry",
                "url": "https://www.amazon.com/amazon-fashion/b/ref=dp_bc_aui_C_1/143-6244475-4622162?ie=UTF8&node=7141123011"
            },
            {
                "category": "Novelty & More",
                "url": "https://www.amazon.com/Novelty-Fashion/b/ref=dp_bc_aui_C_2/143-6244475-4622162?ie=UTF8&node=7147445011"
            },
            {
                "category": "Clothing",
                "url": "https://www.amazon.com/Novelty-Clothing-and-More/b/ref=dp_bc_aui_C_3/143-6244475-4622162?ie=UTF8&node=12035955011"
            },
            {
                "category": "Novelty",
                "url": "https://www.amazon.com/Novelty-Clothing/b/ref=dp_bc_aui_C_4/143-6244475-4622162?ie=UTF8&node=9103696011"
            },
            {
                "category": "Women",
                "url": "https://www.amazon.com/Womens-Novelty-Clothing/b/ref=dp_bc_aui_C_5/143-6244475-4622162?ie=UTF8&node=9056921011"
            },
            {
                "category": "Dresses",
                "url": "https://www.amazon.com/Womens-Novelty-Dresses/b/ref=dp_bc_aui_C_6/143-6244475-4622162?ie=UTF8&node=9056931011"
            }
        ],
        "url": "https://www.amazon.com/dp/B08XQSP8X8",
        "reviews": {
            "total_reviews": 515,
            "rating": "",
            "answered_questions": 0
        },
        "item_available": true,
        "price": {
            "symbol": "$",
            "currency": "USD",
            "current_price": 35,
            "discounted": false,
            "before_price": 35,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "main_image": "https://m.media-amazon.com/images/I/81L8bSP5MaL._AC_UL1500_.jpg",
        "total_images": 5,
        "images": [
            "https://m.media-amazon.com/images/I/81L8bSP5MaL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/71N5YCZ3r+L._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/715-nRW0aGL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/719bv4J0dDL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/91JCtOgSQAL._AC_UL1500_.jpg"
        ],
        "product_information": {
            "dimensions": "",
            "weight": "",
            "available_from": "",
            "available_from_utc": "",
            "available_for_months": 0,
            "available_for_days": 0,
            "manufacturer": "",
            "model_number": "",
            "department": "",
            "qty_per_order": "na",
            "store_id": "",
            "brand": "Brand: SIRIL"
        }
    },
    {
        "title": "Leeza Store Women's Jacquard Cotton Silk Blend Banarasi Bandhani Fusion Style Woven Saree with Unstitched Blouse Piece",
        "description": " Leeza Store Present Cotton Blend Bandhani Cum Banarasi Style Golden Zari With Multicolor Thread Work Saree. Saree Has A Great Combination For Bandhani Also Known As Bandhej And Banarasi Style Traditional Style Golden Zari Paisley And Floral Pattern With Tassels And Pipping Border. Pair This Piece With Heels Or Flats For A Graceful Look. Saree Is An Ideal For Evening Wear, Ceremony Wear, Social Gathering, Wedding Reception Wear As Well As Party Wear. This Fancy Saree Comes Along With Matching Fabric Unstitched Blouse Piece That Can Be Tailored As Per Your Style And Comfort. Sari Length: 5.5 Mtr, Blouse Length: 0.8 Mtr, Saree Width: 44. This Fusion Saree Is Best For Your Upcoming Social Gathering, Wedding Reception, Festive Look And Best To Gift For Mom, Women, Girlfriends, And Relatives.",
        "feature_bullets": [
            " Cotton Silk Blend",
            " Fold closure",
            " Type: Bandhani Banarasi Fusion Saree",
            " Fabric:Cotton Silk Blend",
            " Color:Maroon",
            " Length: Saree: 5.5 M || Blouse: 0.8 M",
            " Best If You Are Looking For Latest design Banarasi saree || bandhani sarees || Reception Wear Saree || Wedding Reception Saree || Festive Look || Traditional Party Wear Sarees For Women"
        ],
        "variants": [
            {
                "asin": "B09P42L2KP",
                "images": [],
                "title": "Maroon",
                "link": "https://www.amazon.com/dp/B09P42L2KP/?th=1&psc=1",
                "is_current_product": false,
                "price": 76.02
            },
            {
                "asin": "B09P42PPT4",
                "images": [],
                "title": "Pista Green",
                "link": "https://www.amazon.com/dp/B09P42PPT4/?th=1&psc=1",
                "is_current_product": false,
                "price": 76.02
            }
        ],
        "categories": [],
        "url": "https://www.amazon.com/dp/B09P42KHZ6",
        "reviews": {
            "total_reviews": 330,
            "rating": "",
            "answered_questions": 0
        },
        "item_available": true,
        "price": {
            "symbol": "$",
            "currency": "USD",
            "current_price": 76.02,
            "discounted": false,
            "before_price": 76.02,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "main_image": "https://m.media-amazon.com/images/I/81x56jk0AOL._AC_UL1500_.jpg",
        "total_images": 8,
        "images": [
            "https://m.media-amazon.com/images/I/81x56jk0AOL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/81+R5Wv3NBL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/715VOyEs3LL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/81Ts0CBDAgL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/81ynmqGC+yL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/81B6wsqzgxL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/81+T5X7M1fL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/81v9Pph3TVL._AC_UL1500_.jpg"
        ],
        "product_information": {
            "dimensions": "",
            "weight": "",
            "available_from": "",
            "available_from_utc": "",
            "available_for_months": 0,
            "available_for_days": 0,
            "manufacturer": "",
            "model_number": "",
            "department": "",
            "qty_per_order": 10,
            "store_id": "",
            "brand": "Brand: leeza store"
        }
    },
    {
        "title": "Sourbh Women's Fancy Art Silk Printed Saree with Blouse Piece",
        "description": " Beautifully designed Indian Traditional ethnic regular wear sarees made of high-quality fabric Art Silk which have all over ikat dying pattern with contrast border and stripes prints Pallav. SOURBH Fashion brings you a nice addition to the wardrobe of every fashionable female, who wants to look glamorous and distinct.This sari comes with contrast Art Silk blouse fabric, which can be stitched according to your comfort Up to 32 to 42 Inches.This saree is ideal for festivals, occassional, parties and social/friends/family get-togethers, ceremonies or rituals, business functions wherever you want to flaunt your style. Also saree design and color combination are suitable for girls or women of across all age or region. Wear it with matching accessories to get complemented on next ethnic wear look.Sourbh Sarees brings together the Ethnic Fashion from the Indian subcontinent to Indian wear lovers across the world, with a variety of popular and trendy ethnic products for various occasions - festive wear, parties wear, regular ethnic wear to contemporary Indian suits-salwar kameez and beachwear. FAQ: Does this include stitched top/blouse? No, the top will come as Unstitched fabric/material. It must be sewn at your end as per measurements Will Saree be Ready to Wear? No, you will need to wear the stitched inner top (aka blouse) and bottom (aka underskirt/peticoat). How to wear a saree? Believe us its easy, refer online resources and you will get the look as the image depicts Dimension of Saree? Its a Free Size product. Saree will be 5.5 meters long, attached at the rear end will be additonal blouse fabric of 0.8 meters length",
        "feature_bullets": [
            " Synthetic",
            " Imported",
            " Hand Wash Only",
            " Work :: Beautiful Ikat Dying Pattern Design with Contrast Border-Blouse and Stripes Prints Pallav",
            " Fabric :: Saree - Polyester | Blouse - Polyester",
            " Color :: Saree - Off White, Wine|Blouse - Wine",
            " Customer Satisfaction :: Free Standard Delivery, Easy Returns, Defect Free Quality Assurance,Length:: Saree- 5.5Mtr || Blouse- 0.8Mtr, Which Need To Be Stitched As Per Size And Fit",
            " Wash Care :: Normal Wash Or Machine Wash"
        ],
        "variants": [
            {
                "asin": "B08R8XZXBZ",
                "images": [],
                "title": "Cream, Mustard",
                "link": "https://www.amazon.com/dp/B08R8XZXBZ/?th=1&psc=1",
                "is_current_product": false,
                "price": 22.99
            },
            {
                "asin": "B08R91LCK6",
                "images": [],
                "title": "Cream, Navy Blue",
                "link": "https://www.amazon.com/dp/B08R91LCK6/?th=1&psc=1",
                "is_current_product": false,
                "price": 22.99
            },
            {
                "asin": "B08R8ZBM8L",
                "images": [],
                "title": "Cream, Rust",
                "link": "https://www.amazon.com/dp/B08R8ZBM8L/?th=1&psc=1",
                "is_current_product": false,
                "price": 22.99
            },
            {
                "asin": "B08R8Z21F8",
                "images": [],
                "title": "Cream, Wine",
                "link": "https://www.amazon.com/dp/B08R8Z21F8/?th=1&psc=1",
                "is_current_product": true,
                "price": 22.99
            },
            {
                "asin": "B08LSJS3SB",
                "images": [],
                "title": "Off White, Maroon",
                "link": "https://www.amazon.com/dp/B08LSJS3SB/?th=1&psc=1",
                "is_current_product": false,
                "price": 22.99
            }
        ],
        "categories": [],
        "url": "https://www.amazon.com/dp/B08R8Z21F8",
        "reviews": {
            "total_reviews": 588,
            "rating": "",
            "answered_questions": 0
        },
        "item_available": true,
        "price": {
            "symbol": "$",
            "currency": "USD",
            "current_price": 22.99,
            "discounted": false,
            "before_price": 22.99,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "main_image": "https://m.media-amazon.com/images/I/81huS-vrN6L._AC_UL1500_.jpg",
        "total_images": 7,
        "images": [
            "https://m.media-amazon.com/images/I/81huS-vrN6L._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/91xo+tge2GL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/91LPG4xeHoL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/91TYV0ySwhL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/91FVvfN0hpL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/91Kc1TPosKL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/81dQuEOkHOL._AC_UL1500_.jpg"
        ],
        "product_information": {
            "dimensions": "",
            "weight": "",
            "available_from": "",
            "available_from_utc": "",
            "available_for_months": 0,
            "available_for_days": 0,
            "manufacturer": "",
            "model_number": "",
            "department": "",
            "qty_per_order": 30,
            "store_id": "",
            "brand": "Brand: Sourbh"
        }
    },
    {
        "title": "SIRIL Women's Bandhani Printed & Lace Chiffon Saree with Blouse",
        "description": " Explore The Collection of Beautifully Designed Sarees From SIRIL on Amazon. Each Piece Is Elegantly Crafted And Will Surely Add to Your Wardrobe. Pair This Piece With Heels or Flats for A Graceful Look",
        "feature_bullets": [
            " Chiffon",
            " Hand Wash Only",
            " Saree Fabric: Chiffon | Blouse Fabric: Chiffon",
            " Length:: Saree: 5.60Mtr | Blouse: 0.70Mtr, Which Need To Be Stitched As Per Size And Fit",
            " Colour:: Saree Color: Turmeric Yellow | Blouse Color: Turmeric Yellow & Green",
            " Work:: Saree: Bandhani Printed & Lace | Blouse: Printed & Lace"
        ],
        "variants": [
            {
                "asin": "B09QHYM6M9",
                "images": [],
                "title": "Black",
                "link": "https://www.amazon.com/dp/B09QHYM6M9/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            },
            {
                "asin": "B09QHYG7GR",
                "images": [],
                "title": "Dark Wine",
                "link": "https://www.amazon.com/dp/B09QHYG7GR/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            },
            {
                "asin": "B09QHZDX7D",
                "images": [],
                "title": "Green (Sea Green)",
                "link": "https://www.amazon.com/dp/B09QHZDX7D/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            },
            {
                "asin": "B09QHYWPKZ",
                "images": [],
                "title": "Maroon",
                "link": "https://www.amazon.com/dp/B09QHYWPKZ/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            },
            {
                "asin": "B09QHZ6BNB",
                "images": [],
                "title": "Maroon1",
                "link": "https://www.amazon.com/dp/B09QHZ6BNB/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            },
            {
                "asin": "B09QHZBFHG",
                "images": [],
                "title": "Navy Blue",
                "link": "https://www.amazon.com/dp/B09QHZBFHG/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            },
            {
                "asin": "B09QHYJ8RT",
                "images": [],
                "title": "Orange",
                "link": "https://www.amazon.com/dp/B09QHYJ8RT/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            },
            {
                "asin": "B09QHYMG86",
                "images": [],
                "title": "Orange1",
                "link": "https://www.amazon.com/dp/B09QHYMG86/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            },
            {
                "asin": "B09QHZ66DC",
                "images": [],
                "title": "Rani Pink",
                "link": "https://www.amazon.com/dp/B09QHZ66DC/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            },
            {
                "asin": "B09QHZPDV6",
                "images": [],
                "title": "Rani Pink1",
                "link": "https://www.amazon.com/dp/B09QHZPDV6/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            },
            {
                "asin": "B09QJ19HHZ",
                "images": [],
                "title": "Red",
                "link": "https://www.amazon.com/dp/B09QJ19HHZ/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            },
            {
                "asin": "B09QHZ4Y6K",
                "images": [],
                "title": "Red1",
                "link": "https://www.amazon.com/dp/B09QHZ4Y6K/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            },
            {
                "asin": "B09QHZCGJS",
                "images": [],
                "title": "Royal Blue",
                "link": "https://www.amazon.com/dp/B09QHZCGJS/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            },
            {
                "asin": "B09QHY99GX",
                "images": [],
                "title": "Turmeric Yellow",
                "link": "https://www.amazon.com/dp/B09QHY99GX/?th=1&psc=1",
                "is_current_product": true,
                "price": ""
            },
            {
                "asin": "B09QHZ54HL",
                "images": [],
                "title": "Violet",
                "link": "https://www.amazon.com/dp/B09QHZ54HL/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            },
            {
                "asin": "B09QHZ67XK",
                "images": [],
                "title": "Wine",
                "link": "https://www.amazon.com/dp/B09QHZ67XK/?th=1&psc=1",
                "is_current_product": false,
                "price": ""
            }
        ],
        "categories": [
            {
                "category": "Clothing, Shoes & Jewelry",
                "url": "https://www.amazon.com/amazon-fashion/b/ref=dp_bc_aui_C_1/146-5977727-0261946?ie=UTF8&node=7141123011"
            },
            {
                "category": "Novelty & More",
                "url": "https://www.amazon.com/Novelty-Fashion/b/ref=dp_bc_aui_C_2/146-5977727-0261946?ie=UTF8&node=7147445011"
            },
            {
                "category": "Clothing",
                "url": "https://www.amazon.com/Novelty-Clothing-and-More/b/ref=dp_bc_aui_C_3/146-5977727-0261946?ie=UTF8&node=12035955011"
            },
            {
                "category": "Novelty",
                "url": "https://www.amazon.com/Novelty-Clothing/b/ref=dp_bc_aui_C_4/146-5977727-0261946?ie=UTF8&node=9103696011"
            },
            {
                "category": "Women",
                "url": "https://www.amazon.com/Womens-Novelty-Clothing/b/ref=dp_bc_aui_C_5/146-5977727-0261946?ie=UTF8&node=9056921011"
            },
            {
                "category": "Dresses",
                "url": "https://www.amazon.com/Womens-Novelty-Dresses/b/ref=dp_bc_aui_C_6/146-5977727-0261946?ie=UTF8&node=9056931011"
            }
        ],
        "url": "https://www.amazon.com/dp/B09QHY99GX",
        "reviews": {
            "total_reviews": 502,
            "rating": "",
            "answered_questions": 4
        },
        "item_available": true,
        "price": {
            "symbol": "$",
            "currency": "USD",
            "current_price": 28.98,
            "discounted": false,
            "before_price": 28.98,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "main_image": "https://m.media-amazon.com/images/I/71Qwc3PkyYL._AC_UL1500_.jpg",
        "total_images": 3,
        "images": [
            "https://m.media-amazon.com/images/I/71Qwc3PkyYL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/71196EB1CdL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/61F3gF3PkHL._AC_UL1500_.jpg"
        ],
        "product_information": {
            "dimensions": "",
            "weight": "",
            "available_from": "",
            "available_from_utc": "",
            "available_for_months": 0,
            "available_for_days": 0,
            "manufacturer": "",
            "model_number": "",
            "department": "",
            "qty_per_order": 10,
            "store_id": "",
            "brand": "Brand: SIRIL"
        }
    },
    {
        "title": "SIRIL Women's Georgette Floral Printed Saree with Blouse",
        "description": "",
        "feature_bullets": [
            " Georgette",
            " Dry Clean Only",
            " Saree Fabric: Georgette | Blouse Fabric: Georgette",
            " Length:: Saree: 5.30Mtr | Blouse: 0.70Mtr, Which Need To Be Stitched As Per Size And Fit",
            " Colour:: Saree Color: Purple | Blouse Color: Purple",
            " Work:: Saree: Floral Printed | Blouse: Printed",
            " Do Not Bleach; Dry in Shade; Dry Clean"
        ],
        "variants": [],
        "categories": [
            {
                "category": "Clothing, Shoes & Jewelry",
                "url": "https://www.amazon.com/amazon-fashion/b/ref=dp_bc_aui_C_1/134-3925762-8965948?ie=UTF8&node=7141123011"
            },
            {
                "category": "Women",
                "url": "https://www.amazon.com/Womens-Fashion/b/ref=dp_bc_aui_C_2/134-3925762-8965948?ie=UTF8&node=7147440011"
            },
            {
                "category": "Clothing",
                "url": "https://www.amazon.com/Womens-Clothing/b/ref=dp_bc_aui_C_3/134-3925762-8965948?ie=UTF8&node=1040660"
            },
            {
                "category": "Tops, Tees & Blouses",
                "url": "https://www.amazon.com/Womens-Tops-Tees/b/ref=dp_bc_aui_C_4/134-3925762-8965948?ie=UTF8&node=2368343011"
            },
            {
                "category": "Blouses & Button-Down Shirts",
                "url": "https://www.amazon.com/Womens-Shirts/b/ref=dp_bc_aui_C_5/134-3925762-8965948?ie=UTF8&node=2368365011"
            }
        ],
        "url": "https://www.amazon.com/dp/B098QM6N71",
        "reviews": {
            "total_reviews": 436,
            "rating": "",
            "answered_questions": 0
        },
        "item_available": true,
        "price": {
            "symbol": "$",
            "currency": "USD",
            "current_price": 38.57,
            "discounted": false,
            "before_price": 38.57,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "main_image": "https://m.media-amazon.com/images/I/71nJsZGi5uS._AC_UL1500_.jpg",
        "total_images": 5,
        "images": [
            "https://m.media-amazon.com/images/I/71nJsZGi5uS._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/71FF2xfV9vS._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/710c2WXy5fS._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/71GagivqNAS._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/61K4KOc6GFS._AC_UL1500_.jpg"
        ],
        "product_information": {
            "dimensions": "",
            "weight": "",
            "available_from": "",
            "available_from_utc": "",
            "available_for_months": 0,
            "available_for_days": 0,
            "manufacturer": "",
            "model_number": "",
            "department": "",
            "qty_per_order": 10,
            "store_id": "",
            "brand": "Brand: SIRIL"
        }
    },
    {
        "title": "SWORNOF Women's Floral Geometric Lucknowi Chikankari Woven Cotton Saree with Blouse",
        "description": " Explore the collection of beautifully designed sarees from \"SWORNOFon Amazon. Each piece is elegantly crafted and will surely add to your wardrobe. Pair this piece with heels or flats for a graceful look.Sarees are not just cloth to be draped around your waist, they are much more than that. With thousands of years of Indian traditions woven in, the saree has been popular through the ages for its ability to redefine elegance and accentuates the wearer's femininity. This season your look gets better definition with just a little attention to detail. Sarees offers affordable, high-quality sarees online, bringing you sarees for women's latest designs with new collections every month. If you are looking for designer sarees for women's New sarees for women, Bollywood sarees, saree with blouse or casual daily wear sarees, Devangi Fashionwill cater to your need and help you look your best. Our Jacquard printed Kanjivaram sarees daily wear are known for high-quality printing waves with vibrant colors and latest designs.We offer all kinds of ARt silk sarees below 500 and sarees below 1000 1500 cotton sarees for women, polycotton sarees, art silk sarees, bhagalpuri silk sarees for women, cotton silk sarees, handloom cotton sarees, south cotton sarees. Featuring an eye-catching print, this designer saree will lend you a look worth flaunting. This saree will present you more glamorous and beautiful to your peers than ever. Made from art silk, this printed saree features abstract geometric prints all over the body and pallu of the sareeIf you have a puja at home or some other festive occasion, this saree will surely make you stand out in the crowd. These saris lend a very formal and proper look because of the stiff fabric. these sarees are most preferred for the festive because of the lightweight, they can be worn in all four seasons. This saree is crafted by skill craftsmen without compromising on its quality. With this beautiful design and fabric, this saree will fetch you oo",
        "feature_bullets": [
            " Soft Silk",
            " MATERIAL : Soft Cotton",
            " DESIGN : Lucknowi Chikankari Weaving Work",
            " FEATURES : Saree with Blouse Piece",
            " STYLE : The texture and weight of the saree brings image prints one step closer to the originals and invites attention.",
            " Occasion : Sarees for women, festive, traditional saree. Best birth-day gift for your loved ones. Each piece is elegantly crafted and will surely add to your wardrobe"
        ],
        "variants": [],
        "categories": [
            {
                "category": "Clothing, Shoes & Jewelry",
                "url": "https://www.amazon.com/amazon-fashion/b/ref=dp_bc_aui_C_1/144-1573017-2847039?ie=UTF8&node=7141123011"
            },
            {
                "category": "Novelty & More",
                "url": "https://www.amazon.com/Novelty-Fashion/b/ref=dp_bc_aui_C_2/144-1573017-2847039?ie=UTF8&node=7147445011"
            },
            {
                "category": "Clothing",
                "url": "https://www.amazon.com/Novelty-Clothing-and-More/b/ref=dp_bc_aui_C_3/144-1573017-2847039?ie=UTF8&node=12035955011"
            },
            {
                "category": "Novelty",
                "url": "https://www.amazon.com/Novelty-Clothing/b/ref=dp_bc_aui_C_4/144-1573017-2847039?ie=UTF8&node=9103696011"
            },
            {
                "category": "Women",
                "url": "https://www.amazon.com/Womens-Novelty-Clothing/b/ref=dp_bc_aui_C_5/144-1573017-2847039?ie=UTF8&node=9056921011"
            },
            {
                "category": "Dresses",
                "url": "https://www.amazon.com/Womens-Novelty-Dresses/b/ref=dp_bc_aui_C_6/144-1573017-2847039?ie=UTF8&node=9056931011"
            }
        ],
        "url": "https://www.amazon.com/dp/B09XVKMJ13",
        "reviews": {
            "total_reviews": 156,
            "rating": "",
            "answered_questions": 0
        },
        "item_available": true,
        "price": {
            "symbol": "$",
            "currency": "USD",
            "current_price": 53.99,
            "discounted": false,
            "before_price": 53.99,
            "savings_amount": 0,
            "savings_percent": 0
        },
        "main_image": "https://m.media-amazon.com/images/I/71fHXAiZoHL._AC_UL1500_.jpg",
        "total_images": 8,
        "images": [
            "https://m.media-amazon.com/images/I/71fHXAiZoHL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/81mr6xPmuuL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/81xvu0Mc83L._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/71fr15cSQRL._AC_UL1024_.jpg",
            "https://m.media-amazon.com/images/I/81P285LyhiL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/91HKGYTrbTL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/91bUZvngVpL._AC_UL1500_.jpg",
            "https://m.media-amazon.com/images/I/91a-y1wsAGL._AC_UL1500_.jpg"
        ],
        "product_information": {
            "dimensions": "",
            "weight": "",
            "available_from": "",
            "available_from_utc": "",
            "available_for_months": 0,
            "available_for_days": 0,
            "manufacturer": "",
            "model_number": "",
            "department": "",
            "qty_per_order": "na",
            "store_id": "",
            "brand": "Brand: SWORNOF"
        }
    }
];

type filterType = {
    categories ?: string[],
    rating ?: number[],
    price ?: { min: number , max?: number },
    reviews ?: number,
    available: boolean,
    limit ?: number,
    offset ?: number
}

type productSliceType = {
    products : productType[]
    filterProducts : productType[],
    categories: {[key: string]: any}
    filters: filterType,
    category: {[key: string]: any}
}

const initialState : productSliceType = {
    products: [{
        _id: "",
        title: "",
        description:"",
        feature_bullets: [],
        variants: [],
        categories: [],
        url: "",
        reviews: {
            total_reviews: 0,
            rating: "",
            answered_questions: 0,
        },
        item_available: false,
        price: {
            symbol: "",
            currency: "",
            current_price: 0,
            discounted: false,
            before_price: 0,
            savings_amount: 0,
            savings_percent: 0
        },
        main_image: "",
        total_images: 0,
        images: [],
        product_information: {
            dimensions: "",
            weight: "",
            available_from: "",
            available_from_utc: "",
            available_for_months: 0,
            available_for_days: 0,
            manufacturer: "",
            model_number: "",
            department: "",
            qty_per_order: 0,
            store_id: "",
            brand: ""
        },
        quantity: 0
    }],
    filterProducts: [{
        _id: "",
        title: "",
        description:"",
        feature_bullets: [],
        variants: [],
        categories: [],
        url: "",
        reviews: {
            total_reviews: 0,
            rating: "",
            answered_questions: 0,
        },
        item_available: false,
        price: {
            symbol: "",
            currency: "",
            current_price: 0,
            discounted: false,
            before_price: 0,
            savings_amount: 0,
            savings_percent: 0
        },
        main_image: "",
        total_images: 0,
        images: [],
        product_information: {
            dimensions: "",
            weight: "",
            available_from: "",
            available_from_utc: "",
            available_for_months: 0,
            available_for_days: 0,
            manufacturer: "",
            model_number: "",
            department: "",
            qty_per_order: 0,
            store_id: "",
            brand: ""
        },
        quantity: 0
    }],
    filters: {
        categories : [],
        rating : [1,2,3,4,5],
        price : { min: 0 , max: 100000 },
        reviews : 0,
        available: true,
        limit: 28,
        offset: 0
    },
    categories: {
        "Clothing & Accessories": {
            "Women": {
                "Ethnic Wear": null,
                "Western Wear": null,
                "Sportswear": {
                    "Active Dresses": null,
                    "Athletic Socks": null,
                    "Knitwear": null,
                    "Panties & Bras": null,
                    "Shirts & Tees": null,
                    "Shorts": null,
                    "Skirts": null,
                    "Sweatshirts & Hoodies": null,
                    "Swim": null,
                    "Tights & Leggings": null,
                    "Track Jackets": null,
                    "Tracksuits": null,
                    "Trousers": null
                },
                "Lingerie": null,
                "Sleep & Lounge Wear": null,
                "Swim & Beachwear": null,
                "Accessories": {
                    "Socks & Stockings": null,
                    "Belts": null,
                    "Caps & Hats": null,
                    "Scarves & Stoles": null,
                    "Shawls & Wraps": null,
                    "Gloves & Arm Warmers": null,
                    "Handkerchiefs": null
                },
                "Maternity": null,
                "Sunglasses & Spectacle Frames": null
            },
            "Men": {
                "T-Shirts & Polos": null,
                "Shirts": null,
                "Jeans": null,
                "Trousers": null,
                "Shorts": null,
                "Sweatshirts & Hoodies": null,
                "Sweaters": null,
                "Jackets": null,
                "Thermals": null,
                "Suits & Blazers": null,
                "Sportswear": {
                    "Athletic Socks": null,
                    "Gloves": null,
                    "Shorts": null,
                    "Sports T-Shirts": null,
                    "Sweatshirts & Hoodies": null,
                    "Track Jackets": null,
                    "Track Pants": null,
                    "Tracksuits": null
                },
                "Innerwear": null,
                "Sleep & Lounge Wear": null,
                "Track Pants & Joggers": null,
                "Accessories": {
                    "Belts & Suspenders": null,
                    "Gloves": null,
                    "Handkerchiefs": null,
                    "Hats & Caps": null,
                    "Mufflers & Scarves": null,
                    "Ties": null,
                    "Socks": null,
                    "Gift Sets": null
                },
                "Ethnic Wear": null,
                "Swimwear": null,
                "Rainwear": null,
                "Unstitched Fabric": null,
                "Sunglasses & Spectacle Frames": null
            },
            "Girls": {
                "Tops & T-Shirts": null,
                "Shirts": null,
                "Dresses": null,
                "Jumpsuits": null,
                "Jeans": null,
                "Pants": null,
                "Skirts": null,
                "Shorts": null,
                "Ethnic Wear": null,
                "Sweatshirts & Hoodies": null,
                "Sweaters": null,
                "Coats & Jackets": null,
                "Sleepwear": null,
                "Clothing Sets": null,
                "Innerwear": null,
                "Sportswear": {
                    "Athletic Socks": null,
                    "Knickers & Bras": null,
                    "Shirts & Tees": null,
                    "Shorts": null,
                    "Skirts & Skorts": null,
                    "Sweatshirts & Hoodies": null,
                    "Tights & Leggings": null
                },
                "Socks, Tights & Leggings": null,
                "Trackpants & Joggers": null,
                "Swimwear": null,
                "Accessories": {
                    "Arm Warmers & Muffs": null,
                    "Belts": null,
                    "Gloves & Mittens": null,
                    "Headbands": null,
                    "Scarves": null
                },
                "Unstitched Fabrics": null,
                "Rainwear": null,
                "Sunglasses & Spectacle Frames": null
            },
            "Boys": {
                "Tops & Tees": {
                    "Long Sleeve Tops": null,
                    "Polos": null,
                    "Sleeveless T-Shirts": null,
                    "T-Shirts": null
                },
                "Shirts": null,
                "Ethnic Wear": null,
                "Shorts": null,
                "Trousers": null,
                "Jeans": null,
                "Sweatshirts & Hoodies": null,
                "Coats & Jackets": null,
                "Underwear": {
                    "Boxers": null,
                    "Briefs": null,
                    "Sets": null,
                    "Thermal": null,
                    "Vests": null
                },
                "Socks": null,
                "Snow & Rainwear": null,
                "Sweaters": null,
                "Swim": null,
                "Sportswear": {
                    "Athletic Socks": null,
                    "Shirts & Tees": null,
                    "Shorts": null,
                    "Sports Caps": null,
                    "Sweatshirts & Hoodies": null,
                    "Trousers": null
                },
                "Sleepwear & Robes": null,
                "Accessories": {
                    "Arm Warmers": null,
                    "Balaclavas": null,
                    "Belts": null,
                    "Gloves & Mittens": null,
                    "Hats & Caps": null,
                    "Scarves": null,
                    "Ties": null
                },
                "Jumpsuits": null,
                "Clothing Sets": null,
                "Suiting & Blazers": null,
                "Unstitched Fabrics": null,
                "Sunglasses & Spectacle Frames": null
            },
            "Baby": null
        },
        "Appliances": null,
        "Car & Motorbike": null,
        "Baby": {
            "Activity & Play Time": null,
            "Baby Care": {
                "Baby Grooming": null,
                "Baby Laundry Detergents": null,
                "Bathing": {
                    "Baby Shampoos": null,
                    "Baby Soaps": null,
                    "Bath Salts": null,
                    "Bath Seats": null,
                    "Bath Thermometers": null,
                    "Bath Towels & Wash Cloths": null,
                    "Bath Toys": null,
                    "Bath Tubs": null,
                    "Body Washes": null,
                    "Wash Gloves": null
                },
                "Ear & Nose Care": {
                    "Baby Cotton Buds": null,
                    "Ear Cleaners": null,
                    "Nasal Aspirators": null,
                    "Nose Cleaners": null
                },
                "Gift Packs": null,
                "Health Care": {
                    "Medical Kits": null,
                    "Scales": null,
                    "Thermometers": null
                },
                "Hot Water Bottles & Heat Treatment": null,
                "Nail Care": null,
                "Oral Care": null,
                "Skin Care": {
                    "Diaper Rash Creams": null,
                    "Lotions": null,
                    "Oils": null,
                    "Powders": null,
                    "Sunscreen": null
                }
            },
            "Baby Carriers": null,
            "Baby Clothing": null,
            "Baby Safety": null,
            "Baby Shoes": null,
            "Bedding, Furniture & Room Décor": null,
            "Car Seats & Accessories": null,
            "Diapering & Nappy Changing": {
                "Diapers": {
                    "Cloth Diapers": null,
                    "Taped Diapers": null,
                    "Diaper Pants": null,
                    "Swim Diapers": null
                },
                "Diaper Bags": null,
                "Diaper Covers": null,
                "Baby Wipes": null,
                "Diaper Backpacks": null,
                "Changing Tables": null,
                "Diaper Rash Creams": null,
                "Diaper Pail & Refill Bags": null,
                "Diaper Stackers": null,
                "Changing Pads & Sets": null,
                "Diaper Liners": null
            },
            "Feeding": {
                "Baby Food": null,
                "Bibs": null,
                "Bottle Feeding": {
                    "Bottle Cleaning & Accessories": null,
                    "Bottle Nipples": null,
                    "Bottle Sets": null,
                    "Bottle Tote Bags": null,
                    "Bottles": null,
                    "Formula Dispensers & Mixers": null,
                    "Warmers & Sterilizers": null
                },
                "Breastfeeding": null,
                "Food Storage": null,
                "Food Warmers": null,
                "High Chairs & Booster Seats": null,
                "Muslin Squares": null,
                "Pacifiers & Teethers": null,
                "Sippy Cups": null,
                "Tableware": null
            },
            "Pacifiers & Teethers": null,
            "Potty Training & Step Stools": {
                "Potty Seats & Chairs": null,
                "Step Stools": null,
                "Wet Wipes": null
            },
            "Strollers, Buggies & Prams": null
        },
        "Beauty": null,
        "Books": {
            "Action & Adventure": null,
            "Arts, Film & Photography": {
                "Architecture": null,
                "Cinema & Broadcast": null,
                "Dance": null,
                "Design & Fashion": null,
                "History, Theory & Criticism": null,
                "Museums & Museology": null,
                "Music": null,
                "Painting": null,
                "Photography": null,
                "Sculpture": null,
                "Theatre & Spectacles": null
            },
            "Biographies, Diaries & True Accounts": {
                "Biographies & Autobiographies": null,
                "Diaries, Letters & Journals": null,
                "True Accounts": null
            },
            "Business & Economics": {
                "Business Self-Help": null,
                "Business, Strategy & Management": null,
                "Economics": {
                    "Banks & Banking": null,
                    "Commerce": null,
                    "Commercial Policy": null,
                    "Comparative": null,
                    "Development & Growth": null,
                    "Econometrics": null,
                    "Economic Conditions": null,
                    "Economic History": null,
                    "Economic Policy & Development": null,
                    "Environmental Economics": null,
                    "Free Enterprise": null,
                    "Inflation": null,
                    "Interest": null,
                    "Labor & Industrial Relations": null,
                    "Macroeconomics": null,
                    "Microeconomics": null,
                    "Money & Monetary Policy": null,
                    "Public Finance": null,
                    "Sustainable Development": null,
                    "Theory": null,
                    "Unemployment": null,
                    "Urban & Regional": null
                },
                "Industries & Business Sectors": null
            },
            "Children's & Young Adult": {
                "Adventure": null,
                "Comics & Mangas": null,
                "Crafts, Hobbies & Practical Interests": null,
                "Crime & Thriller": null,
                "Early Learning": null,
                "Family, Personal & Social Issues": null,
                "Fantasy, Science Fiction & Horror": {
                    "Fantasy": null,
                    "Horror & Ghost Stories": null,
                    "Science Fiction": null
                },
                "Games, Toys & Activities": null,
                "Historical Fiction": null,
                "History": null,
                "Humour": null,
                "Interactive & Activity Books": null,
                "Language Learning": null,
                "Literature & Fiction": null,
                "Money & Jobs": null,
                "Mysteries & Curiosities": null,
                "Painting, Arts & Music": null,
                "Picture Books": null,
                "Reference": null,
                "Religion": null,
                "Science, Nature & Technology": null,
                "Sport": null,
                "Traditional Stories": null
            },
            "Comics & Mangas": null,
            "Computing, Internet & Digital Media": null,
            "Crafts, Home & Lifestyle": {
                "Antiques & Collectables": null,
                "Food, Drink & Entertaining": null,
                "Games & Quizzes": null,
                "Gardening": null,
                "Handicrafts, Decorative Arts & Crafts": null,
                "Home & House Maintenance": null,
                "Lifestyle & Personal Style Guides": null,
                "Models & Model Railroading": null,
                "Pets": null
            },
            "Crime, Thriller & Mystery": null,
            "Exam Preparation": null,
            "Fantasy, Horror & Science Fiction": null,
            "Health, Family & Personal Development": {
                "Family & Relationships": null,
                "Healthy Living & Wellness": null,
                "Mind, Body & Spirit": null,
                "Personal Development & Self-Help": null
            },
            "Historical Fiction": null,
            "History": {
                "Africa": null,
                "Ancient": null,
                "Asia": null,
                "Europe": null,
                "Indian History": null,
                "Latin America": null,
                "Middle East": null,
                "Military": null,
                "United States": null,
                "World": {
                    "Civilization & Culture": null,
                    "Cold War": null,
                    "Expeditions & Discoveries": null,
                    "Maritime History & Piracy": null,
                    "Revolutionary": null,
                    "Slavery & Emancipation": null,
                    "Women in History": null
                }
            },
            "Humour": null,
            "Language, Linguistics & Writing": {
                "Dictionaries": null,
                "Grammar": null,
                "Journalism": null,
                "Language Learning & Teaching": null,
                "Linguistics": null,
                "Rhetoric & Speech": null,
                "Writing Guides": null
            },
            "Law": {
                "Bar Exams": null,
                "Business Law": null,
                "Constitutional Law": null,
                "Criminal Law": null,
                "Legal Reference": null,
                "Tax Law": null
            },
            "Literature & Fiction": {
                "Anthologies": null,
                "Classic Fiction": null,
                "Contemporary Fiction": null,
                "Essays": null,
                "Indian Writing": null,
                "Literary Theory, History & Criticism": null,
                "Myths, Legends & Sagas": null,
                "Plays": null,
                "Poetry": null,
                "Religious & Spiritual Fiction": null,
                "Short Stories": null,
                "Travel Writing": null
            },
            "Maps & Atlases": null,
            "Politics": {
                "Freedom & Security": null,
                "International Relations & Globalization": null,
                "Political Ideologies": null,
                "Political Parties": null,
                "Political Theory": null,
                "Political Structure & Processes": null,
                "Public Administration": null
            },
            "Reference": null,
            "Religion": null,
            "Romance": null,
            "Sciences, Technology & Medicine": {
                "Agriculture & Farming": null,
                "Astronomy": null,
                "Biology & Life Sciences": null,
                "Chemistry": null,
                "Earth Sciences": null,
                "Engineering & Technology": null,
                "Environment": null,
                "Geography": null,
                "Mathematics": null,
                "Medicine": null,
                "Physics": null,
                "Transportation & Automotive": null
            },
            "Society & Social Sciences": {
                "Anthropology": null,
                "Education": null,
                "Philosophy": null,
                "Psychology": null,
                "Social Welfare & Social Services": null,
                "Society & Culture": null,
                "Sociology": null
            },
            "Sports": {
                "Active Outdoor Pursuits": {
                    "Camping & Woodcraft": null,
                    "Climbing & Mountaineering": null,
                    "Outdoor Survival Skills": null,
                    "Walking, Hiking & Trekking": null
                },
                "Air Sports": null,
                "American Football": null,
                "Baseball": null,
                "Basketball": null,
                "Bodybuilding & Weightlifting": null,
                "Combat Sports & Self-Defence": null,
                "Cricket": null,
                "Cycling": null,
                "Equestrian & Animal Sports": null,
                "Field Sports": null,
                "Golf": null,
                "Gymnastics": null,
                "Marathon & Running": null,
                "Motor Sports": null,
                "Pool, Billiards & Snooker": null,
                "Rugby": null,
                "Skateboarding & Rollerblading": null,
                "Soccer": null,
                "Sporting Events & Organisations": null,
                "Tennis": null,
                "Training & Coaching": null,
                "Triathlon": null,
                "Water Sports": {
                    "Boating & Motor Boating": null,
                    "Canoeing & Kayaking": null,
                    "Sailing": null,
                    "Surfing, Windsurfing & Water Skiing": null,
                    "Swimming, Snorkelling & Diving": null
                },
                "Winter Sports": {
                    "Ice & Figure Skating": null,
                    "Ice Hockey": null,
                    "Skiing": null
                }
            },
            "Textbooks & Study Guides": {
                "Higher Education Textbooks": {
                    "Business & Finance": {
                        "Accounting": null,
                        "Banking": null,
                        "Business Communication": null,
                        "Business Development": null,
                        "Business Ethics": null,
                        "Business Law": null,
                        "Economics": {
                            "Economic Theory": null,
                            "Macroeconomics": null,
                            "Microeconomics": null
                        },
                        "Entrepreneurship": null,
                        "Human Resources": null,
                        "International Business": null,
                        "Investments & Securities": null,
                        "Management": null,
                        "Marketing": null,
                        "Real Estate": null,
                        "Sales": null
                    },
                    "Communication & Journalism": null,
                    "Computer Science": null,
                    "Teaching & Education": null,
                    "Engineering": null,
                    "Humanities": {
                        "Archaelogy": null,
                        "Art History": null,
                        "Design": null,
                        "History Textbooks": null,
                        "Language & Linguistics": null,
                        "Library & Information Science": null,
                        "Literature": null,
                        "Performing Arts": null,
                        "Philosophy": null,
                        "Visual Arts": null
                    },
                    "Law": {
                        "Bar Exams": null,
                        "Business Law": null,
                        "Constitutional Law": null,
                        "Criminal Law": null,
                        "Legal Reference": null,
                        "Tax Law": null
                    },
                    "Medicine & Health Sciences": {
                        "Administration & Policy": null,
                        "Allied Health Services": null,
                        "Alternative Medicine": null,
                        "Dentistry": null,
                        "Medicine": null,
                        "Nursing": null,
                        "Reference": null,
                        "Research": null,
                        "Test Preparation & Review": null,
                        "Veterinary Medicine": null
                    },
                    "Science & Mathematics": null,
                    "Social Sciences": {
                        "Archaeology": null,
                        "Criminology": null,
                        "Gay & Lesbian Studies": null,
                        "Gender Studies": null,
                        "Geography": null,
                        "Military Sciences": null,
                        "Political Science": null,
                        "Psychology": null,
                        "Sociology": null
                    }
                },
                "Reference": null,
                "School Textbooks": null,
                "Study Guides & Workbooks": {
                    "Study Guides": null,
                    "Study Skills": null,
                    "Workbooks": null
                }
            },
            "Travel": null
        },
        "Movies & TV Shows": null,
        "Electronics": {
            "Accessories": {
                "Blank Media": null,
                "Camera & Photo Accessories": null,
                "Car & Vehicle Electronics Accessories": null,
                "Computer Accessories": {
                    "Adapters": null,
                    "Audio & Video Accessories": null,
                    "Blank Media": null,
                    "Cables": {
                        "DVI Cables": null,
                        "DisplayPort Cables": null,
                        "Ethernet Cables": null,
                        "FDD Cables": null,
                        "HDMI Cables": null,
                        "IDE Cables": null,
                        "PS/2 Cables": null,
                        "Parallel Cables": null,
                        "RGB Cables": null,
                        "SAS Cables": null,
                        "SCSI Cables": null,
                        "Serial Cables": null,
                        "USB Cables": null,
                        "VGA Cables": null
                    },
                    "FireWire Hubs": null,
                    "Hard Disk Bags": null,
                    "Keyboards, Mice & Input Devices": null,
                    "KVM Switches": null,
                    "Laptop Accessories": null,
                    "Office Equipment Cleaners": null,
                    "PC Gaming Peripherals": null,
                    "Surge Protectors": null,
                    "Tablet Accessories": {
                        "Bags & Cases": null,
                        "Bundles": null,
                        "Chargers, Adapters & Cables": null,
                        "Docking Stations": null,
                        "Tablet Keyboards": null,
                        "Screen Protectors": null,
                        "Skins": null,
                        "Stands": null
                    },
                    "Uninterrupted Power Supplies": null,
                    "USB Gadgets": null,
                    "USB Hubs": null
                },
                "General Purpose Batteries & Battery Chargers": null,
                "Home Audio & Video Accessories": null,
                "Memory Cards": null,
                "Mobile Accessories": null,
                "Navigation Accessories": null,
                "Portable Audio & Video Accessories": null,
                "Power Accessories": null,
                "Tablet Accessories": {
                    "Bags & Cases": null,
                    "Bundles": null,
                    "Chargers, Adapters & Cables": null,
                    "Docking Stations": null,
                    "Tablet Keyboards": null,
                    "Screen Protectors": null,
                    "Skins": null,
                    "Stands": null
                }
            },
            "Cameras & Photography": null,
            "Car & Vehicle Electronics": null,
            "Computers & Accessories": {
                "Accessories": {
                    "Adapters": null,
                    "Audio & Video Accessories": null,
                    "Blank Media": null,
                    "Cables": {
                        "DVI Cables": null,
                        "DisplayPort Cables": null,
                        "Ethernet Cables": null,
                        "FDD Cables": null,
                        "HDMI Cables": null,
                        "IDE Cables": null,
                        "PS/2 Cables": null,
                        "Parallel Cables": null,
                        "RGB Cables": null,
                        "SAS Cables": null,
                        "SCSI Cables": null,
                        "Serial Cables": null,
                        "USB Cables": null,
                        "VGA Cables": null
                    },
                    "FireWire Hubs": null,
                    "Hard Disk Bags": null,
                    "Keyboards, Mice & Input Devices": null,
                    "KVM Switches": null,
                    "Laptop Accessories": null,
                    "Office Equipment Cleaners": null,
                    "PC Gaming Peripherals": null,
                    "Surge Protectors": null,
                    "Tablet Accessories": {
                        "Bags & Cases": null,
                        "Bundles": null,
                        "Chargers, Adapters & Cables": null,
                        "Docking Stations": null,
                        "Tablet Keyboards": null,
                        "Screen Protectors": null,
                        "Skins": null,
                        "Stands": null
                    },
                    "Uninterrupted Power Supplies": null,
                    "USB Gadgets": null,
                    "USB Hubs": null
                },
                "Components": null,
                "Desktops": null,
                "External Devices & Data Storage": null,
                "Keyboards, Mice & Input Devices": null,
                "Laptops": null,
                "Monitors": null,
                "Networking Devices": null,
                "PC Speakers": null,
                "Printers": null,
                "Scanners": null,
                "Webcams & VoIP Equipment": null
            },
            "GPS & Accessories": null,
            "Headphones": {
                "In-Ear": null,
                "On-Ear": null,
                "Over-Ear": null
            },
            "Home Audio": null,
            "Home Theater, TV & Video": null,
            "Mobiles & Accessories": null,
            "Portable Media Players": null,
            "Tablets": null,
            "Telephones & Accessories": null,
            "Warranties": null,
            "Wearable Technology": null
        },
        "Furniture": {
            "Bedroom Furniture": {
                "Bedroom Wardrobes": null,
                "Beds, Frames & Bases": null,
                "Bedside Tables": null,
                "Dressers & Chests of Drawers": null,
                "Dressing Tables": null,
                "Mattresses & Box Springs": null
            },
            "Garden & Outdoor Furniture": null,
            "Hallway Furniture": null,
            "Home Bar Furniture": null,
            "Kids' Furniture": {
                "Beds": null,
                "Bookcases": null,
                "Chairs": {
                    "Bean Bags": null,
                    "Desk Chairs": null,
                    "Folding Chairs": null,
                    "Rocking Chairs": null
                },
                "Desks": null,
                "Dressers": null,
                "Furniture Sets": null,
                "Mattresses": null,
                "Sofas": null,
                "Stools": null,
                "Tables": null,
                "Wardrobes": null
            },
            "Kitchen & Dining Room Furniture": {
                "Cabinets & Sideboards": null,
                "Dining Chairs": null,
                "Dining Room Sets": null,
                "Dining Tables": null,
                "Serving Trolleys": null,
                "Table Benches": null
            },
            "Living Room Furniture": {
                "Bean Bags, Covers & Refills": null,
                "Bookcases": null,
                "Cabinets": null,
                "Chairs": {
                    "Armchairs": null,
                    "Folding Chairs": null,
                    "Rocking Chairs": null,
                    "Stacking Chairs": null
                },
                "Footstools": null,
                "Footstools, Pouffes & Ottomans": null,
                "Inflatable Sofas": null,
                "Magazine Racks": null,
                "Partitions": null,
                "Recliners": null,
                "Sofa Sets": null,
                "Sofas & Couches": null,
                "TV & Entertainment Units": null,
                "Tables": {
                    "Coffee Tables": null,
                    "Console Tables": null,
                    "End Tables": null,
                    "Nesting Tables": null
                },
                "Wall Shelves": null
            },
            "Seating Furniture": null,
            "Storage Furniture": null,
            "Study & Home Office Furniture": null
        },
        "Gift Cards": null,
        "Gourmet & Specialty Foods": null,
        "Health & Personal Care": {
            "Bath & Shower": {
                "Bath Additives": null,
                "Bathing Accessories": null,
                "Bath Sets & Kits": null,
                "Body Scrubs": null,
                "Body Washes": null,
                "Deodorants & Antiperspirants": null,
                "Soaps": null
            },
            "Beauty Tools & Accessories": null,
            "Diet & Nutrition": null,
            "Hair Care & Styling": null,
            "Health Care": {
                "Adult Diapers & Incontinence": null,
                "Allergy, Sinus & Asthma": null,
                "Alternative Medicine": null,
                "Baby & Child Care": null,
                "Cough & Cold": null,
                "Diabetes Care": null,
                "Digestion & Nausea": null,
                "Ear Care": null,
                "Eye Care": null,
                "Family Planning & Contraceptives": null,
                "First Aid": null,
                "Health Care Devices": null,
                "Massage & Relaxation": null,
                "Pain Relief Devices": null,
                "Pill Cases & Splitters": null,
                "Sleep & Snoring": null,
                "Smoking Cessation": null,
                "Stimulants": null,
                "Therapeutic Skin Care": null,
                "Thermometer Accessories": null,
                "Thermometers": null,
                "Women's Health": null
            },
            "Healthcare Packages": null,
            "Home Medical Supplies & Equipment": null,
            "Household Supplies": {
                "Air Fresheners": null,
                "Dishwashing Supplies": null,
                "Household Cleaners": null,
                "Incense Sticks": null,
                "Indoor Insect & Pest Control": null,
                "Laundry Detergents": null,
                "Paper, Plastic & Wraps": null,
                "Pooja Supplies": null
            },
            "Personal Care": {
                "Deodorants & Antiperspirants": null,
                "Feminine Hygiene": null,
                "Foot Care": null,
                "Hand Care": null,
                "Lip Care": {
                    "Balms": null,
                    "Scrubs": null,
                    "Lip Protection": null
                },
                "Oral Care": {
                    "Breath Fresheners": null,
                    "Denture Care": null,
                    "Flosses": null,
                    "Manual Toothbrushes": null,
                    "Mouthwash": null,
                    "Replacement Brush Heads": null,
                    "Teeth Whitening": null,
                    "Toothpaste": null,
                    "Power Toothbrushes": null
                },
                "Personal Care Appliances": null,
                "Shaving, Waxing & Beard Care": null
            },
            "Personal Care & Health Appliances": null,
            "Sexual Wellness & Sensuality": null,
            "Skin Care": {
                "Face": null,
                "Body": null,
                "Lips": null,
                "Eyes": null,
                "Hands & Nails": null,
                "Feet": null
            }
        },
        "Home & Kitchen": {
            "Backyard Birding Supplies": null,
            "Barbecue & Outdoor Dining": null,
            "Beekeeping Equipment": null,
            "Garden and Outdoor Furniture": null,
            "Gardening": null,
            "Mowers & Outdoor Power Tools": null,
            "Outdoor Décor": {
                "Birdbaths": null,
                "Decorative Fences": null,
                "Decorative Stones": null,
                "Flags": null,
                "Fountains": null,
                "Garden Sculptures & Statues": null,
                "Outdoor Candles": null,
                "Outdoor Thermometers & Meteorological Instruments": null,
                "Wind Sculptures & Spinners": null
            },
            "Pest Control": null,
            "Plants, Seeds & Bulbs": null,
            "Solar & Wind Power": null
        },
        "Industrial & Scientific": {
            "Abrasive & Finishing Products": null,
            "Additive Manufacturing Products": null,
            "Commercial Door Products": null,
            "Cutting Tools": null,
            "Fasteners": {
                "Anchors": null,
                "Bolts": null,
                "Pins": null,
                "Screws": null,
                "Threaded Rods & Studs": null,
                "Washers": null
            },
            "Filtration": null,
            "Food Service Equipment & Supplies": null,
            "Hydraulics, Pneumatics & Plumbing": null,
            "Industrial Electrical": {
                "Controls & Indicators": null,
                "Semiconductor Products": null,
                "Sensors": null,
                "Wiring & Connecting": null
            },
            "Industrial Hardware": null,
            "Janitorial & Sanitation Supplies": null,
            "Lab & Scientific Products": {
                "Glassware & Labware": null,
                "Lab Chemicals": null,
                "Lab Filters": null,
                "Lab Furniture": null,
                "Lab Instruments & Equipment": null,
                "Lab Supplies & Consumables": null
            },
            "Material Handling Products": null,
            "Occupational Health & Safety Products": {
                "Facility Safety Products": null,
                "Hazardous Material Handling": null,
                "Safety Signs & Signals": null,
                "Work Safety Equipment & Gear": null
            },
            "Packaging & Shipping Supplies": null,
            "Power & Hand Tools": {
                "Hand Tools": {
                    "Chisels": null,
                    "Clamps": null,
                    "Cutters": null,
                    "Hammers & Mallets": null,
                    "Knives": null,
                    "Pliers & Pincers": null,
                    "Screwdrivers": null,
                    "Shears & Scissors": null,
                    "Snips": null,
                    "Sockets & Socket Sets": null,
                    "Spanners & Wrenches": null,
                    "Strippers": null
                },
                "Power Tool Accessories": null,
                "Power Tools": null
            },
            "Power Transmission Products": null,
            "Professional Dental Supplies": null,
            "Professional Medical Supplies": {
                "Apparel & Gloves": null,
                "Diagnostics & Screening": null,
                "Examination Supplies & Consumables": null,
                "Fluid Administration & Collection": null,
                "Furniture & Safety Equipment": null,
                "Instruments & Surgical Tools": null,
                "Patient Monitoring & Treatment Equipment": null,
                "Radiology & Imaging": null,
                "Recordkeeping & Labels": null,
                "Respiratory & Anaesthesia Equipment": null,
                "Sterilisation & Infection Prevention": null
            },
            "Robotics": null,
            "Tapes, Adhesives & Sealers": null,
            "Test, Measure & Inspect": null
        },
        "Jewellery": null,
        "Kindle Store": null,
        "Lawn & Garden": null,
        "Luggage & Bags": null,
        "Luxury Beauty": null,
        "Music": null,
        "Musical Instruments": {
            "Bass Guitars & Gear": null,
            "DJ & VJ Equipment": null,
            "Drums & Percussion": {
                "Accessories": null,
                "Cymbals": null,
                "Drum Sets": null,
                "Electronic Drums": null,
                "Hand Drums": null,
                "Hardware": {
                    "Bass-Drum Pedals": null,
                    "Boom Cymbal Stands": null,
                    "High-Hat Stands": null,
                    "Racks": null,
                    "Snare Stands": null,
                    "Tom Mounts": null
                },
                "Practice Pads": null
            },
            "Guitars & Gear": null,
            "Karaoke Equipment": null,
            "Microphones": {
                "Condenser": null,
                "Dynamic": null,
                "Ribbon Microphones": null,
                "Wireless": null
            },
            "PA & Stage": null,
            "Piano & Keyboard": null,
            "Recording & Computer": null,
            "String Instruments": null,
            "Synthesizer & Sampler": null,
            "Wind Instruments": null
        },
        "Office Products": {
            "Stationery": {
                "Art & Craft Supplies": null,
                "Notebooks, Writing Pads & Diaries": null,
                "Pens, Pencils & Writing Supplies": null,
                "School & Educational Supplies": null
            },
            "Calendars, Planners & Personal Organisers": null,
            "Calculators": null,
            "Envelopes & Postal Supplies": null,
            "Office Electronics": {
                "Accessories": {
                    "Cash Register Accessories": null,
                    "Electronic Dictionary, Thesaurus & Translator Accessories": null,
                    "Label Maker Accessories": null,
                    "Laminating Pouches": null,
                    "Photocopier Accessories": null,
                    "Printer Accessories": null,
                    "Projector Accessories": null
                },
                "Barcode Scanners": null,
                "Binding Machines & Accessories": null,
                "Biometric Scanners": null,
                "Calculators": null,
                "Cash Registers": null,
                "Label Makers": null,
                "Laminators": null,
                "Presentation Pointers": null,
                "Printers": null,
                "Projectors": null,
                "Scanners": null,
                "Shredders": null,
                "Surveillance Cameras": null,
                "Voice Recorders & Accessories": null,
                "Ink Cartridges": null,
                "Toner Cartridges": null
            },
            "Office Paper Products": null,
            "Office Supplies": null
        },
        "Amazon Pantry": null,
        "Computers & Accessories": {
            "Accessories & Peripherals": null,
            "Components": null,
            "Desktops": null,
            "External Devices & Data Storage": null,
            "Laptops": null,
            "Monitors": null,
            "Networking Devices": null,
            "Printers, Inks & Accessories": null,
            "Scanners": null,
            "Tablets": null,
            "Warranties": null
        },
        "Pet Supplies": {
            "Birds": {
                "Cages & Accessories": null,
                "Feeding & Watering Supplies": null,
                "Food": null,
                "Toys": null
            },
            "Cats": {
                "Beds & Furniture": null,
                "Carriers & Strollers": null,
                "Cat Flaps, Steps, Nets & Pens": null,
                "Collars, Harnesses & Leashes": null,
                "Feeding & Watering Supplies": null,
                "Food": null,
                "Grooming": null,
                "Litter & Housebreaking": null,
                "Toys": {
                    "Catnip Toys": null,
                    "Feather Toys": null,
                    "Interactive Toys": null,
                    "Mice & Animal Toys": null,
                    "Plush Toys": null
                },
                "Treats": null
            },
            "Dogs": {
                "Apparel & Accessories": {
                    "Bandanas": null,
                    "Boots & Paw Protectors": null,
                    "Cold Weather Coats": null,
                    "Costumes": null,
                    "Dresses": null,
                    "Hats": null,
                    "Hoodies": null,
                    "Lifejackets": null,
                    "Raincoats": null,
                    "Shirts": null,
                    "Sweaters": null
                },
                "Beds & Furniture": null,
                "Carriers & Travel Products": null,
                "Collars, Harnesses & Leashes": null,
                "Doors, Gates & Ramps": null,
                "Feeding & Watering Supplies": null,
                "Food": null,
                "Grooming": null,
                "Health Supplies": null,
                "Houses, Kennels & Pens": null,
                "Litter & Housebreaking": null,
                "Toys": {
                    "Balls": null,
                    "Chew Toys": null,
                    "Flying Discs": null,
                    "Interactive Toys": null,
                    "Plush Toys": null,
                    "Ropes": null,
                    "Squeak Toys": null
                },
                "Training & Behaviour Aids": null,
                "Treats": null
            },
            "Fish & Aquatics": null,
            "Small Animals": null
        },
        "Shoes & Handbags": {
            "Shoes": {
                "Women's Shoes": null,
                "Men's Shoes": null,
                "Girls' Shoes": null,
                "Boys' Shoes": null,
                "Baby Shoes": null
            },
            "Shoe Care & Accessories": null,
            "Handbags, Purses & Clutches": {
                "Clutches": null,
                "Handbags": null,
                "Hobos & Shoulder Bags": null,
                "Messenger Bags": null,
                "Potlis & Wristlets": null,
                "Satchels": null,
                "Sling & Cross-Body Bags": null,
                "Totes": null,
                "Women's Backpacks": null,
                "Women's Wallets": null
            }
        },
        "Software": null,
        "Sports, Fitness & Outdoors": {
            "Accessories": null,
            "Archery": null,
            "Badminton": null,
            "Baseball": {
                "Baseballs": null,
                "Bats": null,
                "Batting Gloves": null
            },
            "Basketball": {
                "Backboard Accessories": null,
                "Backboards": null,
                "Basketballs": null,
                "Air Pumps & Accessories": null
            },
            "Billiards": null,
            "Boxing": {
                "Boxing Gloves": null,
                "Boxing Pads": null,
                "Protective Gear": {
                    "Chest & Rib Guards": null,
                    "Hand Wraps": null,
                    "Mouthguards": null
                },
                "Punching Bags": null
            },
            "Camping & Hiking": null,
            "Climbing": null,
            "Cricket": null,
            "Cycling": {
                "Cycles": {
                    "Comfort Bikes": null,
                    "Folding Bikes": null,
                    "Hybrid Bikes": null,
                    "Mountain Bikes": null,
                    "Road Bikes": null
                },
                "Kids' Cycles & Accessories": {
                    "Kids' Cycles": null,
                    "Kids' Protective Gear": null,
                    "Kids' Helmets": null
                },
                "Components & Parts": {
                    "Brake Parts": null,
                    "Brakes": null,
                    "Cables": null,
                    "Cassettes & Freewheels": null,
                    "Derailleurs": null,
                    "Handlebars": null,
                    "Kickstands": null,
                    "Lights & Reflectors": null,
                    "Pedals": null,
                    "Saddles": null,
                    "Stems": null,
                    "Suspension": null,
                    "Tires": null,
                    "Tubes": null,
                    "Wheels": null
                },
                "Tools, Repair & Maintenance": null,
                "Accessories": {
                    "Cycle Backpacks, Bags & Panniers": null,
                    "Cycle Bells": null,
                    "Cycle Locks": null,
                    "Cycle Mirrors": null,
                    "Cycle Pump Accessories": null,
                    "Cycle Pumps": null,
                    "Cycle Trainer Accessories": null,
                    "Cycle Trainers": null,
                    "Cyclocomputers": null,
                    "Fenders": null,
                    "Glasses": null,
                    "GPS Units": null,
                    "Indoor Cycle Storage": null,
                    "Lighting Parts & Accessories": null,
                    "Racks": null,
                    "Rim Bands": null,
                    "Saddle Covers": null,
                    "Water Bottles & Shakers": null
                },
                "Clothing": {
                    "Boys": null,
                    "Girls": null,
                    "Men": null,
                    "Women": null
                },
                "Helmets": {
                    "Allround Helmets": null,
                    "Children's Helmets": null,
                    "Helmet Accessories": null
                }
            },
            "Darts & Dartboards": null,
            "Disc Sports": null,
            "Equestrian Sports": null,
            "Exercise & Fitness": {
                "Accessories": {
                    "Aquatic Fitness Equipment": null,
                    "Body Bars": null,
                    "Chest Expander": null,
                    "Exercise Balls & Accessories": null,
                    "Exercise Bands": null,
                    "Exercise Mats": null,
                    "Fitness Hoops": null,
                    "Gloves": null,
                    "Jumping Trainers": null,
                    "Massage Belts & Electric Stimulators": null,
                    "Protective Flooring": null,
                    "Sauna Suits": null,
                    "Skipping Ropes": null,
                    "Step Platforms": null,
                    "Straps": null,
                    "Toning Belts": null,
                    "Waist Trimmers": null,
                    "Wraps": null,
                    "Water Bottles": null
                },
                "Aerobic Training Machines": null,
                "Balance Trainers": null,
                "Clothing": null,
                "Footwear": null,
                "Gym Bags": null,
                "Pilates": null,
                "Strength Training Equipment": null,
                "Yoga": null
            },
            "Fan Shop": null,
            "Field Hockey": null,
            "Fishing": {
                "Accessories": {
                    "Fishing Bedchairs": null,
                    "Nets": null,
                    "Pliers & Tools": null
                },
                "Fishing Line": null,
                "Float Tubes": null,
                "Fly Fishing": null,
                "Ice Fishing": null,
                "Lures & Flies": null,
                "Rods": null,
                "Terminal Tackle": null
            },
            "Football": null,
            "Footwear": {
                "Athletic Shoes Accessories": null,
                "Boys": null,
                "Girls": null,
                "Men": {
                    "Running Shoes": null,
                    "Training Shoes": null,
                    "Football Shoes": null,
                    "Trekking & Hiking Footwear": null,
                    "Cricket Shoes": null,
                    "Badminton Shoes": null,
                    "Basketball Shoes": null,
                    "Tennis Shoes": null,
                    "Boxing Shoes": null,
                    "Walking Shoes": null
                },
                "Women": {
                    "Running Shoes": null,
                    "Training Shoes": null,
                    "Walking Shoes": null,
                    "Tennis Shoes": null,
                    "Badminton Shoes": null,
                    "Golf Shoes": null,
                    "Football Shoes": null,
                    "Trekking & Hiking Footwear": null,
                    "Triathlon Shoes": null,
                    "Track & Field Shoes": null
                }
            },
            "Golf": null,
            "Gymnastics": {
                "Competition Equipment": null,
                "Equipment Bags": null,
                "Footwear": null,
                "Hand Grips": null,
                "Training Equipment": null
            },
            "Martial Arts": null,
            "Ripsticking": null,
            "Rugby": null,
            "Running": {
                "Clothing": {
                    "Boys": null,
                    "Men": {
                        "Beanies": null,
                        "Pants": null,
                        "Shorts": null,
                        "Socks": null,
                        "Tights": null,
                        "Tops & Tees": null
                    },
                    "Women": {
                        "Jackets": null,
                        "Pants": null,
                        "Shorts": null,
                        "Tights": null,
                        "Tops & Tees": null
                    }
                },
                "Footwear": null,
                "Heart Rate Monitors": null,
                "Hydration Belts": null,
                "Hydration Packs": null
            },
            "Skates, Skateboards & Scooters": {
                "Inline Skates": null,
                "Roller Skates": null,
                "Inline & Roller Skating Parts": null,
                "Skateboarding": {
                    "Skateboards": null,
                    "Skateboard Parts": null,
                    "Wax": null
                },
                "Scooters & Equipment": null,
                "Helmets": null,
                "Protective Gear": {
                    "Elbow Pads": null,
                    "Knee Pads": null,
                    "Sets": null,
                    "Wrist Guards": null
                }
            },
            "Snooker": null,
            "Sports Clothing": null,
            "Sports Gadgets": null,
            "Squash": null,
            "Table Tennis": {
                "Balls": null,
                "Blades": null,
                "Equipment Bags": null,
                "Nets & Posts": null,
                "Racquets": null,
                "Rubbers": null,
                "Table Tennis Sets": null,
                "Tables": null
            },
            "Team Handball": null,
            "Tennis": {
                "Ball Hoppers": null,
                "Balls": null,
                "Clothing": null,
                "Tennis Accessories": null,
                "Equipment Bags": null,
                "Footwear": null,
                "Nets": null,
                "Racquet Covers": null,
                "Racquet Grips": null,
                "Racquet Strings": null,
                "Racquets": null,
                "Training Equipment": null,
                "Vibration Dampeners": null
            },
            "Track & Field": null,
            "Volleyball": {
                "Nets": null,
                "Pole Sets": null,
                "Protective Gear": null,
                "Training Equipment": null,
                "Volleyballs": null,
                "Air Pumps & Accessories": null
            },
            "Water Sports": {
                "Boating": {
                    "Docking & Anchoring Equipment": null,
                    "Dry Bags": null,
                    "Steering Equipment": null
                },
                "Diving & Snorkelling": null,
                "Kayaking": null,
                "Surfing": null,
                "Swimming": {
                    "Earplugs": null,
                    "Electronics": null,
                    "Goggles": null,
                    "Nose Clips": null,
                    "Sports Towels": null,
                    "Swim Caps": null,
                    "Swim Fins": null,
                    "Swimwear": null,
                    "Training Equipment": {
                        "Hand Paddles": null,
                        "Kickboards": null,
                        "Swim Vests": null,
                        "Training Fins": null
                    }
                },
                "Water Polo": null,
                "Water Skiing & Towsports": null
            }
        },
        "Toys & Games": {
            "Action & Toy Figures": null,
            "Arts & Crafts": {
                "Aprons & Smocks": null,
                "Blackboards & Whiteboards": null,
                "Clay & Dough": null,
                "Colouring Books & Pads": null,
                "Craft Kits": {
                    "Beads": null,
                    "Children's Knitting & Textile Design": null,
                    "Children's Weaving": null,
                    "Fake Food Makers": null,
                    "Glass Arts & Sun Catchers": null,
                    "Jewellery": null,
                    "Paint by Number Kits": null,
                    "Painting Craft Kits": null,
                    "Paper Craft": null,
                    "Sand Art": null,
                    "Scratch Art": null,
                    "Wood": null
                },
                "Doodle & Scribbler Boards": null,
                "Drawing & Painting Supplies": {
                    "Chalk": null,
                    "Kids Coloured Pencils": null,
                    "Colouring Pens & Markers": null,
                    "Crayons": null,
                    "Finger Paint": null,
                    "Glue, Paste & Tape": null,
                    "Paintbrushes": null,
                    "Painting Supply Sets": null,
                    "Paper": null,
                    "Pencil Erasers": null,
                    "Scissors": null,
                    "Sharpeners": null,
                    "Tempera & Poster Paint": null,
                    "Watercolour Paint": null
                },
                "Easels": null,
                "Felt Kits": null,
                "Fuse Beads": null,
                "Mandalas": null,
                "Molding & Sculpture": null,
                "Mosaics": null,
                "Papeterie & Stickers": null,
                "Printing & Stamping": null
            },
            "Baby & Toddler Toys": {
                "Activity Play Centres": null,
                "Baby Toys": null,
                "Bath Toys": null,
                "Bricks & Blocks": null,
                "Counting Frames": null,
                "Hammering & Nailing Toys": null,
                "Hobbyhorses": null,
                "Indoor Climbers & Play Structures": null,
                "Motor Activity Toys": null,
                "Pull Along Toys": null,
                "Rocking & Spring Ride-Ons": null,
                "Soft Toys": null,
                "Sorting, Stacking & Plugging Toys": null,
                "Sound Toys": null,
                "Spinning & Battling Tops": null,
                "Teaching Clocks": null
            },
            "Bikes, Trikes & Ride-Ons": null,
            "Building & Construction Toys": null,
            "Coin & Stamp Collecting": null,
            "Collectible Trading Cards & Accessories": null,
            "Cosmetics & Jewellery": null,
            "Die-Cast & Toy Vehicles": null,
            "Dolls & Accessories": {
                "Baby Dolls": null,
                "Clothing & Shoes": null,
                "Dollhouse Accessories": null,
                "Dollhouse Dolls": null,
                "Dollhouses": null,
                "Fashion Dolls": null,
                "Furniture": null,
                "Playsets": null,
                "Prams": null,
                "Soft Dolls": null,
                "Vehicles": null
            },
            "Dressing Up & Costumes": null,
            "Electronic Toys": null,
            "Games": {
                "Action & Reflex Games": null,
                "Backgammon": null,
                "Bingo": null,
                "Board Games": null,
                "Card Games": null,
                "Checkers": null,
                "Chess": null,
                "DVD Games": null,
                "Dice & Dice Games": null,
                "Domino & Tile Games": null,
                "Educational Games": null,
                "Electronic Games": null,
                "Floor Games": null,
                "Games Collections": null,
                "Go": null,
                "Hyakunin Isshu": null,
                "Karuta Cards": null,
                "Magic Boxes": null,
                "Mah Jong": null,
                "Mystery Games": null,
                "Role Playing Games": null,
                "Sport Games": null,
                "Stacking Games": null,
                "Strategy Games": null,
                "Tabletop & Miniature Gaming": null,
                "Travel & Pocket Games": null,
                "Trivia & Quiz Games": null
            },
            "Learning & Education": {
                "Detective": null,
                "Educational Computers": null,
                "Electronics": null,
                "Explorer Toys": null,
                "Flash Cards": null,
                "Foreign Languages": null,
                "Geography": null,
                "Habitats": null,
                "History": null,
                "Mathematics & Counting": null,
                "Reading & Writing": null,
                "Reward Charts": null,
                "Science": null,
                "Solar": null,
                "Special Needs Developmental Toys": null
            },
            "Marble Runs": null,
            "Model Building Kits": null,
            "Model Trains & Railway Sets": null,
            "Musical Toy Instruments": null,
            "Novelty & Gag Toys": {
                "Badges": null,
                "Fingerboards & Finger Bikes": null,
                "Gag Toys & Practical Jokes": null,
                "Kaleidoscopes": null,
                "Key Rings": null,
                "Light-Up & Glow-in-the-Dark Toys": null,
                "Magic Kits & Accessories": null,
                "Magnets & Magnetic Toys": null,
                "Mobile Phone Charms": null,
                "Money Banks": null,
                "Nesting Dolls": null,
                "Slime & Putty Toys": null,
                "Spy Gear": null,
                "Temporary Tattoos": null,
                "View Finders": null,
                "Wind-Up Toys": null
            },
            "Party Supplies": {
                "Decorations": {
                    "Balloons": null,
                    "Banners, Stickers & Confetti": null,
                    "Cake Decorations": null
                },
                "Invitations": null,
                "Noisemakers": null,
                "Party Favor Bags": null,
                "Party Favours": null,
                "Party Games": null,
                "Party Hats, Masks & Accessories": null,
                "Party Tableware": null,
                "Piñatas": null,
                "Table Covers & Accessories": null
            },
            "Pretend Play": {
                "Doctor Play Sets": null,
                "Household Toys": null,
                "Kitchen Toys": {
                    "Kitchen Playsets": null,
                    "Play Food": null,
                    "Cookware": null
                },
                "Magnet & Felt Playboards": null,
                "Paper & Magnetic Dolls": null,
                "Play Tools": null,
                "Pretend Play Purses": null,
                "Shops & Accessories": null
            },
            "Puppets & Puppet Theatres": null,
            "Puzzles": {
                "3-D Puzzles": null,
                "Floor Puzzles": null,
                "Framed Puzzles": null,
                "Jigsaw Puzzles": null,
                "Pegged Puzzles": null,
                "Puzzle Accessories": null,
                "Puzzle Mats": null,
                "Sudoku Puzzles": null,
                "Wooden Puzzles": null
            },
            "Radio & Remote Control": null,
            "Real-Food Appliances": null,
            "School Supplies": null,
            "Soft Toys": null,
            "Sport & Outdoor": null
        },
        "Video Games": {
            "PlayStation 4": {
                "Games": null,
                "Consoles": null,
                "Accessories": {
                    "Batteries & Chargers": null,
                    "Cables & Adapters": null,
                    "Cases & Storage": null,
                    "Controllers": null,
                    "Headsets": null,
                    "Skins": null,
                    "Thumb Grips": null
                }
            },
            "Xbox One": {
                "Games": null,
                "Consoles": null,
                "Accessories": {
                    "Batteries & Chargers": null,
                    "Cables & Adapters": null,
                    "Cases & Protectors": null,
                    "Controllers": null,
                    "Skins": null,
                    "Thumb Grips": null
                }
            },
            "PlayStation 3": null,
            "Xbox 360": null,
            "PC Games": null,
            "Wii": null,
            "Wii U": null,
            "Nintendo DS": null,
            "Nintendo 3DS": null,
            "PlayStation Vita": null,
            "PSP": null,
            "PlayStation 2": null,
            "Microconsoles & Handhelds": null,
            "Nintendo Switch": {
                "Games": null,
                "Consoles": null,
                "Accessories": {
                    "Cases & Storage": null,
                    "Faceplates, Protectors & Skins": null,
                    "Hand Grips": null
                }
            }
        },
        "Watches": null
    },
    category:  {
        "Clothing & Accessories": {
            "Women": {
                "Ethnic Wear": null,
                "Western Wear": null,
                "Sportswear": {
                    "Active Dresses": null,
                    "Athletic Socks": null,
                    "Knitwear": null,
                    "Panties & Bras": null,
                    "Shirts & Tees": null,
                    "Shorts": null,
                    "Skirts": null,
                    "Sweatshirts & Hoodies": null,
                    "Swim": null,
                    "Tights & Leggings": null,
                    "Track Jackets": null,
                    "Tracksuits": null,
                    "Trousers": null
                },
                "Lingerie": null,
                "Sleep & Lounge Wear": null,
                "Swim & Beachwear": null,
                "Accessories": {
                    "Socks & Stockings": null,
                    "Belts": null,
                    "Caps & Hats": null,
                    "Scarves & Stoles": null,
                    "Shawls & Wraps": null,
                    "Gloves & Arm Warmers": null,
                    "Handkerchiefs": null
                },
                "Maternity": null,
                "Sunglasses & Spectacle Frames": null
            },
            "Men": {
                "T-Shirts & Polos": null,
                "Shirts": null,
                "Jeans": null,
                "Trousers": null,
                "Shorts": null,
                "Sweatshirts & Hoodies": null,
                "Sweaters": null,
                "Jackets": null,
                "Thermals": null,
                "Suits & Blazers": null,
                "Sportswear": {
                    "Athletic Socks": null,
                    "Gloves": null,
                    "Shorts": null,
                    "Sports T-Shirts": null,
                    "Sweatshirts & Hoodies": null,
                    "Track Jackets": null,
                    "Track Pants": null,
                    "Tracksuits": null
                },
                "Innerwear": null,
                "Sleep & Lounge Wear": null,
                "Track Pants & Joggers": null,
                "Accessories": {
                    "Belts & Suspenders": null,
                    "Gloves": null,
                    "Handkerchiefs": null,
                    "Hats & Caps": null,
                    "Mufflers & Scarves": null,
                    "Ties": null,
                    "Socks": null,
                    "Gift Sets": null
                },
                "Ethnic Wear": null,
                "Swimwear": null,
                "Rainwear": null,
                "Unstitched Fabric": null,
                "Sunglasses & Spectacle Frames": null
            },
            "Girls": {
                "Tops & T-Shirts": null,
                "Shirts": null,
                "Dresses": null,
                "Jumpsuits": null,
                "Jeans": null,
                "Pants": null,
                "Skirts": null,
                "Shorts": null,
                "Ethnic Wear": null,
                "Sweatshirts & Hoodies": null,
                "Sweaters": null,
                "Coats & Jackets": null,
                "Sleepwear": null,
                "Clothing Sets": null,
                "Innerwear": null,
                "Sportswear": {
                    "Athletic Socks": null,
                    "Knickers & Bras": null,
                    "Shirts & Tees": null,
                    "Shorts": null,
                    "Skirts & Skorts": null,
                    "Sweatshirts & Hoodies": null,
                    "Tights & Leggings": null
                },
                "Socks, Tights & Leggings": null,
                "Trackpants & Joggers": null,
                "Swimwear": null,
                "Accessories": {
                    "Arm Warmers & Muffs": null,
                    "Belts": null,
                    "Gloves & Mittens": null,
                    "Headbands": null,
                    "Scarves": null
                },
                "Unstitched Fabrics": null,
                "Rainwear": null,
                "Sunglasses & Spectacle Frames": null
            },
            "Boys": {
                "Tops & Tees": {
                    "Long Sleeve Tops": null,
                    "Polos": null,
                    "Sleeveless T-Shirts": null,
                    "T-Shirts": null
                },
                "Shirts": null,
                "Ethnic Wear": null,
                "Shorts": null,
                "Trousers": null,
                "Jeans": null,
                "Sweatshirts & Hoodies": null,
                "Coats & Jackets": null,
                "Underwear": {
                    "Boxers": null,
                    "Briefs": null,
                    "Sets": null,
                    "Thermal": null,
                    "Vests": null
                },
                "Socks": null,
                "Snow & Rainwear": null,
                "Sweaters": null,
                "Swim": null,
                "Sportswear": {
                    "Athletic Socks": null,
                    "Shirts & Tees": null,
                    "Shorts": null,
                    "Sports Caps": null,
                    "Sweatshirts & Hoodies": null,
                    "Trousers": null
                },
                "Sleepwear & Robes": null,
                "Accessories": {
                    "Arm Warmers": null,
                    "Balaclavas": null,
                    "Belts": null,
                    "Gloves & Mittens": null,
                    "Hats & Caps": null,
                    "Scarves": null,
                    "Ties": null
                },
                "Jumpsuits": null,
                "Clothing Sets": null,
                "Suiting & Blazers": null,
                "Unstitched Fabrics": null,
                "Sunglasses & Spectacle Frames": null
            },
            "Baby": null
        },
        "Appliances": null,
        "Car & Motorbike": null,
        "Baby": {
            "Activity & Play Time": null,
            "Baby Care": {
                "Baby Grooming": null,
                "Baby Laundry Detergents": null,
                "Bathing": {
                    "Baby Shampoos": null,
                    "Baby Soaps": null,
                    "Bath Salts": null,
                    "Bath Seats": null,
                    "Bath Thermometers": null,
                    "Bath Towels & Wash Cloths": null,
                    "Bath Toys": null,
                    "Bath Tubs": null,
                    "Body Washes": null,
                    "Wash Gloves": null
                },
                "Ear & Nose Care": {
                    "Baby Cotton Buds": null,
                    "Ear Cleaners": null,
                    "Nasal Aspirators": null,
                    "Nose Cleaners": null
                },
                "Gift Packs": null,
                "Health Care": {
                    "Medical Kits": null,
                    "Scales": null,
                    "Thermometers": null
                },
                "Hot Water Bottles & Heat Treatment": null,
                "Nail Care": null,
                "Oral Care": null,
                "Skin Care": {
                    "Diaper Rash Creams": null,
                    "Lotions": null,
                    "Oils": null,
                    "Powders": null,
                    "Sunscreen": null
                }
            },
            "Baby Carriers": null,
            "Baby Clothing": null,
            "Baby Safety": null,
            "Baby Shoes": null,
            "Bedding, Furniture & Room Décor": null,
            "Car Seats & Accessories": null,
            "Diapering & Nappy Changing": {
                "Diapers": {
                    "Cloth Diapers": null,
                    "Taped Diapers": null,
                    "Diaper Pants": null,
                    "Swim Diapers": null
                },
                "Diaper Bags": null,
                "Diaper Covers": null,
                "Baby Wipes": null,
                "Diaper Backpacks": null,
                "Changing Tables": null,
                "Diaper Rash Creams": null,
                "Diaper Pail & Refill Bags": null,
                "Diaper Stackers": null,
                "Changing Pads & Sets": null,
                "Diaper Liners": null
            },
            "Feeding": {
                "Baby Food": null,
                "Bibs": null,
                "Bottle Feeding": {
                    "Bottle Cleaning & Accessories": null,
                    "Bottle Nipples": null,
                    "Bottle Sets": null,
                    "Bottle Tote Bags": null,
                    "Bottles": null,
                    "Formula Dispensers & Mixers": null,
                    "Warmers & Sterilizers": null
                },
                "Breastfeeding": null,
                "Food Storage": null,
                "Food Warmers": null,
                "High Chairs & Booster Seats": null,
                "Muslin Squares": null,
                "Pacifiers & Teethers": null,
                "Sippy Cups": null,
                "Tableware": null
            },
            "Pacifiers & Teethers": null,
            "Potty Training & Step Stools": {
                "Potty Seats & Chairs": null,
                "Step Stools": null,
                "Wet Wipes": null
            },
            "Strollers, Buggies & Prams": null
        },
        "Beauty": null,
        "Books": {
            "Action & Adventure": null,
            "Arts, Film & Photography": {
                "Architecture": null,
                "Cinema & Broadcast": null,
                "Dance": null,
                "Design & Fashion": null,
                "History, Theory & Criticism": null,
                "Museums & Museology": null,
                "Music": null,
                "Painting": null,
                "Photography": null,
                "Sculpture": null,
                "Theatre & Spectacles": null
            },
            "Biographies, Diaries & True Accounts": {
                "Biographies & Autobiographies": null,
                "Diaries, Letters & Journals": null,
                "True Accounts": null
            },
            "Business & Economics": {
                "Business Self-Help": null,
                "Business, Strategy & Management": null,
                "Economics": {
                    "Banks & Banking": null,
                    "Commerce": null,
                    "Commercial Policy": null,
                    "Comparative": null,
                    "Development & Growth": null,
                    "Econometrics": null,
                    "Economic Conditions": null,
                    "Economic History": null,
                    "Economic Policy & Development": null,
                    "Environmental Economics": null,
                    "Free Enterprise": null,
                    "Inflation": null,
                    "Interest": null,
                    "Labor & Industrial Relations": null,
                    "Macroeconomics": null,
                    "Microeconomics": null,
                    "Money & Monetary Policy": null,
                    "Public Finance": null,
                    "Sustainable Development": null,
                    "Theory": null,
                    "Unemployment": null,
                    "Urban & Regional": null
                },
                "Industries & Business Sectors": null
            },
            "Children's & Young Adult": {
                "Adventure": null,
                "Comics & Mangas": null,
                "Crafts, Hobbies & Practical Interests": null,
                "Crime & Thriller": null,
                "Early Learning": null,
                "Family, Personal & Social Issues": null,
                "Fantasy, Science Fiction & Horror": {
                    "Fantasy": null,
                    "Horror & Ghost Stories": null,
                    "Science Fiction": null
                },
                "Games, Toys & Activities": null,
                "Historical Fiction": null,
                "History": null,
                "Humour": null,
                "Interactive & Activity Books": null,
                "Language Learning": null,
                "Literature & Fiction": null,
                "Money & Jobs": null,
                "Mysteries & Curiosities": null,
                "Painting, Arts & Music": null,
                "Picture Books": null,
                "Reference": null,
                "Religion": null,
                "Science, Nature & Technology": null,
                "Sport": null,
                "Traditional Stories": null
            },
            "Comics & Mangas": null,
            "Computing, Internet & Digital Media": null,
            "Crafts, Home & Lifestyle": {
                "Antiques & Collectables": null,
                "Food, Drink & Entertaining": null,
                "Games & Quizzes": null,
                "Gardening": null,
                "Handicrafts, Decorative Arts & Crafts": null,
                "Home & House Maintenance": null,
                "Lifestyle & Personal Style Guides": null,
                "Models & Model Railroading": null,
                "Pets": null
            },
            "Crime, Thriller & Mystery": null,
            "Exam Preparation": null,
            "Fantasy, Horror & Science Fiction": null,
            "Health, Family & Personal Development": {
                "Family & Relationships": null,
                "Healthy Living & Wellness": null,
                "Mind, Body & Spirit": null,
                "Personal Development & Self-Help": null
            },
            "Historical Fiction": null,
            "History": {
                "Africa": null,
                "Ancient": null,
                "Asia": null,
                "Europe": null,
                "Indian History": null,
                "Latin America": null,
                "Middle East": null,
                "Military": null,
                "United States": null,
                "World": {
                    "Civilization & Culture": null,
                    "Cold War": null,
                    "Expeditions & Discoveries": null,
                    "Maritime History & Piracy": null,
                    "Revolutionary": null,
                    "Slavery & Emancipation": null,
                    "Women in History": null
                }
            },
            "Humour": null,
            "Language, Linguistics & Writing": {
                "Dictionaries": null,
                "Grammar": null,
                "Journalism": null,
                "Language Learning & Teaching": null,
                "Linguistics": null,
                "Rhetoric & Speech": null,
                "Writing Guides": null
            },
            "Law": {
                "Bar Exams": null,
                "Business Law": null,
                "Constitutional Law": null,
                "Criminal Law": null,
                "Legal Reference": null,
                "Tax Law": null
            },
            "Literature & Fiction": {
                "Anthologies": null,
                "Classic Fiction": null,
                "Contemporary Fiction": null,
                "Essays": null,
                "Indian Writing": null,
                "Literary Theory, History & Criticism": null,
                "Myths, Legends & Sagas": null,
                "Plays": null,
                "Poetry": null,
                "Religious & Spiritual Fiction": null,
                "Short Stories": null,
                "Travel Writing": null
            },
            "Maps & Atlases": null,
            "Politics": {
                "Freedom & Security": null,
                "International Relations & Globalization": null,
                "Political Ideologies": null,
                "Political Parties": null,
                "Political Theory": null,
                "Political Structure & Processes": null,
                "Public Administration": null
            },
            "Reference": null,
            "Religion": null,
            "Romance": null,
            "Sciences, Technology & Medicine": {
                "Agriculture & Farming": null,
                "Astronomy": null,
                "Biology & Life Sciences": null,
                "Chemistry": null,
                "Earth Sciences": null,
                "Engineering & Technology": null,
                "Environment": null,
                "Geography": null,
                "Mathematics": null,
                "Medicine": null,
                "Physics": null,
                "Transportation & Automotive": null
            },
            "Society & Social Sciences": {
                "Anthropology": null,
                "Education": null,
                "Philosophy": null,
                "Psychology": null,
                "Social Welfare & Social Services": null,
                "Society & Culture": null,
                "Sociology": null
            },
            "Sports": {
                "Active Outdoor Pursuits": {
                    "Camping & Woodcraft": null,
                    "Climbing & Mountaineering": null,
                    "Outdoor Survival Skills": null,
                    "Walking, Hiking & Trekking": null
                },
                "Air Sports": null,
                "American Football": null,
                "Baseball": null,
                "Basketball": null,
                "Bodybuilding & Weightlifting": null,
                "Combat Sports & Self-Defence": null,
                "Cricket": null,
                "Cycling": null,
                "Equestrian & Animal Sports": null,
                "Field Sports": null,
                "Golf": null,
                "Gymnastics": null,
                "Marathon & Running": null,
                "Motor Sports": null,
                "Pool, Billiards & Snooker": null,
                "Rugby": null,
                "Skateboarding & Rollerblading": null,
                "Soccer": null,
                "Sporting Events & Organisations": null,
                "Tennis": null,
                "Training & Coaching": null,
                "Triathlon": null,
                "Water Sports": {
                    "Boating & Motor Boating": null,
                    "Canoeing & Kayaking": null,
                    "Sailing": null,
                    "Surfing, Windsurfing & Water Skiing": null,
                    "Swimming, Snorkelling & Diving": null
                },
                "Winter Sports": {
                    "Ice & Figure Skating": null,
                    "Ice Hockey": null,
                    "Skiing": null
                }
            },
            "Textbooks & Study Guides": {
                "Higher Education Textbooks": {
                    "Business & Finance": {
                        "Accounting": null,
                        "Banking": null,
                        "Business Communication": null,
                        "Business Development": null,
                        "Business Ethics": null,
                        "Business Law": null,
                        "Economics": {
                            "Economic Theory": null,
                            "Macroeconomics": null,
                            "Microeconomics": null
                        },
                        "Entrepreneurship": null,
                        "Human Resources": null,
                        "International Business": null,
                        "Investments & Securities": null,
                        "Management": null,
                        "Marketing": null,
                        "Real Estate": null,
                        "Sales": null
                    },
                    "Communication & Journalism": null,
                    "Computer Science": null,
                    "Teaching & Education": null,
                    "Engineering": null,
                    "Humanities": {
                        "Archaelogy": null,
                        "Art History": null,
                        "Design": null,
                        "History Textbooks": null,
                        "Language & Linguistics": null,
                        "Library & Information Science": null,
                        "Literature": null,
                        "Performing Arts": null,
                        "Philosophy": null,
                        "Visual Arts": null
                    },
                    "Law": {
                        "Bar Exams": null,
                        "Business Law": null,
                        "Constitutional Law": null,
                        "Criminal Law": null,
                        "Legal Reference": null,
                        "Tax Law": null
                    },
                    "Medicine & Health Sciences": {
                        "Administration & Policy": null,
                        "Allied Health Services": null,
                        "Alternative Medicine": null,
                        "Dentistry": null,
                        "Medicine": null,
                        "Nursing": null,
                        "Reference": null,
                        "Research": null,
                        "Test Preparation & Review": null,
                        "Veterinary Medicine": null
                    },
                    "Science & Mathematics": null,
                    "Social Sciences": {
                        "Archaeology": null,
                        "Criminology": null,
                        "Gay & Lesbian Studies": null,
                        "Gender Studies": null,
                        "Geography": null,
                        "Military Sciences": null,
                        "Political Science": null,
                        "Psychology": null,
                        "Sociology": null
                    }
                },
                "Reference": null,
                "School Textbooks": null,
                "Study Guides & Workbooks": {
                    "Study Guides": null,
                    "Study Skills": null,
                    "Workbooks": null
                }
            },
            "Travel": null
        },
        "Movies & TV Shows": null,
        "Electronics": {
            "Accessories": {
                "Blank Media": null,
                "Camera & Photo Accessories": null,
                "Car & Vehicle Electronics Accessories": null,
                "Computer Accessories": {
                    "Adapters": null,
                    "Audio & Video Accessories": null,
                    "Blank Media": null,
                    "Cables": {
                        "DVI Cables": null,
                        "DisplayPort Cables": null,
                        "Ethernet Cables": null,
                        "FDD Cables": null,
                        "HDMI Cables": null,
                        "IDE Cables": null,
                        "PS/2 Cables": null,
                        "Parallel Cables": null,
                        "RGB Cables": null,
                        "SAS Cables": null,
                        "SCSI Cables": null,
                        "Serial Cables": null,
                        "USB Cables": null,
                        "VGA Cables": null
                    },
                    "FireWire Hubs": null,
                    "Hard Disk Bags": null,
                    "Keyboards, Mice & Input Devices": null,
                    "KVM Switches": null,
                    "Laptop Accessories": null,
                    "Office Equipment Cleaners": null,
                    "PC Gaming Peripherals": null,
                    "Surge Protectors": null,
                    "Tablet Accessories": {
                        "Bags & Cases": null,
                        "Bundles": null,
                        "Chargers, Adapters & Cables": null,
                        "Docking Stations": null,
                        "Tablet Keyboards": null,
                        "Screen Protectors": null,
                        "Skins": null,
                        "Stands": null
                    },
                    "Uninterrupted Power Supplies": null,
                    "USB Gadgets": null,
                    "USB Hubs": null
                },
                "General Purpose Batteries & Battery Chargers": null,
                "Home Audio & Video Accessories": null,
                "Memory Cards": null,
                "Mobile Accessories": null,
                "Navigation Accessories": null,
                "Portable Audio & Video Accessories": null,
                "Power Accessories": null,
                "Tablet Accessories": {
                    "Bags & Cases": null,
                    "Bundles": null,
                    "Chargers, Adapters & Cables": null,
                    "Docking Stations": null,
                    "Tablet Keyboards": null,
                    "Screen Protectors": null,
                    "Skins": null,
                    "Stands": null
                }
            },
            "Cameras & Photography": null,
            "Car & Vehicle Electronics": null,
            "Computers & Accessories": {
                "Accessories": {
                    "Adapters": null,
                    "Audio & Video Accessories": null,
                    "Blank Media": null,
                    "Cables": {
                        "DVI Cables": null,
                        "DisplayPort Cables": null,
                        "Ethernet Cables": null,
                        "FDD Cables": null,
                        "HDMI Cables": null,
                        "IDE Cables": null,
                        "PS/2 Cables": null,
                        "Parallel Cables": null,
                        "RGB Cables": null,
                        "SAS Cables": null,
                        "SCSI Cables": null,
                        "Serial Cables": null,
                        "USB Cables": null,
                        "VGA Cables": null
                    },
                    "FireWire Hubs": null,
                    "Hard Disk Bags": null,
                    "Keyboards, Mice & Input Devices": null,
                    "KVM Switches": null,
                    "Laptop Accessories": null,
                    "Office Equipment Cleaners": null,
                    "PC Gaming Peripherals": null,
                    "Surge Protectors": null,
                    "Tablet Accessories": {
                        "Bags & Cases": null,
                        "Bundles": null,
                        "Chargers, Adapters & Cables": null,
                        "Docking Stations": null,
                        "Tablet Keyboards": null,
                        "Screen Protectors": null,
                        "Skins": null,
                        "Stands": null
                    },
                    "Uninterrupted Power Supplies": null,
                    "USB Gadgets": null,
                    "USB Hubs": null
                },
                "Components": null,
                "Desktops": null,
                "External Devices & Data Storage": null,
                "Keyboards, Mice & Input Devices": null,
                "Laptops": null,
                "Monitors": null,
                "Networking Devices": null,
                "PC Speakers": null,
                "Printers": null,
                "Scanners": null,
                "Webcams & VoIP Equipment": null
            },
            "GPS & Accessories": null,
            "Headphones": {
                "In-Ear": null,
                "On-Ear": null,
                "Over-Ear": null
            },
            "Home Audio": null,
            "Home Theater, TV & Video": null,
            "Mobiles & Accessories": null,
            "Portable Media Players": null,
            "Tablets": null,
            "Telephones & Accessories": null,
            "Warranties": null,
            "Wearable Technology": null
        },
        "Furniture": {
            "Bedroom Furniture": {
                "Bedroom Wardrobes": null,
                "Beds, Frames & Bases": null,
                "Bedside Tables": null,
                "Dressers & Chests of Drawers": null,
                "Dressing Tables": null,
                "Mattresses & Box Springs": null
            },
            "Garden & Outdoor Furniture": null,
            "Hallway Furniture": null,
            "Home Bar Furniture": null,
            "Kids' Furniture": {
                "Beds": null,
                "Bookcases": null,
                "Chairs": {
                    "Bean Bags": null,
                    "Desk Chairs": null,
                    "Folding Chairs": null,
                    "Rocking Chairs": null
                },
                "Desks": null,
                "Dressers": null,
                "Furniture Sets": null,
                "Mattresses": null,
                "Sofas": null,
                "Stools": null,
                "Tables": null,
                "Wardrobes": null
            },
            "Kitchen & Dining Room Furniture": {
                "Cabinets & Sideboards": null,
                "Dining Chairs": null,
                "Dining Room Sets": null,
                "Dining Tables": null,
                "Serving Trolleys": null,
                "Table Benches": null
            },
            "Living Room Furniture": {
                "Bean Bags, Covers & Refills": null,
                "Bookcases": null,
                "Cabinets": null,
                "Chairs": {
                    "Armchairs": null,
                    "Folding Chairs": null,
                    "Rocking Chairs": null,
                    "Stacking Chairs": null
                },
                "Footstools": null,
                "Footstools, Pouffes & Ottomans": null,
                "Inflatable Sofas": null,
                "Magazine Racks": null,
                "Partitions": null,
                "Recliners": null,
                "Sofa Sets": null,
                "Sofas & Couches": null,
                "TV & Entertainment Units": null,
                "Tables": {
                    "Coffee Tables": null,
                    "Console Tables": null,
                    "End Tables": null,
                    "Nesting Tables": null
                },
                "Wall Shelves": null
            },
            "Seating Furniture": null,
            "Storage Furniture": null,
            "Study & Home Office Furniture": null
        },
        "Gift Cards": null,
        "Gourmet & Specialty Foods": null,
        "Health & Personal Care": {
            "Bath & Shower": {
                "Bath Additives": null,
                "Bathing Accessories": null,
                "Bath Sets & Kits": null,
                "Body Scrubs": null,
                "Body Washes": null,
                "Deodorants & Antiperspirants": null,
                "Soaps": null
            },
            "Beauty Tools & Accessories": null,
            "Diet & Nutrition": null,
            "Hair Care & Styling": null,
            "Health Care": {
                "Adult Diapers & Incontinence": null,
                "Allergy, Sinus & Asthma": null,
                "Alternative Medicine": null,
                "Baby & Child Care": null,
                "Cough & Cold": null,
                "Diabetes Care": null,
                "Digestion & Nausea": null,
                "Ear Care": null,
                "Eye Care": null,
                "Family Planning & Contraceptives": null,
                "First Aid": null,
                "Health Care Devices": null,
                "Massage & Relaxation": null,
                "Pain Relief Devices": null,
                "Pill Cases & Splitters": null,
                "Sleep & Snoring": null,
                "Smoking Cessation": null,
                "Stimulants": null,
                "Therapeutic Skin Care": null,
                "Thermometer Accessories": null,
                "Thermometers": null,
                "Women's Health": null
            },
            "Healthcare Packages": null,
            "Home Medical Supplies & Equipment": null,
            "Household Supplies": {
                "Air Fresheners": null,
                "Dishwashing Supplies": null,
                "Household Cleaners": null,
                "Incense Sticks": null,
                "Indoor Insect & Pest Control": null,
                "Laundry Detergents": null,
                "Paper, Plastic & Wraps": null,
                "Pooja Supplies": null
            },
            "Personal Care": {
                "Deodorants & Antiperspirants": null,
                "Feminine Hygiene": null,
                "Foot Care": null,
                "Hand Care": null,
                "Lip Care": {
                    "Balms": null,
                    "Scrubs": null,
                    "Lip Protection": null
                },
                "Oral Care": {
                    "Breath Fresheners": null,
                    "Denture Care": null,
                    "Flosses": null,
                    "Manual Toothbrushes": null,
                    "Mouthwash": null,
                    "Replacement Brush Heads": null,
                    "Teeth Whitening": null,
                    "Toothpaste": null,
                    "Power Toothbrushes": null
                },
                "Personal Care Appliances": null,
                "Shaving, Waxing & Beard Care": null
            },
            "Personal Care & Health Appliances": null,
            "Sexual Wellness & Sensuality": null,
            "Skin Care": {
                "Face": null,
                "Body": null,
                "Lips": null,
                "Eyes": null,
                "Hands & Nails": null,
                "Feet": null
            }
        },
        "Home & Kitchen": {
            "Backyard Birding Supplies": null,
            "Barbecue & Outdoor Dining": null,
            "Beekeeping Equipment": null,
            "Garden and Outdoor Furniture": null,
            "Gardening": null,
            "Mowers & Outdoor Power Tools": null,
            "Outdoor Décor": {
                "Birdbaths": null,
                "Decorative Fences": null,
                "Decorative Stones": null,
                "Flags": null,
                "Fountains": null,
                "Garden Sculptures & Statues": null,
                "Outdoor Candles": null,
                "Outdoor Thermometers & Meteorological Instruments": null,
                "Wind Sculptures & Spinners": null
            },
            "Pest Control": null,
            "Plants, Seeds & Bulbs": null,
            "Solar & Wind Power": null
        },
        "Industrial & Scientific": {
            "Abrasive & Finishing Products": null,
            "Additive Manufacturing Products": null,
            "Commercial Door Products": null,
            "Cutting Tools": null,
            "Fasteners": {
                "Anchors": null,
                "Bolts": null,
                "Pins": null,
                "Screws": null,
                "Threaded Rods & Studs": null,
                "Washers": null
            },
            "Filtration": null,
            "Food Service Equipment & Supplies": null,
            "Hydraulics, Pneumatics & Plumbing": null,
            "Industrial Electrical": {
                "Controls & Indicators": null,
                "Semiconductor Products": null,
                "Sensors": null,
                "Wiring & Connecting": null
            },
            "Industrial Hardware": null,
            "Janitorial & Sanitation Supplies": null,
            "Lab & Scientific Products": {
                "Glassware & Labware": null,
                "Lab Chemicals": null,
                "Lab Filters": null,
                "Lab Furniture": null,
                "Lab Instruments & Equipment": null,
                "Lab Supplies & Consumables": null
            },
            "Material Handling Products": null,
            "Occupational Health & Safety Products": {
                "Facility Safety Products": null,
                "Hazardous Material Handling": null,
                "Safety Signs & Signals": null,
                "Work Safety Equipment & Gear": null
            },
            "Packaging & Shipping Supplies": null,
            "Power & Hand Tools": {
                "Hand Tools": {
                    "Chisels": null,
                    "Clamps": null,
                    "Cutters": null,
                    "Hammers & Mallets": null,
                    "Knives": null,
                    "Pliers & Pincers": null,
                    "Screwdrivers": null,
                    "Shears & Scissors": null,
                    "Snips": null,
                    "Sockets & Socket Sets": null,
                    "Spanners & Wrenches": null,
                    "Strippers": null
                },
                "Power Tool Accessories": null,
                "Power Tools": null
            },
            "Power Transmission Products": null,
            "Professional Dental Supplies": null,
            "Professional Medical Supplies": {
                "Apparel & Gloves": null,
                "Diagnostics & Screening": null,
                "Examination Supplies & Consumables": null,
                "Fluid Administration & Collection": null,
                "Furniture & Safety Equipment": null,
                "Instruments & Surgical Tools": null,
                "Patient Monitoring & Treatment Equipment": null,
                "Radiology & Imaging": null,
                "Recordkeeping & Labels": null,
                "Respiratory & Anaesthesia Equipment": null,
                "Sterilisation & Infection Prevention": null
            },
            "Robotics": null,
            "Tapes, Adhesives & Sealers": null,
            "Test, Measure & Inspect": null
        },
        "Jewellery": null,
        "Kindle Store": null,
        "Lawn & Garden": null,
        "Luggage & Bags": null,
        "Luxury Beauty": null,
        "Music": null,
        "Musical Instruments": {
            "Bass Guitars & Gear": null,
            "DJ & VJ Equipment": null,
            "Drums & Percussion": {
                "Accessories": null,
                "Cymbals": null,
                "Drum Sets": null,
                "Electronic Drums": null,
                "Hand Drums": null,
                "Hardware": {
                    "Bass-Drum Pedals": null,
                    "Boom Cymbal Stands": null,
                    "High-Hat Stands": null,
                    "Racks": null,
                    "Snare Stands": null,
                    "Tom Mounts": null
                },
                "Practice Pads": null
            },
            "Guitars & Gear": null,
            "Karaoke Equipment": null,
            "Microphones": {
                "Condenser": null,
                "Dynamic": null,
                "Ribbon Microphones": null,
                "Wireless": null
            },
            "PA & Stage": null,
            "Piano & Keyboard": null,
            "Recording & Computer": null,
            "String Instruments": null,
            "Synthesizer & Sampler": null,
            "Wind Instruments": null
        },
        "Office Products": {
            "Stationery": {
                "Art & Craft Supplies": null,
                "Notebooks, Writing Pads & Diaries": null,
                "Pens, Pencils & Writing Supplies": null,
                "School & Educational Supplies": null
            },
            "Calendars, Planners & Personal Organisers": null,
            "Calculators": null,
            "Envelopes & Postal Supplies": null,
            "Office Electronics": {
                "Accessories": {
                    "Cash Register Accessories": null,
                    "Electronic Dictionary, Thesaurus & Translator Accessories": null,
                    "Label Maker Accessories": null,
                    "Laminating Pouches": null,
                    "Photocopier Accessories": null,
                    "Printer Accessories": null,
                    "Projector Accessories": null
                },
                "Barcode Scanners": null,
                "Binding Machines & Accessories": null,
                "Biometric Scanners": null,
                "Calculators": null,
                "Cash Registers": null,
                "Label Makers": null,
                "Laminators": null,
                "Presentation Pointers": null,
                "Printers": null,
                "Projectors": null,
                "Scanners": null,
                "Shredders": null,
                "Surveillance Cameras": null,
                "Voice Recorders & Accessories": null,
                "Ink Cartridges": null,
                "Toner Cartridges": null
            },
            "Office Paper Products": null,
            "Office Supplies": null
        },
        "Amazon Pantry": null,
        "Computers & Accessories": {
            "Accessories & Peripherals": null,
            "Components": null,
            "Desktops": null,
            "External Devices & Data Storage": null,
            "Laptops": null,
            "Monitors": null,
            "Networking Devices": null,
            "Printers, Inks & Accessories": null,
            "Scanners": null,
            "Tablets": null,
            "Warranties": null
        },
        "Pet Supplies": {
            "Birds": {
                "Cages & Accessories": null,
                "Feeding & Watering Supplies": null,
                "Food": null,
                "Toys": null
            },
            "Cats": {
                "Beds & Furniture": null,
                "Carriers & Strollers": null,
                "Cat Flaps, Steps, Nets & Pens": null,
                "Collars, Harnesses & Leashes": null,
                "Feeding & Watering Supplies": null,
                "Food": null,
                "Grooming": null,
                "Litter & Housebreaking": null,
                "Toys": {
                    "Catnip Toys": null,
                    "Feather Toys": null,
                    "Interactive Toys": null,
                    "Mice & Animal Toys": null,
                    "Plush Toys": null
                },
                "Treats": null
            },
            "Dogs": {
                "Apparel & Accessories": {
                    "Bandanas": null,
                    "Boots & Paw Protectors": null,
                    "Cold Weather Coats": null,
                    "Costumes": null,
                    "Dresses": null,
                    "Hats": null,
                    "Hoodies": null,
                    "Lifejackets": null,
                    "Raincoats": null,
                    "Shirts": null,
                    "Sweaters": null
                },
                "Beds & Furniture": null,
                "Carriers & Travel Products": null,
                "Collars, Harnesses & Leashes": null,
                "Doors, Gates & Ramps": null,
                "Feeding & Watering Supplies": null,
                "Food": null,
                "Grooming": null,
                "Health Supplies": null,
                "Houses, Kennels & Pens": null,
                "Litter & Housebreaking": null,
                "Toys": {
                    "Balls": null,
                    "Chew Toys": null,
                    "Flying Discs": null,
                    "Interactive Toys": null,
                    "Plush Toys": null,
                    "Ropes": null,
                    "Squeak Toys": null
                },
                "Training & Behaviour Aids": null,
                "Treats": null
            },
            "Fish & Aquatics": null,
            "Small Animals": null
        },
        "Shoes & Handbags": {
            "Shoes": {
                "Women's Shoes": null,
                "Men's Shoes": null,
                "Girls' Shoes": null,
                "Boys' Shoes": null,
                "Baby Shoes": null
            },
            "Shoe Care & Accessories": null,
            "Handbags, Purses & Clutches": {
                "Clutches": null,
                "Handbags": null,
                "Hobos & Shoulder Bags": null,
                "Messenger Bags": null,
                "Potlis & Wristlets": null,
                "Satchels": null,
                "Sling & Cross-Body Bags": null,
                "Totes": null,
                "Women's Backpacks": null,
                "Women's Wallets": null
            }
        },
        "Software": null,
        "Sports, Fitness & Outdoors": {
            "Accessories": null,
            "Archery": null,
            "Badminton": null,
            "Baseball": {
                "Baseballs": null,
                "Bats": null,
                "Batting Gloves": null
            },
            "Basketball": {
                "Backboard Accessories": null,
                "Backboards": null,
                "Basketballs": null,
                "Air Pumps & Accessories": null
            },
            "Billiards": null,
            "Boxing": {
                "Boxing Gloves": null,
                "Boxing Pads": null,
                "Protective Gear": {
                    "Chest & Rib Guards": null,
                    "Hand Wraps": null,
                    "Mouthguards": null
                },
                "Punching Bags": null
            },
            "Camping & Hiking": null,
            "Climbing": null,
            "Cricket": null,
            "Cycling": {
                "Cycles": {
                    "Comfort Bikes": null,
                    "Folding Bikes": null,
                    "Hybrid Bikes": null,
                    "Mountain Bikes": null,
                    "Road Bikes": null
                },
                "Kids' Cycles & Accessories": {
                    "Kids' Cycles": null,
                    "Kids' Protective Gear": null,
                    "Kids' Helmets": null
                },
                "Components & Parts": {
                    "Brake Parts": null,
                    "Brakes": null,
                    "Cables": null,
                    "Cassettes & Freewheels": null,
                    "Derailleurs": null,
                    "Handlebars": null,
                    "Kickstands": null,
                    "Lights & Reflectors": null,
                    "Pedals": null,
                    "Saddles": null,
                    "Stems": null,
                    "Suspension": null,
                    "Tires": null,
                    "Tubes": null,
                    "Wheels": null
                },
                "Tools, Repair & Maintenance": null,
                "Accessories": {
                    "Cycle Backpacks, Bags & Panniers": null,
                    "Cycle Bells": null,
                    "Cycle Locks": null,
                    "Cycle Mirrors": null,
                    "Cycle Pump Accessories": null,
                    "Cycle Pumps": null,
                    "Cycle Trainer Accessories": null,
                    "Cycle Trainers": null,
                    "Cyclocomputers": null,
                    "Fenders": null,
                    "Glasses": null,
                    "GPS Units": null,
                    "Indoor Cycle Storage": null,
                    "Lighting Parts & Accessories": null,
                    "Racks": null,
                    "Rim Bands": null,
                    "Saddle Covers": null,
                    "Water Bottles & Shakers": null
                },
                "Clothing": {
                    "Boys": null,
                    "Girls": null,
                    "Men": null,
                    "Women": null
                },
                "Helmets": {
                    "Allround Helmets": null,
                    "Children's Helmets": null,
                    "Helmet Accessories": null
                }
            },
            "Darts & Dartboards": null,
            "Disc Sports": null,
            "Equestrian Sports": null,
            "Exercise & Fitness": {
                "Accessories": {
                    "Aquatic Fitness Equipment": null,
                    "Body Bars": null,
                    "Chest Expander": null,
                    "Exercise Balls & Accessories": null,
                    "Exercise Bands": null,
                    "Exercise Mats": null,
                    "Fitness Hoops": null,
                    "Gloves": null,
                    "Jumping Trainers": null,
                    "Massage Belts & Electric Stimulators": null,
                    "Protective Flooring": null,
                    "Sauna Suits": null,
                    "Skipping Ropes": null,
                    "Step Platforms": null,
                    "Straps": null,
                    "Toning Belts": null,
                    "Waist Trimmers": null,
                    "Wraps": null,
                    "Water Bottles": null
                },
                "Aerobic Training Machines": null,
                "Balance Trainers": null,
                "Clothing": null,
                "Footwear": null,
                "Gym Bags": null,
                "Pilates": null,
                "Strength Training Equipment": null,
                "Yoga": null
            },
            "Fan Shop": null,
            "Field Hockey": null,
            "Fishing": {
                "Accessories": {
                    "Fishing Bedchairs": null,
                    "Nets": null,
                    "Pliers & Tools": null
                },
                "Fishing Line": null,
                "Float Tubes": null,
                "Fly Fishing": null,
                "Ice Fishing": null,
                "Lures & Flies": null,
                "Rods": null,
                "Terminal Tackle": null
            },
            "Football": null,
            "Footwear": {
                "Athletic Shoes Accessories": null,
                "Boys": null,
                "Girls": null,
                "Men": {
                    "Running Shoes": null,
                    "Training Shoes": null,
                    "Football Shoes": null,
                    "Trekking & Hiking Footwear": null,
                    "Cricket Shoes": null,
                    "Badminton Shoes": null,
                    "Basketball Shoes": null,
                    "Tennis Shoes": null,
                    "Boxing Shoes": null,
                    "Walking Shoes": null
                },
                "Women": {
                    "Running Shoes": null,
                    "Training Shoes": null,
                    "Walking Shoes": null,
                    "Tennis Shoes": null,
                    "Badminton Shoes": null,
                    "Golf Shoes": null,
                    "Football Shoes": null,
                    "Trekking & Hiking Footwear": null,
                    "Triathlon Shoes": null,
                    "Track & Field Shoes": null
                }
            },
            "Golf": null,
            "Gymnastics": {
                "Competition Equipment": null,
                "Equipment Bags": null,
                "Footwear": null,
                "Hand Grips": null,
                "Training Equipment": null
            },
            "Martial Arts": null,
            "Ripsticking": null,
            "Rugby": null,
            "Running": {
                "Clothing": {
                    "Boys": null,
                    "Men": {
                        "Beanies": null,
                        "Pants": null,
                        "Shorts": null,
                        "Socks": null,
                        "Tights": null,
                        "Tops & Tees": null
                    },
                    "Women": {
                        "Jackets": null,
                        "Pants": null,
                        "Shorts": null,
                        "Tights": null,
                        "Tops & Tees": null
                    }
                },
                "Footwear": null,
                "Heart Rate Monitors": null,
                "Hydration Belts": null,
                "Hydration Packs": null
            },
            "Skates, Skateboards & Scooters": {
                "Inline Skates": null,
                "Roller Skates": null,
                "Inline & Roller Skating Parts": null,
                "Skateboarding": {
                    "Skateboards": null,
                    "Skateboard Parts": null,
                    "Wax": null
                },
                "Scooters & Equipment": null,
                "Helmets": null,
                "Protective Gear": {
                    "Elbow Pads": null,
                    "Knee Pads": null,
                    "Sets": null,
                    "Wrist Guards": null
                }
            },
            "Snooker": null,
            "Sports Clothing": null,
            "Sports Gadgets": null,
            "Squash": null,
            "Table Tennis": {
                "Balls": null,
                "Blades": null,
                "Equipment Bags": null,
                "Nets & Posts": null,
                "Racquets": null,
                "Rubbers": null,
                "Table Tennis Sets": null,
                "Tables": null
            },
            "Team Handball": null,
            "Tennis": {
                "Ball Hoppers": null,
                "Balls": null,
                "Clothing": null,
                "Tennis Accessories": null,
                "Equipment Bags": null,
                "Footwear": null,
                "Nets": null,
                "Racquet Covers": null,
                "Racquet Grips": null,
                "Racquet Strings": null,
                "Racquets": null,
                "Training Equipment": null,
                "Vibration Dampeners": null
            },
            "Track & Field": null,
            "Volleyball": {
                "Nets": null,
                "Pole Sets": null,
                "Protective Gear": null,
                "Training Equipment": null,
                "Volleyballs": null,
                "Air Pumps & Accessories": null
            },
            "Water Sports": {
                "Boating": {
                    "Docking & Anchoring Equipment": null,
                    "Dry Bags": null,
                    "Steering Equipment": null
                },
                "Diving & Snorkelling": null,
                "Kayaking": null,
                "Surfing": null,
                "Swimming": {
                    "Earplugs": null,
                    "Electronics": null,
                    "Goggles": null,
                    "Nose Clips": null,
                    "Sports Towels": null,
                    "Swim Caps": null,
                    "Swim Fins": null,
                    "Swimwear": null,
                    "Training Equipment": {
                        "Hand Paddles": null,
                        "Kickboards": null,
                        "Swim Vests": null,
                        "Training Fins": null
                    }
                },
                "Water Polo": null,
                "Water Skiing & Towsports": null
            }
        },
        "Toys & Games": {
            "Action & Toy Figures": null,
            "Arts & Crafts": {
                "Aprons & Smocks": null,
                "Blackboards & Whiteboards": null,
                "Clay & Dough": null,
                "Colouring Books & Pads": null,
                "Craft Kits": {
                    "Beads": null,
                    "Children's Knitting & Textile Design": null,
                    "Children's Weaving": null,
                    "Fake Food Makers": null,
                    "Glass Arts & Sun Catchers": null,
                    "Jewellery": null,
                    "Paint by Number Kits": null,
                    "Painting Craft Kits": null,
                    "Paper Craft": null,
                    "Sand Art": null,
                    "Scratch Art": null,
                    "Wood": null
                },
                "Doodle & Scribbler Boards": null,
                "Drawing & Painting Supplies": {
                    "Chalk": null,
                    "Kids Coloured Pencils": null,
                    "Colouring Pens & Markers": null,
                    "Crayons": null,
                    "Finger Paint": null,
                    "Glue, Paste & Tape": null,
                    "Paintbrushes": null,
                    "Painting Supply Sets": null,
                    "Paper": null,
                    "Pencil Erasers": null,
                    "Scissors": null,
                    "Sharpeners": null,
                    "Tempera & Poster Paint": null,
                    "Watercolour Paint": null
                },
                "Easels": null,
                "Felt Kits": null,
                "Fuse Beads": null,
                "Mandalas": null,
                "Molding & Sculpture": null,
                "Mosaics": null,
                "Papeterie & Stickers": null,
                "Printing & Stamping": null
            },
            "Baby & Toddler Toys": {
                "Activity Play Centres": null,
                "Baby Toys": null,
                "Bath Toys": null,
                "Bricks & Blocks": null,
                "Counting Frames": null,
                "Hammering & Nailing Toys": null,
                "Hobbyhorses": null,
                "Indoor Climbers & Play Structures": null,
                "Motor Activity Toys": null,
                "Pull Along Toys": null,
                "Rocking & Spring Ride-Ons": null,
                "Soft Toys": null,
                "Sorting, Stacking & Plugging Toys": null,
                "Sound Toys": null,
                "Spinning & Battling Tops": null,
                "Teaching Clocks": null
            },
            "Bikes, Trikes & Ride-Ons": null,
            "Building & Construction Toys": null,
            "Coin & Stamp Collecting": null,
            "Collectible Trading Cards & Accessories": null,
            "Cosmetics & Jewellery": null,
            "Die-Cast & Toy Vehicles": null,
            "Dolls & Accessories": {
                "Baby Dolls": null,
                "Clothing & Shoes": null,
                "Dollhouse Accessories": null,
                "Dollhouse Dolls": null,
                "Dollhouses": null,
                "Fashion Dolls": null,
                "Furniture": null,
                "Playsets": null,
                "Prams": null,
                "Soft Dolls": null,
                "Vehicles": null
            },
            "Dressing Up & Costumes": null,
            "Electronic Toys": null,
            "Games": {
                "Action & Reflex Games": null,
                "Backgammon": null,
                "Bingo": null,
                "Board Games": null,
                "Card Games": null,
                "Checkers": null,
                "Chess": null,
                "DVD Games": null,
                "Dice & Dice Games": null,
                "Domino & Tile Games": null,
                "Educational Games": null,
                "Electronic Games": null,
                "Floor Games": null,
                "Games Collections": null,
                "Go": null,
                "Hyakunin Isshu": null,
                "Karuta Cards": null,
                "Magic Boxes": null,
                "Mah Jong": null,
                "Mystery Games": null,
                "Role Playing Games": null,
                "Sport Games": null,
                "Stacking Games": null,
                "Strategy Games": null,
                "Tabletop & Miniature Gaming": null,
                "Travel & Pocket Games": null,
                "Trivia & Quiz Games": null
            },
            "Learning & Education": {
                "Detective": null,
                "Educational Computers": null,
                "Electronics": null,
                "Explorer Toys": null,
                "Flash Cards": null,
                "Foreign Languages": null,
                "Geography": null,
                "Habitats": null,
                "History": null,
                "Mathematics & Counting": null,
                "Reading & Writing": null,
                "Reward Charts": null,
                "Science": null,
                "Solar": null,
                "Special Needs Developmental Toys": null
            },
            "Marble Runs": null,
            "Model Building Kits": null,
            "Model Trains & Railway Sets": null,
            "Musical Toy Instruments": null,
            "Novelty & Gag Toys": {
                "Badges": null,
                "Fingerboards & Finger Bikes": null,
                "Gag Toys & Practical Jokes": null,
                "Kaleidoscopes": null,
                "Key Rings": null,
                "Light-Up & Glow-in-the-Dark Toys": null,
                "Magic Kits & Accessories": null,
                "Magnets & Magnetic Toys": null,
                "Mobile Phone Charms": null,
                "Money Banks": null,
                "Nesting Dolls": null,
                "Slime & Putty Toys": null,
                "Spy Gear": null,
                "Temporary Tattoos": null,
                "View Finders": null,
                "Wind-Up Toys": null
            },
            "Party Supplies": {
                "Decorations": {
                    "Balloons": null,
                    "Banners, Stickers & Confetti": null,
                    "Cake Decorations": null
                },
                "Invitations": null,
                "Noisemakers": null,
                "Party Favor Bags": null,
                "Party Favours": null,
                "Party Games": null,
                "Party Hats, Masks & Accessories": null,
                "Party Tableware": null,
                "Piñatas": null,
                "Table Covers & Accessories": null
            },
            "Pretend Play": {
                "Doctor Play Sets": null,
                "Household Toys": null,
                "Kitchen Toys": {
                    "Kitchen Playsets": null,
                    "Play Food": null,
                    "Cookware": null
                },
                "Magnet & Felt Playboards": null,
                "Paper & Magnetic Dolls": null,
                "Play Tools": null,
                "Pretend Play Purses": null,
                "Shops & Accessories": null
            },
            "Puppets & Puppet Theatres": null,
            "Puzzles": {
                "3-D Puzzles": null,
                "Floor Puzzles": null,
                "Framed Puzzles": null,
                "Jigsaw Puzzles": null,
                "Pegged Puzzles": null,
                "Puzzle Accessories": null,
                "Puzzle Mats": null,
                "Sudoku Puzzles": null,
                "Wooden Puzzles": null
            },
            "Radio & Remote Control": null,
            "Real-Food Appliances": null,
            "School Supplies": null,
            "Soft Toys": null,
            "Sport & Outdoor": null
        },
        "Video Games": {
            "PlayStation 4": {
                "Games": null,
                "Consoles": null,
                "Accessories": {
                    "Batteries & Chargers": null,
                    "Cables & Adapters": null,
                    "Cases & Storage": null,
                    "Controllers": null,
                    "Headsets": null,
                    "Skins": null,
                    "Thumb Grips": null
                }
            },
            "Xbox One": {
                "Games": null,
                "Consoles": null,
                "Accessories": {
                    "Batteries & Chargers": null,
                    "Cables & Adapters": null,
                    "Cases & Protectors": null,
                    "Controllers": null,
                    "Skins": null,
                    "Thumb Grips": null
                }
            },
            "PlayStation 3": null,
            "Xbox 360": null,
            "PC Games": null,
            "Wii": null,
            "Wii U": null,
            "Nintendo DS": null,
            "Nintendo 3DS": null,
            "PlayStation Vita": null,
            "PSP": null,
            "PlayStation 2": null,
            "Microconsoles & Handhelds": null,
            "Nintendo Switch": {
                "Games": null,
                "Consoles": null,
                "Accessories": {
                    "Cases & Storage": null,
                    "Faceplates, Protectors & Skins": null,
                    "Hand Grips": null
                }
            }
        },
        "Watches": null
    },
}

const reducers : SliceCaseReducers<productSliceType> =  {
    setProducts : (state , action: PayloadAction<productType[]>) => {
        state.products = action.payload;
    },
    setFilterProducts : (state , action: PayloadAction<productType[]>) => {
        state.filterProducts = action.payload;
    },
    setProduct : (state , action: PayloadAction<{product: productType, productId: string, index: number}>) => {
        const {product, productId, index } = action.payload;
        const currentState = current(state);
        currentState.products[index] = product;

    },
    setFilter: (state, action: PayloadAction<{
        categories ?: string[],
        rating ?: number[],
        price ?: { min: number , max?: number },
        reviews ?: number,
        available: boolean
    }>) => {
    state.filters = {...state.filters, ...action.payload}
    },
    setCategory: (state, action: PayloadAction<{
        categories ?: string[],
        rating ?: number[],
        price ?: { min: number , max?: number },
        reviews ?: number,
        available: boolean
    }>) => {
    state.category = { ...action.payload}
    },
}

const productSlice = createSlice<productSliceType , SliceCaseReducers<productSliceType>>({
    name: 'product',
    initialState,
    reducers,
});

export const productActions =  productSlice.actions;
export const productReducer = productSlice.reducer;

export const fetchProducts = createAsyncThunk("fetchProducts" , async  ( _args ,{ getState , rejectWithValue, fulfillWithValue, dispatch,   }) => {
    try {
    const res = await axios.get(api.getProductsApi);
    if( res.status === 200 &&  res.data?.status === "SUCCESS") {
        // dispatch(productActions.setProducts(testProducts))
        dispatch(productActions.setProducts(res.data.data))
        return fulfillWithValue(res.data.data);
    } else return  rejectWithValue(res.data.error?.message ?? "Something went wrong")
    
  } catch(e:any) { 
    console.log(e)
    return rejectWithValue(e?.message  ?? "General server error")
  }
});

export const fetchFilterProducts = createAsyncThunk("fetchFilterProducts" , async  ( filters: filterType ,{ getState , rejectWithValue, fulfillWithValue, dispatch,   }) => {
    try {
        // set filter to query params;
    const res = await axios.get(api.getFilterProductsApi, {params: filters});
    console.log(res);
    if( res.status === 200 &&  res.data?.status === "SUCCESS") {
        dispatch(productActions.setFilterProducts(res.data.data))
        // dispatch(productActions.setFilter({categories: []}))
        return fulfillWithValue(res.data.data);
    } else return  rejectWithValue(res.data.error?.message ?? "Something went wrong")

  } catch(e:any) { 
    console.log(e)
    return rejectWithValue(e?.message  ?? "General server error")
  }
});



