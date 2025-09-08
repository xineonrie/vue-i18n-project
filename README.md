# 🌐 Vue 3 Multi-language Switcher Demo

## 1. Project Overview
This project is a demo built with **Vue 3 + Vite + Vuex + Capacitor** to showcase an in-app language switcher.  I selected a figma design file from the figma community, and developed a music playing app with 2 pages as an example.

Figma: https://www.figma.com/design/P3SpXlP8z7pyCn8jgEpmAW/Music-player-App-Design-%7C-Free-to-use--Community-?node-id=0-1&p=f&t=dKRlH3cWzBSBFXIY-0

It demonstrates:
- Runtime language switching without rebuilding the app
- Initial language setup via URL query parameter
- Persistent language preference across sessions
- Consistent support on Web, iOS, and Android (via Capacitor)
- Lazy-loading and code-splitting for large translation files
- Basic accessibility support 

## 2. Tech Stack
- **Vue 3** – Front-end framework  
- **Vite** – Build tool  
- **Vuex** – State management  
- **vue-i18n** – Internationalization  
- **Capacitor** – Cross-platform deployment (Web/Android/iOS)  
- **accessibility**

I know nothing about these so learn first! 🧐

## 3. Features
- [x] P0 - Basic page structure
    - [x] P0 - Login Page
    - [ ] P1 - home Page (And choose one music to play!)
- [ ] P0 - Runtime language switching 
- [x] P0 - Initial language setup from URL parameter (`?lang=xx`)  
- [x] P0 - Persistent language preference  
- [ ] P0 - Cross-platform support (Web + iOS + Android)  
- [ ] P0 - Lazy-loaded translation files (one chunk per language)  
- [ ] P0 - Updates `<html lang>` and supports RTL languages  
- [ ] P0 - Basic accessibility support  
- [ ] P1 - Login check
- [ ] P1 - Localazy integration 
- [ ] P1 - Missing key auto check  
- [ ] P2 - Unit test

## 4. How to Demo

TODO


## 5. Future Improvements
TODO
