import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from "react-i18next";
i18next
.use(LanguageDetector)
.use(initReactI18next).init({
    debug: true,
    fallbackLng: 'uz',
    resources: {
        en: {
            translation: {
                h_world: "hello world",
                message: 'Message',
                profile:'Your Profile',
                giveAn:'Give Announcment',
                productType:'Product type',
                kw:'Kids world',
                house:'Houses',
                transport:'Transports',
                work:'Works',
                animal: 'Animals',
                furniture:'Furnitures',
                elecItems: 'Electrical Items',
                services:'Services',
                fashion:'Fashion',
                sportItems:'Sport Items',
                discount:'Discount',
                exchange:'Exchange',
                placeholder:'Search',
                topPr:'Top Products',
                profileTitle:'Your Profile',
                prImage:'Image',
                prProductName:'Product Name',
                prRegion:'Region',
                prTime:'Time',
                prPrice:'Price',
                prEdit:'Edit',
                prDelete:'Delete',
                prCreateNew:'New'
            }
        },
        uz: {
            translation: {
                h_world: "Assalomu alaykum",
                message: 'Xabar',
                profile:'Sizning Hisobingiz',
                giveAn:'Elon berish',
                productType:'Maxsulot turlari',
                kw:'Bolalar dunyosi',
                house:"Ko'chmas mulk",
                transport:'Transport',
                work:'Ishlar',
                animal: 'Hayvonlar',
                furniture:'Mebellar',
                elecItems: 'Electron jihozlar',
                services:'Xizmatlar',
                fashion:'Moda',
                sportItems:'Sport Buyumlari',
                discount:'Chegirma',
                exchange:'Almashish',
                placeholder:'Qidirish',
                topPr:'Yuqoridagi maxsulotlar',
                profileTitle:'Sizning hisobingiz',
                prImage:'Rasm',
                prProductName:'Maxsulot nomi',
                prRegion:'Viloyat',
                prTime:'Vaqt',
                prPrice:'Narx',
                prEdit:"O'zgartirish",
                prDelete:"O'chirish",
                prCreateNew:'Yangi'
            }
        }
    }
})