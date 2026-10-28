/* =========================================================
   SwasthyaMitra AI - Global Multi-Language System
   Supported languages:
   en, hi, mr, bn, gu, kn, ml, pa, ta, te, ur, or

   Storage key:
   swasthyaMitraLanguage
   ========================================================= */

const SM_LANG_KEY = "swasthyaMitraLanguage";

const SM_SUPPORTED_LANGUAGES = {
    en: "English",
    hi: "हिन्दी",
    mr: "मराठी",
    bn: "বাংলা",
    gu: "ગુજરાતી",
    kn: "ಕನ್ನಡ",
    ml: "മലയാളം",
    pa: "ਪੰਜਾਬੀ",
    ta: "தமிழ்",
    te: "తెలుగు",
    ur: "اردو",
    or: "ଓଡ଼ିଆ"
};

const SM_RTL_LANGUAGES = ["ur"];


/* =========================================================
   TRANSLATIONS
   ========================================================= */

const SM_TRANSLATIONS = {

    /* =========================
       ENGLISH
       ========================= */
    en: {
        /* Navigation */
        nav_home: "Home",
        nav_services: "Services",
        nav_pharmacy: "Pharmacy",
        nav_dashboard: "Dashboard",
        nav_about: "About",
        nav_contact: "Contact",
        nav_login: "Login",
        nav_signup: "Sign Up",
        get_started: "Get Started",
        language: "Language",

        /* Common */
        search: "Search",
        submit: "Submit",
        cancel: "Cancel",
        save: "Save",
        delete: "Delete",
        edit: "Edit",
        close: "Close",
        back: "Back",
        next: "Next",
        continue: "Continue",
        confirm: "Confirm",
        view_details: "View Details",
        add_to_cart: "Add to Cart",
        buy_now: "Buy Now",
        book: "Book",
        upload: "Upload",
        download: "Download",
        loading: "Loading",
        success: "Success",
        error: "Error",
        no_results: "No results found",

        /* Search */
        search_placeholder: "Search...",

        /* Pharmacy */
        pharmacy: "Pharmacy",
        medicines: "Medicines",
        health_products: "Health Products",
        categories: "Categories",
        search_products: "Search products",
        wishlist: "Wishlist",
        cart: "Cart",
        prescription: "Prescription",
        upload_prescription: "Upload Prescription",
        checkout: "Checkout",
        quantity: "Quantity",
        price: "Price",
        mrp: "MRP",
        discount: "Discount",
        total: "Total",
        subtotal: "Subtotal",
        delivery: "Delivery",
        free_delivery: "Free Delivery",
        place_order: "Place Order",
        order_successful: "Order Successful",

        personal_care: "Personal Care",
        vitamins_supplements: "Vitamins & Supplements",
        diabetes_care: "Diabetes Care",
        healthcare_devices: "Healthcare Devices",
        homeopathic_medicine: "Homeopathic Medicine",
        health_conditions: "Health Conditions",
        top_packages: "Top Packages",
        preventive_plus: "Preventive Plus",
        active_life: "Active Life",
        book_package: "Book Package",
        tests_included: "Tests Included",
        patients_booked: "Patients Booked",

        /* Location */
        use_current_location: "Use Current Location",
        location: "Location",
        detecting_location: "Detecting location",
        location_detected: "Location detected",
        enter_location_manually: "Enter location manually",

        /* Articles */
        health_articles: "Health Articles",
        read_article: "Read Article",
        learn_more: "Learn More",
        latest_health_information: "Latest Health Information",

        /* Dashboard */
        dashboard: "Dashboard",
        welcome: "Welcome",
        my_orders: "My Orders",
        my_prescriptions: "My Prescriptions",
        my_appointments: "My Appointments",
        health_records: "Health Records",
        profile: "Profile",
        notifications: "Notifications",
        recent_orders: "Recent Orders",
        order_status: "Order Status",
        view_all: "View All"
    },


    /* =========================
       HINDI
       ========================= */
    hi: {
        nav_home: "होम",
        nav_services: "सेवाएँ",
        nav_pharmacy: "फार्मेसी",
        nav_dashboard: "डैशबोर्ड",
        nav_about: "हमारे बारे में",
        nav_contact: "संपर्क करें",
        nav_login: "लॉगिन",
        nav_signup: "साइन अप",
        get_started: "शुरू करें",
        language: "भाषा",

        search: "खोजें",
        submit: "जमा करें",
        cancel: "रद्द करें",
        save: "सहेजें",
        delete: "हटाएँ",
        edit: "संपादित करें",
        close: "बंद करें",
        back: "वापस",
        next: "अगला",
        continue: "जारी रखें",
        confirm: "पुष्टि करें",
        view_details: "विवरण देखें",
        add_to_cart: "कार्ट में जोड़ें",
        buy_now: "अभी खरीदें",
        book: "बुक करें",
        upload: "अपलोड करें",
        download: "डाउनलोड करें",
        loading: "लोड हो रहा है",
        success: "सफल",
        error: "त्रुटि",
        no_results: "कोई परिणाम नहीं मिला",

        search_placeholder: "खोजें...",

        pharmacy: "फार्मेसी",
        medicines: "दवाइयाँ",
        health_products: "स्वास्थ्य उत्पाद",
        categories: "श्रेणियाँ",
        search_products: "उत्पाद खोजें",
        wishlist: "विशलिस्ट",
        cart: "कार्ट",
        prescription: "प्रिस्क्रिप्शन",
        upload_prescription: "प्रिस्क्रिप्शन अपलोड करें",
        checkout: "चेकआउट",
        quantity: "मात्रा",
        price: "कीमत",
        mrp: "एमआरपी",
        discount: "छूट",
        total: "कुल",
        subtotal: "उप-कुल",
        delivery: "डिलीवरी",
        free_delivery: "मुफ्त डिलीवरी",
        place_order: "ऑर्डर करें",
        order_successful: "ऑर्डर सफल रहा",

        personal_care: "पर्सनल केयर",
        vitamins_supplements: "विटामिन और सप्लीमेंट्स",
        diabetes_care: "डायबिटीज केयर",
        healthcare_devices: "स्वास्थ्य उपकरण",
        homeopathic_medicine: "होम्योपैथिक दवा",
        health_conditions: "स्वास्थ्य स्थितियाँ",
        top_packages: "टॉप पैकेज",
        preventive_plus: "प्रिवेंटिव प्लस",
        active_life: "एक्टिव लाइफ",
        book_package: "पैकेज बुक करें",
        tests_included: "शामिल टेस्ट",
        patients_booked: "बुक किए गए मरीज",

        use_current_location: "वर्तमान स्थान का उपयोग करें",
        location: "स्थान",
        detecting_location: "स्थान पता किया जा रहा है",
        location_detected: "स्थान पता चल गया",
        enter_location_manually: "स्थान मैन्युअली दर्ज करें",

        health_articles: "स्वास्थ्य लेख",
        read_article: "लेख पढ़ें",
        learn_more: "और जानें",
        latest_health_information: "नवीनतम स्वास्थ्य जानकारी",

        dashboard: "डैशबोर्ड",
        welcome: "स्वागत है",
        my_orders: "मेरे ऑर्डर",
        my_prescriptions: "मेरे प्रिस्क्रिप्शन",
        my_appointments: "मेरी अपॉइंटमेंट",
        health_records: "स्वास्थ्य रिकॉर्ड",
        profile: "प्रोफ़ाइल",
        notifications: "सूचनाएँ",
        recent_orders: "हाल के ऑर्डर",
        order_status: "ऑर्डर स्थिति",
        view_all: "सभी देखें"
    },


    /* =========================
       MARATHI
       ========================= */
    mr: {
        nav_home: "मुख्यपृष्ठ",
        nav_services: "सेवा",
        nav_pharmacy: "फार्मसी",
        nav_dashboard: "डॅशबोर्ड",
        nav_about: "आमच्याबद्दल",
        nav_contact: "संपर्क",
        nav_login: "लॉगिन",
        nav_signup: "साइन अप",
        get_started: "सुरुवात करा",
        language: "भाषा",

        search: "शोधा",
        submit: "सबमिट करा",
        cancel: "रद्द करा",
        save: "जतन करा",
        delete: "हटवा",
        edit: "संपादित करा",
        close: "बंद करा",
        back: "मागे",
        next: "पुढे",
        continue: "सुरू ठेवा",
        confirm: "पुष्टी करा",
        view_details: "तपशील पहा",
        add_to_cart: "कार्टमध्ये जोडा",
        buy_now: "आता खरेदी करा",
        book: "बुक करा",
        upload: "अपलोड करा",
        download: "डाउनलोड करा",
        loading: "लोड होत आहे",
        success: "यशस्वी",
        error: "त्रुटी",
        no_results: "कोणतेही परिणाम सापडले नाहीत",

        search_placeholder: "शोधा...",

        pharmacy: "फार्मसी",
        medicines: "औषधे",
        health_products: "आरोग्य उत्पादने",
        categories: "श्रेणी",
        search_products: "उत्पादने शोधा",
        wishlist: "विशलिस्ट",
        cart: "कार्ट",
        prescription: "प्रिस्क्रिप्शन",
        upload_prescription: "प्रिस्क्रिप्शन अपलोड करा",
        checkout: "चेकआउट",
        quantity: "प्रमाण",
        price: "किंमत",
        mrp: "एमआरपी",
        discount: "सूट",
        total: "एकूण",
        subtotal: "उपएकूण",
        delivery: "डिलिव्हरी",
        free_delivery: "मोफत डिलिव्हरी",
        place_order: "ऑर्डर द्या",
        order_successful: "ऑर्डर यशस्वी",

        personal_care: "वैयक्तिक काळजी",
        vitamins_supplements: "जीवनसत्त्वे आणि सप्लिमेंट्स",
        diabetes_care: "मधुमेह काळजी",
        healthcare_devices: "आरोग्य उपकरणे",
        homeopathic_medicine: "होमिओपॅथिक औषध",
        health_conditions: "आरोग्य स्थिती",
        top_packages: "टॉप पॅकेजेस",
        preventive_plus: "प्रिव्हेंटिव्ह प्लस",
        active_life: "ॲक्टिव्ह लाइफ",
        book_package: "पॅकेज बुक करा",
        tests_included: "समाविष्ट चाचण्या",
        patients_booked: "बुक केलेले रुग्ण",

        use_current_location: "सध्याचे स्थान वापरा",
        location: "स्थान",
        detecting_location: "स्थान शोधत आहे",
        location_detected: "स्थान सापडले",
        enter_location_manually: "स्थान मॅन्युअली भरा",

        health_articles: "आरोग्यविषयक लेख",
        read_article: "लेख वाचा",
        learn_more: "अधिक जाणून घ्या",
        latest_health_information: "नवीनतम आरोग्य माहिती",

        dashboard: "डॅशबोर्ड",
        welcome: "स्वागत आहे",
        my_orders: "माझ्या ऑर्डर्स",
        my_prescriptions: "माझे प्रिस्क्रिप्शन",
        my_appointments: "माझ्या अपॉइंटमेंट्स",
        health_records: "आरोग्य नोंदी",
        profile: "प्रोफाइल",
        notifications: "सूचना",
        recent_orders: "अलीकडील ऑर्डर्स",
        order_status: "ऑर्डर स्थिती",
        view_all: "सर्व पहा"
    },


    /* =========================
       BENGALI
       ========================= */
    bn: {
        nav_home: "হোম",
        nav_services: "সেবাসমূহ",
        nav_pharmacy: "ফার্মেসি",
        nav_dashboard: "ড্যাশবোর্ড",
        nav_about: "আমাদের সম্পর্কে",
        nav_contact: "যোগাযোগ",
        nav_login: "লগইন",
        nav_signup: "সাইন আপ",
        get_started: "শুরু করুন",
        language: "ভাষা",

        search: "অনুসন্ধান",
        submit: "জমা দিন",
        cancel: "বাতিল করুন",
        save: "সংরক্ষণ করুন",
        delete: "মুছে দিন",
        edit: "সম্পাদনা",
        close: "বন্ধ করুন",
        back: "পিছনে",
        next: "পরবর্তী",
        continue: "চালিয়ে যান",
        confirm: "নিশ্চিত করুন",
        view_details: "বিস্তারিত দেখুন",
        add_to_cart: "কার্টে যোগ করুন",
        buy_now: "এখনই কিনুন",
        book: "বুক করুন",
        upload: "আপলোড করুন",
        download: "ডাউনলোড করুন",
        loading: "লোড হচ্ছে",
        success: "সফল",
        error: "ত্রুটি",
        no_results: "কোনো ফলাফল পাওয়া যায়নি",

        search_placeholder: "অনুসন্ধান করুন...",

        pharmacy: "ফার্মেসি",
        medicines: "ওষুধ",
        health_products: "স্বাস্থ্য পণ্য",
        categories: "বিভাগ",
        search_products: "পণ্য অনুসন্ধান করুন",
        wishlist: "উইশলিস্ট",
        cart: "কার্ট",
        prescription: "প্রেসক্রিপশন",
        upload_prescription: "প্রেসক্রিপশন আপলোড করুন",
        checkout: "চেকআউট",
        quantity: "পরিমাণ",
        price: "মূল্য",
        mrp: "এমআরপি",
        discount: "ছাড়",
        total: "মোট",
        subtotal: "উপমোট",
        delivery: "ডেলিভারি",
        free_delivery: "বিনামূল্যে ডেলিভারি",
        place_order: "অর্ডার করুন",
        order_successful: "অর্ডার সফল হয়েছে",

        personal_care: "ব্যক্তিগত যত্ন",
        vitamins_supplements: "ভিটামিন ও সাপ্লিমেন্ট",
        diabetes_care: "ডায়াবেটিস কেয়ার",
        healthcare_devices: "স্বাস্থ্যসেবা ডিভাইস",
        homeopathic_medicine: "হোমিওপ্যাথিক ওষুধ",
        health_conditions: "স্বাস্থ্য সমস্যা",
        top_packages: "শীর্ষ প্যাকেজ",
        preventive_plus: "প্রিভেন্টিভ প্লাস",
        active_life: "অ্যাক্টিভ লাইফ",
        book_package: "প্যাকেজ বুক করুন",
        tests_included: "অন্তর্ভুক্ত পরীক্ষা",
        patients_booked: "বুক করা রোগী",

        use_current_location: "বর্তমান অবস্থান ব্যবহার করুন",
        location: "অবস্থান",
        detecting_location: "অবস্থান শনাক্ত করা হচ্ছে",
        location_detected: "অবস্থান শনাক্ত হয়েছে",
        enter_location_manually: "অবস্থান ম্যানুয়ালি লিখুন",

        health_articles: "স্বাস্থ্য বিষয়ক প্রবন্ধ",
        read_article: "প্রবন্ধ পড়ুন",
        learn_more: "আরও জানুন",
        latest_health_information: "সর্বশেষ স্বাস্থ্য তথ্য",

        dashboard: "ড্যাশবোর্ড",
        welcome: "স্বাগতম",
        my_orders: "আমার অর্ডার",
        my_prescriptions: "আমার প্রেসক্রিপশন",
        my_appointments: "আমার অ্যাপয়েন্টমেন্ট",
        health_records: "স্বাস্থ্য রেকর্ড",
        profile: "প্রোফাইল",
        notifications: "বিজ্ঞপ্তি",
        recent_orders: "সাম্প্রতিক অর্ডার",
        order_status: "অর্ডারের অবস্থা",
        view_all: "সব দেখুন"
    },


    /* =========================
       GUJARATI
       ========================= */
    gu: {
        nav_home: "હોમ",
        nav_services: "સેવાઓ",
        nav_pharmacy: "ફાર્મસી",
        nav_dashboard: "ડેશબોર્ડ",
        nav_about: "અમારા વિશે",
        nav_contact: "સંપર્ક",
        nav_login: "લૉગિન",
        nav_signup: "સાઇન અપ",
        get_started: "શરૂ કરો",
        language: "ભાષા",

        search: "શોધો",
        submit: "સબમિટ કરો",
        cancel: "રદ કરો",
        save: "સાચવો",
        delete: "કાઢી નાખો",
        edit: "ફેરફાર કરો",
        close: "બંધ કરો",
        back: "પાછળ",
        next: "આગળ",
        continue: "ચાલુ રાખો",
        confirm: "પુષ્ટિ કરો",
        view_details: "વિગતો જુઓ",
        add_to_cart: "કાર્ટમાં ઉમેરો",
        buy_now: "હમણાં ખરીદો",
        book: "બુક કરો",
        upload: "અપલોડ કરો",
        download: "ડાઉનલોડ કરો",
        loading: "લોડ થઈ રહ્યું છે",
        success: "સફળ",
        error: "ભૂલ",
        no_results: "કોઈ પરિણામ મળ્યું નથી",

        search_placeholder: "શોધો...",

        pharmacy: "ફાર્મસી",
        medicines: "દવાઓ",
        health_products: "આરોગ્ય ઉત્પાદનો",
        categories: "શ્રેણીઓ",
        search_products: "ઉત્પાદનો શોધો",
        wishlist: "વિશલિસ્ટ",
        cart: "કાર્ટ",
        prescription: "પ્રિસ્ક્રિપ્શન",
        upload_prescription: "પ્રિસ્ક્રિપ્શન અપલોડ કરો",
        checkout: "ચેકઆઉટ",
        quantity: "જથ્થો",
        price: "કિંમત",
        mrp: "MRP",
        discount: "ડિસ્કાઉન્ટ",
        total: "કુલ",
        subtotal: "પેટા કુલ",
        delivery: "ડિલિવરી",
        free_delivery: "મફત ડિલિવરી",
        place_order: "ઓર્ડર આપો",
        order_successful: "ઓર્ડર સફળ થયો",

        personal_care: "વ્યક્તિગત સંભાળ",
        vitamins_supplements: "વિટામિન્સ અને સપ્લિમેન્ટ્સ",
        diabetes_care: "ડાયાબિટીસ કેર",
        healthcare_devices: "આરોગ્ય ઉપકરણો",
        homeopathic_medicine: "હોમિયોપેથિક દવા",
        health_conditions: "આરોગ્ય સ્થિતિઓ",
        top_packages: "ટોચના પેકેજ",
        preventive_plus: "પ્રિવેન્ટિવ પ્લસ",
        active_life: "એક્ટિવ લાઇફ",
        book_package: "પેકેજ બુક કરો",
        tests_included: "સમાવિષ્ટ ટેસ્ટ",
        patients_booked: "બુક થયેલા દર્દીઓ",

        use_current_location: "વર્તમાન સ્થાનનો ઉપયોગ કરો",
        location: "સ્થાન",
        detecting_location: "સ્થાન શોધી રહ્યા છીએ",
        location_detected: "સ્થાન મળી ગયું",
        enter_location_manually: "સ્થાન મેન્યુઅલી દાખલ કરો",

        health_articles: "આરોગ્ય લેખો",
        read_article: "લેખ વાંચો",
        learn_more: "વધુ જાણો",
        latest_health_information: "નવીનતમ આરોગ્ય માહિતી",

        dashboard: "ડેશબોર્ડ",
        welcome: "સ્વાગત છે",
        my_orders: "મારા ઓર્ડર",
        my_prescriptions: "મારા પ્રિસ્ક્રિપ્શન",
        my_appointments: "મારી એપોઇન્ટમેન્ટ",
        health_records: "આરોગ્ય રેકોર્ડ",
        profile: "પ્રોફાઇલ",
        notifications: "સૂચનાઓ",
        recent_orders: "તાજેતરના ઓર્ડર",
        order_status: "ઓર્ડરની સ્થિતિ",
        view_all: "બધું જુઓ"
    },


    /* =========================
       KANNADA
       ========================= */
    kn: {
        nav_home: "ಮುಖಪುಟ",
        nav_services: "ಸೇವೆಗಳು",
        nav_pharmacy: "ಫಾರ್ಮಸಿ",
        nav_dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
        nav_about: "ನಮ್ಮ ಬಗ್ಗೆ",
        nav_contact: "ಸಂಪರ್ಕಿಸಿ",
        nav_login: "ಲಾಗಿನ್",
        nav_signup: "ಸೈನ್ ಅಪ್",
        get_started: "ಪ್ರಾರಂಭಿಸಿ",
        language: "ಭಾಷೆ",

        search: "ಹುಡುಕಿ",
        submit: "ಸಲ್ಲಿಸಿ",
        cancel: "ರದ್ದುಮಾಡಿ",
        save: "ಉಳಿಸಿ",
        delete: "ಅಳಿಸಿ",
        edit: "ತಿದ್ದು",
        close: "ಮುಚ್ಚಿ",
        back: "ಹಿಂದೆ",
        next: "ಮುಂದೆ",
        continue: "ಮುಂದುವರಿಸಿ",
        confirm: "ದೃಢೀಕರಿಸಿ",
        view_details: "ವಿವರಗಳನ್ನು ನೋಡಿ",
        add_to_cart: "ಕಾರ್ಟ್‌ಗೆ ಸೇರಿಸಿ",
        buy_now: "ಈಗ ಖರೀದಿಸಿ",
        book: "ಬುಕ್ ಮಾಡಿ",
        upload: "ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
        download: "ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
        loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ",
        success: "ಯಶಸ್ವಿ",
        error: "ದೋಷ",
        no_results: "ಯಾವುದೇ ಫಲಿತಾಂಶ ಕಂಡುಬಂದಿಲ್ಲ",

        search_placeholder: "ಹುಡುಕಿ...",

        pharmacy: "ಫಾರ್ಮಸಿ",
        medicines: "ಔಷಧಿಗಳು",
        health_products: "ಆರೋಗ್ಯ ಉತ್ಪನ್ನಗಳು",
        categories: "ವರ್ಗಗಳು",
        search_products: "ಉತ್ಪನ್ನಗಳನ್ನು ಹುಡುಕಿ",
        wishlist: "ವಿಶ್‌ಲಿಸ್ಟ್",
        cart: "ಕಾರ್ಟ್",
        prescription: "ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್",
        upload_prescription: "ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
        checkout: "ಚೆಕ್‌ಔಟ್",
        quantity: "ಪ್ರಮಾಣ",
        price: "ಬೆಲೆ",
        mrp: "MRP",
        discount: "ರಿಯಾಯಿತಿ",
        total: "ಒಟ್ಟು",
        subtotal: "ಉಪಮೊತ್ತ",
        delivery: "ವಿತರಣೆ",
        free_delivery: "ಉಚಿತ ವಿತರಣೆ",
        place_order: "ಆರ್ಡರ್ ಮಾಡಿ",
        order_successful: "ಆರ್ಡರ್ ಯಶಸ್ವಿಯಾಗಿದೆ",

        personal_care: "ವೈಯಕ್ತಿಕ ಆರೈಕೆ",
        vitamins_supplements: "ವಿಟಮಿನ್‌ಗಳು ಮತ್ತು ಸಪ್ಲಿಮೆಂಟ್‌ಗಳು",
        diabetes_care: "ಮಧುಮೇಹ ಆರೈಕೆ",
        healthcare_devices: "ಆರೋಗ್ಯ ಸಾಧನಗಳು",
        homeopathic_medicine: "ಹೋಮಿಯೋಪಥಿಕ್ ಔಷಧಿ",
        health_conditions: "ಆರೋಗ್ಯ ಸ್ಥಿತಿಗಳು",
        top_packages: "ಉನ್ನತ ಪ್ಯಾಕೇಜ್‌ಗಳು",
        preventive_plus: "ಪ್ರಿವೆಂಟಿವ್ ಪ್ಲಸ್",
        active_life: "ಆಕ್ಟಿವ್ ಲೈಫ್",
        book_package: "ಪ್ಯಾಕೇಜ್ ಬುಕ್ ಮಾಡಿ",
        tests_included: "ಒಳಗೊಂಡಿರುವ ಪರೀಕ್ಷೆಗಳು",
        patients_booked: "ಬುಕ್ ಮಾಡಿದ ರೋಗಿಗಳು",

        use_current_location: "ಪ್ರಸ್ತುತ ಸ್ಥಳ ಬಳಸಿ",
        location: "ಸ್ಥಳ",
        detecting_location: "ಸ್ಥಳ ಪತ್ತೆ ಮಾಡಲಾಗುತ್ತಿದೆ",
        location_detected: "ಸ್ಥಳ ಪತ್ತೆಯಾಗಿದೆ",
        enter_location_manually: "ಸ್ಥಳವನ್ನು ಕೈಯಾರೆ ನಮೂದಿಸಿ",

        health_articles: "ಆರೋಗ್ಯ ಲೇಖನಗಳು",
        read_article: "ಲೇಖನ ಓದಿ",
        learn_more: "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ",
        latest_health_information: "ಇತ್ತೀಚಿನ ಆರೋಗ್ಯ ಮಾಹಿತಿ",

        dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
        welcome: "ಸ್ವಾಗತ",
        my_orders: "ನನ್ನ ಆರ್ಡರ್‌ಗಳು",
        my_prescriptions: "ನನ್ನ ಪ್ರಿಸ್ಕ್ರಿಪ್ಷನ್‌ಗಳು",
        my_appointments: "ನನ್ನ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ಗಳು",
        health_records: "ಆರೋಗ್ಯ ದಾಖಲೆಗಳು",
        profile: "ಪ್ರೊಫೈಲ್",
        notifications: "ಅಧಿಸೂಚನೆಗಳು",
        recent_orders: "ಇತ್ತೀಚಿನ ಆರ್ಡರ್‌ಗಳು",
        order_status: "ಆರ್ಡರ್ ಸ್ಥಿತಿ",
        view_all: "ಎಲ್ಲವನ್ನೂ ನೋಡಿ"
    },


    /* =========================
       MALAYALAM
       ========================= */
    ml: {
        nav_home: "ഹോം",
        nav_services: "സേവനങ്ങൾ",
        nav_pharmacy: "ഫാർമസി",
        nav_dashboard: "ഡാഷ്ബോർഡ്",
        nav_about: "ഞങ്ങളെക്കുറിച്ച്",
        nav_contact: "ബന്ധപ്പെടുക",
        nav_login: "ലോഗിൻ",
        nav_signup: "സൈൻ അപ്പ്",
        get_started: "ആരംഭിക്കുക",
        language: "ഭാഷ",

        search: "തിരയുക",
        submit: "സമർപ്പിക്കുക",
        cancel: "റദ്ദാക്കുക",
        save: "സംരക്ഷിക്കുക",
        delete: "ഇല്ലാതാക്കുക",
        edit: "തിരുത്തുക",
        close: "അടയ്ക്കുക",
        back: "തിരികെ",
        next: "അടുത്തത്",
        continue: "തുടരുക",
        confirm: "സ്ഥിരീകരിക്കുക",
        view_details: "വിശദാംശങ്ങൾ കാണുക",
        add_to_cart: "കാർട്ടിലേക്ക് ചേർക്കുക",
        buy_now: "ഇപ്പോൾ വാങ്ങുക",
        book: "ബുക്ക് ചെയ്യുക",
        upload: "അപ്‌ലോഡ് ചെയ്യുക",
        download: "ഡൗൺലോഡ് ചെയ്യുക",
        loading: "ലോഡ് ചെയ്യുന്നു",
        success: "വിജയകരം",
        error: "പിശക്",
        no_results: "ഫലങ്ങളൊന്നും കണ്ടെത്തിയില്ല",

        search_placeholder: "തിരയുക...",

        pharmacy: "ഫാർമസി",
        medicines: "മരുന്നുകൾ",
        health_products: "ആരോഗ്യ ഉൽപ്പന്നങ്ങൾ",
        categories: "വിഭാഗങ്ങൾ",
        search_products: "ഉൽപ്പന്നങ്ങൾ തിരയുക",
        wishlist: "വിഷ്‌ലിസ്റ്റ്",
        cart: "കാർട്ട്",
        prescription: "പ്രിസ്ക്രിപ്ഷൻ",
        upload_prescription: "പ്രിസ്ക്രിപ്ഷൻ അപ്‌ലോഡ് ചെയ്യുക",
        checkout: "ചെക്ക്ഔട്ട്",
        quantity: "അളവ്",
        price: "വില",
        mrp: "MRP",
        discount: "ഇളവ്",
        total: "ആകെ",
        subtotal: "ഉപആകെ",
        delivery: "ഡെലിവറി",
        free_delivery: "സൗജന്യ ഡെലിവറി",
        place_order: "ഓർഡർ നൽകുക",
        order_successful: "ഓർഡർ വിജയകരമായി",

        personal_care: "വ്യക്തിഗത പരിചരണം",
        vitamins_supplements: "വിറ്റാമിനുകളും സപ്ലിമെന്റുകളും",
        diabetes_care: "പ്രമേഹ പരിചരണം",
        healthcare_devices: "ആരോഗ്യ ഉപകരണങ്ങൾ",
        homeopathic_medicine: "ഹോമിയോപ്പതി മരുന്ന്",
        health_conditions: "ആരോഗ്യ അവസ്ഥകൾ",
        top_packages: "മികച്ച പാക്കേജുകൾ",
        preventive_plus: "പ്രിവന്റീവ് പ്ലസ്",
        active_life: "ആക്റ്റീവ് ലൈഫ്",
        book_package: "പാക്കേജ് ബുക്ക് ചെയ്യുക",
        tests_included: "ഉൾപ്പെടുത്തിയ പരിശോധനകൾ",
        patients_booked: "ബുക്ക് ചെയ്ത രോഗികൾ",

        use_current_location: "നിലവിലെ സ്ഥാനം ഉപയോഗിക്കുക",
        location: "സ്ഥാനം",
        detecting_location: "സ്ഥാനം കണ്ടെത്തുന്നു",
        location_detected: "സ്ഥാനം കണ്ടെത്തി",
        enter_location_manually: "സ്ഥലം സ്വമേധയാ നൽകുക",

        health_articles: "ആരോഗ്യ ലേഖനങ്ങൾ",
        read_article: "ലേഖനം വായിക്കുക",
        learn_more: "കൂടുതൽ അറിയുക",
        latest_health_information: "ഏറ്റവും പുതിയ ആരോഗ്യ വിവരങ്ങൾ",

        dashboard: "ഡാഷ്ബോർഡ്",
        welcome: "സ്വാഗതം",
        my_orders: "എന്റെ ഓർഡറുകൾ",
        my_prescriptions: "എന്റെ പ്രിസ്ക്രിപ്ഷനുകൾ",
        my_appointments: "എന്റെ അപ്പോയിന്റ്മെന്റുകൾ",
        health_records: "ആരോഗ്യ രേഖകൾ",
        profile: "പ്രൊഫൈൽ",
        notifications: "അറിയിപ്പുകൾ",
        recent_orders: "സമീപകാല ഓർഡറുകൾ",
        order_status: "ഓർഡർ നില",
        view_all: "എല്ലാം കാണുക"
    },


    /* =========================
       PUNJABI
       ========================= */
    pa: {
        nav_home: "ਹੋਮ",
        nav_services: "ਸੇਵਾਵਾਂ",
        nav_pharmacy: "ਫਾਰਮੇਸੀ",
        nav_dashboard: "ਡੈਸ਼ਬੋਰਡ",
        nav_about: "ਸਾਡੇ ਬਾਰੇ",
        nav_contact: "ਸੰਪਰਕ",
        nav_login: "ਲਾਗਇਨ",
        nav_signup: "ਸਾਈਨ ਅੱਪ",
        get_started: "ਸ਼ੁਰੂ ਕਰੋ",
        language: "ਭਾਸ਼ਾ",

        search: "ਖੋਜੋ",
        submit: "ਜਮ੍ਹਾਂ ਕਰੋ",
        cancel: "ਰੱਦ ਕਰੋ",
        save: "ਸੇਵ ਕਰੋ",
        delete: "ਮਿਟਾਓ",
        edit: "ਸੋਧੋ",
        close: "ਬੰਦ ਕਰੋ",
        back: "ਵਾਪਸ",
        next: "ਅੱਗੇ",
        continue: "ਜਾਰੀ ਰੱਖੋ",
        confirm: "ਪੁਸ਼ਟੀ ਕਰੋ",
        view_details: "ਵੇਰਵੇ ਵੇਖੋ",
        add_to_cart: "ਕਾਰਟ ਵਿੱਚ ਸ਼ਾਮਲ ਕਰੋ",
        buy_now: "ਹੁਣੇ ਖਰੀਦੋ",
        book: "ਬੁੱਕ ਕਰੋ",
        upload: "ਅੱਪਲੋਡ ਕਰੋ",
        download: "ਡਾਊਨਲੋਡ ਕਰੋ",
        loading: "ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ",
        success: "ਸਫਲ",
        error: "ਗਲਤੀ",
        no_results: "ਕੋਈ ਨਤੀਜਾ ਨਹੀਂ ਮਿਲਿਆ",

        search_placeholder: "ਖੋਜੋ...",

        pharmacy: "ਫਾਰਮੇਸੀ",
        medicines: "ਦਵਾਈਆਂ",
        health_products: "ਸਿਹਤ ਉਤਪਾਦ",
        categories: "ਸ਼੍ਰੇਣੀਆਂ",
        search_products: "ਉਤਪਾਦ ਖੋਜੋ",
        wishlist: "ਵਿਸ਼ਲਿਸਟ",
        cart: "ਕਾਰਟ",
        prescription: "ਪ੍ਰਿਸਕ੍ਰਿਪਸ਼ਨ",
        upload_prescription: "ਪ੍ਰਿਸਕ੍ਰਿਪਸ਼ਨ ਅੱਪਲੋਡ ਕਰੋ",
        checkout: "ਚੈੱਕਆਉਟ",
        quantity: "ਮਾਤਰਾ",
        price: "ਕੀਮਤ",
        mrp: "MRP",
        discount: "ਛੂਟ",
        total: "ਕੁੱਲ",
        subtotal: "ਉਪ-ਕੁੱਲ",
        delivery: "ਡਿਲਿਵਰੀ",
        free_delivery: "ਮੁਫ਼ਤ ਡਿਲਿਵਰੀ",
        place_order: "ਆਰਡਰ ਕਰੋ",
        order_successful: "ਆਰਡਰ ਸਫਲ ਹੋਇਆ",

        personal_care: "ਨਿੱਜੀ ਦੇਖਭਾਲ",
        vitamins_supplements: "ਵਿਟਾਮਿਨ ਅਤੇ ਸਪਲੀਮੈਂਟ",
        diabetes_care: "ਸ਼ੂਗਰ ਦੇਖਭਾਲ",
        healthcare_devices: "ਸਿਹਤ ਉਪਕਰਣ",
        homeopathic_medicine: "ਹੋਮਿਓਪੈਥਿਕ ਦਵਾਈ",
        health_conditions: "ਸਿਹਤ ਸਥਿਤੀਆਂ",
        top_packages: "ਪ੍ਰਮੁੱਖ ਪੈਕੇਜ",
        preventive_plus: "ਪ੍ਰਿਵੈਂਟਿਵ ਪਲੱਸ",
        active_life: "ਐਕਟਿਵ ਲਾਈਫ",
        book_package: "ਪੈਕੇਜ ਬੁੱਕ ਕਰੋ",
        tests_included: "ਸ਼ਾਮਲ ਟੈਸਟ",
        patients_booked: "ਬੁੱਕ ਕੀਤੇ ਮਰੀਜ਼",

        use_current_location: "ਮੌਜੂਦਾ ਟਿਕਾਣਾ ਵਰਤੋ",
        location: "ਟਿਕਾਣਾ",
        detecting_location: "ਟਿਕਾਣਾ ਲੱਭਿਆ ਜਾ ਰਿਹਾ ਹੈ",
        location_detected: "ਟਿਕਾਣਾ ਮਿਲ ਗਿਆ",
        enter_location_manually: "ਟਿਕਾਣਾ ਹੱਥੀਂ ਦਰਜ ਕਰੋ",

        health_articles: "ਸਿਹਤ ਲੇਖ",
        read_article: "ਲੇਖ ਪੜ੍ਹੋ",
        learn_more: "ਹੋਰ ਜਾਣੋ",
        latest_health_information: "ਨਵੀਨਤਮ ਸਿਹਤ ਜਾਣਕਾਰੀ",

        dashboard: "ਡੈਸ਼ਬੋਰਡ",
        welcome: "ਜੀ ਆਇਆਂ ਨੂੰ",
        my_orders: "ਮੇਰੇ ਆਰਡਰ",
        my_prescriptions: "ਮੇਰੇ ਪ੍ਰਿਸਕ੍ਰਿਪਸ਼ਨ",
        my_appointments: "ਮੇਰੀਆਂ ਅਪਾਇੰਟਮੈਂਟਾਂ",
        health_records: "ਸਿਹਤ ਰਿਕਾਰਡ",
        profile: "ਪ੍ਰੋਫਾਈਲ",
        notifications: "ਸੂਚਨਾਵਾਂ",
        recent_orders: "ਹਾਲੀਆ ਆਰਡਰ",
        order_status: "ਆਰਡਰ ਸਥਿਤੀ",
        view_all: "ਸਾਰੇ ਵੇਖੋ"
    },


    /* =========================
       TAMIL
       ========================= */
    ta: {
        nav_home: "முகப்பு",
        nav_services: "சேவைகள்",
        nav_pharmacy: "மருந்தகம்",
        nav_dashboard: "டாஷ்போர்டு",
        nav_about: "எங்களைப் பற்றி",
        nav_contact: "தொடர்பு",
        nav_login: "உள்நுழை",
        nav_signup: "பதிவு செய்க",
        get_started: "தொடங்குங்கள்",
        language: "மொழி",

        search: "தேடுக",
        submit: "சமர்ப்பிக்கவும்",
        cancel: "ரத்து செய்க",
        save: "சேமிக்கவும்",
        delete: "நீக்கவும்",
        edit: "திருத்து",
        close: "மூடு",
        back: "பின்செல்",
        next: "அடுத்து",
        continue: "தொடரவும்",
        confirm: "உறுதிப்படுத்தவும்",
        view_details: "விவரங்களைப் பார்க்கவும்",
        add_to_cart: "கார்ட்டில் சேர்க்கவும்",
        buy_now: "இப்போது வாங்கவும்",
        book: "முன்பதிவு செய்க",
        upload: "பதிவேற்றவும்",
        download: "பதிவிறக்கவும்",
        loading: "ஏற்றப்படுகிறது",
        success: "வெற்றி",
        error: "பிழை",
        no_results: "முடிவுகள் எதுவும் இல்லை",

        search_placeholder: "தேடுக...",

        pharmacy: "மருந்தகம்",
        medicines: "மருந்துகள்",
        health_products: "சுகாதாரப் பொருட்கள்",
        categories: "வகைகள்",
        search_products: "பொருட்களைத் தேடுங்கள்",
        wishlist: "விருப்பப்பட்டியல்",
        cart: "கார்ட்",
        prescription: "மருத்துவ பரிந்துரை",
        upload_prescription: "மருத்துவ பரிந்துரையை பதிவேற்றவும்",
        checkout: "செக்அவுட்",
        quantity: "அளவு",
        price: "விலை",
        mrp: "MRP",
        discount: "தள்ளுபடி",
        total: "மொத்தம்",
        subtotal: "துணை மொத்தம்",
        delivery: "டெலிவரி",
        free_delivery: "இலவச டெலிவரி",
        place_order: "ஆர்டர் செய்யவும்",
        order_successful: "ஆர்டர் வெற்றிகரமாக முடிந்தது",

        personal_care: "தனிப்பட்ட பராமரிப்பு",
        vitamins_supplements: "வைட்டமின்கள் மற்றும் சப்ளிமெண்ட்ஸ்",
        diabetes_care: "நீரிழிவு பராமரிப்பு",
        healthcare_devices: "சுகாதார சாதனங்கள்",
        homeopathic_medicine: "ஹோமியோபதி மருந்து",
        health_conditions: "சுகாதார நிலைகள்",
        top_packages: "சிறந்த தொகுப்புகள்",
        preventive_plus: "பிரிவென்டிவ் பிளஸ்",
        active_life: "ஆக்டிவ் லைஃப்",
        book_package: "தொகுப்பை முன்பதிவு செய்க",
        tests_included: "சேர்க்கப்பட்ட பரிசோதனைகள்",
        patients_booked: "முன்பதிவு செய்த நோயாளிகள்",

        use_current_location: "தற்போதைய இருப்பிடத்தைப் பயன்படுத்தவும்",
        location: "இருப்பிடம்",
        detecting_location: "இருப்பிடம் கண்டறியப்படுகிறது",
        location_detected: "இருப்பிடம் கண்டறியப்பட்டது",
        enter_location_manually: "இருப்பிடத்தை கைமுறையாக உள்ளிடவும்",

        health_articles: "சுகாதாரக் கட்டுரைகள்",
        read_article: "கட்டுரையைப் படிக்கவும்",
        learn_more: "மேலும் அறிக",
        latest_health_information: "சமீபத்திய சுகாதார தகவல்கள்",

        dashboard: "டாஷ்போர்டு",
        welcome: "வரவேற்கிறோம்",
        my_orders: "எனது ஆர்டர்கள்",
        my_prescriptions: "எனது மருத்துவ பரிந்துரைகள்",
        my_appointments: "எனது சந்திப்புகள்",
        health_records: "சுகாதார பதிவுகள்",
        profile: "சுயவிவரம்",
        notifications: "அறிவிப்புகள்",
        recent_orders: "சமீபத்திய ஆர்டர்கள்",
        order_status: "ஆர்டர் நிலை",
        view_all: "அனைத்தையும் பார்க்கவும்"
    },


    /* =========================
       TELUGU
       ========================= */
    te: {
        nav_home: "హోమ్",
        nav_services: "సేవలు",
        nav_pharmacy: "ఫార్మసీ",
        nav_dashboard: "డ్యాష్‌బోర్డ్",
        nav_about: "మా గురించి",
        nav_contact: "సంప్రదించండి",
        nav_login: "లాగిన్",
        nav_signup: "సైన్ అప్",
        get_started: "ప్రారంభించండి",
        language: "భాష",

        search: "వెతకండి",
        submit: "సమర్పించండి",
        cancel: "రద్దు చేయండి",
        save: "సేవ్ చేయండి",
        delete: "తొలగించండి",
        edit: "సవరించండి",
        close: "మూసివేయండి",
        back: "వెనక్కి",
        next: "తదుపరి",
        continue: "కొనసాగించండి",
        confirm: "నిర్ధారించండి",
        view_details: "వివరాలు చూడండి",
        add_to_cart: "కార్ట్‌కు జోడించండి",
        buy_now: "ఇప్పుడే కొనండి",
        book: "బుక్ చేయండి",
        upload: "అప్‌లోడ్ చేయండి",
        download: "డౌన్‌లోడ్ చేయండి",
        loading: "లోడ్ అవుతోంది",
        success: "విజయం",
        error: "లోపం",
        no_results: "ఫలితాలు ఏవీ కనుగొనబడలేదు",

        search_placeholder: "వెతకండి...",

        pharmacy: "ఫార్మసీ",
        medicines: "మందులు",
        health_products: "ఆరోగ్య ఉత్పత్తులు",
        categories: "వర్గాలు",
        search_products: "ఉత్పత్తులను వెతకండి",
        wishlist: "విష్‌లిస్ట్",
        cart: "కార్ట్",
        prescription: "ప్రిస్క్రిప్షన్",
        upload_prescription: "ప్రిస్క్రిప్షన్ అప్‌లోడ్ చేయండి",
        checkout: "చెక్‌అవుట్",
        quantity: "పరిమాణం",
        price: "ధర",
        mrp: "MRP",
        discount: "తగ్గింపు",
        total: "మొత్తం",
        subtotal: "ఉప మొత్తం",
        delivery: "డెలివరీ",
        free_delivery: "ఉచిత డెలివరీ",
        place_order: "ఆర్డర్ చేయండి",
        order_successful: "ఆర్డర్ విజయవంతమైంది",

        personal_care: "వ్యక్తిగత సంరక్షణ",
        vitamins_supplements: "విటమిన్లు మరియు సప్లిమెంట్లు",
        diabetes_care: "డయాబెటిస్ కేర్",
        healthcare_devices: "ఆరోగ్య పరికరాలు",
        homeopathic_medicine: "హోమియోపతిక్ మందు",
        health_conditions: "ఆరోగ్య పరిస్థితులు",
        top_packages: "టాప్ ప్యాకేజీలు",
        preventive_plus: "ప్రివెంటివ్ ప్లస్",
        active_life: "యాక్టివ్ లైఫ్",
        book_package: "ప్యాకేజీని బుక్ చేయండి",
        tests_included: "చేర్చిన పరీక్షలు",
        patients_booked: "బుక్ చేసిన రోగులు",

        use_current_location: "ప్రస్తుత స్థానాన్ని ఉపయోగించండి",
        location: "స్థానం",
        detecting_location: "స్థానం గుర్తించబడుతోంది",
        location_detected: "స్థానం గుర్తించబడింది",
        enter_location_manually: "స్థానాన్ని మాన్యువల్‌గా నమోదు చేయండి",

        health_articles: "ఆరోగ్య కథనాలు",
        read_article: "కథనం చదవండి",
        learn_more: "మరింత తెలుసుకోండి",
        latest_health_information: "తాజా ఆరోగ్య సమాచారం",

        dashboard: "డ్యాష్‌బోర్డ్",
        welcome: "స్వాగతం",
        my_orders: "నా ఆర్డర్లు",
        my_prescriptions: "నా ప్రిస్క్రిప్షన్లు",
        my_appointments: "నా అపాయింట్‌మెంట్లు",
        health_records: "ఆరోగ్య రికార్డులు",
        profile: "ప్రొఫైల్",
        notifications: "నోటిఫికేషన్లు",
        recent_orders: "ఇటీవలి ఆర్డర్లు",
        order_status: "ఆర్డర్ స్థితి",
        view_all: "అన్నీ చూడండి"
    },


    /* =========================
       URDU
       ========================= */
    ur: {
        nav_home: "ہوم",
        nav_services: "خدمات",
        nav_pharmacy: "فارمیسی",
        nav_dashboard: "ڈیش بورڈ",
        nav_about: "ہمارے بارے میں",
        nav_contact: "رابطہ کریں",
        nav_login: "لاگ ان",
        nav_signup: "سائن اپ",
        get_started: "شروع کریں",
        language: "زبان",

        search: "تلاش",
        submit: "جمع کریں",
        cancel: "منسوخ کریں",
        save: "محفوظ کریں",
        delete: "حذف کریں",
        edit: "ترمیم کریں",
        close: "بند کریں",
        back: "واپس",
        next: "اگلا",
        continue: "جاری رکھیں",
        confirm: "تصدیق کریں",
        view_details: "تفصیلات دیکھیں",
        add_to_cart: "کارٹ میں شامل کریں",
        buy_now: "ابھی خریدیں",
        book: "بک کریں",
        upload: "اپ لوڈ کریں",
        download: "ڈاؤن لوڈ کریں",
        loading: "لوڈ ہو رہا ہے",
        success: "کامیاب",
        error: "خرابی",
        no_results: "کوئی نتیجہ نہیں ملا",

        search_placeholder: "تلاش کریں...",

        pharmacy: "فارمیسی",
        medicines: "ادویات",
        health_products: "صحت کی مصنوعات",
        categories: "زمرے",
        search_products: "مصنوعات تلاش کریں",
        wishlist: "پسندیدہ فہرست",
        cart: "کارٹ",
        prescription: "نسخہ",
        upload_prescription: "نسخہ اپ لوڈ کریں",
        checkout: "چیک آؤٹ",
        quantity: "مقدار",
        price: "قیمت",
        mrp: "MRP",
        discount: "رعایت",
        total: "کل",
        subtotal: "ذیلی کل",
        delivery: "ڈیلیوری",
        free_delivery: "مفت ڈیلیوری",
        place_order: "آرڈر دیں",
        order_successful: "آرڈر کامیاب ہوگیا",

        personal_care: "ذاتی نگہداشت",
        vitamins_supplements: "وٹامنز اور سپلیمنٹس",
        diabetes_care: "ذیابیطس کی دیکھ بھال",
        healthcare_devices: "صحت کے آلات",
        homeopathic_medicine: "ہومیوپیتھک دوا",
        health_conditions: "صحت کی حالتیں",
        top_packages: "اعلیٰ پیکیجز",
        preventive_plus: "پریوینٹیو پلس",
        active_life: "ایکٹو لائف",
        book_package: "پیکیج بک کریں",
        tests_included: "شامل ٹیسٹ",
        patients_booked: "بک کیے گئے مریض",

        use_current_location: "موجودہ مقام استعمال کریں",
        location: "مقام",
        detecting_location: "مقام تلاش کیا جا رہا ہے",
        location_detected: "مقام معلوم ہوگیا",
        enter_location_manually: "مقام دستی طور پر درج کریں",

        health_articles: "صحت کے مضامین",
        read_article: "مضمون پڑھیں",
        learn_more: "مزید جانیں",
        latest_health_information: "تازہ ترین صحت کی معلومات",

        dashboard: "ڈیش بورڈ",
        welcome: "خوش آمدید",
        my_orders: "میرے آرڈرز",
        my_prescriptions: "میرے نسخے",
        my_appointments: "میری ملاقاتیں",
        health_records: "صحت کے ریکارڈ",
        profile: "پروفائل",
        notifications: "اطلاعات",
        recent_orders: "حالیہ آرڈرز",
        order_status: "آرڈر کی حیثیت",
        view_all: "سب دیکھیں"
    },


    /* =========================
       ODIA
       ========================= */
    or: {
        nav_home: "ହୋମ୍",
        nav_services: "ସେବା",
        nav_pharmacy: "ଫାର୍ମାସି",
        nav_dashboard: "ଡ୍ୟାସବୋର୍ଡ",
        nav_about: "ଆମ ବିଷୟରେ",
        nav_contact: "ଯୋଗାଯୋଗ",
        nav_login: "ଲଗଇନ୍",
        nav_signup: "ସାଇନ୍ ଅପ୍",
        get_started: "ଆରମ୍ଭ କରନ୍ତୁ",
        language: "ଭାଷା",

        search: "ଖୋଜନ୍ତୁ",
        submit: "ଦାଖଲ କରନ୍ତୁ",
        cancel: "ବାତିଲ କରନ୍ତୁ",
        save: "ସଂରକ୍ଷଣ କରନ୍ତୁ",
        delete: "ଡିଲିଟ୍ କରନ୍ତୁ",
        edit: "ସମ୍ପାଦନା କରନ୍ତୁ",
        close: "ବନ୍ଦ କରନ୍ତୁ",
        back: "ପଛକୁ",
        next: "ପରବର୍ତ୍ତୀ",
        continue: "ଜାରି ରଖନ୍ତୁ",
        confirm: "ନିଶ୍ଚିତ କରନ୍ତୁ",
        view_details: "ବିବରଣୀ ଦେଖନ୍ତୁ",
        add_to_cart: "କାର୍ଟରେ ଯୋଡନ୍ତୁ",
        buy_now: "ବର୍ତ୍ତମାନ କିଣନ୍ତୁ",
        book: "ବୁକ୍ କରନ୍ତୁ",
        upload: "ଅପଲୋଡ୍ କରନ୍ତୁ",
        download: "ଡାଉନଲୋଡ୍ କରନ୍ତୁ",
        loading: "ଲୋଡ୍ ହେଉଛି",
        success: "ସଫଳ",
        error: "ତ୍ରୁଟି",
        no_results: "କୌଣସି ଫଳାଫଳ ମିଳିଲା ନାହିଁ",

        search_placeholder: "ଖୋଜନ୍ତୁ...",

        pharmacy: "ଫାର୍ମାସି",
        medicines: "ଔଷଧ",
        health_products: "ସ୍ୱାସ୍ଥ୍ୟ ଉତ୍ପାଦ",
        categories: "ବର୍ଗ",
        search_products: "ଉତ୍ପାଦ ଖୋଜନ୍ତୁ",
        wishlist: "ୱିଶଲିଷ୍ଟ",
        cart: "କାର୍ଟ",
        prescription: "ପ୍ରେସକ୍ରିପସନ୍",
        upload_prescription: "ପ୍ରେସକ୍ରିପସନ୍ ଅପଲୋଡ୍ କରନ୍ତୁ",
        checkout: "ଚେକଆଉଟ୍",
        quantity: "ପରିମାଣ",
        price: "ମୂଲ୍ୟ",
        mrp: "MRP",
        discount: "ରିହାତି",
        total: "ମୋଟ",
        subtotal: "ଉପମୋଟ",
        delivery: "ଡେଲିଭରୀ",
        free_delivery: "ମାଗଣା ଡେଲିଭରୀ",
        place_order: "ଅର୍ଡର କରନ୍ତୁ",
        order_successful: "ଅର୍ଡର ସଫଳ ହୋଇଛି",

        personal_care: "ବ୍ୟକ୍ତିଗତ ଯତ୍ନ",
        vitamins_supplements: "ଭିଟାମିନ୍ ଏବଂ ସପ୍ଲିମେଣ୍ଟ୍",
        diabetes_care: "ମଧୁମେହ ଯତ୍ନ",
        healthcare_devices: "ସ୍ୱାସ୍ଥ୍ୟ ଉପକରଣ",
        homeopathic_medicine: "ହୋମିଓପାଥିକ୍ ଔଷଧ",
        health_conditions: "ସ୍ୱାସ୍ଥ୍ୟ ସମସ୍ୟା",
        top_packages: "ଶୀର୍ଷ ପ୍ୟାକେଜ୍",
        preventive_plus: "ପ୍ରିଭେଣ୍ଟିଭ୍ ପ୍ଲସ୍",
        active_life: "ଆକ୍ଟିଭ୍ ଲାଇଫ୍",
        book_package: "ପ୍ୟାକେଜ୍ ବୁକ୍ କରନ୍ତୁ",
        tests_included: "ଅନ୍ତର୍ଭୁକ୍ତ ପରୀକ୍ଷା",
        patients_booked: "ବୁକ୍ କରିଥିବା ରୋଗୀ",

        use_current_location: "ବର୍ତ୍ତମାନ ସ୍ଥାନ ବ୍ୟବହାର କରନ୍ତୁ",
        location: "ସ୍ଥାନ",
        detecting_location: "ସ୍ଥାନ ଚିହ୍ନଟ ହେଉଛି",
        location_detected: "ସ୍ଥାନ ଚିହ୍ନଟ ହୋଇଛି",
        enter_location_manually: "ସ୍ଥାନ ମାନୁଆଲ୍ ଭାବେ ଦିଅନ୍ତୁ",

        health_articles: "ସ୍ୱାସ୍ଥ୍ୟ ଲେଖା",
        read_article: "ଲେଖା ପଢନ୍ତୁ",
        learn_more: "ଅଧିକ ଜାଣନ୍ତୁ",
        latest_health_information: "ନୂତନତମ ସ୍ୱାସ୍ଥ୍ୟ ସୂଚନା",

        dashboard: "ଡ୍ୟାସବୋର୍ଡ",
        welcome: "ସ୍ୱାଗତ",
        my_orders: "ମୋ ଅର୍ଡର୍",
        my_prescriptions: "ମୋ ପ୍ରେସକ୍ରିପସନ୍",
        my_appointments: "ମୋ ଆପଏଣ୍ଟମେଣ୍ଟ୍",
        health_records: "ସ୍ୱାସ୍ଥ୍ୟ ରେକର୍ଡ",
        profile: "ପ୍ରୋଫାଇଲ୍",
        notifications: "ବିଜ୍ଞପ୍ତି",
        recent_orders: "ସାମ୍ପ୍ରତିକ ଅର୍ଡର୍",
        order_status: "ଅର୍ଡର୍ ସ୍ଥିତି",
        view_all: "ସମସ୍ତ ଦେଖନ୍ତୁ"
    }
};


