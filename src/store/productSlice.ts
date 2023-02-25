import { createAsyncThunk, createSlice, current, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";
import axios from "axios";

import api from "../api"
import { productType } from "../utils/schema/product";


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
        limit: 12,
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



