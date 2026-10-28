/* =========================================================
   SWASTHYAMITRA AI
   MAIN JAVASCRIPT
   Supabase + Health Data + Global Language Loader
   ========================================================= */


/* =========================================================
   SUPABASE
   ========================================================= */

const SUPABASE_URL =
    "https://vnbnluliymnerkwrmenv.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_gyWwEbHomWuBO74tfIYUHA_qCsixuVu";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );


/* =========================================================
   GLOBAL LANGUAGE SYSTEM
   ---------------------------------------------------------
   IMPORTANT:
   - Language selector exists ONLY on index.html
   - Other pages do NOT need a selector
   - Selected language is stored in localStorage
   - language.js is automatically loaded on every page
   ========================================================= */

function loadGlobalLanguageSystem() {

    if (document.querySelector(
        'script[data-swasthya-language="true"]'
    )) {
        return;
    }

    const script = document.createElement("script");

    script.src = "language.js";

    script.setAttribute(
        "data-swasthya-language",
        "true"
    );

    script.onload = function () {

        console.log(
            "🌐 Global language system loaded."
        );

    };

    script.onerror = function () {

        console.error(
            "❌ Could not load language.js"
        );

    };

    document.body.appendChild(script);
}


/* =========================================================
   AUTH MODAL
   ========================================================= */

function openAuth(type) {

    const modal =
        document.getElementById("authModal");

    if (!modal) return;

    modal.classList.remove("hidden");

    if (type === "signup") {

        showSignup();

    } else {

        showLogin();

    }
}


function closeAuth() {

    const modal =
        document.getElementById("authModal");

    if (!modal) return;

    modal.classList.add("hidden");
}


function showLogin() {

    const loginForm =
        document.getElementById("loginForm");

    const signupForm =
        document.getElementById("signupForm");

    if (loginForm) {

        loginForm.classList.remove("hidden");

    }

    if (signupForm) {

        signupForm.classList.add("hidden");

    }
}


function showSignup() {

    const loginForm =
        document.getElementById("loginForm");

    const signupForm =
        document.getElementById("signupForm");

    if (loginForm) {

        loginForm.classList.add("hidden");

    }

    if (signupForm) {

        signupForm.classList.remove("hidden");

    }
}


/* =========================================================
   CREATE ACCOUNT
   ========================================================= */

async function createAccount() {

    const signupForm =
        document.querySelector("#signupForm");

    if (!signupForm) return;


    const inputs =
        signupForm.querySelectorAll("input");


    const name =
        inputs[0]?.value.trim() || "";


    const email =
        inputs[1]?.value.trim() || "";


    const password =
        inputs[2]?.value || "";


    /*
     * The global language selected on index.html
     * is used for the account.
     *
     * We do NOT depend on a language selector
     * on the signup page.
     */

    const language =
        localStorage.getItem(
            "swasthyaMitraLanguage"
        ) || "en";


    if (!name || !email || !password) {

        alert(
            "Please fill in all fields."
        );

        return;
    }


    if (password.length < 6) {

        alert(
            "Password must be at least 6 characters."
        );

        return;
    }


    const {
        data,
        error
    } = await supabaseClient.auth.signUp({

        email: email,

        password: password,

        options: {

            data: {

                full_name: name,

                language: language

            }

        }

    });


    if (error) {

        alert(
            "Sign Up Error: " +
            error.message
        );

        console.error(error);

        return;
    }


    console.log(
        "Account created:",
        data
    );


    alert(
        "🎉 Account created successfully!"
    );


    window.location.href =
        "dashboard.html";
}


/* =========================================================
   LOGIN
   ========================================================= */

async function loginUser() {

    /*
     * Supports the IDs used by the login page.
     */

    const emailInput =
        document.getElementById(
            "loginPageEmail"
        );


    const passwordInput =
        document.getElementById(
            "loginPagePassword"
        );


    /*
     * Fallback:
     * If login.html uses normal form inputs
     * without those IDs, find them automatically.
     */

    let email = "";

    let password = "";


    if (emailInput) {

        email =
            emailInput.value.trim();

    }


    if (passwordInput) {

        password =
            passwordInput.value;

    }


    /*
     * Fallback for login pages where
     * the inputs have different IDs.
     */

    if (!email || !password) {

        const loginForm =
            document.getElementById(
                "loginForm"
            );


        if (loginForm) {

            const inputs =
                loginForm.querySelectorAll(
                    "input"
                );


            if (!email) {

                const emailField =
                    loginForm.querySelector(
                        'input[type="email"]'
                    );

                if (emailField) {

                    email =
                        emailField.value.trim();

                }

            }


            if (!password) {

                const passwordField =
                    loginForm.querySelector(
                        'input[type="password"]'
                    );

                if (passwordField) {

                    password =
                        passwordField.value;

                }

            }

        }

    }


    if (!email || !password) {

        alert(
            "Please enter your email and password."
        );

        return;
    }


    const {
        data,
        error
    } =
        await supabaseClient.auth
            .signInWithPassword({

                email: email,

                password: password

            });


    if (error) {

        alert(
            "Login Error: " +
            error.message
        );

        console.error(error);

        return;
    }


    console.log(
        "Logged in:",
        data.user
    );


    alert(
        "🎉 Login successful!"
    );


    window.location.href =
        "dashboard.html";
}


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeAuth();

        }

    }
);