/* =========================================================
   CURRENT LANGUAGE
   ========================================================= */

let smCurrentLanguage = "en";


/* =========================================================
   VALIDATE LANGUAGE
   ========================================================= */

function smIsValidLanguage(lang) {
    return Object.prototype.hasOwnProperty.call(
        SM_SUPPORTED_LANGUAGES,
        lang
    );
}


/* =========================================================
   GET CURRENT LANGUAGE
   ========================================================= */

function smGetLanguage() {
    const saved = localStorage.getItem(SM_LANG_KEY);

    if (smIsValidLanguage(saved)) {
        return saved;
    }

    return "en";
}


/* =========================================================
   TRANSLATION HELPER
   ========================================================= */

function t(key) {

    const currentTranslations =
        SM_TRANSLATIONS[smCurrentLanguage] || SM_TRANSLATIONS.en;

    /*
     * First try selected language.
     */
    if (
        Object.prototype.hasOwnProperty.call(
            currentTranslations,
            key
        )
    ) {
        return currentTranslations[key];
    }

    /*
     * Fall back to English.
     */
    if (
        Object.prototype.hasOwnProperty.call(
            SM_TRANSLATIONS.en,
            key
        )
    ) {
        return SM_TRANSLATIONS.en[key];
    }

    /*
     * If the key itself does not exist,
     * return the key so the UI does not become blank.
     */
    return key;
}


