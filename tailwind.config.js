/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      backgroundImage:{
        'hero-image': 'url("./components/newhome.png")',
        'storeee': 'url("./components/storeee.png")',
        'contact-bg':'url("./components/contact.jpg")',
        'consult-bg':'url("./components/consult.jpg")',
        'commercial-bg':'url("./components/commercial.jpg")',
        'local-bg':'url("./components/Local.jpg")',
      }
    },
  },
  plugins: [], 
}