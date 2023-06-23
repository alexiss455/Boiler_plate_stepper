/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "red",
        Cool_gray: 'hsl(231, 11%, 63%)',
        Light_gray: 'hsl(229, 24%, 87%)',
        Magnolia: 'hsl(217, 100%, 97%)',
        Alabaster: 'hsl(231, 100%, 99%)',
        White_: 'hsl(0, 0%, 100%)',
        Marine_blue: 'hsl(213, 96%, 18%)',
        Purplish_blue: 'hsl(243, 100%, 62%)',
        Pastel_blue: 'hsl(228, 100%, 84%)',
        Light_blue: 'hsl(206, 94%, 87%)',
        Strawberry_red: 'hsl(354, 84%, 57%)',
      },
      textColor: {
        textWhite: "white",
        Cool_gray: 'hsl(231, 11%, 63%)',
        Light_gray: 'hsl(229, 24%, 87%)',
        Magnolia: 'hsl(217, 100%, 97%)',
        Alabaster: 'hsl(231, 100%, 99%)',
        White_: 'hsl(0, 0%, 100%)',
        Marine_blue: 'hsl(213, 96%, 18%)',
        Purplish_blue: 'hsl(243, 100%, 62%)',
        Pastel_blue: 'hsl(228, 100%, 84%)',
        Light_blue: 'hsl(206, 94%, 87%)',
        Strawberry_red: 'hsl(354, 84%, 57%)',
      },
      backgroundImage: {
        "sidebar": "url('../images/bg-sidebar-desktop.svg')",
        "mobile": "url('../images/bg-sidebar-mobile.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      fontFamily: {
        'pop': ['Poppins', 'sans-serif'],
        'Kanit': ['Kanit', 'sans-serif']
      }
    },
  },
  plugins: [],
};