/* =========================================================
   HEALTH ENTRY
   ========================================================= */

const healthEntryForm =
    document.getElementById(
        "healthEntryForm"
    );


if (healthEntryForm) {

    healthEntryForm.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            const {
                data: {
                    user
                },
                error: userError
            } =
                await supabaseClient.auth
                    .getUser();


            if (userError || !user) {

                alert(
                    "Please log in before saving your health reading."
                );

                return;
            }


            const heartRate =
                document.getElementById(
                    "heartRate"
                )?.value;


            const systolic =
                document.getElementById(
                    "systolic"
                )?.value;


            const diastolic =
                document.getElementById(
                    "diastolic"
                )?.value;


            const sleepHours =
                document.getElementById(
                    "sleepHours"
                )?.value;


            const sleepMinutes =
                document.getElementById(
                    "sleepMinutes"
                )?.value;


            const steps =
                document.getElementById(
                    "steps"
                )?.value;


            const spo2 =
                document.getElementById(
                    "spo2"
                )?.value;


            const weight =
                document.getElementById(
                    "weight"
                )?.value;


            const temperature =
                document.getElementById(
                    "temperature"
                )?.value;


            const {
                data,
                error
            } =
                await supabaseClient
                    .from("health_metrics")
                    .insert([{

                        user_id:
                            user.id,

                        heart_rate:
                            heartRate || null,

                        systolic:
                            systolic || null,

                        diastolic:
                            diastolic || null,

                        sleep_hours:
                            sleepHours || null,

                        sleep_minutes:
                            sleepMinutes || null,

                        steps:
                            steps || null,

                        spo2:
                            spo2 || null,

                        weight:
                            weight || null,

                        temperature:
                            temperature || null

                    }])
                    .select();


            if (error) {

                console.error(
                    "Health data error:",
                    error
                );

                alert(
                    "Could not save your health reading.\n\n" +
                    error.message
                );

                return;
            }


            console.log(
                "Health reading saved:",
                data
            );


            alert(
                "✅ Health reading saved successfully!"
            );


            healthEntryForm.reset();

        }
    );

}


/* =========================================================
   DASHBOARD HEALTH DATA
   ========================================================= */

const dashboardHeartRate =
    document.getElementById(
        "dashboardHeartRate"
    );


const dashboardBloodPressure =
    document.getElementById(
        "dashboardBloodPressure"
    );


const dashboardSleep =
    document.getElementById(
        "dashboardSleep"
    );


if (
    dashboardHeartRate ||
    dashboardBloodPressure ||
    dashboardSleep
) {

    async function loadDashboardHealthData() {

        const {
            data: {
                user
            },
            error: userError
        } =
            await supabaseClient.auth
                .getUser();


        if (userError || !user) {

            return;

        }


        const {
            data,
            error
        } =
            await supabaseClient
                .from("health_metrics")
                .select("*")
                .eq(
                    "user_id",
                    user.id
                )
                .order(
                    "created_at",
                    {
                        ascending: false
                    }
                )
                .limit(1)
                .maybeSingle();


        if (error) {

            console.error(
                "Dashboard health data error:",
                error
            );

            return;

        }


        if (!data) {

            return;

        }


        if (dashboardHeartRate) {

            dashboardHeartRate.textContent =
                data.heart_rate ?? "--";

        }


        if (dashboardBloodPressure) {

            dashboardBloodPressure.textContent =
                `${data.systolic ?? "--"}/${data.diastolic ?? "--"}`;

        }


        if (dashboardSleep) {

            dashboardSleep.textContent =
                `${data.sleep_hours ?? "--"}h ${data.sleep_minutes ?? "--"}m`;

        }

    }


    loadDashboardHealthData();

}


/* =========================================================
   LOGOUT
   ========================================================= */

async function logoutUser() {

    const {
        error
    } =
        await supabaseClient.auth.signOut();


    if (error) {

        alert(
            "Logout failed: " +
            error.message
        );

        return;
    }


    alert(
        "You have been logged out."
    );


    window.location.href =
        "login.html";
}


/* =========================================================
   START GLOBAL LANGUAGE SYSTEM
   ========================================================= */

function startSwasthyaLanguage() {

    /*
     * Wait until body exists because
     * language.js needs document.body.
     */

    if (!document.body) {

        return;

    }


    loadGlobalLanguageSystem();

}


/* =========================================================
   INITIALIZATION
   ========================================================= */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        startSwasthyaLanguage
    );

} else {

    startSwasthyaLanguage();

}


console.log(
    "💙 SwasthyaMitra AI initialized successfully."
);