/* =========================================================
   TRANSLATE STATIC ELEMENTS
   ========================================================= */

function smTranslateElements() {

    /*
     * Normal text content
     */
    document
        .querySelectorAll("[data-i18n]")
        .forEach((element) => {

            const key = element.getAttribute("data-i18n");

            if (!key) return;

            element.textContent = t(key);
        });


    /*
     * Placeholder attributes
     */
    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach((element) => {

            const key =
                element.getAttribute("data-i18n-placeholder");

            if (!key) return;

            element.setAttribute(
                "placeholder",
                t(key)
            );
        });


    /*
     * Title attributes
     */
    document
        .querySelectorAll("[data-i18n-title]")
        .forEach((element) => {

            const key =
                element.getAttribute("data-i18n-title");

            if (!key) return;

            element.setAttribute(
                "title",
                t(key)
            );
        });
}


/* =========================================================
   UPDATE ALL LANGUAGE DROPDOWNS
   ========================================================= */

function smUpdateLanguageDropdowns() {

    const dropdowns =
        document.querySelectorAll(
            "[data-language-selector], .language-selector"
        );

    dropdowns.forEach((dropdown) => {

        if (
            dropdown.tagName === "SELECT" &&
            smIsValidLanguage(smCurrentLanguage)
        ) {
            dropdown.value = smCurrentLanguage;
        }
    });
}


/* =========================================================
   APPLY LANGUAGE
   ========================================================= */

function smApplyLanguage(lang) {

    /*
     * Validate requested language.
     */
    if (!smIsValidLanguage(lang)) {
        lang = "en";
    }


    /*
     * Update current language.
     */
    smCurrentLanguage = lang;


    /*
     * Persist globally.
     */
    localStorage.setItem(
        SM_LANG_KEY,
        lang
    );


    /*
     * Update HTML language.
     */
    document.documentElement.lang = lang;


    /*
     * RTL for Urdu.
     */
    if (SM_RTL_LANGUAGES.includes(lang)) {

        document.documentElement.dir = "rtl";

        document.body.classList.add(
            "sm-rtl"
        );

    } else {

        document.documentElement.dir = "ltr";

        document.body.classList.remove(
            "sm-rtl"
        );
    }


    /*
     * Translate static HTML.
     */
    smTranslateElements();


    /*
     * Synchronize all dropdowns.
     */
    smUpdateLanguageDropdowns();


    /*
     * Tell the rest of the application
     * that the language changed.
     */
    window.dispatchEvent(
        new CustomEvent(
            "swasthya:languagechange",
            {
                detail: {
                    lang: lang
                }
            }
        )
    );
}


/* =========================================================
   INITIALIZE LANGUAGE DROPDOWNS
   ========================================================= */

function smInitLanguageDropdowns() {

    const dropdowns =
        document.querySelectorAll(
            "[data-language-selector], .language-selector"
        );

    dropdowns.forEach((dropdown) => {

        /*
         * Prevent duplicate event listeners.
         */
        if (
            dropdown.dataset.smLanguageInitialized === "true"
        ) {
            return;
        }

        dropdown.dataset.smLanguageInitialized = "true";


        /*
         * Make sure the dropdown contains all
         * 12 supported languages.
         *
         * Existing options are preserved if they
         * already contain the correct values.
         */
        if (dropdown.tagName === "SELECT") {

            const existingValues =
                Array.from(dropdown.options)
                    .map(option => option.value);

            Object.entries(
                SM_SUPPORTED_LANGUAGES
            ).forEach(([code, label]) => {

                if (!existingValues.includes(code)) {

                    const option =
                        document.createElement("option");

                    option.value = code;
                    option.textContent = label;

                    dropdown.appendChild(option);
                }
            });


            dropdown.value = smCurrentLanguage;


            /*
             * Change language instantly.
             */
            dropdown.addEventListener(
                "change",
                function () {

                    smApplyLanguage(
                        this.value
                    );
                }
            );
        }
    });
}


/* =========================================================
   INITIALIZE GLOBAL LANGUAGE SYSTEM
   ========================================================= */

function smInitLanguage() {

    /*
     * Get saved language.
     */
    const savedLanguage =
        smGetLanguage();


    /*
     * Apply it.
     */
    smCurrentLanguage =
        smIsValidLanguage(savedLanguage)
            ? savedLanguage
            : "en";


    /*
     * Initialize after DOM exists.
     */
    smInitLanguageDropdowns();


    /*
     * Apply translations.
     */
    smApplyLanguage(
        smCurrentLanguage
    );
}


/* =========================================================
   AUTOMATIC INITIALIZATION
   ========================================================= */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        smInitLanguage
    );

} else {

    smInitLanguage();
}


/* =========================================================
   EXPORTS
   ========================================================= */

window.SM_LANG_KEY =
    SM_LANG_KEY;

window.SM_SUPPORTED_LANGUAGES =
    SM_SUPPORTED_LANGUAGES;

window.SM_TRANSLATIONS =
    SM_TRANSLATIONS;

window.t =
    t;

window.smApplyLanguage =
    smApplyLanguage;

window.smInitLanguage =
    smInitLanguage;

window.smGetLanguage =
    smGetLanguage;